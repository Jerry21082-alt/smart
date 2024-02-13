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
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <title>search</title>
              <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
