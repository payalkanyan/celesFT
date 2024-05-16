import Image from 'next/image';

const CardComponent = ({ reverse = false, imgUrl, name, tokenId }) => {
  return (
    <div
      className={` font-Poppins flex ${
        reverse ? 'flex-row-reverse' : ''
      } items-end border-b-2 border-pink-200 `}>
      <div className='flex justify-between items-end px-6 w-[50%]'>
        <p className='text-sm font-semibold text-gray-700'>{name}</p>
        <p className='text-gray-400 text-6xl font-semibold'>{tokenId}.</p>
      </div>

      <div className='h-[200px] w-[20px] bg-pink-200'></div>

      <div className='flex  relative h-[300px]  flex-col justify-center items-start pl-4 w-[50%]'>
        <Image
          className='object-cover'
          src={imgUrl}
          fill
        />
      </div>
    </div>
  );
};

export default CardComponent;
