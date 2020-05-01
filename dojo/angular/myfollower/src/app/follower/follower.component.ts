import { Component, OnInit } from '@angular/core';
import { FollowerserviceService } from '../followerservice.service';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  followers;
  error: string;
  constructor(private service: FollowerserviceService) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(followers => this.followers = followers);


  }


  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    (this.followers as any[]).splice(0, 0, post);
    input.value = '';
    this.service.Create(post)
    .subscribe(newposts => {
    }, (error: Response) => {
       this.followers.splice(0, 1);
       if (error instanceof BadInput){}
      else {
         throw error;
      }
    });
  }
 updatepost(post){
   this.service.update(post)
   .subscribe(updatepost => {
    console.log(updatepost);
    });

 }
 deletePost(post){
  const index = this.followers.indexOf(post);
  this.followers.splice(index, 1);
  this.service.delete(post)

   // tslint:disable-next-line: deprecation
   .subscribe(
    null ,
     (error: AppError) => {
       this.followers.splice(index, 0, post);
       if (error instanceof NotFoundError) {
       alert('this post already been deleterd');
       }

   else { throw error; }



  });

}
}
