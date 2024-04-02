import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from './pets';
import { catalog } from './catalog-data';

@Injectable({
  providedIn: 'root'
})
export class PetsDataService {
  private pets: Pet[] = [];

  constructor() {
    this.initializePetsFromCatalog();
  }

  private static readonly imageFolder = 'assets/Images/pets/';

  private initializePetsFromCatalog(): void {
    this.pets = catalog._embedded.pets.map(PetsDataService.jsonToPet);
  }

  private static jsonToPet(petJson: any): Pet {
    return new Pet(
      petJson.id,
      petJson.name,
      petJson.petKind,
      petJson.age,
      PetsDataService.imageFolder + petJson.image,
      petJson.ownerId
    );
  }

  public getPetList(): Observable<Pet[]> {
    return of(this.pets);
  }

  public getPet(id: number): Observable<Pet | undefined> {
    const pet = this.pets.find(pet => pet.id === id);
    return of(pet);
  }
}
