export default class MusicAlbum implements Buyable {
    count: number;
    digitalItem: boolean;

    constructor(
        readonly id: number,
        readonly name: string,
        readonly artist: string,
        readonly year: number,
        readonly price: number,
    ) {
        this.digitalItem = true;
        this.count = 1;
    }
}
