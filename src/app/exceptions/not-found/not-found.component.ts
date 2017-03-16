import { Component } from '@angular/core';

@Component({
  selector: 'an-not-found',
  template: `
    <h1>
      Oops, page not found
    </h1>
  `,
  styles: ['h1 {color:#ff0000;}']
  
})
export class NotFoundComponent  {
  constructor() { }
}
