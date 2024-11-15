import { PAGE1_7 } from "@/utils/literals";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_7.titulo}</Titulo>
      <Nav pos={17}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_7.p1}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_7.p2}
          </p>
          <p className="text-black px-4 leading-tight text-justify">
            {PAGE1_7.p3}
            <a href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html" className="text-blue-500 underline">
              {PAGE1_7.p4}
            </a>
            {PAGE1_7.p5}
          </p>
        </div>
      </div>
    </>
  );
}
