import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    save(): void,
    render(): void,
    clearList(): void
    addItem(item: ListItem): void,
    removeItem(item: ListItem): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []) { }

    get list(): ListItem[] {
        return this._list;
    }

    save() {
        localStorage.setItem('myList', JSON.stringify(this._list));
    }
    render() {

        const storedList: string | null = localStorage.getItem('myList');
        if (typeof storedList !== 'string') return;
        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList);
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem);
        })
    }
    clearList(): void {
        this._list = [];
        this.save();
    }
    addItem(item: ListItem) {
        this._list.push(item);
        this.save();
    }
    removeItem(item: ListItem | string) {

        if (typeof item === 'string') {
            item = this._list.find(listItem => listItem.id === item) || '';
        }
        if (!item) return;

        const index = this._list.indexOf(item as ListItem);
        if (index > -1) {
            this._list.splice(index, 1);
        }
        this.save();
    }

}