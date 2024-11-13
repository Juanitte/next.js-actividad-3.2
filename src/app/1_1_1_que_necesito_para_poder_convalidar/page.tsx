import { PAGE1_1_1 } from "@/utils/literals";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_1_1.titulo}</Titulo>
      <Nav pos={3}/>
      <div className="flex flex-col p-6 bg-[#c3dcf7] w-[75vw] rounded-xl justify-self-center text-sm">
        <p className="text-justify text-[#153152] leading-tight pb-4">
          {PAGE1_1_1.parrafo1}
        </p>
        <ItemLista interior={false}>
          <p className="text-justify text-[#153152] leading-tight">
            {PAGE1_1_1.parrafo2}<span className="font-bold">{PAGE1_1_1.parrafoBold1}</span>{PAGE1_1_1.parrafo3}
          </p>
        </ItemLista>
        <p className="text-justify text-[#153152] leading-tight pt-4">
          {PAGE1_1_1.parrafo4}<span className="font-bold">{PAGE1_1_1.parrafoBold2}</span>{PAGE1_1_1.parrafo5}
        </p>
      </div>
    </>
  );
}
