export class AvatarOptions {
  imageType: 1 | 2 = 1;
  name: string = "No Name";
  otherInfo: string = "";

  constructor(init: Partial<AvatarOptions>){
    for(let key in init)
    {
      console.log('init', init)
      console.log('key', key)
      this[key] = init[key];
      console.log('this', this)
    }
  }

}