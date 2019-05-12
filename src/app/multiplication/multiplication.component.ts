import {Component, OnInit} from '@angular/core';

let randomOneDigitNumber = () => 3; // Math.floor((Math.random() * 3) + 1);
let randomNumberBetween1And20 = () => Math.floor((Math.random() * 20) + 1);

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  message: String;
  score: number = 0;
  total: number = 0;


  randomOneDigitNumber1: number = randomOneDigitNumber();
  randomOneDigitNumber2: number = randomNumberBetween1And20();
  boxValue: any;


  constructor() {
  }

  ngOnInit() {
  }


  onEnter(actualResult: String) {
    let actualResultNumber: Number;
    actualResultNumber = Number(actualResult);
    let expectedResult = +this.randomOneDigitNumber1 * +this.randomOneDigitNumber2;
    let rightAnswer = "Right answer:" + this.randomOneDigitNumber1 + " * " + this.randomOneDigitNumber2 + " = " + expectedResult;
    let wrongAnswer = "Wrong answer:" + actualResultNumber;
    if (actualResultNumber === expectedResult) {
      this.score = this.score + 1;
      this.message = rightAnswer;
    } else {
      this.score = this.score - 1;
      this.message = wrongAnswer + '\n' + rightAnswer;
    }

    this.total = this.total + 1;


    this.message = this.message + '\n' + "Score:" + this.score + '\n' + "Total Questions:" + this.total;

    this.randomOneDigitNumber1 = randomOneDigitNumber();
    this.randomOneDigitNumber2 = randomNumberBetween1And20();
    this.boxValue = '';
  }
}
