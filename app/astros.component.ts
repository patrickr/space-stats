import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


import { Astro }   from './astro';
import { AstroService }   from './astro.service';

@Component({
  selector: 'my-astros',
  template: `
    <h1>{{title}}</h1>
    <ul class="astros">
      <li *ngFor="let astro of astros">
      {{astro.name}} onboard {{astro.craft}}
      </li>
    </ul>
    `,
  providers: [AstroService]
})
export class AstrosComponent implements OnInit {
  title = 'people in space';
  astros: Astro[];
  constructor(private astroService: AstroService) { }
  getAstros(): void {
    this.astroService.getAstros().then(astros => this.astros = astros);
  }
  ngOnInit(): void {
    this.getAstros();
  }


}
