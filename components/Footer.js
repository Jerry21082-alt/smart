import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-navBackground bottom-0 py-[60px] px-0 w-full z-0">
        <div className="flex justify-center items-center gap-9">
          <FaFacebookF color="#fff" size={25} />
          <FaXTwitter color="#fff" size={25} />
          <FaYoutube color="#fff" size={25} />
          <FaInstagram color="#fff" size={25} />
          <FaLinkedinIn color="#fff" size={25} />
        </div>

        <div className="font-[.84em] footer-p text-center uppercase w-full">
          <div className="px-3 mt-6">
            <ul className="flex justify-center items-start gap-3 flex-wrap text-snow">
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>
                <Link href={`/`}>Contact Us</Link>
              </li>
              <li>
                <Link href={`/`}>Privacy</Link>
              </li>
              <li>
                <Link href={`/`}>Terms of use</Link>
              </li>
              <li>
                <Link href={`/`}>Accessibility</Link>
              </li>
              <li>
                <Link href={`/`}>Foia</Link>
              </li>
              <li>
                <Link href={`/`}>No fear act</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
