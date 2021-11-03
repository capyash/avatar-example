export class GenericAvatarModel {
  imageType: 1 | 2 = 1;
  name: string = "No Name";
  otherInfo: string = "";

  constructor(init: Partial<GenericAvatarModel>) {
    for (let key in init) {
      this[key] = init[key];
    }
  }

}