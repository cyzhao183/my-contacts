"use client";

import utils from "@/utils";
import H5 from "./h5";
import PC from "./web";

export default function ContactsPage({ userAgent }: { userAgent: string }) {
  let Com = utils.getIsMobile(userAgent) ? H5 : PC;

  return <Com />;
}

ContactsPage.getInitialProps = async ({ req }: { req: any }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};
