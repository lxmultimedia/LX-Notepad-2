export class Note {
  public id: string;
  public title: string;
  public text: string;

  constructor(id: string, title: string, text: string) {
    this.id = id;
    this.title = title;
    this.text = text;
}
}
