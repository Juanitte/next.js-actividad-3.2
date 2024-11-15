import { VERSION_RECORD } from "@/utils/literals";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Titulo>{VERSION_RECORD.titulo}</Titulo>
      <Nav pos={24}/>
      <div className="flex flex-col pb-2">
        <div className="flex flex-col text-sm">
          <p className="text-black px-4 leading-tight text-justify pb-4">
            <span className="font-bold">
              {VERSION_RECORD.pBold1}
            </span>
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {VERSION_RECORD.p1}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {VERSION_RECORD.p2}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {VERSION_RECORD.p3}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {VERSION_RECORD.p4}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {VERSION_RECORD.p5}
          </p>
          <p className="text-black px-4 leading-tight text-justify pb-4">
            {VERSION_RECORD.p6}
          </p>
        </div>
      </div>
    </>
  );
}
