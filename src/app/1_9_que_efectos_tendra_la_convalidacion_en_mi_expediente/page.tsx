import { PAGE1_9 } from "@/utils/literals";
import Image from "next/image";
import _1_9 from "@/app/img/1_9.png";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_9.titulo}</Titulo>
      <Nav pos={19}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_9.p1}
          </p>
          <p className="text-black px-4 leading-tight text-justify">
            <span className="font-bold">
              {PAGE1_9.pBold1}
            </span>
            {PAGE1_9.p2}
          </p>
          <div className="flex flex-col items-center pt-6">
            <Image src={_1_9} alt="tutor and student" width={300} height={300} />
            <p className="py-4 text-black text-[9px]">
              {PAGE1_9.imgLink1}
              <a href="https://pixabay.com/es/photos/conferencia-cita-formaci%C3%B3n-1410870/" className="text-blue-500 underline">
                {PAGE1_9.imgLink2}
              </a>
              {PAGE1_9.imgLink3}
              <a href="https://pixabay.com/es/users/openclipart-vectors-30363/" className="text-blue-500 underline">
                {PAGE1_9.imgLink4}
              </a>
              {PAGE1_9.imgLink5}
              <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="text-blue-500 underline">
                {PAGE1_9.imgLink6}
              </a>
            </p>    
          </div>
        </div>
      </div>
    </>
  );
}
