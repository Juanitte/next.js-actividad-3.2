import { PAGE1_2_7 } from "@/utils/literals";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_2_7.titulo}</Titulo>
      <Nav pos={12}/>
      <div className="flex flex-col">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_2_7.p1}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_2_7.p2}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_2_7.p3}
            <span className="font-bold">
              {PAGE1_2_7.pBold1}
            </span>
            {PAGE1_2_7.p4}
          </p>
          <ItemLista interior={false}>
          <p className="text-justify text-black leading-tight">
            <span className="font-bold">
              {PAGE1_2_7.pBold2}
            </span>
            {PAGE1_2_7.p5}
            <a href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" className="text-blue-500 underline">
              {PAGE1_2_7.p6}
            </a>
            {PAGE1_2_7.p7}
          </p>
          </ItemLista>
          <ItemLista interior={false}>
          <p className="text-justify text-black leading-tight pb-8">
            <span className="font-bold">
              {PAGE1_2_7.pBold3}
            </span>
            {PAGE1_2_7.p8}
          </p>
          </ItemLista>
          <div className="flex flex-col p-6 bg-[#c3dcf7] w-[95%] rounded-xl justify-self-center text-sm">
            <p className="text-justify text-[#153152] leading-tight pb-4 font-bold">
              {PAGE1_2_7.pBold4}
            </p>
            <ItemLista interior={false}>
              <p className="text-justify text-[#153152] leading-tight">
                {PAGE1_2_7.p9}
                <a href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" className="text-blue-500 underline">
                  {PAGE1_2_7.p10}
                </a>
              </p>
            </ItemLista>
          </div>
        </div>
      </div>
    </>
  );
}
