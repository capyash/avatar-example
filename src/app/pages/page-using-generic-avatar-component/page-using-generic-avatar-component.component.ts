import { Component, OnInit } from '@angular/core';
import { GenericAvatarModel } from 'src/app/components/generic-avatar-component/generic-avatar-model';

@Component({
  selector: 'app-page-using-generic-avatar-component',
  templateUrl: './page-using-generic-avatar-component.component.html',
  styleUrls: ['./page-using-generic-avatar-component.component.css']
})
export class PageUsingGenericAvatarComponent implements OnInit {

  public avatars: GenericAvatarModel[] = []

  public avatarData: Partial<GenericAvatarModel>[] = [
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

  ngOnInit(): void {
    this.setAvatars();
  }
    private setAvatars(): void {
      this.avatarData.map(x => this.avatars.push(new GenericAvatarModel(x)))
    }

}
