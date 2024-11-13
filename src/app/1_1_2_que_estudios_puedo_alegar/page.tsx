import { PAGE1_1_2 } from "@/utils/literals";
import Image from "next/image";
import _1_1_2 from "@/app/img/1_1_2.jpg";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_1_2.titulo}</Titulo>
      <Nav pos={4}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_1_2.parrafo1}
              <span className="font-bold">
                {PAGE1_1_2.parrafoBold1}
              </span>
              {PAGE1_1_2.parrafo2}
              <span className="font-bold">
                {PAGE1_1_2.parrafoBold2}
              </span>
              {PAGE1_1_2.parrafo3}
            </p>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold3}
                </span>
                {PAGE1_1_2.parrafo4}
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold4}
                </span>
                {PAGE1_1_2.parrafo5}
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                {PAGE1_1_2.parrafo6}
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold5}
                </span>
                {PAGE1_1_2.parrafo7}
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                {PAGE1_1_2.parrafo8}
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold6}
                </span>
                {PAGE1_1_2.parrafo9}
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold7}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                {PAGE1_1_2.parrafo10}
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                {PAGE1_1_2.parrafo11}
              </p>
            </ItemLista>
          </ItemLista>
        </div>
        <div className="flex flex-col text-sm pt-4">
        <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_1_2.parrafo12}
            </p>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold8}
                </span>
                {PAGE1_1_2.parrafo13}
                <span className="italic">
                  {PAGE1_1_2.parrafoItalic1}
                </span>
                {PAGE1_1_2.parrafo14}
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold9}
                </span>
                {PAGE1_1_2.parrafo15}
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold10}
                </span>
                {PAGE1_1_2.parrafo16}
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold11}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold12}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold13}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold14}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold15}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold16}
                </span>
              </p>
            </ItemLista>
            <ItemLista interior={true}>
              <p className="text-black px-4 leading-tight text-justify">
                <span className="font-bold">
                  {PAGE1_1_2.parrafoBold17}
                </span>
              </p>
            </ItemLista>
          </ItemLista>
        </div>
        <div className="flex flex-col text-sm pt-4">
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_1_2.parrafo17}
              <span className="font-bold">
                {PAGE1_1_2.parrafoBold18}
              </span>
              {PAGE1_1_2.parrafo18}
              <span className="font-bold">
                {PAGE1_1_2.parrafoBold19}
              </span>
              {PAGE1_1_2.parrafo19}
            </p>
          </ItemLista>
        </div>
        <div className="flex flex-col text-sm pt-4">
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_1_2.parrafo20}
              <span className="font-bold">
                {PAGE1_1_2.parrafoBold20}
              </span>
              <a href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/quiero-formarme/posibilidades-tras-formarme/equivalencias/tabla-equivalencias" className="font-bold text-blue-500 underline">
                {PAGE1_1_2.parrafoBold21}
              </a>
              {PAGE1_1_2.parrafo21}
              <span className="font-bold">
                {PAGE1_1_2.parrafoBold22}
              </span>
              {PAGE1_1_2.parrafo22}
            </p>
          </ItemLista>
        </div>
        <div className="flex flex-col text-sm pt-4">
          <ItemLista interior={false}>
            <p className="text-black px-4 leading-tight text-justify">
              {PAGE1_1_2.parrafo23}
            </p>
          </ItemLista>
        </div>
        <div className="flex flex-col items-center pt-6">
          <Image src={_1_1_2} alt="tutor and student" width={400} height={400} className="border border-black" />
          <p className="py-4 text-black text-[9px]">
            {PAGE1_1_2.imgLink1}
            <a href="https://pixabay.com/es/photos/conferencia-cita-formaci%C3%B3n-1410870/" className="text-blue-500 underline">
              {PAGE1_1_2.imgLink2}
            </a>
            {PAGE1_1_2.imgLink3}
            <a href="https://pixabay.com/es/users/escolaespai-305013/" className="text-blue-500 underline">
              {PAGE1_1_2.imgLink4}
            </a>
            {PAGE1_1_2.imgLink5}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="text-blue-500 underline">
              {PAGE1_1_2.imgLink6}
            </a>
          </p>    
        </div>
      </div>
    </>
  );
}
