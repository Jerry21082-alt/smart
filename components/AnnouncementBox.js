import Image from "next/image";
import Link from "next/link";

const AnnouncementBox = ({ photo, title, date, className }) => {
  return (
    <>
      <li className={`mt-0 ${className}`}>
        <Link href={``} className="block relative outline-none overflow-hidden text-navBackground font-semibold decoration-none">
          <span className="bg-navBackground block h-0 latest-p relative z-0">
            <Image src={photo} alt="department of army logo" width={500} height={500} className="absolute top-[-2000px] bottom-[-2000px] m-auto w-full"/>
          </span>
          <span className="block text-center text-lightGray announce-p">{title}</span>
          <span className="text-dateColor font-bold padding-b-[20px] text-center block uppercase">{date}</span>
        </Link>
      </li>
    </>
  );
};

export default AnnouncementBox;
