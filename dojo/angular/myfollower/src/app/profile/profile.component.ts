import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(param=>{
      let id =+param.get('username')
      let username=param.get('login')
      console.log(id)
      console.log(id)
    })
  }

}
