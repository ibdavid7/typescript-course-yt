export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {



    constructor(private _id: string = '', private _item: string = '', private _checked: boolean = false) {
        this._id = _id
        this._item = _item
        this._checked = _checked
    }

    get id(): string {
        return this._id
    }

    set id(value: string) {
        this._id = value
    }

    get item(): string {
        return this._item
    }

    set item(value: string) {
        this._item = value
    }

    get chhecked(): boolean {
        return this._checked
    }

    set checked(value: boolean) {
        this._checked = value
    }


}