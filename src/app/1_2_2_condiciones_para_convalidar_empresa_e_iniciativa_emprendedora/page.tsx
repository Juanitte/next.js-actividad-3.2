import { PAGE1_2_2 } from "@/utils/literals";
import Titulo from "@/components/titulo";
import TableComponent from "@/components/table-component";
import { Table } from "@/model/Table";
import { Tr } from "@/model/Tr";
import { Td } from "@/model/Td";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_2_2.titulo}</Titulo>
      <Nav pos={7}/>
      <div className="flex flex-col">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_2_2.p1}
            <span className="font-bold">
              {PAGE1_2_2.pBold1}
            </span>
            {PAGE1_2_2.p2}
          </p>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_2_2.p3}
              <span className="font-bold">
                {PAGE1_2_2.pBold2}
              </span>
              {PAGE1_2_2.p4}
            </p>
          </ItemLista>
        </div>
        <div className="flex flex-col text-sm pt-4">
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_2_2.p5}
              <span className="font-bold">
                {PAGE1_2_2.pBold3}
              </span>
              {PAGE1_2_2.p6}
            </p>
          </ItemLista>
        </div>
        <div className="flex flex-col text-sm py-4">
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              <span className="font-bold">
                {PAGE1_2_2.pBold4}
              </span>
            </p>
          </ItemLista>
        </div>
      </div>
      <div className="text-sm">
        <TableComponent table={new Table(
          [
            new Tr(
              [
                new Td(`${PAGE1_2_2.table1}`, 25, "vw", 1, 1, true),
                new Td(`${PAGE1_2_2.table2}`, 40, "vw", 1, 1, true)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table3}`, 25, "vw", 1, 15, true),
                new Td(`${PAGE1_2_2.table4}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table5}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table6}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table7}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table8}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table9}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table10}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table11}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table12}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table13}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table14}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table15}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table16}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table17}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table18}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table19}`, 25, "vw", 1, 1, true),
                new Td(`${PAGE1_2_2.table20}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table21}`, 25, "vw", 1, 1, true),
                new Td(`${PAGE1_2_2.table22}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_2.table23}`, 25, "vw", 1, 1, true),
                new Td(`${PAGE1_2_2.table24}`, 40, "vw", 1, 1, false)
              ]
            )
          ]
        )} />
      </div>
    </>
  );
}
