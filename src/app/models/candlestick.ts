export class Candlestick {
    //Property
    // public open: number = 0;
    // public close: number = 0;

    constructor(
        public open = 0,
        public close = 0,
    ) {
        // this.open = open;
        // this.close = close;
    }

    public get color() {
        if (this.open < this.close)
            return 'green';
        else
            return 'red';
    }
}
