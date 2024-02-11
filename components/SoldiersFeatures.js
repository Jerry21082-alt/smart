import { soldierFeaturesContent } from "@/config";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const SoldiersFeatures = () => {
  return (
    <div className="container">
      <div className="overflow-hidden p-0">
        <div className="news">
          <h4 className="text-[1.313em]">SOLDIER FEATURES</h4>

          <ul className="leading-[1.652rem] mb-[1.25rem] list-none">
            {soldierFeaturesContent.map((content) => (
              <li key={content.heading}>
                <Link
                  href={`/`}
                  className="relative block overflow-hidden outline-0 outline-none text-navBackground font-semibold"
                >
                  <span className="block text-navBackground h-0 latest-p relative z-0">
                    <Image
                      src={content.photo}
                      alt=""
                      className="absolute top-[-2000px] bottom-[-2000px] w-full m-auto"
                      width={500}
                      height={500}
                    />
                  </span>
                  <span className="py-[20px] px-[15px] block text-center text-lightGray font-semibold">
                    {content.heading}
                  </span>
                  <span className="hidden text-dateColor text-center font-bold pb-[20px] capitalize">
                    {content.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center flex justify-center items-center gap-1 mt-[15px] cursor-pointer">
          <Link href={``} className="text-navBackground font-semibold">
            VIEW ALL ANNOUNCEMENTS
          </Link>
          <FaArrowRight color="#ffcc01" />
        </div>
      </div>
    </div>
  );
};

export default SoldiersFeatures;
