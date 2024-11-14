import { PAGE1_2_4 } from "@/utils/literals";
import Titulo from "@/components/titulo";
import TableComponent from "@/components/table-component";
import { Table } from "@/model/Table";
import { Tr } from "@/model/Tr";
import { Td } from "@/model/Td";
import Nav from "@/components/nav";
import Nota from "@/components/nota";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_2_4.titulo}</Titulo>
      <Nav pos={9}/>
      <div className="flex flex-col">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_2_4.p1}
          </p>
        </div>
      </div>
      <div className="text-sm flex flex-col items-center">
        <TableComponent table={new Table(
          [
            new Tr(
              [
                new Td(`${PAGE1_2_4.table1}`, 25, "vw", 1, 1, true),
                new Td(`${PAGE1_2_4.table2}`, 40, "vw", 1, 1, true)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_4.table3}`, 25, "vw", 1, 4, true),
                new Td(`${PAGE1_2_4.table4}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_4.table5}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_4.table6}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_4.table7}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_4.table8}`, 25, "vw", 1, 4, true),
                new Td(`${PAGE1_2_4.table9}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_4.table10}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_4.table11}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_4.table12}`, 40, "vw", 1, 1, false)
              ]
            )
          ]
        )} />
        <Nota>
          <p className="text-[#66521d] text-sm pt-4">
            {PAGE1_2_4.p2}
            <span className="font-bold bg-[#ffff00] underline">
              {PAGE1_2_4.pBold1}
            </span>
            {PAGE1_2_4.p3}
          </p>
        </Nota>
      </div>
    </>
  );
}
