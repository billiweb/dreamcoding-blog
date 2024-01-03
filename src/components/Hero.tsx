import React from "react";
import profileImage from "../../public/images/profile.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Picture of the author"
        width={180}
        height={180}
      />
      <h2 className="text-xl font-bold mt-2">{"Hi, I'm SongCoding"}</h2>
      <p className="font-semibold mt-1">코딩 배우는 사업가</p>
      <Link href="/contact">
        <button className="bg-green-700 font-bold rounded-xl py-1 px-4 mt-5">
          Contact Me!
        </button>
      </Link>
    </section>
  );
}
