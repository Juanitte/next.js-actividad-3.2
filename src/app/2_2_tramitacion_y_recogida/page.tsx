import { PAGE2_2 } from "@/utils/literals";
import Image from "next/image";
import _2_2 from "@/app/img/2_2.png";
import ccbync from "@/app/img/ccbync.webp";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE2_2.titulo}</Titulo>
      <Nav pos={23}/>
      <div className="flex flex-row pb-2 text-sm">
        <div className="flex flex-col w-[85%]">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE2_2.p1}
          </p>
        </div>
        <div className="flex flex-col items-center w-[15%]">
          <Image src={_2_2} alt="tutor and student" width={200} height={200} />
          <div className="flex flex-row">
            <a href="https://creativecommons.org/licenses/by-nc/3.0/deed.es">
              <Image src={ccbync} alt="ccbync" width={90} height={50} />
            </a>
            <p className="py-4 text-black text-[9px]">
              {PAGE2_2.imgLink1}
              <a href="https://openclipart.org/detail/191069/happy-girl" className="text-blue-500 underline">
                {PAGE2_2.imgLink2}
              </a>
            </p>
          </div>  
        </div>
      </div>
      <div className="flex flex-col p-6 bg-[#c3dcf7] w-[75vw] rounded-xl justify-self-center text-sm">
          <p className="text-justify text-[#153152] leading-tight pb-4">
            {PAGE2_2.p2}
          </p>
          <ItemLista interior={false}>
            <p className="text-justify text-[#153152] leading-tight pb-4">
              {PAGE2_2.p3}
              <a href="https://www.juntadeandalucia.es/boja/1996/67/50" className="text-blue-500 underline">
                {PAGE2_2.p4}
              </a>
              {PAGE2_2.p5}
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-justify text-[#153152] leading-tight pb-4">
              {PAGE2_2.p6}
              <a href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-342" className="text-blue-500 underline">
                {PAGE2_2.p7}
              </a>
            </p>
          </ItemLista>
        </div>
    </>
  );
}
