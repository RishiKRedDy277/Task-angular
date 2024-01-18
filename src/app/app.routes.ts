import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
    {'path':'home','title':'Home',component:HomeComponent},
    {'path':'addbook','title':'Add Book',component:AddComponent},
    {'path':'managebook','title':'Manage Book',component:ManageComponent},
    {'path':'',redirectTo:"home" ,pathMatch:"full"}
];
