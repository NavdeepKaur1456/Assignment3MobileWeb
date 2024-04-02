
export class Pet {
  constructor(
    public id: number = 0,
    public name: string = '',
    public petKind: string = '',
    public age: number = 0,
    public image: string = '',
    public ownerId: number=0 ,
  ) {}
}
