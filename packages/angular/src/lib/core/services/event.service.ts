import { DestroyRef, Injectable } from "@angular/core";
import { FieldEventData } from "@preforms/ts";
import { Observable, Subject, Subscription } from "rxjs";
import { EVENT_METADATA } from "../decorators/base-events";

@Injectable()
export class EventService {
  private subjects = new Map<string, Subject<any>>();
  private subscriptions = new WeakMap<object, Map<string, Subscription>>();
  private handlers = new WeakMap<object, Map<string, Function[]>>();

  onFormEvent(eventName: string): Observable<any> {
    return this.getSubject<any>(`form:${eventName}`).asObservable();
  }

  emitFormEvent(eventName: string, payload?: any) {
    this.emit(`form:${eventName}`, payload);
  }

  onFormFieldEvent(eventName: string): Observable<FieldEventData> {
    return this.getSubject<FieldEventData>(`field:${eventName}`).asObservable();
  }

  emitFieldEvent(event: FieldEventData) {
    // Emit standard events
    this.emit(`field:${event.name}.${event.type}`, event);
    this.emit(`field:*.${event.type}`, event);
    this.emit(`field:*.*`, event);
  }

  // Manual subscribe (for non-decorator use)
  subscribe(eventName: string, callback: (payload: any) => void): Subscription {
    const subject = this.getSubject(eventName);
    return subject.subscribe(callback);
  }

  // Get or create a subject for a specific event name
  private getSubject<T>(eventName: string): Subject<T> {
    if (!this.subjects.has(eventName)) {
      this.subjects.set(eventName, new Subject<T>());
    }
    return this.subjects.get(eventName) as Subject<T>;
  }

  // Emit an event with optional payload
  private emit(eventName: string, payload?: any): void {
    const subject = this.getSubject(eventName);
    subject.next(payload);
  }

  bindDecoratedHandlers(instance: any, destroyRef: DestroyRef) {
    const proto = Object.getPrototypeOf(instance);
    const metadata: Map<string | symbol, string[]> = proto[EVENT_METADATA];
    if (!metadata) return;

    const instanceSubs = new Map<string, Subscription>();
    const instanceHandlers = new Map<string, Function[]>();

    metadata.forEach((eventKeys, methodName) => {
      const handler = instance[methodName].bind(instance);

      eventKeys.forEach((eventKey) => {
        if (!instanceHandlers.has(eventKey)) {
          instanceHandlers.set(eventKey, []);
        }

        instanceHandlers.get(eventKey)!.push(handler);

        if (!instanceSubs.has(eventKey)) {
          const sub = this.subscribe(eventKey, (payload) => {
            instanceHandlers.get(eventKey)?.forEach((h) => h(payload));
          });

          instanceSubs.set(eventKey, sub);
        }
      });
    });

    this.subscriptions.set(instance, instanceSubs);
    this.handlers.set(instance, instanceHandlers);

    destroyRef.onDestroy(() => {
      instanceSubs.forEach((s) => s.unsubscribe());
      instanceSubs.clear();
      instanceHandlers.clear();
    });
  }
}
