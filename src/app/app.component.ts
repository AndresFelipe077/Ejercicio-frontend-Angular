import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Mis primeros auxilitos';

  subtitle = 'Proyecto básado para ayudar a niños';

  pasos = "siguientes pasos";


  rockbands = ['banano', 'mango', 'uvas', 'fresas'];
  rockBandName = ''


  changeTitle()
  {
    this.title = 'nuevo titulo';
  }

  addRockBand()
  {
    this.rockbands.push(this.rockBandName);
    this.rockBandName = '';
  }



  show:boolean = true;




}
