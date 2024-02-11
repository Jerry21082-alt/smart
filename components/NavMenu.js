"use client";

import { Dhurjati, Kanit, Russo_One } from "next/font/google";
import Link from "next/link";
import { navMenuContent } from "@/config";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const quickLinks = [
  "newsroom",
  "public affairs",
  "social media guide",
  "join",
  "faqs",
  "ako",
  "contact us",
];

import { makeContext } from "./useStateContext/StateContext";
import MenuListDropdown from "./MenuListDropdown";

const NavMenu = () => {
  const { openNavItem, handleCollapse, collapse } = makeContext();

  return (
    <div
      className={`fixed right-0 left-0 top-[56px] bg-navBackground h-full overflow-scroll transition-transform duration-[.25s] z-[1000] ${
        openNavItem ? "translate-y-0" : "close-nav-menu"
      }`}
    >
      <div className="menu-container">
        <div className="box-border">
          <ul
            className="m-0 leading-[1.375em box-border list-none]"
            role="menu"
          >
            {navMenuContent.map((content, i) => (
              <div key={i}>
                <MenuListDropdown
                  title={content.title}
                  subtitle={content.list}
                  isOpened={collapse === i}
                  onToggle={handleCollapse}
                  i={i}
                  links={navMenuContent[0].list}
                />
              </div>
            ))}

            <li className="text-snow text-center">
              <ul className="block my-0 mx-auto nav-menu-p text-center">
                <li className="inline-block py-[15px] px-[10px]">
                  <FaFacebookF color="#fff" size={30} />
                </li>
                <li className="inline-block py-[15px] px-[10px]">
                  <FaXTwitter color="#fff" size={30} />
                </li>
                <li className="inline-block py-[15px] px-[10px]">
                  <FaYoutube color="#fff" size={30} />
                </li>
                <li className="inline-block py-[15px] px-[10px]">
                  <FaInstagram color="#fff" size={30} />
                </li>
                <li className="inline-block py-[15px] px-[10px]">
                  <FaLinkedinIn color="#fff" size={30} />
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <ul className="leading-[1.375em]">
          {quickLinks.map((link, index) => (
            <li key={index} className="pt-[10px] uppercase">
              <Link
                href={`/`}
                className={`text-center my-0 mx-auto py-[25px] px-0 bg-darkGray text-snow block ${kanit.className}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
