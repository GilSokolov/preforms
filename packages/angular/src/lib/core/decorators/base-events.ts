export type HandlerFunction = (event: any) => void;

export const EVENT_METADATA: unique symbol = Symbol("event-metadata");

type EventMetadata = Map<string | symbol, readonly string[]>;

interface EventMetadataHost {
  [EVENT_METADATA]?: EventMetadata;
}

export type EventHandler<T> = (event: T) => void;

export function baseEvents<TEvent>(
  eventKeys: readonly string[],
): MethodDecorator {
  return ((
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(event: TEvent) => void>,
  ) => {
    const host = target as EventMetadataHost;

    if (!host[EVENT_METADATA]) {
      host[EVENT_METADATA] = new Map();
    }

    host[EVENT_METADATA]!.set(propertyKey, eventKeys);
  }) as MethodDecorator;
}
