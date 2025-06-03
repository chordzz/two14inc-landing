import Image from "next/image";
import logo from '@/../public/t14inc-logo.svg'
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import igLogo from '@/../public/ig-logo.svg';
import xLogo from '@/../public/x-logo.svg';
import lnLogo from '@/../public/ln-logo.svg';


function Footer() {
    return (
        <footer className="bg-black text-white py-14 mt-32">
            <div className="content-wrapper flex flex-col lg:flex-row gap-y-8 justify-between">
                <Link href={'/'} >
                    <Image src={logo} alt=' logo' width={200} className="mb-8 text-white" />
                </Link>

                <ul className="flex flex-col gap-4">
                    <li className="cursor-pointer font-bold text-xl">Quick Links</li>
                    
                    <Link href={'#about'}>
                        <li className="cursor-pointer">About</li>
                    </Link>
                    <Link href={'#services'}>
                        <li className="cursor-pointer">Services</li>
                    </Link>
                    <Link href={'#contact'}>
                        <li className="cursor-pointer">Contact us</li>
                    </Link>
                    {/* <li className="cursor-pointer">Contact</li> */}
                </ul>

                <ul className="flex flex-col gap-4">

                    <li className="cursor-pointer font-bold text-xl">Contact</li>

                    <li className="cursor-pointer flex items-center gap-2">
                        <MapPin />
                        <span>
                            220 Highland Ave Westville, NJ 08093
                        </span>
                    </li>

                    <Link href={'tel:+1 848-328-0098'}>
                        <li className="cursor-pointer flex items-center gap-2">
                            <Phone />
                            <span>
                                +1 848-328-0098
                            </span>
                        </li>
                    </Link>


                    <Link href={'mailto:info@two14inc.com'}>
                        <li className="cursor-pointer flex items-center gap-2">
                            <Mail />
                            <span>
                                info@two14inc.com
                            </span>
                        </li>
                    </Link>
                </ul>

                <div className="flex items-center gap-2 mt-8 md:mt-0 lg:self-end">
                    <Image src={igLogo} alt="Instagram logo" width={24} height={24} className="inline-block mr-4 cursor-pointer" />
                    <Image src={xLogo} alt="X logo" width={24} height={24} className="inline-block mr-4 cursor-pointer" />
                    <Image src={lnLogo} alt="LinkedIn logo" width={24} height={24} className="inline-block cursor-pointer" />
                </div>
            </div>


        </footer>
    )
}

export default Footer;