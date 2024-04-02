import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pet } from '../pets';
import { PetsDataService } from '../pet-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pet$: Observable<Pet | undefined> = of(undefined); // Initialized with an empty Observable

  constructor(
    private route: ActivatedRoute,
    private petsDataService: PetsDataService
  ) {}

  ngOnInit(): void {
    this.pet$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.petsDataService.getPet(id);
      })
    );
  }
}
