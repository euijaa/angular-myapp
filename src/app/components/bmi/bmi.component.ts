import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { faCoffee, faBong, faBolt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  public person: Person;
  public people: Person[] = []; //Array <Person>;

  public faCoffee = faCoffee;
  public faBong = faBong;
  public faBolt = faBolt

  constructor() { }

  ngOnInit(): void {
    this.person = new Person();

    const p1 = new Person(70, 170);
    const p2 = new Person(70, 180);
    const p3 = new Person(70, 190);
    this.people.push(p1, p2, p3);

  }

  public classForCategory() {
    return {
      o: this.person.category === 'under weight',
      g: this.person.category === 'normal',
      r: this.person.category === 'over weight',
    }
  }

}
