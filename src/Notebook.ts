export default class Notebook implements Buyable {
    count: number;
    digitalItem: boolean;

    constructor(
        readonly id: number,
        readonly name: string,
        readonly model: string,
        readonly year: number,
        readonly price: number,
    ) {
        this.digitalItem = false;
        this.count = 1;
    }
}
