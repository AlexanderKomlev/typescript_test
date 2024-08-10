export default class Movie implements Buyable {
    count: number;
    digitalItem: boolean;
    
    constructor(
        readonly id: number,
        readonly name: string,
        readonly englishName: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly duration: number,
        readonly price: number,
    ) {
        this.digitalItem = true;
        this.count = 1;
    }
}
