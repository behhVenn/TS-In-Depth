import { Book, Magazine, ShelfItem } from "../../NamespaceDemo/intefaces";

export default class  Shelf<T extends ShelfItem>{
    #items: T[] = [];
    add(item: T){
        this.#items.push(item);
    }
    getFirst(): T{
        return this.#items[0];
    }
    find(title: string): T[]{
        return this.#items.filter(item=> item.title === title);
    }

    printTitles(){
        this.#items.forEach(item=> console.log(item.title));
    }
}