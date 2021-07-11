import { Component, OnInit } from '@angular/core';

import { libraryFunction } from 'core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  libraryFunction = libraryFunction();

  ngOnInit(): void {
    console.log(this.libraryFunction);
  }
}
