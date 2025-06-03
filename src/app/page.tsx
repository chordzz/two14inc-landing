'use client'


import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser'

import NavigationBar from "@/components/custom/navigation/nav-bar";
import { Button } from "@/components/ui/button";


import aboutImg from '@/../public/two14-about.png'
import professionals from '@/../public/professionals.svg'
import minds from '@/../public/minds.svg'
import clientSvg from '@/../public/client.svg'
import { peculiarities, services } from "@/lib/data";
import ServiceCard from "@/components/custom/service-card";
import PeculiarityCard from "@/components/custom/peculiarity-card";
import Footer from "@/components/custom/navigation/footer";
import Link from "next/link";
// import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import 'react-phone-number-input/style.css'
import PhoneInput, {
  isPossiblePhoneNumber,
	// formatPhoneNumber,
	// formatPhoneNumberIntl,
	// isPossiblePhoneNumber,
	// isValidPhoneNumber
} from 'react-phone-number-input'


export default function Home() {

  const form = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState<string | undefined>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!value){
      alert('Please enter a valid phone number.');
      return;
    } else if (!isPossiblePhoneNumber(value)) {
      alert('Please enter a valid phone number.');
      return;
    }
    setLoading(true);
    // console.log(value)
    // console.log(value && isPossiblePhoneNumber(value))
    
    // if (form.current) {
    //   const formData = new FormData(form.current);
    //   const data = Object.fromEntries(formData.entries());
    //   console.log('form values', data);
    // }

    if (form.current) {
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || '', process.env.NEXT_PUBLIC_TEMPLATE_ID || '', form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY || '')
      .then(() => {
        setLoading(false);
        alert('Your message has been sent successfully!');
        form.current?.reset()
        setValue('')
      }
      , (error) => {
        setLoading(false);
        console.error('Email sending error:', error);
        alert('Failed to send your message. Please try again later.');
      }
      );
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }
  return (
    <div className="w-screen">
      {/* <NavigationBar /> */}

      {/* <section>
        <div className="hero-bg content-wrapper rounded-[16px] h-[675px] my-8 bg-cover">
          <div className="h-full py-24 px-16">
            <div className="w-[63%]">
              <h1 className="text-5xl font-bold leading-[140%] capitalize">
                We help brands grow through strategy, storytelling, and design
              </h1>

              <p className=" my-8 text-[40px] font-light">
                We&apos;re not just consultants — we&apos;re your growth partners.
              </p>

              <div className="flex gap-6">
                <Button className="">Let&apos;s talk</Button>
                <Button className="bg-[#E3E3E3] text-black">See our work</Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="home" className="hero-bg bg-size-[425px] md:bg-size-[1000px_650px] md:bg-[position:top] lg:bg-cover h-screen text-white flex flex-col">
        <NavigationBar />

        {/* <div className="hero-bg content-wrapper rounded-[16px] h-[675px] my-8 bg-cover"> */}
        <div className="h-full flex items-center">
          <div className="px-8 lg:py-24 md:px-16 xl:px-32">
            <div className="w-[95%] md:w-[74%] lg:w-[63%]">
              <h1 className="text-[32px] md:text-4xl lg:text-5xl font-bold leading-[140%] capitalize">
                We help brands grow through strategy, storytelling, & design
              </h1>

              <p className="my-4 lg:my-8 text-lg md:text-2xl lg:text-[40px] font-light">
                We&apos;re not just consultants — we&apos;re your growth partners.
              </p>

              <div className="flex gap-6">
                <Link href={'#contact'}>
                  <Button className="bg-[#F5871E]">Let&apos;s talk</Button>
                </Link>
                {/* <Button className="bg-[#E3E3E3] text-black">See our work</Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="content-wrapper mt-16 md:mt-24 lg:mt-36">
          <div className="md:w-[70%] lg:w-[50%] text-center mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold md:leading-[100%] uppercase">
              About Two14 Inc
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-normal md:leading-[130%] mt-2 md:mt-5">
              We are catalysts for your brand&apos;s success - blending innovation, strategy, and creativity to bring your vision to life.
            </p>
          </div>

          <div className="rounded-[16px] border border-[#A5C6DE] bg-[#F4F8FB] p-4  lg:p-8 my-16">
            
            <Image src={aboutImg} alt="team members collaborating" className="w-full h-[220px] md:h-full object-cover rounded-[16px]" />

            <div className="flex flex-col gap-y-8 md:flex-row justify-between items-start lg:items-center mt-14">
              <div className="w-full md:w-[30%] max-w-[336px]">
                <Image src={professionals} alt="professionals" className="" />

                <h3 className="text-lg lg:text-2xl font-semibold my-3">
                  Driven Professionals
                </h3>

                <p className="text-[#595959] text-xs lg:text-[16px]">
                  A team of goal-oriented experts passionate about exceeding expectations. We deliver projects with excellence, backed by years of proven experience.
                </p>
              </div>

              <div className="w-full md:w-[30%] max-w-[336px]">
                <Image src={minds} alt="light bulb" className="" />

                <h3 className="text-lg lg:text-2xl font-semibold my-3">
                  Creative Minds
                </h3>

                <p className="text-[#595959] text-xs lg:text-[16px]">
                  At Two14 Inc, innovation fuels everything we do. Our culture nurtures fresh thinking, helping us craft marketing strategies and promotional items that truly stand out.
                </p>
              </div>

              <div className="w-full md:w-[30%] max-w-[336px]">
                <Image src={clientSvg} alt="professionals" className="" />

                <h3 className="text-lg lg:text-2xl font-semibold my-3">
                  Client-Centric Culture
                </h3>

                <p className="text-[#595959] text-xs lg:text-[16px]">
                  We build everything around you. With a deep understanding of your goals, we create solutions that align with your brand and drive real engagement.
                </p>
              </div>
            </div>


          </div>

        </div>
      </section>

      <section id="services">
        <div className="content-wrapper mt-16 lg:mt-36">
          <div className="md:w-[70%] w-[90%] lg:w-[50%] text-center mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold md:leading-[100%] uppercase">
              Our Services
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-normal md:leading-[130%] mt-2 md:mt-5">
              From strategy to execution, we help brands get seen, heard, and remembered.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between lg:items-center flex-wrap mt-14 gap-y-8">
            {
              services.map( (service, idx) => <ServiceCard key={idx} service={service} />)
            }
          </div>
        </div>
      </section>

      <section id="peculiarities">
        <div className="content-wrapper mt-36">
          <div className="w-[90%] md:w-[70%] lg::w-[60%] text-center mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold md:leading-[100%] uppercase">
              What Sets Us Apart
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-normal md:leading-[130%] mt-2 md:mt-5">
              <span className="font-semibold">Join us where brands evolve, captivate, and thrive.</span>{" "}
              At Two14 Inc, we&apos;re more than consultants — we&apos;re brand architects, storytellers, and growth strategists. Since 2019, we&apos;ve helped forward-thinking brands redefine their potential.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center flex-wrap mt-14 gap-y-10">
            {
              peculiarities.map( (peculiarity, idx) => <PeculiarityCard key={idx} peculiarity={peculiarity} />)
            }
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="content-wrapper mt-36">
          <div className="w-[90%] md:w-[70%] lg::w-[60%] text-center mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold md:leading-[100%] uppercase">
              Contact Us
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-normal md:leading-[130%] mt-2 md:mt-5">
              Send us a message. We&apos;d love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSendEmail} ref={form} className="border border-[#D9D9D9] rounded-[15px] shadow-[4px_4px_20px_rgba(0,0,0,0.06)] w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto p-6 md:p-8 my-8 flex flex-col gap-6">

            <Input type="text" id="name" name="name" placeholder="Full Name" className="bg-[#f5f5f5] border-0 py-5" required />
            
            <Input type="email" id="email" name="email" placeholder="Email" className="bg-[#f5f5f5] border-0 py-5" required />

            {/* <Input type="email" id="email" name="email" placeholder="Email" className="bg-[#f5f5f5] border-0 py-5" required /> */}

            <PhoneInput
              international
              countryCallingCodeEditable={false}
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              inputComponent={Input}
              defaultCountry="US"
              type="tel"
              name="phone"
              required
              // isValid={isPossiblePhoneNumber}
              // error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
            />

            <Textarea placeholder="Type your message here." name="message" className="bg-[#f5f5f5] border-0" required />

            <Button disabled={loading} className="bg-[#F5871E] text-white" type="submit">
              {loading ? 'Sending...' : 'Send Message'}
            </Button>

          </form>
        </div>
      </section>

      <Footer />

    </div>
  );
}
