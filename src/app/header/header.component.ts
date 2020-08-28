import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public registerForm : FormGroup;
isDisplay = false;
  formObj: any;
  userObj={
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    age:'',
    state:'',
    country:'',
    address:''
  }
  constructor(private fb: FormBuilder, private common:CommonService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      phoneNumber: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      age: ['',[Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      state: ['',[Validators.required]],
      country: ['',[Validators.required]],
      address: ['',[Validators.required]]
    })
  }

  showModal(){
  this.isDisplay = true;
  }

  closeModal(){
    this.isDisplay = false;
  }

  addData(userObj){

    console.log(userObj.value);
    this.common.createUser(userObj.value).subscribe((response)=>{
     // this.getLatestUser();
    })
  }
  

}
