import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myValue = "oh yes!"

  constructor() {}

  updateMyValue() {
    this.myValue = "oh my!"
  }

}
