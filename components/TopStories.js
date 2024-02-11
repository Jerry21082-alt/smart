import { topStoryContent } from "@/config";
import { Kanit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/client";

const kanit = Kanit({
  weight: ["400", "700", "600"],
  subsets: ["latin"],
  display: "swap",
});

const TopStories = async () => {
  const query = '*[_type == "leadStory"]';
  const stories = await client.fetch(query, {
    cashe: "no-store",
  });

  const storyData = stories[0].story;
  return (
    <>
      <div className="bg-snow mb-0 overflow-hidden relative z-[1]">
        <div className="bg-darkBg pb-1 m-0 p-0 feature-mosaic">
          <ul className="overflow-hidden w-full pr-[6px] pt-[6px] pl-[6px]">
            <li className="pt-[66.5%] w-full float-left overflow-hidden relative mosaic-tile">
              <Link href="/" className="title-inner">
                <span className="title-overlay"></span>
                <span className={`title-bar-type ${kanit.className}`}>
                  lead story
                </span>
                <span className="bg-black block w-full h-full relative z-0">
                  <Image
                    src={urlFor(storyData[0].storyPhoto).url()}
                    alt="female soldier photo"
                    width={500}
                    height={500}
                    className="card-img"
                  />
                </span>
                <span className="title">
                  <span
                    className={`font-bold text-[25px] block lead-p z-20 ${kanit.className}`}
                  >
                    {storyData[0].storyText}
                  </span>
                </span>
              </Link>
            </li>

            <li className="pt-[66.5%] w-full float-left overflow-hidden relative">
              <Link href="/" className="title-inner">
                <span className="title-overlay"></span>
                <span className={`title-bar-type ${kanit.className}`}>
                  FEATURED VIDEO
                </span>
                <span className="bg-black block w-full h-full relative z-0">
                  <Image
                    src="/sandrust.jpg"
                    alt="female soldier photo"
                    width={500}
                    height={500}
                    className="card-img"
                  />
                </span>
                <span className="title">
                  <span className="font-bold text-[25px] block lead-p z-20">
                    {topStoryContent[1].title}
                  </span>
                </span>
                <span className="video-icon"></span>
              </Link>
            </li>

            <li className="pt-[66.5%] w-full float-left overflow-hidden relative">
              <Link href="/" className="title-inner">
                <span className="title-overlay"></span>
                <span className={`title-bar-type ${kanit.className}`}>
                  FEATURED PHOTO
                </span>
                <span className="bg-black block w-full h-full relative z-0">
                  <Image
                    src={urlFor(storyData[1].storyPhoto).url()}
                    alt="female soldier photo"
                    width={500}
                    height={500}
                    className="card-img"
                  />
                </span>
              </Link>
            </li>

            {topStoryContent[1].storyFooter.map((story, index) => (
              <li
                key={index}
                className="w-full float-left overflow-hidden relative"
              >
                <Link
                  href={`/`}
                  className={`h-auto w-auto relative bg-lightGray text-snow block m-[3px] overflow-hidden text-left ${kanit.className}`}
                >
                  <span className="bg-transparent h-full w-full absolute left-0 top-0 z-20"></span>
                  <span className="title-bar-type no-type">
                    {story.heading}
                  </span>
                  <span className="hidden h-ful w-full relative z-20">
                    <Image src="/" alt="Go Army" width={500} height={500} />
                  </span>
                  <span className="bg-none border-none mt-[60px] min-h-0 relative w-auto bottom-0 block max-h-[75%] text-center z-30">
                    <span className="block font-bold lead-p text-lg">
                      {story.title}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopStories;
