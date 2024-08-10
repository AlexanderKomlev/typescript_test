export default class Book implements Buyable {
    count: number;
    digitalItem: boolean;

    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
    ) {
        this.digitalItem = true;
        this.count = 1;
    }
}
