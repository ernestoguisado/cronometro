import { Component } from '@angular/core';
import { interval, subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-nuevo-cronometro',
  templateUrl: './nuevo-cronometro.component.html',
  styleUrls: ['./nuevo-cronometro.component.css']
})
export class NuevoCronometroComponent {
public segundos: number = 0;
private cronometroSuscription: Subscription | null =  null;





constructor () {}

start() {
  if (!this.cronometroSuscription) {
    this.cronometroSuscription = interval(1000).subscribe(()=> {
    this.segundos++;
    });
  }
}


stop () {
if (this.cronometroSuscription) {
  this.cronometroSuscription.unsubscribe();
  this.cronometroSuscription = null;
}
}

restart () {
  this.stop();
  this.segundos = 0
}

}
