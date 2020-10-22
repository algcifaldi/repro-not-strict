import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html'
})
export class BComponent {
  @Input() public showA: boolean | undefined;
}
