'use client'
import Link from "next/link";
import { MENU } from '@/utils/literals';
import { slug } from '@/utils/utils';
import { Menu, X } from 'lucide-react';
import { useState } from "react";

const classLink = "block bg-blue-100 hover:bg-[#C3DCF7] text-[#044085] rounded-xl mb-1 p-2"

export default function MenuPrincipal() {

    const [open, setOpen] = useState(true);

    return (
        <>
            {open
                ? <X onClick={() => setOpen(false)} className="fixed top-3 right-10 size-10 bg-blue-100 p-2 rounded-md text-gray-600" />
                : <Menu onClick={() => setOpen(true)} className="fixed top-3 right-10 size-10 bg-blue-100 p-2 rounded-md text-gray-600" />
            }
            {open &&
                <aside className="w-[310px] shrink-0 overflow-y-auto bg-[rgba(4,64,133,0.5)] p-3 rounded-lg mx-2 my-2">
                    <Link className={classLink} href={'/'}>{MENU[0]} </Link>

                    <details>
                        <summary className=" bg-blue-100 hover:bg-[#C3DCF7] text-[#044085] rounded-xl mb-1 p-2">
                            <Link href={slug(MENU[1])}>{MENU[1]} </Link>
                        </summary>

                        <details>
                            <summary className="ml-2 bg-blue-100 hover:bg-[#C3DCF7] text-[#044085] rounded-xl mb-1 p-2">
                                <Link href={slug(MENU[2])}>{MENU[2]} </Link>
                            </summary>
                            <Link className={`${classLink} ml-4`} href={slug(MENU[3])}>{MENU[3]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(MENU[4])}>{MENU[4]} </Link>
                        </details>

                        <details>
                            <summary className="ml-2 bg-blue-100 hover:bg-[#C3DCF7] text-[#044085] rounded-xl mb-1 p-2">
                                <Link href={slug(MENU[5])}>{MENU[5]} </Link>
                            </summary>
                            <Link className={`${classLink} ml-4`} href={slug(MENU[6])}>{MENU[6]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(MENU[7])}>{MENU[7]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(MENU[8])}>{MENU[8]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(MENU[9])}>{MENU[9]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(MENU[10])}>{MENU[10]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(MENU[11])}>{MENU[11]} </Link>
                            <Link className={`${classLink} ml-4`} href={slug(MENU[12])}>{MENU[12]} </Link>
                        </details>

                        <Link className={`${classLink} ml-2`} href={slug(MENU[13])}>{MENU[13]} </Link>
                        <Link className={`${classLink} ml-2`} href={slug(MENU[14])}>{MENU[14]} </Link>
                        <Link className={`${classLink} ml-2`} href={slug(MENU[15])}>{MENU[15]} </Link>
                        <Link className={`${classLink} ml-2`} href={slug(MENU[16])}>{MENU[16]} </Link>
                        <Link className={`${classLink} ml-2`} href={slug(MENU[17])}>{MENU[17]} </Link>
                        <Link className={`${classLink} ml-2`} href={slug(MENU[18])}>{MENU[18]} </Link>
                        <Link className={`${classLink} ml-2`} href={slug(MENU[19])}>{MENU[19]} </Link>
                        <Link className={`${classLink} ml-2`} href={slug(MENU[20])}>{MENU[20]} </Link>
                    </details>

                    <details>
                        <summary className=" bg-blue-100 hover:bg-[#C3DCF7] text-[#044085] rounded-xl mb-1 p-2">
                            <Link href={slug(MENU[21])}>{MENU[21]} </Link>
                        </summary>
                        <Link className={`${classLink} ml-2`} href={slug(MENU[22])}>{MENU[22]} </Link>
                        <Link className={`${classLink} ml-2`} href={slug(MENU[23])}>{MENU[23]} </Link>
                    </details>

                    <Link className={classLink} href={slug(MENU[24])}>{MENU[24]} </Link>
                </aside>
            }

        </>
    );
}