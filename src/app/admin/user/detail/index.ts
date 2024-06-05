import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../../services/Users.service';
import { Component } from "@angular/core";
import { BaseComponent } from '@app/abstract/BaseComponent';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from '@app/services/order.service';



@Component({
    selector: 'user-detail',
    templateUrl: './index.html',
    styleUrls: ['./style.scss', '../../detail.scss']
})

export class UserDetail extends BaseComponent{
    constructor(
        private usersService: UsersService,
        private orderService : OrderService,
        private route: ActivatedRoute
    ) {
        super();
    }

    detailUser: any = {};
    ordersList: any = [];
    //declare new form for user detail
    userForm: FormGroup = new FormGroup({
        username : new FormControl(this.detailUser.full_name ),
        email : new FormControl(this.detailUser.email),
        phone : new FormControl(this.detailUser.phone),
        role : new FormControl(this.detailUser.role),
        // status : new FormControl(this.detailUser.status)

    });

    emailValidateFn = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (!control.value.includes('@')) {
            return { email: true, error: true };
        }
        return {};
    }


    ngOnInit(): void {
        super.ngOnInit();
        this.fetchData();

    }

    fetchData() {
        this.getUserDetail();
        this.getOrders();
    }

    getOrders() {
        const id = this.route.snapshot.params.id;
        this.orderService.getOrdersByUser(id).subscribe((res: any) => {
            if(res.message === 'success') {
                this.ordersList = res.data;
            }
            else {
                this.message.error('Get orders failed');
            }
        })
    }

    getUserDetail() {
        //get id from route
        const id = this.route.snapshot.params.id;


        this.usersService.getById(id).subscribe((res: any) => {
            this.detailUser = res.data;
            this.bindDataToForm();
        }
        )
    }

    bindDataToForm() {
        this.userForm.setValue({
            username: this.detailUser.full_name,
            email: this.detailUser.email,
            phone: this.detailUser.phone,
            role: this.detailUser.role,
            // status: this.detailUser.status
        });
    }

    onBtnUpdateUser() {
        console.log('Update User');
    }

    onBtnDeleteUser() {
        console.log('Delete User');
    }

}

