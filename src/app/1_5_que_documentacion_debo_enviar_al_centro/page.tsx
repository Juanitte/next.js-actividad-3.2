import { PAGE1_5 } from "@/utils/literals";
import Image from "next/image";
import _1_5 from "@/app/img/1_5.png";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_5.titulo}</Titulo>
      <Nav pos={15}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_5.p1}
            <span className="font-bold">
              {PAGE1_5.pBold1}
            </span>
          </p>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              <span className="font-bold">
                {PAGE1_5.pBold2}
              </span>
              {PAGE1_5.p2}
              <a href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" className="text-blue-500 underline">
                {PAGE1_5.pBold3}
              </a>
              {PAGE1_5.p3}
              <a href="https://www.juntadeandalucia.es/educacion/secretariavirtual/consultas/#FORM_PROF" className="text-blue-500 underline">
                {PAGE1_5.pBold4}
              </a>
              {PAGE1_5.p4}
              <span className="font-bold">
                {PAGE1_5.pBold5}
              </span>
            </p>
          </ItemLista>
          <div className="p-2"></div>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              <span className="font-bold">
                {PAGE1_5.pBold6}
              </span>
              {PAGE1_5.p5}
            </p>
          </ItemLista>
          <div className="p-2"></div>
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_5.p6}
              <span className="font-bold">
                {PAGE1_5.pBold7}
              </span>
              {PAGE1_5.p7}
            </p>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_5.pBold8}
                </span>
                {PAGE1_5.p8}
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_5.pBold9}
                </span>
                {PAGE1_5.p9}
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_5.pBold10}
                  <span className="underline">
                    {PAGE1_5.pBold11}
                  </span>
                </span>
                <span className="underline">
                  {PAGE1_5.pBold12}
                </span>
                {PAGE1_5.p10}
                <span className="font-bold">
                  {PAGE1_5.pBold13}
                </span>
              </p>
            </ItemLista>
          </ItemLista>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="font-bold">
              {PAGE1_5.pBold14}
              <span className="underline">
                {PAGE1_5.pBold15}
              </span>
              {PAGE1_5.pBold16}
              <span className="underline">
                {PAGE1_5.pBold17}
              </span>
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="font-bold underline">
              {PAGE1_5.pBold18}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pt-4">
            <span className="font-bold">
              {PAGE1_5.pBold19}
            </span>
            {PAGE1_5.p11}
            <span className="font-bold">
              {PAGE1_5.pBold20}
            </span>
            {PAGE1_5.p12}
            <span className="font-bold">
              {PAGE1_5.pBold21}
            </span>
          </p>
          <div className="flex flex-col items-center pt-6">
            <Image src={_1_5} alt="tutor and student" width={300} height={300} className="border border-black" />
            <p className="py-4 text-black text-[9px]">
              {PAGE1_5.imgLink1}
              <a href="https://pixabay.com/es/photos/conferencia-cita-formaci%C3%B3n-1410870/" className="text-blue-500 underline">
                {PAGE1_5.imgLink2}
              </a>
              {PAGE1_5.imgLink3}
              <a href="https://pixabay.com/es/users/openclipart-vectors-30363/" className="text-blue-500 underline">
                {PAGE1_5.imgLink4}
              </a>
              {PAGE1_5.imgLink5}
              <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="text-blue-500 underline">
                {PAGE1_5.imgLink6}
              </a>
            </p>    
          </div>
        </div>
      </div>
    </>
  );
}
