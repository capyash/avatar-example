import { Component, OnInit } from '@angular/core';
import { AvatarModel } from 'src/app/components/avatar-component/avatar-model';

@Component({
  selector: 'app-page-using-avatar-component',
  templateUrl: './page-using-avatar-component.component.html',
  styleUrls: ['./page-using-avatar-component.component.css']
})
export class PageUsingAvatarComponent implements OnInit {

  public avatars: AvatarModel[] = []

  public avatarData: Partial<AvatarModel>[] = [
    {
      name: "John Doe",
      otherInfo: "This user has info",
    },
    {
      name: "Jane Doe",
      imageType: 2
    }
  ]

  constructor() { }

  ngOnInit() {
    this.setAvatars();
  }

  private setAvatars(): void {
    this.avatarData.map(x => this.avatars.push(new AvatarModel(x)))
  }
}
