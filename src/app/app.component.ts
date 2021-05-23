import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  person: User = {
    name: '',
    dateOfBirth: '',
    email: '',
    tel: []
  };

  submit(formdata: User): void {
    this.show = true;
    const tel = formdata.tel;
    this.person.name = formdata.name;
    this.person.tel.push(tel);
    this.person.email = formdata.email;
    this.person.dateOfBirth = formdata.dateOfBirth;
    console.log(JSON.stringify(this.person));
  }
}

export interface User {
  name: string;
  email: string;
  // i had an issue of the tel type because if i let it string[] i had problem sto i set it to any...
  // it is bad practice and i am aware of that but i am out of time this moment
  tel: any[];
  dateOfBirth: string;
}
