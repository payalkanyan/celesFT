"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const NFTCard = ({ imgUrl, name, price, address, dollarPrice }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/${address}`);
      }}
      className=" flex flex-col font-Poppins rounded-xl w-fit overflow-hidden hover:scale-[1.01] transition-all ease-in-out shadow-xl"
    >
      <div className="w-[300px]  bg-[pink] ">
        <Image
          alt="img"
          height={600}
          width={400}
          className="mx-auto h-[320px] object-cover min-h-[350px] "
          src={imgUrl}
        />

        <div className="p-3 ">
          <div className="flex justify-between items-center">
            <p className="">{name}</p>
            <Image src="/assets/arb.png" height={25} width={25} />
          </div>
          <div className="flex justify-between items-center mt-1">
            <p className="font-semibold text-2xl">{price} ARB</p>
            <p className="text-gray-400 text-sm">${dollarPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
