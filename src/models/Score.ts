import Constants from "@/services/constants";

export default class Score {
    id!: string;
    name!: string;
    value!: number;
    description!: string;
    date!: Date;

    constructor() {
        this.name = '';
        this.value = 0;
        this.date = new Date();
        this.description = '';
    }

    public isFieldValid(fieldName: string): boolean {
        const fieldValue = (this as any)[fieldName];

        if ((Constants.CARD_REQUIRED_FIELDS.includes(fieldName) && !fieldValue)
        || (fieldValue && fieldName in Constants.CARD_MAX_CHARS && fieldValue.length > (Constants.CARD_MAX_CHARS as any)[fieldName])) {
            return false;
        }

        return true;
    }

    public isObjectValid(): boolean {
        for (let fieldName in this) {
            if (!this.isFieldValid(fieldName)) return false;
        }

        return true;
    }
}