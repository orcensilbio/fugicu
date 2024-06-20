import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient',
  template: `
    <div [style.background-image]="gradient"></div>
  `,
})
export class GradientComponent {
  gradient = 'linear-gradient(to bottom, #ff0000, #ffffff)';
}
