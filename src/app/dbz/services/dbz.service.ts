import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
import { filter } from 'rxjs';


@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    console.log(newCharacter);

    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter( ch => ch.id !== id );
  }

}
