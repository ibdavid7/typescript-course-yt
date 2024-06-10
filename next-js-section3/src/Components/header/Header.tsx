import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoImage from '@/../public/images/logo.png'
import cl from './header.module.css'
import HeaderBackground from './HeaderBackground'
import NavLink from './NavLink'

interface LinkItem {
    name: string,
    link: string
}

const headerItems: LinkItem[] = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Browse Meals',
        link: '/meals'
    },
    {
        name: 'Foodie Community',
        link: '/community'
    }
]

const Header = () => {
    return (
        <>
            <HeaderBackground />
            <header className={cl.header}>
                {/* Logo */}
                <Link href='/' className={cl.logo}>
                    <Image src={logoImage.src} alt={'logo'} width={40} height={40} priority />
                    <span>
                        Next Level Food
                    </span>
                </Link>


                <nav className={cl.nav}>
                    <ul>
                        {headerItems.map((item, index) => (
                            <li key={index}>
                                <NavLink key={index} href={item.link}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header