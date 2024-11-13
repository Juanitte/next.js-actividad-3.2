import { PAGE1_2 } from "@/utils/literals";
import Image from "next/image";
import _1_2 from "@/app/img/1_2.jpg";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_2.titulo}</Titulo>
      <Nav pos={5}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_2.p1}
          </p>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_2.p2}
              <span className="font-bold">
                {PAGE1_2.pBold1}
              </span>
              <a href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274" className="text-blue-500 underline">
                <span className="font-bold">
                  {PAGE1_2.pBold2}
                </span>
                <span className="italic">
                  {PAGE1_2.pItalic1}
                </span>
              </a>
              {PAGE1_2.p3}
              <a href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones/normativa-de-apoyo.html" className="text-blue-500 underline">
                {PAGE1_2.p4}
              </a>
              {PAGE1_2.p5}
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_2.p6}
              <span className="font-bold">
                {PAGE1_2.pBold3}
              </span>
              {PAGE1_2.p7}
            </p>
          </ItemLista>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            {PAGE1_2.p8}
            <span className="font-bold">
              {PAGE1_2.pBold4}
            </span>
            {PAGE1_2.p9}
            <span className="font-bold">
              {PAGE1_2.pBold5}
            </span>
            {PAGE1_2.p10}
            <span className="font-bold">
              {PAGE1_2.pBold6}
            </span>
            {PAGE1_2.p11}
            <span className="font-bold">
              {PAGE1_2.pBold7}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            {PAGE1_2.p12}
          </p>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_2.p13}
              <a href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html" className="text-blue-500 underline">
                {PAGE1_2.p14}
              </a>
              {PAGE1_2.p15}
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_2.p16}
              <a href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html" className="text-blue-500 underline">
                {PAGE1_2.p17}
              </a>
              {PAGE1_2.p18}
            </p>
          </ItemLista>
        </div>
        <div className="flex flex-col items-center pt-6">
          <Image src={_1_2} alt="tutor and student" width={400} height={400} className="border border-black" />
          <p className="py-4 text-black text-[9px]">
            {PAGE1_2.imgLink1}
            <a href="https://pixabay.com/es/photos/conferencia-cita-formaci%C3%B3n-1410870/" className="text-blue-500 underline">
              {PAGE1_2.imgLink2}
            </a>
            {PAGE1_2.imgLink3}
            <a href="https://pixabay.com/es/users/monikap-2515080/" className="text-blue-500 underline">
              {PAGE1_2.imgLink4}
            </a>
            {PAGE1_2.imgLink5}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="text-blue-500 underline">
              {PAGE1_2.imgLink6}
            </a>
          </p>    
        </div>
      </div>
    </>
  );
}
