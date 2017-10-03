import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedLink(linkName) {
    this.selectedLink.emit(linkName)
  }

}
