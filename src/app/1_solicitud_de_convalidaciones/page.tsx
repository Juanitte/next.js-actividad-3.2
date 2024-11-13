import { PAGE1 } from "@/utils/literals";
import Image from "next/image";
import publicDomain from "@/app/img/public-domain.png";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import balanza from "@/app/img/balanza.png";

export default function Page() {
  return (
    <>
      <Titulo>{PAGE1.titulo}</Titulo>
      <Nav pos={1}/>
      <div className="flex flex-col p-6 bg-[#c3dcf7] w-[75vw] rounded-xl justify-self-center">
        <p className="text-justify text-[#153152] leading-tight">
          {PAGE1.parrafo}
        </p>
        <Image src={balanza} alt="balanza" width={200} height={200} className="self-center" />
        <div className="flex flex-row justify-center">
            <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="pt-2">
              <Image src={publicDomain} alt="public domain" width={70} height={60} />
            </a>
            <div className="flex flex-row pt-2 pl-1">
              <a href="https://pixabay.com/es/vectors/escamas-pesos-medidas-oro-308063/" className="text-blue-500 text-[9px] pl-1 underline">
                {PAGE1.imgLink}
              </a>
            </div>
        </div>
      </div>
    </>
  );
}
