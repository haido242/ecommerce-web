import { UsersService } from './../../services/Users.service';
import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";

@Component({
    selector: 'user-management',
    templateUrl: './index.html',
    styleUrls: ['./index.scss', '../list.scss']
})

export class UserManagement extends BaseComponent{
    constructor(
        private usersService: UsersService
    ) {
        super();
    }

    isFetching: boolean = false;
    userList: any[] = [];
    ngOnInit(): void {
        super.ngOnInit();
        this.fetchUser();
    }

    filterUser(status? : string) {
        this.isFetching = true;
        if(status) {
            this.usersService.get({status: status}).subscribe((res: any) => {
                this.userList = res.data;
                this.isFetching = false;
                console.log('User List: ', this.userList);
            })
        } else {
            this.usersService.get().subscribe((res: any) => {
                this.userList = res.data;
                this.isFetching = false;
                console.log('User List: ', this.userList);

            })
        }

    }

    goDetailUser(id: number) {
        this.router.navigate(['admin/user', id]);
    }


    fetchUser() {
        this.filterUser();
    }

    onBtnAddUser(){

    }

    onBtnDetailUser(id: number) {
        console.log('Detail User: ', id);
    }

    onBtnDeleteUser(id: number) {
        console.log('Delete User: ', id);
    }

}