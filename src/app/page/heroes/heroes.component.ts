import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from 'src/app/service/hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroServiceService
  ) { }

  ngOnInit(): void {
  }

}
