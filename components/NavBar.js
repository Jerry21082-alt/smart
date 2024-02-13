"use client";

import { MdMenu, MdOutlineClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { makeContext } from "./useStateContext/StateContext";
import Link from "next/link";

const NavBar = () => {
  const { setOpenNavItem, openNavItem } = makeContext();

  return (
    <header className="relative h-[56px] w-full top-0 left-0 z-[100]">
      <div className="fixed top-0 left-0 w-full z-10">
        <div className="bg-navBackground border-b-2 border-yellowGold h-[56px]">
          {!openNavItem ? (
            <button
              onClick={() => setOpenNavItem(true)}
              role="button"
              aria-expanded="false"
              className="menu-btn border-r-[1px] absolute left-0 border-darkGray text-snow text-[18px] font-bold tracking-tighter leading-[23px] outline-none capitalize"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 32 32"
                fill="#fff"
              >
                <title>menu</title>
                <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setOpenNavItem(false)}
              role="button"
              aria-expanded="false"
              className="menu-btn border-r-[1px] absolute left-0 border-darkGray text-snow text-[18px] font-bold tracking-tighter leading-[23px] outline-none capitalize"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 32 32"
                fill="#fff"
              >
                <title>cross</title>
                <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
              </svg>
            </button>
          )}

          <Link href="/" className="nav-army-star">
            <span>HOME</span>
          </Link>

          <button
            role="button"
            aria-expanded="false"
            className="menu-btn border-l-[1px] absolute right-0 border-darkGray text-snow text-[18px] font-bold tracking-tighter leading-[23px] outline-none capitalize"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 32 32"
              fill="#fff"
            >
              <title>search</title>
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
