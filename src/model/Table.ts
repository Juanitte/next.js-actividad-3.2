import { Tr } from "./Tr";

export class Table {
    tr: Tr[] = [];

    constructor(trs: Tr[]) {
        this.tr = trs;
    }
}