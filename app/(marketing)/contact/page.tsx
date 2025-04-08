"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

function ContactPage() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/maps/ContactMap"), {
        ssr: false,
        loading: () => (
          <div className="h-[50vh] w-full animate-pulse bg-gray-200" />
        ),
      }),
    [],
  );
  return (
    <div className="py-4">
      <MaxWidthWrapper>
        <section className="py-10">
          <div className="content">
            <div className="content__left">
              <h5 className="text-5xl">LET&apos;S TALK</h5>
              <h2 className="py-2 text-2xl">
                Hello! We&apos;ve been waiting for you.
              </h2>
              <p>
                Fill in the form or{" "}
                <Link
                  className="text-gray-400 underline"
                  href="mailto:zihadm654@gmail.com"
                >
                  Send us an email
                </Link>
              </p>
            </div>
          </div>
          {/* <ContactForm /> */}
          <div className="py-4">
            <div className="relative h-[50vh] max-w-xl rounded-lg border max-md:w-full">
              <Map center={[24.012690435105732, 89.24788793262462]} />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}

export default ContactPage;
