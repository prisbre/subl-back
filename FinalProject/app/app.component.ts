import {Component} from 'angular2/core';
import {NavBarComponent} from './navbar.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; 
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {AddUserFormComponent} from './add-user-form.component';
import {PostsComponent} from './posts.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/adduser', name: 'AddUserForm', component: AddUserFormComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Home']}

]) 
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [
        NavBarComponent,
        ROUTER_DIRECTIVES
    ]
})
export class AppComponent {
    
}