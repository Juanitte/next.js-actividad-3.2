import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import { PAGE1_2_6 } from "@/utils/literals";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_2_6.titulo}</Titulo>
      <Nav pos={11}/>
      <div className="flex flex-col">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_2_6.p1}
          </p>
        </div>
      </div>
    </>
  );
}
