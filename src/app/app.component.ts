import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  userInfo: any;
  intestazione: string = '';
  description: string = '';
  date = false;
  constructor(private httpService: PortfolioService){}

  ngOnInit(){
  this.intestazione = 'Hi, my name is:'
  this.getData();
  }

  getData() {
    this.httpService.getInfo().subscribe(
       (response) => { this.userInfo = response.results[0];
       this.description = this.userInfo.name.first + ' ' + this.userInfo.name.last;
      },
	     (error) => { console.log(error); });
  }
  changeText(event){
    this.date = event.index == 2 ? true : false;
    switch (event.index) {
      case 0:
      this.intestazione = 'Hi, my name is'
      this.description = this.userInfo.name.first + ' ' + this.userInfo.name.last;
      break;
      case 1:
      this.intestazione = 'My email address is:'
      this.description = this.userInfo.email;
      break;
      case 2:
      this.intestazione = 'My birthday is:'
      this.description = this.userInfo.dob.date;
      break;
      case 3:
      this.intestazione = 'My address is:'
      this.description = this.userInfo.location.street.number + ' ' + this.userInfo.location.street.name ;
      break;
      case 4:
      this.intestazione = 'My phone number is:'
      this.description = this.userInfo.phone;
      break;
      case 5:
      this.intestazione = 'My password is:'
      this.description = this.userInfo.login.password;
      break;
      default:
      this.intestazione = 'Hi, my name is'
    }
  }
}



