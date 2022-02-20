type Beer = {
    readonly name: String,
    alcohol: number,
    brand?: string
}

type Snack = {
    readonly nameSnack: String,
    price: number
}

function show(beer: Beer): void{
    console.log(`info: ${beer.name} ${beer.alcohol}`);
}

const myBeer : Beer = {
    name: "delirium",
    alcohol: 7.5,
    brand : "delirium"
}
show(myBeer);

const combo: Beer & Snack = {
    name: "delirium",
    alcohol: 7.5,
    brand : "delirium",
    nameSnack: "Pastel",
    price: 100
}

console.log(combo);
