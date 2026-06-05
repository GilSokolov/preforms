import { LoadTrigger } from "@preforms/ts";
import { Observable } from "rxjs";

export interface LoadAdapter {
  protocol: string;
  execute(source: LoadTrigger, context?: any): Observable<any>;
}
