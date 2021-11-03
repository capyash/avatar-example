export class AvatarModel {
  imageType: 1 | 2 = 1;
  name: string = "No Name";
  otherInfo: string = "";

  constructor(init: Partial<AvatarModel>){
    for(let key in init)
    {
      this[key] = init[key];
    }
  }

}