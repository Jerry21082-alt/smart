import DarkFooter from "@/components/DarkFooter";
import { Kanit } from "next/font/google";
import Image from "next/image";
import React from "react";
import { client, urlFor } from "@/lib/client";

const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Deployment = async () => {
  const query = '*[_type == "deployment"]';
  const deployment = await client.fetch(query, {
    cashe: "no-store",
  });
  const deploymentList = deployment[0].soldier;

  return (
    <>
      <div className="p-2 min-h-screen z-50 bg-navBackground overflow-hidden w-full text-snow">
        <h4
          className={`${kanit.className} text-center font-semibold text-[24px] leading-[1.625em]`}
        >
          Army Deployment list
        </h4>
        <table className="w-full mt-3 border-collapse">
          <thead className="text-center overflow-x-scroll w-full uppercase">
            <tr>
              <th>Country</th>
              <th>Name</th>
              <th>Rank</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {deploymentList.map((data, i) => (
              <tr key={i} className="mt-5">
                <td className=" text-center border-t border-gray py-3">
                  <div className="flex justify-center items-center w-8 h-8">
                    <Image
                      src={urlFor(data.country).url()}
                      alt="US flag"
                      width={20}
                      height={20}
                      className="w-full object-cover"
                    />
                  </div>
                </td>
                <td className="text-center uppercase text-sm border-t border-gray py-3">
                  {data.name}
                </td>
                <td className=" text-center uppercase text-sm border-t border-gray py-3">
                  {data.rank}
                </td>
                <td className=" text-center text-sm border-t border-gray py-3">
                  ${data.salary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DarkFooter />
    </>
  );
};

export default Deployment;
