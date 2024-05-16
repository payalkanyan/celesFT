import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import React, { useState } from 'react';
import { StateContext } from '@/store/StateContext';
import { useContext } from 'react';
import { Sismo } from '@/components/verification/index';
import SismoModal from '@/components/Modals/SismoModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');
  const [numberOfBuyers, setNumberOfBuyers] = useState('');
  const [chain, setChain] = useState('');
  const { verified, setVerified } = useContext(StateContext);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      setTimeout(() => {
        toast.success('NFT listed successfully!');
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='w-screen min-h-screen py-4 font-Poppins bg-blue-50 '>
        {!verified ? (
          <div>
            <SismoModal />
          </div>
        ) : (
          <div className='flex w-[80%] mx-auto py-6  h-fit rounded-r-[50px] overflow-hidden'>
            <div className='flex-[0.5] flex flex-col py-20 px-10 justify-center  bg-[#fff] rounded-l-[50px]'>
              <p className='text-2xl font-semibold text-center'>
                Put your NFT on sale!
              </p>
              <p className='text-sm text-gray-400 text-center'>
                Lorem Ipusm akand uyw oqwoiac uqheoi lks opawjdapj
              </p>
              <form
                onSubmit={submitHandler}
                className='w-[85%] mx-auto mt-10 flex flex-col gap-5'>
                <div className='flex flex-col'>
                  <label className='text-sm font-medium text-gray-800 mb-1'>
                    Contract Address
                  </label>
                  <input
                    placeholder='0x123'
                    onChange={(e) => {
                      setContractAddress(e.target.value);
                    }}
                    value={contractAddress}
                    className='text-lg py-2 px-2 rounded-md outline-none border border-gray-200'
                    type='text'
                  />
                </div>

                <div className='flex justify-between items-center'>
                  <div className='flex flex-col w'>
                    <label className='text-sm font-medium text-gray-800 mb-1'>
                      Token ID
                    </label>
                    <input
                      onChange={(e) => {
                        setTokenId(e.target.value);
                      }}
                      value={tokenId}
                      placeholder='#123'
                      className='text-lg py-2 px-2 rounded-md outline-none border border-gray-200'
                      type='text'
                    />
                  </div>

                  <div className='flex flex-col w'>
                    <label className='text-sm font-medium text-gray-800 mb-1'>
                      Price (ETH)
                    </label>
                    <input
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      value={price}
                      placeholder='1.23'
                      className='text-lg py-2 px-2 rounded-md outline-none border border-gray-200'
                      type='number'
                    />
                  </div>
                </div>

                <div className='flex justify-between items-center'>
                  <div className='flex flex-col w'>
                    <label className='text-sm font-medium text-gray-800 mb-1'>
                      Number of Buyers
                    </label>
                    <input
                      onChange={(e) => {
                        setNumberOfBuyers(e.target.value);
                      }}
                      value={numberOfBuyers}
                      placeholder='3'
                      className='text-lg py-2 px-2 rounded-md outline-none border border-gray-200'
                      type='number'
                    />
                  </div>

                  <div className='flex flex-col w'>
                    <label className='text-sm font-medium text-gray-800 mb-1'>
                      Chain (deployed on)
                    </label>
                    <select
                      onChange={(e) => {
                        setChain(e.target.value);
                      }}
                      value={chain}
                      className='text-sm py-3 px-2 rounded-md outline-none border border-gray-200 w-[200px]'>
                      <option selected>Select chain here</option>
                      <option value={137}>Polygon</option>
                      <option value={534352}>Scroll</option>
                      <option value={534352}>Mantle</option>
                    </select>
                  </div>
                </div>

                <button
                  type='submit'
                  className='py-3 bg-blue-500 rounded-xl mt-3 text-white font-semibold'>
                  List NFT
                </button>
              </form>
            </div>
            <div className='flex-[0.5] relative min-h-[700px] '>
              <Image
                className=' object-cover '
                src='/assets/nft9.gif'
                fill
              />
            </div>
          </div>
        )}
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Create;
