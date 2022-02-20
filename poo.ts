class Sale{

    protected amount: number;

    constructor(amount: number){
        this.amount = amount;
    }

    getTotal(){
        return this.amount;
    }
}

class SaleWithTax extends Sale{
    private tax: number

    constructor(tax: number, amount: number){
        super(amount);
        this.tax = tax;
    }

    getTotal() : number{
        return this.tax + super.getTotal();
    }
}

let sale = new Sale(19);
const res = sale.getTotal();
let saleWithTax = new SaleWithTax(10,100);
const res2 = saleWithTax.getTotal();
console.log(res2);