import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
  public removedHero?: string;

  removeLasthero(): void {
    this.removedHero = this.heroes.pop();
  }
}
