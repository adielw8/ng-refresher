import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({providedIn: 'root'})

export class PersonsService {
  persons: string[] = ['adi eliyahu', 'jenny', 'max'];
  personChanged = new Subject<string[]>();
  
  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
    this.personChanged.next(this.persons);
  }

  removePerson(name: string){
    this.persons = this.persons.filter(person =>{
      return name !== person;
    });
    this.personChanged.next(this.persons);
  }
}
