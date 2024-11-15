import { PAGE1_8 } from "@/utils/literals";
import Image from "next/image";
import _1_8 from "@/app/img/1_8.jpg";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_8.titulo}</Titulo>
      <Nav pos={18}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify pb-4">
              {PAGE1_8.p1}
              <span className="font-bold">
                {PAGE1_8.pBold1}
              </span>
              {PAGE1_8.p2}
            </p>
          </ItemLista>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify pb-4">
              {PAGE1_8.p3}
              <span className="font-bold">
                {PAGE1_8.pBold2}
              </span>
              {PAGE1_8.p4}
              <span className="font-bold">
                {PAGE1_8.pBold3}
              </span>
              {PAGE1_8.p5}
              <span className="font-bold">
                {PAGE1_8.pBold4}
              </span>
            </p>
          </ItemLista>
          <p className="text-black px-4 leading-tight text-justify pb-4">
              <span className="font-bold">
                {PAGE1_8.pBold5}
              </span>
            </p>
          <div className="flex flex-col items-center pt-6">
            <Image src={_1_8} alt="tutor and student" width={300} height={300} className="border border-black" />
            <p className="py-4 text-black text-[9px]">
              {PAGE1_8.imgLink1}
              <a href="https://pixabay.com/es/photos/conferencia-cita-formaci%C3%B3n-1410870/" className="text-blue-500 underline">
                {PAGE1_8.imgLink2}
              </a>
              {PAGE1_8.imgLink3}
              <a href="https://pixabay.com/es/users/webandi-1460261/" className="text-blue-500 underline">
                {PAGE1_8.imgLink4}
              </a>
              {PAGE1_8.imgLink5}
              <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="text-blue-500 underline">
                {PAGE1_8.imgLink6}
              </a>
            </p>    
          </div>
        </div>
      </div>
    </>
  );
}
