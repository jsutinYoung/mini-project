import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


enum Strength {
  WEAK = 1,
  STRONG,
  STRONGEST,
}

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent {
  hide = true;

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!]).{8,}$/),
  ]);

  //store password strength
  strengthStatus: number=Strength.WEAK;

  constructor() {

    //Use form control valueChanges function, which is an observable and need to subscribe it to capture the password input.  
    this.password.valueChanges.subscribe((pass: string) => {
      let x = pass.length;

      //Define value of strength
      if (x <= 8 ) {
        this.strengthStatus = Strength.WEAK;
      } else if (x >8 && x <= 12) {
        this.strengthStatus = Strength.STRONG;
      } else if (x > 12) {
        this.strengthStatus = Strength.STRONGEST;
      }
    });
  }

  //Error message for invalid input 
  getErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.password.hasError('minlength')) {
      return 'You must enter at least 8 character';
    }


    //character mix requirements
    return "Must include at least 1 digit, 1 lower case , 1 upper case, 1 special character";
  }
}
