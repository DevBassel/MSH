"use client";
import React from "react";
import Section from "../common/Section";
import Card from "./Card";
import Button from "../common/Button";


export default function Section2() {
  return (
    <>
      <div className="w-fit mx-auto mt-5 [&_button]:mr-3 text-white">
        <Button text="Who We Are" />
        <Button text="Our MSH" />
        <Button text="Our Work" />
      </div>

      <Section className="py-7">
        <h1 className="text-5xl text-center my-20">Who We Are</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
    </>
  );
}
