import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from 'clsx'

const NavLink = (
  { title } // uses immediate return concept
) => (
  <LinkScroll className="base-bold text-[#EAEDFF] uppercase transition-colors duration-500 cursor-pointer hover:text-[#2EF2FF] max-lg:my-4 max-lg:text-[32px] font-semibold leading-[40px]">
    {title}
  </LinkScroll>
);

function Header() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2 no-underline">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        <div className={clsx("w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-[#0C1838] max-lg:opacity-0", isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",)}>
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="features" />
                  <div className="size-1.5 rounded-full bg-p2 max-lg:hidden" />
                  <NavLink title="pricing" />
                </li>

                <li className="relative flex flex-1 items-center justify-center">
                  <LinkScroll
                  to="hero"
                  offset={-100}
                  spy
                  smooth
                  classname={clsx(
                    "max-lg:hidden transition-transform duration-500 cursor-pointer",
                  )}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="faq" />
                  <div className="size-1.5 rounded-full bg-p2 max-lg:hidden" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div classname="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img src="/images/bg-outlines.svg" 
              width={960}
              height={380}
              alt="outline"
              classname="block max-w-full relative z-2"
              />
              <img src="/images/bg-outlines-fill.svg" 
              width={960}
              height={380}
              alt="outline"
              classname="block max-w-full absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
          
          {/* for hamburger button  */}
          <button className="bg-none tracking-[-0.03em] lg:hidden z-2 size-10 border-[#1959AD]/25 rounded-full flex justify-center items-center"
          onClick={()=>setIsOpen((prevState)=> !prevState)}>  
            <img src={`/images/${isOpen ? "close":"magic"}.svg`}  alt="magic" className="block max-w-full size-1/2 object-contain"/>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
