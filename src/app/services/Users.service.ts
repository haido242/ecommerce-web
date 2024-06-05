import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Const } from "@app/const/Const";



@Injectable({
    providedIn : 'root'
})


export class UsersService {
    constructor(
        private http: HttpClient
    ) {

    }

    get(param? : any) {
        console.log(Const.backendUrl + '/api/users', param);
        return this.http.get(Const.backendUrl + '/api/users', { params: param })
    }

    getById(id) {
        return this.http.get(Const.backendUrl + '/api/users/' + id)
    }

    create(user) {
        return this.http.post(Const.backendUrl + '/api/users', user)
    }

    update(id, user) {
        return this.http.put(Const.backendUrl + '/api/users/' + id, user)
    }

    delete(id) {
        return this.http.delete(Const.backendUrl + '/api/users/' + id)
    }

}
