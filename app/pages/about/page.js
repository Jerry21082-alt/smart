import { Kanit } from "next/font/google";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import ArmyRoadmap from "@/components/ArmyRoadmap";
import DarkFooter from "@/components/DarkFooter";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const About = () => {
  return (
    <>
      <div className="min-h-0 relative overflow-hidden bg-navBackground text-snow">
        <div className="overflow-hidden absolute w-full h-full top-0">
          <div className="overlay-effect" />
          <Image
            src="/army-vission.jpg"
            alt="The army vision"
            width={500}
            height={500}
            className="absolute left-[-1000px] right-[-1000px] top-0 my-0 mx-auto min-h-full min-w-full"
          />
        </div>
        <div className="my-0 mx-auto relative z-[3] overflow-hidden">
          <div className="table w-full about-m overflow-hidden p-0">
            <div className="table-cell h-[150px] align-middle text-center">
              <h1
                className={`text-center text-[1.25em] font-bold about-h1 text-yellowGold uppercase pb-[3px] who-we-are ${kanit.className}`}
              >
                Who we are
              </h1>
              <h2
                className={`${kanit.className} text-center text-[1.5em] text-snow m-0 uppercase font-bold mt-5`}
              >
                The army's vission and strategy
              </h2>
            </div>
          </div>
        </div>
      </div>

      <main className="main bg-snow overflow-hidden z-[1] relative">
        <div className="bg-aboutGold overflow-hidden">
          <div className="contain">
            <div className="overflow-hidden p-0">
              <div className="row mx-[-15px]">
                <div className="float-left px-[15px] w-full">
                  <h6 className={`text-center ${kanit.className}`}>
                    OUR MISSION
                  </h6>
                  <h5
                    className={`my-[15px] text-[28px] text-center font-bold uppercase`}
                  >
                    our purpose remains constant
                  </h5>
                  <p className="text-[19px] text-center mb-[1.25em] leading-[1.625em]">
                    To deploy, fight and win our nation’s wars by providing
                    ready, prompt and sustained land dominance by Army forces
                    across the full spectrum of conflict as part of the joint
                    force.
                  </p>
                  <p className="text-[19px] text-center mb-[1.25em] leading-[1.625em]">
                    The Army mission is vital to the Nation because we are the
                    service capable of defeating enemy ground forces and
                    indefinitely seizing and controlling those things an
                    adversary prizes most – its land, its resources and its
                    population.
                  </p>

                  <div className="flex justify-center items-center gap-1">
                    <FaStar className="mt-5" />
                    <FaStar className="mt-5" />
                    <FaStar className="mt-5" />
                  </div>
                </div>
              </div>

              <div className="mx-[-15px] second-row">
                <div className="float-left px-[15px] mt-[20px] w-full">
                  <h4
                    className={`mt-[5px] font-bold text-[47px] the-army text-left uppercase ${kanit.className}`}
                  >
                    the army of 2030
                  </h4>
                </div>

                <div className="float-left px-[15px] w-full mt-[20px]">
                  <p className="text-[19px] mb-[1.25em] leading-[1.625em]">
                    As the Army comes out of the conflicts in Iraq and
                    Afghanistan and refocuses on the pacing challenge of China
                    and the acute threat posed by Russia, Army leaders are
                    directing the most significant reorganization and technical
                    innovation since the end of the Cold War — ensuring our
                    adversaries cannot outrange or outpace us on traditional
                    battlefields, or the new frontiers of space and cyberspace.
                  </p>
                  <p className="text-[19px] mb-[1.25em] leading-[1.625em]">
                    The world is changing, and{" "}
                    <span className="font-bold text-darkBg">
                      the Army is changing with it
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="roadmap">
          <div className="contain">
            <div className="overflow-hidden p-0">
              <div className="row mx-[-15px]">
                <div className="col">
                  <h2 className="text-aboutGold text-[50px] text-center mt-0 uppercase font-bold">
                    our roadmap to success
                  </h2>
                  <p className="text-snow uppercase road-m text-center">
                    strategic documents
                  </p>
                  <Image
                    src={`/roadmap_to_success_icon.svg`}
                    alt="road to success"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ArmyRoadmap />
      </main>
      <DarkFooter />
    </>
  );
};

export default About;
