import { FaArrowRight } from "react-icons/fa";
import AnnouncementBox from "./AnnouncementBox";
import Link from "next/link";

const Announcement = () => {
  return (
    <div className="bg-dimSnow overflow-hidden">
      <div className="container">
        <div className="overflow-hidden p-0">
          <div className="news">
            <h4 className="text-[1.625em]">OFFICIAL ARMY ANNOUNCEMENT</h4>
            <ul className="leading-[1.625rem] mb-[1.25em]">
              <AnnouncementBox
                photo="/army-department.jpg"
                title={`Army announces upcoming unit deployment`}
                date="January 31, 2024"
              />
              <AnnouncementBox
                photo="/army-department.jpg"
                className="mt-[15px]"
                title={`Army announces Project Covergence Capstone 4`}
                date="January 24, 2024"
              />
              <AnnouncementBox
                photo="/covergence.jpg"
                className="mt-[15px]"
                title={`Secretary of Army appoints three new civilian aides`}
                date="January 23, 2024"
              />
              <AnnouncementBox
                photo="/army-department.jpg"
                className="mt-[15px]"
                title={`New Army space vission defines roles and vission`}
                date="January 8, 2024"
              />
            </ul>

            <div className="text-center flex justify-center items-center gap-1 mt-[15px] cursor-pointer">
              <Link href={``} className="text-navBackground font-semibold">
                VIEW ALL ANNOUNCEMENTS
              </Link>
              <FaArrowRight color="#ffcc01" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
