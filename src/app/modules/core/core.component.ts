import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';


@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss']
})
export class CoreComponent {
    
    constructor(
        private userService: UserService,
        private router: Router,
    ) {}

    logout() {
        this.userService.logout();
        this.router.navigate(['/']);
    }
}