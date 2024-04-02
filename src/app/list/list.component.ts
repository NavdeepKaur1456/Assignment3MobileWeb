import { Component, OnInit } from '@angular/core';
import { PetsDataService } from '../pet-data.service';
import { Pet } from '../pets';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petsDataService: PetsDataService) { }

  ngOnInit(): void {
    this.petsDataService.getPetList().subscribe(pets => this.pets = pets);
  }
}
