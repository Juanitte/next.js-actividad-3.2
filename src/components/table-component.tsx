import { Table } from "@/model/Table";

const HEADER_CLASS: string = "bg-[#c3dcf7] border-[2px] border-[#d4e0ee] text-[#153152] font-bold text-center p-2 leading-tight";
const NO_HEADER_CLASS: string = "border-[2px] border-[#d4e0ee] text-[#555555] p-2 leading-tight";

export default function TableComponent({ table }: { table: Table }) {
    return (
        <div className="flex justify-center">
            <table className="border-separate border-spacing-[2px]">
                {
                    table.tr.map((tr) => (
                    <tr className="hover:bg-[#c3dcf7]" key={table.tr.indexOf(tr)}>
                        {
                            tr.td.map((td) => (
                                td.isHeader ?
                                <td key={`${table.tr.indexOf(tr)}_${tr.td.indexOf(td)}`} colSpan={td.colspan} rowSpan={td.rowspan}
                                    className={HEADER_CLASS} style={{ width: `${td.width}${td.widthFormat}` }}>
                                    {td.content}
                                </td>
                                :
                                <td key={`${table.tr.indexOf(tr)}_${tr.td.indexOf(td)}`} colSpan={td.colspan} rowSpan={td.rowspan}
                                    className={NO_HEADER_CLASS} style={{ width: `${td.width}${td.widthFormat}` }}>
                                    {td.content}
                                </td>
                            ))
                        }
                    </tr>
                    ))
                }
            </table>
        </div>
    );
}