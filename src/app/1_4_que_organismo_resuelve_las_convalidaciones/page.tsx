import { PAGE1_4 } from "@/utils/literals";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_4.titulo}</Titulo>
      <Nav pos={14}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_4.p1}
            <span className="font-bold">
              {PAGE1_4.pBold1}
              <a href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274" className="text-blue-500 underline">
                {PAGE1_4.pBold2}
              </a>
            </span>
            {PAGE1_4.p2}
            <span className="font-bold">
              {PAGE1_4.pBold3}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify">
            {PAGE1_4.p3}
            <span className="font-bold">
              {PAGE1_4.pBold4}
            </span>
            {PAGE1_4.p4}
            <span className="font-bold">
              {PAGE1_4.pBold5}
            </span>
            {PAGE1_4.p5}
            <span className="font-bold underline">
              {PAGE1_4.pBold6}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
