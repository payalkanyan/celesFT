import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import NFTCard from "@/components/NFTCard/NFTCard";

const DEMO_NFTS = [
  {
    id: 1,
    address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    image: "/nft1.jpeg",
    price: "79.99",
    dollarPrice: "130645",
    name: "Token#4827",
  },
  {
    id: 2,
    address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    image: "/nft6.jpeg",
    price: "28.99",
    dollarPrice: "50100",
    name: "Token#5977",
  },
  {
    id: 3,
    address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    image: "/nft7.jpg",
    price: "89",
    dollarPrice: "192981",
    name: "Token#6762",
  },
  {
    id: 4,
    address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    image: "/nft4.jpeg",
    price: "50",
    dollarPrice: "90821",
    name: "Token#9522",
  },
];

const Nfts = () => {
  return (
    <div className="pt-4">
      <div className="pl-28 pr-10 py-10 font-Poppins">
        <p className="text-3xl font-semibold">Latest NFTs</p>
        <p className="font-Poppins text-gray-500 ">
          Enjoy the latest NFTs that just came new in the market
        </p>

        <div className="flex gap-8 flex-wrap mt-6">
          {DEMO_NFTS.map((nft) => (
            <NFTCard
              key={nft.id}
              imgUrl={nft.image}
              address={nft.address}
              name={nft.name}
              price={nft.price}
              dollarPrice={nft.dollarPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nfts;
