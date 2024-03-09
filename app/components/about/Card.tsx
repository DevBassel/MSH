"use client";
import Image from "next/image";

export default function Card() {
  return (
    <article className="m-3">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img loading="lazy" src="/assets/about/card.png" alt="card" />
      <div className="p-2 ">
        <h4 className="text-xl"> Lorem ispum</h4>
        <p className="text-sm">
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting
        </p>
      </div>
    </article>
  );
}
