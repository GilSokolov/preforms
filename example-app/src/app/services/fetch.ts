import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadAdapter } from '@preforms/angular/core/models';
import { NetworkLoadTrigger } from '@preforms/ts';

@Injectable()
export class HttpFetchAdapter implements LoadAdapter {
  protocol = 'http';

  constructor(private http: HttpClient) {}

  execute(source: NetworkLoadTrigger) {
    const method = source.method || 'GET';

    return this.http.request(method, source.url!, {
      body: source.body,
      params: source.params as any,
    });
  }
}
