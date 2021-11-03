import { Component, OnInit } from '@angular/core';
import { AvatarOptions } from 'src/app/components/avatar-component/avatar.model';

@Component({
  selector: 'app-page-using-avatar-component',
  templateUrl: './page-using-avatar-component.component.html',
  styleUrls: ['./page-using-avatar-component.component.css']
})
export class PageUsingAvatarComponent implements OnInit {

  public avatars: AvatarOptions[] = []

  constructor() { }

  ngOnInit() {
    this.setAvatars();
  }

  private setAvatars(): void {
    this.avatars.push(new AvatarOptions({
      name: "John Doe",
      otherInfo: "This user has info",
    }));

    this.avatars.push(new AvatarOptions({
      name: "Jane Doe",
      imageType: 2
    }));
  }
}
