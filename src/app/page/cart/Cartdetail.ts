export class Cartdetail {
    id : number;
    name: string;
    price: number;
    count: number;
    constructor(
        ids:number,
        names: string,
        prices: number,
        counts: number,){
            this.id=ids;
            this.name= names;
            this.price= prices;
            this.count= counts;
        }
}