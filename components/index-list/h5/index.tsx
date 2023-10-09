"use client";

import s from "./style.module.css";
import ContactItem from "../../contact-item";
import { Props } from "..";

interface InnerProps extends Omit<Props, "isMobile"> {}
export default function ContactsPage(props: InnerProps) {
  const { options, onSelect } = props;
  return (
    <div className={s["index-content"]}>
      {options.map((item, index) => {
        return (
          <div className={s.block} key={index}>
            <div className={s.header}>{item.index}</div>
            <div className={s.list}>
              {item.list.map((info, i) => {
                return (
                  <ContactItem
                    onClick={() => onSelect(info)}
                    avatar={info.get("avatar")}
                    name={info.get("name")}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
