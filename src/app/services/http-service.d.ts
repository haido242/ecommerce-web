import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface ApiOptions {
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    observe?: 'response' | 'body';
    timeout?: number;
    retryCount?: number;
    withCredentials?: boolean;
    customHeaders?: any;
}

export declare class HttpService {
    protected client: HttpClient;
    protected config?: any;
    constructor(client: HttpClient, config?: any);
    private get  httpTimeout();
    private defaultRequestOptions;
    protected get backendUrlOrigin(): string;
    private requestOptions;
    buildUrl(path: string): string;
    POST(url: string, params?: any, options?: ApiOptions): Observable<any>;
    PUT(url: string, params?: any, options?: ApiOptions): Observable<any>;
    DELETE(url: string, options?: ApiOptions): Observable<any>;

}

export {};