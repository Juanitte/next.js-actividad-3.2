import { HOME } from "@/utils/literals";
import Image from "next/image";
import tutorAndStudent from "@/app/img/tutor-and-student.png";
import publicDomain from "@/app/img/public-domain.png";
import Titulo from "@/components/titulo";
import TableComponent from "@/components/table-component";
import { Table } from "@/model/Table";
import { Tr } from "@/model/Tr";
import { Td } from "@/model/Td";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Titulo>{HOME.titulo}</Titulo>
      <Nav pos={0}/>
      <div className="flex flex-row pb-2">
        <div className="flex flex-col">
          <p className="text-black px-4 max-w-[66vw] leading-tight text-justify">
            {HOME.p1}
          </p>
          <p className="text-black pt-3 px-4">
            {HOME.p2}
          </p>
        </div>
        <div className="flex flex-col">
          <Image src={tutorAndStudent} alt="tutor and student" width={140} height={140} className="pt-2 pl-4" />
          <div className="flex flex-row justify-between items-center ">
            <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" className="pt-2">
              <Image src={publicDomain} alt="public domain" width={70} height={60} />
            </a>
            <div className="flex flex-row pt-2 pl-1">
              <p className="text-black text-[9px]">
                {HOME.imgLink1}
              </p>
              <a href="https://openclipart.org/detail/194249/tutor-and-student" className="text-blue-500 text-[9px] pl-1 underline">
                {HOME.imgLink2}
              </a>
            </div>
          </div>
        </div>
      </div>
      <TableComponent table={new Table(
        [
          new Tr(
            [
              new Td(`${HOME.elaboradoTitulo}`, 10, "vw", 1, 1, true),
              new Td(`${HOME.elaboradoContenido}`, 50, "vw", 1, 1, false)
            ]
          ),
          new Tr(
            [
              new Td(`${HOME.versionTitulo}`, 10, "vw", 1, 1, true),
              new Td(`${HOME.versionContenido}`, 50, "vw", 1, 1, false)
            ]
          ),
          new Tr(
            [
              new Td(`${HOME.fechaTitulo}`, 10, "vw", 1, 1, true),
              new Td(`${HOME.fechaContenido}`, 50, "vw", 1, 1, false)
            ]
          )
        ]
      )} />
    </>
  );
}
