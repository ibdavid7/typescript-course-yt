'use client'
import Link from 'next/link'
import React from 'react'
import classes from './navLink.module.css'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
    href: string,
    children: React.ReactNode,
}

const NavLink = ({ href, children }: NavLinkProps) => {

    const path = usePathname();

    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>{children}</Link>
    )
}

export default NavLink