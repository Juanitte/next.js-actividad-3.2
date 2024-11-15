import { PAGE1_6 } from "@/utils/literals";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_6.titulo}</Titulo>
      <Nav pos={16}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_6.p1}
            <span className="font-bold">
              {PAGE1_6.pBold1}
            </span>
            {PAGE1_6.p2}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_6.p3}
            <span className="font-bold">
              {PAGE1_6.pBold2}
            </span>
            {PAGE1_6.p4}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_6.p5}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_6.p6}
          </p>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_6.p7}
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_6.p8}
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_6.p9}
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_6.p10}
            </p>
          </ItemLista>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="italic">
              {PAGE1_6.pItalic1}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="italic">
              {PAGE1_6.pItalic2}
              <span className="font-bold underline">
                {PAGE1_6.pBoldItalic1}
              </span>
              {PAGE1_6.pItalic3}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="italic">
              {PAGE1_6.pItalic4}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="italic">
              {PAGE1_6.pItalic5}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="italic">
              {PAGE1_6.pItalic6}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="italic">
              {PAGE1_6.pItalic7}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="italic">
              {PAGE1_6.pItalic8}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="italic">
              {PAGE1_6.pItalic9}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
