import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpService } from "./http-service";
import { Const } from "@app/const/Const";

const backendUrl = Const.backendUrl;

@Injectable()
export class ApiService extends HttpService {
    constructor(
        protected client : HttpClient,
        protected auth : AuthService        
    ) {
        super(client);
    }
    public static buildUrl(path: string): string {
        return `${backendUrl}/api/${path}`;
    }
}