import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Const } from "@app/const/Const";

const backendUrl = Const.backendUrl;

@Injectable({
    providedIn: "root"
})
export class ApiService {
    constructor(
        private client: HttpClient,
        private auth: AuthService
    ) {
    }

    public buildUrl(path: string, params?: object): string {
        let url = backendUrl + path;
        if (params) {
            let queryString = Object.keys(params).map(key => key + "=" + params[key]).join("&");
            url += "?" + queryString;
        }
        return url;
    }

}