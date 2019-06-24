import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';


@Component({
  selector : 'app-persons',
  templateUrl: './persons.component.html'
})


export class PersonsComponent implements OnInit, OnDestroy {


  personList: string[];//TypeScrypt
  private personListSubs: Subscription;
  //private personService: PersonsService;

  constructor(private prsService: PersonsService) {
    //this.personList = prsService.persons;
    //this.personService = prsService;

  }


  ngOnInit(): void {
    this.personList = this.prsService.persons;
    this.personListSubs = this.prsService.personChanged.subscribe(persons =>{
      this.personList = persons;
    });//test
  }

  onRemovePerson(person: string) {
    this.prsService.removePerson(person);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
