import { Component, OnInit } from '@angular/core';

import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { catchError, map } from 'rxjs/operators';

import { BadInput } from '../bad-input';
import { PostServiceService } from '../post-service.service';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {
  posts;
   error: string;

  constructor(private service: PostServiceService) {

  }
  ngOnInit(){
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }


  createPost(input: HTMLInputElement) {
    const pos
    t = { title: input.value };
    (this.posts as any[]).splice(0, 0, post);
    input.value = '';
    this.service.Create(post)
    .subscribe(newposts => {
      // tslint:disable-next-line: whitespace

    }, (error: Response) => {
       this.posts.splice(0, 1);
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
  const index = this.posts.indexOf(post);
  this.posts.splice(index, 1);
  this.service.delete(post)

   // tslint:disable-next-line: deprecation
   .subscribe(
    null ,
     (error: AppError) => {
       this.posts.splice(index, 0, post);
       if (error instanceof NotFoundError) {
       alert('this post already been deleterd');
       }

   else { throw error; }



  });

}
}
