"use client";

import H5 from "./h5";
import PC from "./web";
import { Contact } from "@/modules/contact";

export interface IndexListItem {
  index: string;
  list: Contact[];
}

export interface Props {
  options: IndexListItem[];
  onSelect: (record: Contact) => void;
  isMobile: boolean;
}

export default function IndexList({ isMobile, ...rest }: Props) {
  let Com = isMobile ? H5 : PC;

  return <Com {...rest} />;
}
