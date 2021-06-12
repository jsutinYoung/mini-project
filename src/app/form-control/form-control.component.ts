import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  showDetails:boolean;

  ngOnInit(): void {
  }

  onStrengthChanged(strength: number){
    console.log('password strength =', strength);
  }

}
