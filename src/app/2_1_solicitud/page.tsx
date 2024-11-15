import { PAGE2_1 } from "@/utils/literals";
import Image from "next/image";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE2_1.titulo}</Titulo>
      <Nav pos={22}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE2_1.p1}
            <span className="font-bold">
              {PAGE2_1.pBold1}
            </span>
            {PAGE2_1.p2}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE2_1.p3}
            <a href="https://www.juntadeandalucia.es/economiayhacienda/apl/surweb/modelos/modelo046/046.jsp" className="text-blue-500 underline">
              {PAGE2_1.p4}
            </a>
            {PAGE2_1.p5}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE2_1.p6}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE2_1.p7}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE2_1.p8}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE2_1.p9}
          </p>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              <span className="font-bold">
                {PAGE2_1.pBold2}
              </span>
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify flex flex-row gap-2">
              <span className="font-bold">
                {PAGE2_1.pBold3}
              </span>
              <a className="flex flex-row gap-2 text-blue-500 underline" href="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/impreso_solicitud_titulo.pdf">
                <Image src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/pdf.png" alt="pdf" width={16} height={16} />
                {PAGE2_1.p10}
              </a>
              <span className="text-[9px]">
                {PAGE2_1.p11}
              </span>
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify pb-8">
              <span className="font-bold">
                {PAGE2_1.pBold4}
              </span>
              {PAGE2_1.p12}
              <span className="font-bold">
                {PAGE2_1.pBold5}
              </span>
              {PAGE2_1.p13}
              <span className="font-bold">
                {PAGE2_1.pBold6}
              </span>
              {PAGE2_1.p14}
            </p>
          </ItemLista>
          <div className="flex flex-col p-6 bg-[#c3dcf7] w-[75vw] rounded-xl justify-self-center text-sm">
            <p className="text-justify text-[#153152] leading-tight pb-4">
              {PAGE2_1.p15}
            </p>
            <p className="text-justify text-[#153152] leading-tight">
              {PAGE2_1.p16}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
