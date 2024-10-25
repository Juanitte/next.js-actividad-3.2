import { Td } from "./Td";

export class Tr {
    td: Td[] = [];

    constructor(tds: Td[]) {
        this.td = tds;
    }
}