import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FollowerserviceService } from './followerservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './app-error-handler';
import { FollowerComponent } from './follower/follower.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostdataComponent } from './postdata/postdata.component';
import { PostServiceService} from './post-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FollowerComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    PostdataComponent



  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component:  HomeComponent},
      {path: 'followers', component: FollowerComponent},
      {path: 'followers/:username/:login', component: ProfileComponent},
      {path: 'post', component: PostdataComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    FollowerserviceService,
    PostServiceService,
    {provide: ErrorHandler , useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
