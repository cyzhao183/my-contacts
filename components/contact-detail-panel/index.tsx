"use client";

import H5 from "./h5";
import PC from "./web";
import { Contact } from "@/modules/contact";

export interface Props {
  isMobile: boolean;
  contact: Contact;
}

export default function ContactDetailPanel({ isMobile, ...rest }: Props) {
  let Com = isMobile ? H5 : PC;

  return <Com {...rest} />;
}
