import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output,EventEmitter, OnInit, HostListener} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity: 0}),
        animate('350ms',
          style({opacity:1})
        )
      ]),
      transition(':leave',[
        style({opacity: 1}),
        animate('350ms',
          style({opacity:0})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter', [
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)',offset: 0}),
          style({transform: 'rotate(2turn)',offset: 1})
      ])
        )
      ])
    ])
  ]
})
export class SidenavComponent  implements OnInit{
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  @Output() onToggleSidNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;


@HostListener('window:resize',['$event'])
onResize(event: any){
  this.screenWidth = window.innerWidth;
  if(this.screenWidth <= 768){
    this.collapsed = false;
    this.onToggleSidNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSidNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSidNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  isAdmin(): boolean{
    console.log('Role bool:' + this.authService.currentUser.role == 'Admin' ? true : false);
    return this.authService.currentUser.role == 'Admin' ? true : false;
  }

  
  isManager(): boolean{
    return this.authService.currentUser.role == 'Manager' ? true : false;
  }



}
