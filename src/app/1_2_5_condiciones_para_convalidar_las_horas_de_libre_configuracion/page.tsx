import { PAGE1_2_5 } from "@/utils/literals";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Titulo>{PAGE1_2_5.titulo}</Titulo>
      <Nav pos={10}/>
      <div className="flex flex-col">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {PAGE1_2_5.p1}
            <span className="font-bold">
              {PAGE1_2_5.pBold1}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify">
            {PAGE1_2_5.p2}
          </p>
        </div>
      </div>
    </>
  );
}
