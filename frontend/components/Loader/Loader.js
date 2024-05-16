const Loader = ({ inComp = false }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        inComp ? 'max-h-screen' : 'h-screen'
      }`}>
      <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-pink-100' />
    </div>
  );
};

export default Loader;
