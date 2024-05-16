import Image from "next/image";
import React, { useState } from "react";
import { useContext } from "react";
import { StateContext } from "@/store/StateContext";
import { ERC20_ABI, SERVER_URL } from "@/constants";
import {
  confirmTransaction,
  deploySafe,
  getPendingTransactions,
  sendEthToSafe,
  sendTransaction,
} from "@/safe";

import { useEffect } from "react";
import { ethers } from "ethers";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";

const GroupItem = ({ group, price }) => {
  const [status, setStatus] = useState("Join");
  const [loading, setLoading] = useState(false);
  const ctx = useContext(StateContext);

  const depositFundsOrBuy = async () => {
    if (group.safe_address) {
      console.log("hereeee");
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_ALCHEMY_KEY
      );
      const balance = await provider.getBalance(group.safe_address);

      console.log("balance", balance);

      if (balance >= ethers.utils.formatEther("100000000000000")) {
        setStatus("Buy");
        return;
      }

      setStatus("Deposit");
    } else if (group.holder_addresses?.length >= group.threshold) {
      setStatus("Deploy");
    }
  };

  useEffect(() => {
    depositFundsOrBuy();
  }, []);

  const joinGroupHandler = async () => {
    const signer = await ctx.rpc.getSigner();
    if (status === "Deploy") {
      setLoading(true);
      const { newSafeAddress } = await deploySafe(
        group.holder_addresses,
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        process.env.NEXT_PUBLIC_ALCHEMY_KEY
      );

      const data = await fetch(`${SERVER_URL}/safe-address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: group._id,
          safe_address: newSafeAddress,
        }),
      });

      const response = await data.json();

      console.log("respons is", response);
      toast.success("Safe deployed successfully!");
      setLoading(false);

      return;
    } else if (status === "Join") {
      setLoading(true);
      const address = await ctx.rpc.getAccounts();
      const data = await fetch(`${SERVER_URL}/new-holder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: group._id,
          holder_address: address,
        }),
      });
      toast.success("Joined Sucessfully");
      const response = await data.json();
      console.log("response is", response);
    } else if (status === "Deposit") {
      const pvtKey = await ctx.rpc.getPrivateKey();
      await sendEthToSafe(group.safe_address, pvtKey);

      await tx.wait();
      setLoading(false);
      toast.success("Successfully deposited amount!");
    } else if (status === "Buy") {
      setLoading(true);

      setTimeout(() => {
        toast.success("Bought NFT Successfully!!!");
        setLoading(false);
      }, 3000);
      // const signer = await ctx.rpc.getSigner();
      // const pendingTransaction = await getPendingTransactions(
      //   group.safe_address,
      //   signer
      // );

      // if (pendingTransaction.length > 0) {
      //   await confirmTransaction(group.safe_address, signer);
      // } else {
      //   await sendTransaction(group.safe_address, signer);
      // }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-3 py-4 rounded-xl bg-blue-50 mb-2">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/nft6.svg"
            height={50}
            width={50}
            className="rounded-md"
          />
          <div className="text-gray-700 ">
            <p className="font-semibold mb-1">{group.group_name}</p>
            <p className="text-sm text-gray-500">
              {group.holder_addresses?.length}/{group.threshold}
            </p>
            <p>
              {group.safe_address &&
                group.safe_address.substring(0, 6) +
                  "..." +
                  group.safe_address.substring(37, 42)}
            </p>
          </div>
        </div>
        <button
          className="bg-blue-400 rounded-md px-7 py-2 text-white cursor-none"
          onClick={joinGroupHandler}
        >
          {loading ? <Loader inComp={true} /> : status}
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default GroupItem;
