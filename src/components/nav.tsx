import Link from "next/link";
import { MENU } from '@/utils/literals';
import { slug } from '@/utils/utils'
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Nav({ pos }: { pos: number }) {
    return (
        <div className="mt-4 mb-8 text-right">            
            {pos > 0 &&
                <Link className="px-6 py-3 text-blue-800 bg-blue-100 hover:bg-[#C3DCF7] rounded-l-full" href={slug(MENU[pos - 1])}>  <ArrowLeft className="inline size-4"/> Anterior </Link>
            }
            {pos < MENU.length - 1 &&
                <Link className="ml-1 px-6 py-3 text-blue-800 bg-blue-100 hover:bg-[#C3DCF7] rounded-r-full" href={slug(MENU[pos + 1])}> Siguiente <ArrowRight className="inline size-4"/> </Link>
            }
        </div>
    );
}