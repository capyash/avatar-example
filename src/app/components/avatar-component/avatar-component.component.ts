import { Component, Input, OnInit } from '@angular/core';
import { AvatarOptions } from './avatar.model';

@Component({
  selector: 'app-avatar-component',
  templateUrl: './avatar-component.component.html',
  styleUrls: ['./avatar-component.component.css']
})
export class AvatarComponentComponent implements OnInit {

  @Input() public avatarOptions: AvatarOptions = new AvatarOptions({});

  constructor() { }

  ngOnInit(): void {
  }

}
