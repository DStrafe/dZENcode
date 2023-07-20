import React from "react";
import Link from "next/link";

interface props{
    href: string,
    className?: string,
    children?: any,
}
export default function ({href, className, children}:props){
    return(
        <>
            <Link href={href} className={'text-decoration-none '+className}>
                {children}
            </Link>
        </>
    )
}