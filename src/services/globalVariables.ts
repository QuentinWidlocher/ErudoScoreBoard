export class GlobalVariables {
    private _listFormat!: number;

    public get listFormat(): number {
        if (!this._listFormat) {
            const listFormatLocal = localStorage.getItem('listFormat');
            this.listFormat = (listFormatLocal ? +listFormatLocal : 5);
        }
        return this._listFormat;
    }

    public set listFormat(value: number) {
        this._listFormat = value;
        localStorage.setItem('listFormat', ''+value);
    }
}

export const globalVariables: GlobalVariables = new GlobalVariables();