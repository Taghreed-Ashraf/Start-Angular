import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  registerForm:FormGroup = new FormGroup({
    'name' :new FormControl(null),
    'email' :new FormControl(null),
    'phone' :new FormControl(null),
    'message' :new FormControl(null),
  })

  

  ngOnInit(): void {
  }

}
