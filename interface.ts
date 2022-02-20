interface Drink{
    name: string
}

interface AlcoholicDrink extends Drink{
    alcohol: number;
    showInfo(): string;
}

interface MixedDrink {
    ingredients : string[];
}

class Wine implements AlcoholicDrink{
    alcohol: number;
    name: string;
    constructor(name: string, alcohol: number){
        this.name = name;
        this.alcohol = alcohol;
    }
    //(method) Wine.showInfo(): string
    showInfo(): string {
        return `info: ${this.name} ${this.alcohol}`;
    }
}

class cCoktail implements AlcoholicDrink, MixedDrink{
    alcohol: number;
    name: string;
    ingredients : string[];

    constructor(name: string, alcohol: number, ingredients: string[]){
                this.name = name;
                this.alcohol = alcohol;
                this.ingredients= ingredients;
    }

    showInfo(): string {
        const ingredientsInfo = this.ingredients.reduce((ac, e)=> ac + " " + e + ", ", "");        
        return `info: ${this.name} ${this.alcohol}` +
        `ingredientes: ${ingredientsInfo}`;
    }
    
}

const Margarita = new cCoktail ("Margarita", 12.5, 
["tequila","limon", "sal", "soda", "hielo"]);
const rioja = new Wine("Vino Rioja", 14);
const malbec = new Wine("Vino Malbec", 16);

const ad : AlcoholicDrink[] = [Margarita, rioja, malbec];

function showDrinks(drinks: AlcoholicDrink[]): void{
    drinks.forEach(e=>console.log(e.showInfo()));
}

showDrinks(ad);