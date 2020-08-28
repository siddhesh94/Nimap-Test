import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  allUser: Object;
  
  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.getLatestUser();
  }

  getLatestUser(){
    this.common.getUser().subscribe((response)=>{
      this.allUser = response
    })
  }
}

