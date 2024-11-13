import { PAGE1_2_1 } from "@/utils/literals";
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
      <Titulo>{PAGE1_2_1.titulo}</Titulo>
      <Nav pos={6}/>
      <div className="flex flex-col">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_2_1.p1}
          </p>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_2_1.p2}
              <span className="font-bold">
                {PAGE1_2_1.pBold1}
              </span>
            </p>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_2_1.pBold2}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_2_1.pBold3}
                </span>
                {PAGE1_2_1.p3}
                <span className="font-bold">
                  {PAGE1_2_1.pBold4}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_2_1.pBold5}
                </span>
              </p>
            </ItemLista>
          </ItemLista>
        </div>
        <div className="flex flex-col text-sm pt-4">
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_2_1.p4}
            </p>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_2_1.pBold6}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_2_1.pBold7}
                </span>
              </p>
            </ItemLista>
          </ItemLista>
        </div>
        <div className="flex flex-col text-sm py-4">
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_2_1.p5}
            </p>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_2_1.pBold8}
                </span>
              </p>
            </ItemLista>
          </ItemLista>
        </div>
      </div>
      <div className="text-sm">
        <TableComponent table={new Table(
          [
            new Tr(
              [
                new Td(`${PAGE1_2_1.table1}`, 25, "vw", 1, 1, true),
                new Td(`${PAGE1_2_1.table2}`, 40, "vw", 1, 1, true)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table3}`, 25, "vw", 1, 4, true),
                new Td(`${PAGE1_2_1.table4}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table5}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table6}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table7}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table8}`, 25, "vw", 1, 1, true),
                new Td(`${PAGE1_2_1.table9}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table10}`, 25, "vw", 1, 5, true),
                new Td(`${PAGE1_2_1.table11}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table12}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table13}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table14}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table15}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table16}`, 25, "vw", 1, 5, true),
                new Td(`${PAGE1_2_1.table17}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table18}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table19}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table20}`, 40, "vw", 1, 1, false)
              ]
            ),
            new Tr(
              [
                new Td(`${PAGE1_2_1.table21}`, 40, "vw", 1, 1, false)
              ]
            )
          ]
        )} />
      </div>
    </>
  );
}
