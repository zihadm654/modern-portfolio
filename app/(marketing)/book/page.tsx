"use client";

import { InlineWidget } from "react-calendly";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const Book = () => {
  return (
    <MaxWidthWrapper>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Book a meeting</h2>
        <InlineWidget url="https://calendly.com/zihadm654/30min" />
      </div>
    </MaxWidthWrapper>
  );
};

export default Book;
