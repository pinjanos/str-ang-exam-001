import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroServiceService } from 'src/app/service/hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList: Hero[] = [];

  constructor(
    private heroService: HeroServiceService,
  ) { }

  ngOnInit(): void {
    this.heroList = this.heroService.getAll();
  }

}
