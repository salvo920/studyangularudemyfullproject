import { CIngridient } from "src/app/shared/CIngredient/CIngridient.model";

export class CRecipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingridients: CIngridient[];

    constructor(name: string, desc: string, imagePath: string, ingridients: CIngridient[]) {
        this.name = name
        this.description = desc
        this.imagePath = imagePath
        this.ingridients = ingridients
    }
}