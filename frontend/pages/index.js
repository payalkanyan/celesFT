import CardComponent from '@/components/Home/NFTContainer/ContainerComp';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';

const Goo = dynamic(() => import('@/components/Goo/Goo'), {
  ssr: false,
  loading: () => <p>Loading...</p>, // Optional loading component
});

const data = [
  {
    id: '1',
    nftName: 'House Puddletrail',
    imgUrl: '/assets/nft9.gif',
  },
  {
    id: '2',
    nftName: 'House Whimsifall',
    imgUrl: '/assets/nft4.gif',
  },
  {
    id: '3',
    nftName: 'House Mindflux ',
    imgUrl: '/assets/nft10.gif',
  },
  {
    id: '4',
    nftName: 'House Lumentree ',
    imgUrl: '/assets/nft2.svg',
  },
];

const Home = () => {
  return (
    <div className='w-screen h-full pt-3 px-10  font-Roboto index'>
      <Navbar />

      <div className='flex pt-6'>
        <div className='flex-[0.5] h-[80vh] sticky top-10'>
          <div className='py-10 flex flex-col justify-between h-full'>
            <div className='flex items-center justify-center'>
              {/* <Image
                src='/assets/logo.png'
                height={100}
                width={100}
              /> */}
              <p className='text-7xl -ml-2 font-semibold text-center text-pink-800'>
                CelesFT
              </p>
            </div>

            <div className='flex items-start justify-center mt-4 gap-4'>
              <div className='w-[30px] h-[4px] bg-black mt-2'></div>
              <div className='text-pink-300 font-Poppins font-medium text-sm'>
                <p>POOL NFTs</p>
                <p>GET NFTs COLLECTIVELY!!!</p>
                <p>WITH THE POWER OF ROLLUP</p>
                <p>WITH CELESTIA</p>
              </div>
            </div>

            <Goo />
          </div>

          <p className='text-center font-Poppins text-pink-300 text-sm font-medium'>
          <p>Connect with the community</p>
            <p>Easily & Hassle-free</p>
          </p>
        </div>
        <div className='flex-[0.5] border-x-2 border-gray-200'>
          {data.map((nft) => (
            <CardComponent
              key={nft.id}
              imgUrl={nft.imgUrl}
              name={nft.nftName}
              tokenId={nft.id}
              reverse={nft.id % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
