'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import logo from '@/../public/t14inc-logo.svg'
import { Button } from '@/components/ui/button';
import { Menu, Play } from 'lucide-react';



function NavigationBar() {

    const [ openMenu, setOpenMenu ] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null)

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(false);
            }
        };

            document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='h-[68px] p-2 md:p-4 text-main-gray text-[16px] leading-[100%] tracking-[-0.14px] font-extrabold '>

            <div className='flex items-center justify-between relative content-wrapper'>

                <Link href={'#home'}>
                    <Image src={logo} alt='cuesoft logo' width={200} />
                </Link>

                <ul className='hidden md:flex items-center gap-5'>
                    <Link href={'#services'}>
                        <li className='cursor-pointer p-2 border-b-2 border-transparent hover:border-[#FFA63A]'>Services</li>
                    </Link>
                    <Link href={'#contact'}>
                        <li className='cursor-pointer'>Contact</li>
                    </Link>
                    <Link href={'#about'}>
                        <li className='cursor-pointer p-2 border-b-2 border-transparent hover:border-[#FFA63A]'>About</li>
                    </Link>
                </ul>

                <Link href={'mailto:info@two14inc.com'} className='hidden md:block'>
                    <Button variant={'default'} className='font-medium leading-[19px] tracking-[-0.14px] text-xs shadow-c-secondary cursor-pointer'>Get Started <Play /></Button>
                </Link>

                <Menu className='block md:hidden' onClick={() => setOpenMenu(!openMenu)}/>

                {
                    openMenu && (
                        <div ref={menuRef} className='flex flex-col items-center gap-8 p-6 bg-white rounded-lg shadow-lg absolute w-full text-center -bottom-50 text-black font-medium' onClick={() => setOpenMenu(false)}>
                            <ul className='flex flex-col items-center gap-6'>
                                <Link href={'#about'} className='w-full'>
                                    <li className='cursor-pointer'>About</li>
                                </Link>
                                <Link href={'#services'} className='w-full'>
                                    <li className='cursor-pointer'>Services</li>
                                </Link>
                                <Link href={'#contact'} className='w-full'>
                                    <li className='cursor-pointer'>Contact</li>
                                </Link>
                            </ul>

                            <Link href={'mailto:info@two14inc.com'} className='w-full'>
                                <Button variant={'default'} className='font-medium leading-[19px] tracking-[-0.14px] text-xs shadow-c-secondary w-full'>Get Started</Button>
                            </Link>
                        </div>
                        )
                }
            </div>

          
        </nav>
    )
}

export default NavigationBar;