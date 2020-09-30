import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


/**
 * split string based on on '," delmiter
 * var splitted = str.split(" ", 3);
 *
 */

function add(numbers: string, y: number): number {
  const splitted = numbers.split(',', 100);
  const numbersplit = splitted.map(parseInt())

  const numbersplit = parseInt(splitted,10);


  const total = splitted.reduce((accumulator, currentValue) => accumulator + ParseInt(currentValue));
  return total;
}


export class AppComponent implements OnInit{
  title = 'string-calc' + '121212' ;

  constructor() {}
  ngOnInit() {}

}
