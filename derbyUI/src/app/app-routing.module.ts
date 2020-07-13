import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from './user/user-login/user-login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RegisterComponent} from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PostComponent } from './feeds/post/post.component';
import { TopFeedComponent } from './feeds/top-feed/top-feed.component';
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: UserLoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'newPost',component:PostComponent},
  {path:'allFeed',component:TopFeedComponent},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }