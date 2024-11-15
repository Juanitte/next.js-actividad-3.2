import { PAGE1_10 } from "@/utils/literals";
import Image from "next/image";
import _1_10 from "@/app/img/1_10.png";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_10.titulo}</Titulo>
      <Nav pos={20}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_10.p1}
          </p>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_10.p2}
              <a href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" className="text-blue-500 underline font-bold">
                {PAGE1_10.pBold1}
              </a>
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_10.p3}
              <a href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html" className="text-blue-500 underline font-bold">
                {PAGE1_10.pBold2}
              </a>
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              <a href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274" className="text-blue-500 underline font-bold">
                {PAGE1_10.pBold3}
              </a>
              {PAGE1_10.p4}
            </p>
          </ItemLista>
          <div className="flex flex-col items-center pt-4">
            <Image src={_1_10} alt="tutor and student" width={300} height={300} className="border border-black" />
            <p className="py-4 text-black text-[9px]">
              {PAGE1_10.imgLink1}
              <a href="https://pixabay.com/es/photos/conferencia-cita-formaci%C3%B3n-1410870/" className="text-blue-500 underline">
                {PAGE1_10.imgLink2}
              </a>
              {PAGE1_10.imgLink3}
              <a href="https://pixabay.com/es/users/clker-free-vector-images-3736/" className="text-blue-500 underline">
                {PAGE1_10.imgLink4}
              </a>
              {PAGE1_10.imgLink5}
              <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="text-blue-500 underline">
                {PAGE1_10.imgLink6}
              </a>
            </p>    
          </div>
        </div>
      </div>
    </>
  );
}
