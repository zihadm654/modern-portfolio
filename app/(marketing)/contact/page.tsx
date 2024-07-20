// import ContactForm from '@/components/forms/ContactForm';
// import { Button } from '../../src/utility/Button';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

// import contactImg from '../public/assets/undraw_contact_us_re_4qqt.svg';

function isInputNamedElement(
  e: Element,
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

function ContactPage() {
  return (
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
        <div className="contact__container"></div>
      </section>
    </MaxWidthWrapper>
  );
}

export default ContactPage;
