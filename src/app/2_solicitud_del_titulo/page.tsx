import { PAGE2 } from "@/utils/literals";
import Image from "next/image";
import _2 from "@/app/img/2.png";
import publicDomain from "@/app/img/public-domain.png";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE2.titulo}</Titulo>
      <Nav pos={21}/>
      <div className="flex flex-col p-6 bg-[#c3dcf7] w-[75vw] rounded-xl justify-self-center text-sm">
        <p className="text-justify text-[#153152] leading-tight">
          {PAGE2.p1}
        </p>
        <Image src={_2} alt="balanza" width={300} height={300} className="self-center" />
        <div className="flex flex-row justify-center">
            <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="pt-2">
              <Image src={publicDomain} alt="public domain" width={70} height={60} />
            </a>
            <div className="flex flex-row pt-2 pl-1">
              <a href="https://pixabay.com/es/vectors/certificado-otorgar-diploma-grado-575526/" className="text-blue-500 text-[9px] pl-1 underline">
                {PAGE2.p2}
              </a>
            </div>
        </div>
      </div>
    </>
  );
}
