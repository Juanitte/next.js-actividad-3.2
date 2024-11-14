import { PAGE1_2_3 } from "@/utils/literals";
import Image from "next/image";


export default function Nota({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#fbfcd7] p-8 rounded-xl border border-[#66521d] w-[98%] my-4">
          <div className="flex flex-row items-center">
            <Image src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/icon_parasabermasfpd.png" alt="note" width={50} height={50} />
            <h1 className="text-3xl text-[#66521d] font-bold pl-6">
              {PAGE1_2_3.pBold1}
            </h1>
          </div>
          {children}
        </div>
    );
}