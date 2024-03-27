
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel leftControl=" " rightControl=" ">
        <Image src="/banner/nike-just-do-it.jpg" width={1442} height={536} alt="..." />
      </Carousel>
    </div>
  );
}
