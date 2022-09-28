import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{

@Input() collapsed = false;
@Input() screenWidth = 0;
getBodyClass(): string{
  let styleClass = '';
  if(this.collapsed && this.screenWidth > 768){
    styleClass = 'body-trimmed';
  }
  else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
    styleClass = 'body-md-screen'
  }
  return styleClass;
}

}
