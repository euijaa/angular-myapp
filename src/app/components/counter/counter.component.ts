import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public n =0;

  constructor() { }

  ngOnInit(): void {
  }

  public inc(){
    this.n++;
  }

  public res(){
    this.n = 0;
  }

}
