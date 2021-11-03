import { Component, Input, OnInit } from '@angular/core';
import { AvatarModel } from './avatar-model';

@Component({
  selector: 'app-avatar-component',
  templateUrl: './avatar-component.component.html',
  styleUrls: ['./avatar-component.component.css']
})
export class AvatarComponentComponent implements OnInit {

  @Input() public avatarModel: AvatarModel = new AvatarModel({});

  constructor() { }

  ngOnInit(): void {
  }

}
