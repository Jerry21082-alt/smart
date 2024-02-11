"use client";

import { MdMenu, MdOutlineClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { makeContext } from "./useStateContext/StateContext";
import Link from "next/link";

const NavBar = () => {
  const { setOpenNavItem, openNavItem } = makeContext();

  return (
    <header className="relative h-[56px] w-full top-0 left-0 z-[100] block">
      <div className="fixed flex justify-between items-center p-4 bg-navBackground inset-0 h-[56px] z-10 border-b-2 border-yellowGold box-border">
        <div className="absolute left-0 h-full menu border-r border-darkGray">
          {openNavItem ? (
            <>
              <MdOutlineClose
                size={40}
                color="#fff"
                className="relative top-[-45%]"
                onClick={() => setOpenNavItem(false)}
              />
            </>
          ) : (
            <>
              <MdMenu
                size={40}
                color="#fff"
                className="relative top-[-45%]"
                onClick={() => setOpenNavItem(true)}
              />
            </>
          )}
        </div>

        <div className="flex items-center flex-wrap absolute left-[50%] star">
          <Link
            href="/"
            role="button"
            className="flex justify-center items-center w-[150px] "
            onClick={() => setOpenNavItem(false)}
          >
            <Image
              src="https://www.army.mil/e2/images/rv7/universal/army_logo_horizontal.svg"
              alt="US army logo"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="border-l border-darkGray absolute right-0 h-full menu">
          <FiSearch color="#fff" size={28} className="relative top-[-20%]" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
