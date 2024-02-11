import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

const imgContentClass = "pt-[5px] float-right px-[15px] w-full mb-[30px]";
const textContentClass = "float-left px-[15px] w-full mb-[30px]";
const paragraph = "mb-[1.25em] leading-[1.625em]";
const paragraphLink = "text-blue leading-[1.15em] border-b border-gray";
const rowTop = "border-t border-gray mt-[50px] pt-[50px] ml-[-15px] mr-[-15px]";

const ArmyRoadmap = () => {
  return (
    <section className="block">
      <div className="contain">
        <div className="overflow-hidden p-0">
          <div className="row">
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                Army Posture Statement
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-3">
                Supporting the National Defense Strategy
              </h6>
            </div>

            <div className="float-right pt-[5px] px-[15px] w-full">
              <Image
                src="/army-posture.jpg"
                alt="army posture"
                width={500}
                height={500}
                className="max-w-full block"
              />
            </div>

            <div className="inline-block">
              <div className={imgContentClass}>
                <div className={textContentClass}>
                  <p className={`${paragraph} mt-5`}>
                    The{" "}
                    <span className={paragraphLink}>
                      Army Posture Statement
                    </span>{" "}
                    is the Secretary of the Army and the Chief of Staff of the
                    Army's written testimony to Congress on the state of the
                    U.S. Army. The statement describes where the Army is and
                    what the Army has done over the last year to support the
                    <span className={paragraphLink}>
                      National Defense Strategy
                    </span>
                    . This unclassified summary outlines the Army’s annual
                    accomplishments, initiatives, and priorities, based on the
                    Army Vision and Army Strategy. It also explains the Army’s
                    budgetary needs for maintaining its strategic priorities in
                    the upcoming fiscal year.
                  </p>

                  <div className="overflow-hidden border border-borderGray rounded-[10px] max-h-[500px] max-w-[461px] mb-0 p-5">
                    POSTURE STATEMENT ARCHIVE
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                The Army Strategy
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Readiness, Modernization and Reform
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/armystrategy.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  <span className={paragraphLink}>The Army Strategy</span>{" "}
                  articulates how the Total Army achieves its objectives defined
                  by the <span className={paragraphLink}>Army Vision</span> and
                  fulfills its Title 10 duties. In support of the National
                  Defense Strategy, the Army Strategy describes how the Army
                  will build a more lethal force to retain overmatch in order to
                  deter, and defeat if necessary, all potential adversaries.
                </p>

                <div className="information">
                  <div className="flex justify-start items-start gap-3">
                    <div>
                      <FaArrowRight />
                    </div>
                    <span className="leading-[1.625em]">
                      READ MORE: STAND-TO! - The Army Strategy
                    </span>
                  </div>
                  <div className="flex justify-start items-start gap-3 mt-3">
                    <div>
                      <FaArrowRight />
                    </div>
                    <span className="leading-[1.625em]">
                      READ MORE: Challenges at many levels - Holistic view of
                      readiness allow Army to meet new demands(Feb. 25, 2020)
                    </span>
                  </div>
                </div>

                <div>
                  <p className={paragraph}>
                    <strong>Download: </strong>
                    <span>The Army Strategy (PDF)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                The Army People Strategy
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Managing Our Most Important Asset
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/army-people.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  <span className={paragraphLink}>
                    The Army People Strategy
                  </span>{" "}
                  The Army People Strategy is the roadmap the U.S. Army will use
                  to build a twenty-first century talent-based personnel
                  management system, reform essential quality of life programs
                  and build cohesive teams that are ready, professional, diverse
                  and integrated for the Joint Force. The Total Army will
                  acquire, develop, employ and retain the diversity of Soldier
                  and Civilian talent needed to achieve Total Army readiness.
                </p>

                <div className="information">
                  <div className="flex justify-start items-start gap-3 mt-3">
                    <div>
                      <HiOutlineInformationCircle />
                    </div>
                    <span className="leading-[1.625em]">
                      LEARN MORE:{" "}
                      <span className="font-semibold">
                        Army People Strategy
                      </span>
                    </span>
                  </div>

                  <div className="flex justify-start items-start gap-3">
                    <div>
                      <FaArrowRight />
                    </div>
                    <span className="leading-[1.625em]">
                      READ MORE:{" "}
                      <span className="font-semibold">
                        STAND-TO! - The Army People Strategy
                      </span>
                    </span>
                  </div>
                </div>

                <div>
                  <p className={paragraph}>
                    <strong>Download: </strong>
                    <span>The Army Strategy (PDF)</span>
                  </p>
                </div>

                <div>
                  <p className={paragraph}>
                    <strong>Download: </strong>
                    <span>
                      The Army Strategy - Diversity, Inclusion Annex (PDF)
                    </span>
                  </p>
                </div>

                <div>
                  <p className={paragraph}>
                    <strong>Download: </strong>
                    <span>SHARP - Prevention - Annex to APS (PDF)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                The Army Modernization Strategy
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Investing in the Future
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/modernization.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  The{" "}
                  <span className={paragraphLink}>
                    Army Modernization Strategy
                  </span>{" "}
                  (AMS) describes how the Total Army — Regular Army, National
                  Guard, Army Reserve, and Army Civilians — will transform into
                  a multi-domain force by 2035, meet its enduring responsibility
                  as part of the Joint Force to provide for the defense of the
                  United States, and retain its position as the globally
                  dominant land power. AMS is the Army's plan to deliver a{" "}
                  <span className={paragraphLink}>Multi-Domain Operations</span>{" "}
                  capable force and explains how the Army will operationalize
                  the concept.
                </p>

                <div className="information">
                  <div className="flex justify-start items-start gap-3">
                    <div>
                      <FaArrowRight />
                    </div>
                    <span className="leading-[1.625em]">
                      READ MORE:{" "}
                      <span className="font-semibold">
                        STAND-TO! - 2019 Army Modernization Strategy
                      </span>
                    </span>
                  </div>
                </div>

                <div>
                  <p className={paragraph}>
                    <strong>Download: </strong>
                    <span>Army Modernization Strategy (PDF)</span>
                  </p>
                </div>

                <div>
                  <p className={paragraph}>
                    <strong>Download: </strong>
                    <span>Army Digital Transformation Strategy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                The Army Medical Modernization Strategy
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Tranforming and Modernizing the Army Health System
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/medical_modernization.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  The{" "}
                  <span className={paragraphLink}>
                    Army Medical Modernization Strategy
                  </span>{" "}
                  The Army Medical Modernization Strategy (AMMS) articulates how
                  the Army Health System will modernize to provide highly
                  adaptive and effective health care on and off future
                  battlefields. AMMS will improve future medical preparedness,
                  processes and resources by informing new formations, doctrine,
                  organizations and training; materiel development, equipment
                  modernization and procurement, and medical integration with
                  signature modernization efforts; and leader development,
                  education, recruiting, retention and talent management. AMMS
                  fully aligns with and supports the{" "}
                  <span className={paragraphLink}>
                    Army Modernization Strategy
                  </span>
                  , and will guide the requirements, priorities and direction of
                  medical modernization efforts critical to enabling future
                  force readiness.
                </p>

                <div>
                  <p className={paragraph}>
                    <strong>Download: </strong>
                    <span className="font-semibold">
                      Army Medical Modernization Strategy (PDF)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                The Army Arctic Strategy
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Regaining Arctic Dominance
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/arctic.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  The{" "}
                  <span className={paragraphLink}>Army Arctic Strategy</span>{" "}
                  supports the 2019 DoD Arctic Strategy and lays out how the
                  Army will generate, train, organize and equip the force to
                  partner with Arctic allies and secure the national interests.
                  The Total Army strategy adapts how the Army executes extended,
                  multi-domain operations in extreme conditions to support the
                  joint warfighter, which demonstrates the Army’s resolve to
                  securing national interests in the region.
                </p>

                <div className="flex justify-start items-start gap-3">
                  <div>
                    <FaArrowRight />
                  </div>
                  <span className="leading-[1.625em]">
                    READ MORE:{" "}
                    <span className="font-semibold">
                      STAND-TO! - The Army Arctic Strategy
                    </span>
                  </span>
                </div>

                <div>
                  <p className={`${paragraph} mt-5`}>
                    <strong>Download: </strong>
                    <span className="font-semibold">
                      Army Arctic Strategy (PDF)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                The Army Climate Strategy
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Enhancing Army readiness, resiliency and capabilities
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/climate.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  The{" "}
                  <span className={paragraphLink}>Army Climate Strategy</span>{" "}
                  The Army Climate Strategy is the framework for a long-term
                  endeavor to operationalize climate adaptation and mitigation
                  across the Army. The strategy drives actions to enhance
                  readiness, resiliency and capabilities of the force. By
                  implementing the lines of effort outlined in the climate
                  strategy, the Army will achieve the goals of a resilient and
                  sustainable land force able to operate in all domains with
                  effective adaptation and mitigation measures against climate
                  change, consistent with Army modernization efforts.
                </p>

                <div className="flex justify-start items-start gap-3">
                  <div>
                    <FaArrowRight />
                  </div>
                  <span className="leading-[1.625em]">
                    READ MORE:{" "}
                    <span className="font-semibold">
                      STAND-TO! - The Army Climate Strategy
                    </span>
                  </span>
                </div>

                <div>
                  <p className={`${paragraph} mt-5`}>
                    <strong>Download: </strong>
                    <span>Army Climate Strategy (PDF)</span>
                  </p>
                </div>

                <div>
                  <p className={`${paragraph} mt-5`}>
                    <strong>Download: </strong>
                    <span>Army Climate Strategy Implimentation Plan (PDF)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                The Army Installations Strategy
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Supporting the Army in Multiple Domains
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/installations.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  The{" "}
                  <span className={paragraphLink}>
                    {" "}
                    U.S. Army Installations Strategy
                  </span>{" "}
                  is the first strategy to identify the need for modernized,
                  resilient and sustainable installations. This strategy
                  describes how installations will modernize to support the
                  Multi-Domain Operations Ready Force over the next 15+ years.
                </p>

                <div className="flex justify-start items-start gap-3">
                  <div>
                    <FaArrowRight />
                  </div>
                  <span className="leading-[1.625em]">
                    READ MORE:{" "}
                    <span>
                      <span className="font-semibold">STAND-TO!</span> - The
                      Army Installations Strategy
                    </span>
                  </span>
                </div>

                <div className="flex justify-start items-start gap-3">
                  <div>
                    <FaArrowRight />
                  </div>
                  <span className="leading-[1.625em]">
                    READ MORE:{" "}
                    <span>
                      Army Installations set to modernize through 2035 (Dec.16,
                      2020)
                    </span>
                  </span>
                </div>

                <div>
                  <p className={`${paragraph} mt-5`}>
                    <strong>Download: </strong>
                    <span>Army Installations Strategy (PDF)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                Army Multi-Domain Transformation
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Ready to Win in Competition and Conflict
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/domain.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  The Army's Multi-Domain transformation will set the conditions
                  for the Joint Force to fight and win integrated campaigns
                  necessary to defeat state actors. By 2035, the Army will
                  enable the Joint Force to maneuver and prevail from
                  competition through conflict with a calibrated force posture
                  of multi-domain capabilities that provide overmatch through
                  speed and range at the point of need. Army formations and
                  capabilities will provide the necessary speed, range,
                  convergence, and decision dominance required for overmatch in
                  a faster-paced, distributed, and complex operating
                  environment.
                </p>

                <div>
                  <p className={`${paragraph} mt-5`}>
                    <strong>Download: </strong>
                    <span className="font-semibold">
                      Multi-Domain Transformation Paper (PDF)
                    </span>
                  </p>
                </div>

                <div>
                  <p className={`${paragraph} mt-5`}>
                    <strong>Download: </strong>
                    <span className="font-semibold">
                      The Army in Military Competition (PDF)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                Quality Of Life Initiatives
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Commited to improving the Army Family
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/lifeinitiatives.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  Recognizing that our Soldiers, Civilians and families should
                  have the best quality of life possible, the Army is reviewing
                  the full range of its care, support, and enrichment programs,
                  with an initial focus upon: housing and barracks, healthcare,
                  childcare, spouse employment and permanent change of station
                  moves.
                </p>

                <div className="flex justify-start items-start gap-3 mt-3">
                  <HiOutlineInformationCircle size={20} />
                  <span className="leading-[1.625em]">
                    LEARN MORE:{" "}
                    <span className="font-semibold">
                      U.S Army Quality of Life
                    </span>
                  </span>
                </div>

                <div className="flex justify-start items-start gap-3 mt-3">
                  <div>
                    <FaArrowRight />
                  </div>
                  <span className="leading-[1.625em]">
                    READ MORE:{" "}
                    <span>
                      New efforts aim to improve 'quality of service' for
                      Soldiers, Families (Oct.16, 2019)
                    </span>
                  </span>
                </div>

                <div className="mt-5">
                  <div className="font-semibold">STAND-TO! Editions</div>
                  <div className={`${paragraph} mt-2`}>
                    {" "}
                    Army Housing Management Career Program Soldier and Family
                    Readiness Groups Total Army Sponsorship Program U.S. Army
                    Overseas Service: Tour Length Policy Revision Home-Based
                    Businesses Privatized Army Housing: Residential Communities
                    Initiative Army Spouse State Licensure and Certification
                    Costs Reimbursement Permanent Change of Station Move
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                The Army Data Plan
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Transforming our people processes, technology and governance
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/cyber.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  The Army Data Plan, aligned to the Army Vision, sets forth
                  guiding principles, goals and objectives, imperatives, and
                  data management structures to transform how the Army manages,
                  analyzes, and utilizes data to enable data-driven decisions
                  across its enterprise, and with partners, through a resilient,
                  secure hybrid cloud solution.
                </p>

                <div className="flex justify-start items-start gap-3">
                  <FaArrowRight />
                  <span>
                    READ MORE:{" "}
                    <span className="font-semibold">
                      STAND-TO! - Army Data Plan
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={rowTop}>
            <div className="mb-[2.5em]">
              <h5 className="text-center text-[1.5em] font-semibold">
                The Army Space Vision Supporting Multi-Domain Operations
              </h5>
              <h6 className="text-center text-[1.15em] italic mt-5">
                Enabling successful operations in and through the space domain
              </h6>
            </div>
            <div className="inline-block">
              <div className={`${imgContentClass}`}>
                <Image
                  src="/spacevision.jpg"
                  alt="The army strategy"
                  width={500}
                  height={500}
                />
              </div>
              <div className={textContentClass}>
                <p className={paragraph}>
                  The Army Space Vision Supporting Multidomain Operations The
                  Army Space Vision communicates to Army commanders, staff and
                  other stakeholders, the importance of space domain effects to
                  successful Army operations and the need to invest in space
                  capabilities and formations. The Army Space Vision describes
                  the Army’s role, both as a user and a provider of
                  space-related systems and formations, to fight and win in
                  multidomain operations.
                </p>

                <div>
                  <p className={`${paragraph} mt-5`}>
                    <strong>Download: </strong>
                    <span className="font-semibold">
                      The Army Space Vision Supporting Multidomain Operations
                      (PDF){" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArmyRoadmap;
