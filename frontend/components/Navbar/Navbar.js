import Image from 'next/image';
import HomeButton from '../Button';

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 w-[95%]  rounded-xl mx-auto py-4 bg-[#1e1e1e] font-Poppins text-white items-center'>
      {/* <Image
        src={'/assets/logo2.png'}
        height={50}
        width={50}
      /> */}
      <HomeButton />
    </div>
  );
};

export default Navbar;
