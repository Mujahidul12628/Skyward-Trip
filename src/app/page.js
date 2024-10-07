import Image from "next/image";
import FlightSearch from "./search/page";
import Data from "./data/page";
import LocationSelector from "./Division/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <FlightSearch></FlightSearch>
      <Data></Data> */}
      <LocationSelector></LocationSelector>
    </div>
  );
}
