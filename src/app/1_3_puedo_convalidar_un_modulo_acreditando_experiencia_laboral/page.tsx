import { PAGE1_3 } from "@/utils/literals";
import Image from "next/image";
import _1_3 from "@/app/img/1_3.jpg";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_3.titulo}</Titulo>
      <Nav pos={13}/>
      <div className="flex flex-row pb-2">
        <div className="flex flex-col w-[70%]">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            <span className="font-bold">
              {PAGE1_3.pBold1}
            </span>
            <span className="italic">
              {PAGE1_3.pItalic1}
            </span>
            <span className="font-bold">
              {PAGE1_3.pBold2}
            </span>
            {PAGE1_3.p1}
            <span className="font-bold">
              {PAGE1_3.pBold3}
            </span>
          </p>
          <p className="text-black px-4 pb-4">
            {PAGE1_3.p2}
            <span className="font-bold">
              {PAGE1_3.pBold4}
            </span>
            {PAGE1_3.p3}
            <a href="https://todofp.es/acreditacion-de-competencias.html" className="text-blue-500 font-bold underline">
              {PAGE1_3.pBold5}
            </a>
            {PAGE1_3.p4}
            <span className="underline">
              {PAGE1_3.pUnderline1}
            </span>
            {PAGE1_3.p5}
            <span className="font-bold">
              {PAGE1_3.pBold6}
            </span>
            {PAGE1_3.p6}
          </p>
          <p className="text-black px-4">
            {PAGE1_3.p7}
            <span className="font-bold">
              {PAGE1_3.pBold7}
            </span>
            {PAGE1_3.p8}
            <span className="font-bold">
              {PAGE1_3.pBold8}
            </span>
            {PAGE1_3.p9}
            <span className="font-bold">
              {PAGE1_3.pBold9}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center w-[30%]">
          <Image src={_1_3} alt="tutor and student" width={400} height={400} className="border border-black" />
          <p className="py-4 text-black text-[9px]">
            {PAGE1_3.imgLink1}
            <a href="https://pixabay.com/es/photos/conferencia-cita-formaci%C3%B3n-1410870/" className="text-blue-500 underline">
              {PAGE1_3.imgLink2}
            </a>
            {PAGE1_3.imgLink3}
            <a href="https://pixabay.com/es/users/voltamax-60363/" className="text-blue-500 underline">
              {PAGE1_3.imgLink4}
            </a>
            {PAGE1_3.imgLink5}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="text-blue-500 underline">
              {PAGE1_3.imgLink6}
            </a>
          </p>    
        </div>
      </div>
    </>
  );
}
