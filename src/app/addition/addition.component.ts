import {Component, Input, OnInit} from '@angular/core';

var randomOneDigitNumber = () => Math.floor((Math.random() * 10) + 1);

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  message: String;
  score: number = 0;

  fixed1DigitNumber1: Number;
  fixed1DigitNumber2: Number;
  fixed2DigitNumber1: Number;
  fixed2DigitNumber2: Number;

  randomOneDigitNumber1: Number = randomOneDigitNumber();
  randomOneDigitNumber2: Number = randomOneDigitNumber();
  boxValue: any;

  // @ViewChild(CountdownComponent) counter: CountdownComponent;

  constructor() {
  }

  ngOnInit() {
  }


  validate(actualResult: String) {
    let actualResultNumber: Number;
    actualResultNumber = Number(actualResult);
    let expectedResult = +this.randomOneDigitNumber1 + +this.randomOneDigitNumber2;
    let rightAnswer = "Right answer:" + this.randomOneDigitNumber1 + " + " + this.randomOneDigitNumber2 + " = " + expectedResult;
    let wrongAnswer = "Wrong answer:" + actualResultNumber;
    if (actualResultNumber === expectedResult) {
      this.score = this.score + 1;
      this.message = rightAnswer;
    } else {
      this.score = this.score - 1;
      this.message = wrongAnswer + '\n' + rightAnswer;
    }

    this.message = this.message + '\n' + "Score:" + this.score;

    if (!this.fixed1DigitNumber1) {
      this.randomOneDigitNumber1 = randomOneDigitNumber();
    }
    this.randomOneDigitNumber2 = randomOneDigitNumber();
    this.boxValue = '';
  }

  fixedSingleDigitInput(value: string) {
    // this.fixed1DigitNumber1 = +value;
    // this.randomOneDigitNumber1 = this.fixed1DigitNumber1;
    // console.log(this.randomOneDigitNumber1)
  }
}
