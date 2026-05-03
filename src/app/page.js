import Banner from "@/components/shared/Banner";
import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";
import { FaFire } from "react-icons/fa";



export default function Home() {
  return (
    <>

      <Banner></Banner>

      <div className="container mx-auto bg-gray-200 py-3 px-2 flex items-center justify-between gap-10 mt-3 rounded-md">
        <h4 className="flex gap-2 font-semibold">New <span>Arrivals:</span></h4>
        <Marquee>

          I can be a React component, multiple React components, or just some text.
          I can be a React component, multiple React components, or just some text.
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>







    </>


  );
}
