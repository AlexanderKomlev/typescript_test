export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        item.count = 1;
        if (this._items.some(i => i.id === item.id)) {
            if (item.digitalItem) {
                console.log("Can't add digital item to cart");
                return;
            }
            this._items.filter(i => i.id === item.id)[0]!.count++;
            return;
        }
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    totalPrice(): number {
        return this._items.reduce((acc, item) => acc + item.price * item.count, 0);
    }

    totalPriceWithDiscount(discount: number): number {
        return this.totalPrice() * (1 - discount / 100);
    }

    deleteItem(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }

    decreaseCount(id: number): void {
        this._items.filter(item => item.id === id)[0]!.count--;
    }
}
