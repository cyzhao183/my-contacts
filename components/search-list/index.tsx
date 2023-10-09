"use client";

import s from "./style.module.css";
import { useMemo, useState } from "react";
import ContactItem from "../contact-item";
import { Contact } from "@/modules/contact";

interface Props {
  title: string;
  options: Contact[];
  onSelect: (record: Contact) => void;
}

const MIN_COUNT = 3;
export default function SearchList(props: Props) {
  const { options, title, onSelect } = props;
  const [showCount, setShowCount] = useState(MIN_COUNT);

  const totalCount = useMemo(() => {
    return options.length;
  }, [options]);

  const showAll = useMemo(() => {
    return showCount === options.length;
  }, [showCount, options]);

  const noMore = useMemo(() => {
    return options.length < MIN_COUNT || options.length === MIN_COUNT;
  }, [options]);

  return (
    <div className={s["searchList"]}>
      <div className={s.title}>{title}</div>
      <div className={s.list}>
        {options.slice(0, showCount).map((info, i) => {
          return (
            <ContactItem
              onClick={() => onSelect(info)}
              name={info.get("name")}
              avatar={info.get("avatar")}
              key={i}
            />
          );
        })}
      </div>
      {noMore ? null : showAll ? (
        <div
          className={s.total}
          onClick={() => {
            setShowCount(MIN_COUNT);
          }}
        >
          收起
        </div>
      ) : (
        <div
          className={s.total}
          onClick={() => {
            setShowCount(options.length);
          }}
        >
          查看全部<span>({totalCount})</span>
        </div>
      )}
    </div>
  );
}
