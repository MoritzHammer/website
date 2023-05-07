import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  value : number = 5;
  onScroll(event:any): void {
    console.log(event);
    // Interpret the scroll event
    // Do stuff on inner div scroll
}

}
