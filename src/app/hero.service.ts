import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { 
  	//Service in Service
  }


  //Synchronous version. Of no use in the real world.

  // getHeroes(): Hero[] {
  // 	return HEROES;
  // }

  //async version, where we use RXJS Observables. Whatever the heck that is.

  getHeroes(): Observable<Hero[]> {
  	this.messageService.add("All Heroes have Arrived ! Begin Training");
  	return of(HEROES);
  }

}
