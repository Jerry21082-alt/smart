import { latestNewsContent } from "@/config";
import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

const LatestNews = () => {
  return (
    <section className="container">
      <div className="overfow-hidden p-0">
        <div className="relative my-0 mx-auto max-w-[446px overflow-hidden]">
          <span className="news">
            <h4 className="text-[1.313em]">LATEST NEWS</h4>
          </span>

          <ul className="leading-[1.652rem] mb-[1.25rem] list-none">
            {latestNewsContent.map((content) => (
              <li key={content.heading}>
                <Link
                  href={``}
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

        <div className="text-center flex justify-center items-center gap-1">
            <Link href={`/`} className="text-navBackground font-semibold">VIEW ALL NEWS</Link>
            <FaArrowRight color="#ffcc01"/>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
