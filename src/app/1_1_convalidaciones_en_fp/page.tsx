import { PAGE1_1 } from "@/utils/literals";
import Image from "next/image";
import _1_1 from "@/app/img/1_1.jpg";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export default function Page() {
  return (
    <>
      <Titulo>{PAGE1_1.titulo}</Titulo>
      <Nav pos={2}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col items-center">
          <Image src={_1_1} alt="tutor and student" width={400} height={400} className="border border-black" />
          <p className="py-4 text-black text-[9px]">
            {PAGE1_1.imgLink1}
            <a href="https://pixabay.com/es/photos/conferencia-cita-formaci%C3%B3n-1410870/" className="text-blue-500 underline">
              {PAGE1_1.imgLink2}
            </a>
            {PAGE1_1.imgLink3}
            <a href="https://pixabay.com/es/users/claude_star-2277124/" className="text-blue-500 underline">
              {PAGE1_1.imgLink4}
            </a>
            {PAGE1_1.imgLink5}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="text-blue-500 underline">
              {PAGE1_1.imgLink6}
            </a>
          </p>    
        </div>
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify">
            {PAGE1_1.parrafo1}<span className="text-black leading-tight font-bold">{PAGE1_1.parrafoBold1}</span>{PAGE1_1.parrafo2}
          </p>
          <p className="text-black pt-3 px-4 leading-tight text-justify">
            {PAGE1_1.parrafo3}
          </p>
          <p className="text-black pt-3 px-4 leading-tight text-justify">
            {PAGE1_1.parrafo4}<span className="text-black leading-tight font-bold">{PAGE1_1.parrafoBold2}</span>
          </p>
          <p className="text-black pt-3 px-4 leading-tight text-justify">
            {PAGE1_1.parrafo5}
          </p>
          <p className="text-black pt-3 px-4 leading-tight text-justify">
            <span className="text-black leading-tight font-bold">{PAGE1_1.parrafoBold3}</span>
          </p>
          <p className="text-black pt-3 px-4 leading-tight text-justify">
            <span className="text-black leading-tight font-bold">{PAGE1_1.parrafoBold4}</span>
          </p>
        </div>
      </div>
    </>
  );
}
