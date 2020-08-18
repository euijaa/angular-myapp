export class Person {
    constructor(
        public weight = 0,
        public height = 0,
    ) {
    }

    public get bmi() {
        return (this.weight / ((this.height / 100) ** 2))
    }

    public get category() {
        if (this.bmi < 18.5)
            return 'under weight';
        else if (this.bmi > 25)
            return 'over weight';
        else
            return 'normal';
    }

    public get color() {
        if (this.bmi < 18.5)
            return 'under weight';
        else if (this.bmi > 25)
            return 'over weight';
        else
            return 'normal';
    }


}

