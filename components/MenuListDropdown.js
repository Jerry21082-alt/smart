"use client";

import { Kanit } from "next/font/google";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { makeContext } from "./useStateContext/StateContext";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const MenuListDropdown = ({
  title,
  subtitle,
  isOpened,
  onToggle,
  i,
  links,
}) => {
  const { setOpenNavItem, openNavItem } = makeContext();

  const router = useRouter();

  const handleSelectLink = (id) => {
    const elementToFind = "who we are";
    const secElementToFind = "deployment";
    const indexOfElement = links.indexOf(elementToFind);
    const secIndexOfElement = links.indexOf(secElementToFind);

    if (indexOfElement == id) {
      router.push("/pages/about");
    } else if (secIndexOfElement == id) {
      router.push("/pages/deployment");
    } else router.push("/");
  };

  return (
    <div>
      <li className="border-b border-darkGray box-border">
        <input type="checkbox" id="menu-item-about" className="hidden" />
        <label
          htmlFor="menu-item-about"
          role="menu-item"
          className={`text-gray block text-[1.325em] outline-none px-[10px] py-[25px] relative ${kanit.className} uppercase`}
          onClick={() => onToggle(i)}
        >
          {title}
          <div className="h-[18px] absolute right-[12px] top-[26px] w-[12px]">
            {isOpened ? (
              <>
                <FaMinus size={18} color="#fff" />
              </>
            ) : (
              <>
                <FaPlus size={18} color="#fff" />
              </>
            )}
          </div>
        </label>

        <ul
          className={`${
            isOpened ? null : "hidden"
          } py-[18px] px-0 leading-[.1375em]`}
        >
          {subtitle.map((list, idx) => (
            <li
              key={list}
              onClick={() => setOpenNavItem(false)}
              className={`box-content ${kanit.className}`}
            >
              <div
                className="text-gray py-[10px] px-[30px] inline-block outline-none capitalize text-lg"
                onClick={() => handleSelectLink(idx)}
              >
                {list}
              </div>
            </li>
          ))}
        </ul>
      </li>
    </div>
  );
};

export default MenuListDropdown;
