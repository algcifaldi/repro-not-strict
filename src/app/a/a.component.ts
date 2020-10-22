import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html'
})
export class AComponent implements OnInit {
  ngOnInit(): void {
    console.log('foo');
  }
}
