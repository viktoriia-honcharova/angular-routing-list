import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css'],
})
export class CenzorComponent {
  public wordsArray = ['java', 'tottenham', 'coding'];
  public badWords = 'java, tottenham, coding';
  public badword = '';
  public inputClass = 'form-control';
  public inputPlaceholder = 'word here';
  public areaValue = '';
  public areaClass = 'form-control mb-4';
  public areaPlaceholder = 'text here...';

  fillWords(): string {
    this.badWords = this.wordsArray[0];
    for (let i = 1; i < this.wordsArray.length; i++) {
      this.badWords += `, ${this.wordsArray[i]}`;
    }
    return this.badWords;
  }

  addWord(): void {
    if (this.badword === '') {
      this.inputClass = 'form-control incorrect';
      this.inputPlaceholder = 'Please write a word!';
    } else {
      this.wordsArray.push(this.badword);
      this.badword = '';
      this.inputClass = 'form-control';
      this.inputPlaceholder = 'word here...';
      this.fillWords();
    }
  }

  resetWord(): void {
    this.wordsArray.splice(0);
    this.fillWords();
  }

  addStars(length: number): string {
    let stars = '';
    for (let i = 0; i < length; i++) {
      stars += '*';
    }
    return stars;
  }

  cenzor(): void {
    if (this.areaValue === '') {
      this.areaClass = 'form-control mb-4 incorrect';
      this.areaPlaceholder = 'Please write a text!';
    } else {
      this.areaClass = 'form-control mb-4';
      this.areaPlaceholder = 'text here...';
      let text = this.areaValue;
      let re;
      let newText;
      for (let i = 0; i < this.wordsArray.length; i++) {
        re = new RegExp(`\\b${this.wordsArray[i]}\\b`, 'gi');
        newText = text.replace(re, this.addStars(this.wordsArray[i].length));
        text = newText;
        this.areaValue = newText;
      }
    }
  }
}
