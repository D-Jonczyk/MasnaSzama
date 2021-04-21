export class MenuModel {
  public menus: {menuName: string}[];
  public category: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public price: number;
  public options: {title: string, description: string, choices: {name: string, price: number}[]};
  public instructions: {title: string, description: string, text: string};

  constructor(
    menus: {menuName: string}[],
    category: string,
    name: string,
    description: string,
    imagePath: string,
    price: number,
    options: {title: string, description: string, choices: {name: string, price: number}[]},
    instructions: {title: string, description: string, text: string}
  ) {
    this.menus = menus;
    this.category = category;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.price = price;
    this.options = options;
    this.instructions = instructions;
  }
}
