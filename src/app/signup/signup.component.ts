import { Component, OnInit } from '@angular/core';
// Import the User model
import { User } from './../User';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupFormComponent implements OnInit {

  //Property for the gender
  public country: string[];
  //Property for the user
  public user:User;

  ngOnInit() {

    this.country =  ['India', 'USA', 'Others'];
    //Create a new user object
    this.user = new User({firstName:"", lastName:"", username:"", dob:"", password: { pwd: "" , confirmPwd: ""}, country: this.country[0]});
  }

   onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    	this.user = value;
    	console.log( this.user);
    	console.log("valid: " + valid);
  	}
}

