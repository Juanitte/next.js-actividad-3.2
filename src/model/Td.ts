export class Td {
    content: string;
    width: number;
    widthFormat: string;
    colspan: number;
    rowspan: number;
    isHeader: boolean;

    constructor(content: string, width: number, widthFormat: string, colspan: number, rowspan: number, isHeader: boolean) {
        this.content = content;
        this.width = width;
        this.widthFormat = widthFormat;
        this.colspan = colspan;
        this.rowspan = rowspan;
        this.isHeader = isHeader;
    }
}