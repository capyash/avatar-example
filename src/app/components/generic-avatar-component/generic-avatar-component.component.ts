import { Component, Input, OnInit } from '@angular/core';
import { GenericAvatarModel } from './generic-avatar-model';

@Component({
  selector: 'app-generic-avatar-component',
  templateUrl: './generic-avatar-component.component.html',
  styleUrls: ['./generic-avatar-component.component.css']
})
export class GenericAvatarComponentComponent implements OnInit {

  @Input() public genericAvatarModel: GenericAvatarModel = new GenericAvatarModel({});


  constructor() { }

  ngOnInit(): void {
  }

}
