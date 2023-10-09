"use client";

import s from "./style.module.css";

interface Props {
  avatar: string;
  name: string;
  onClick: () => void;
}

export default function ContactItem(props: Props) {
  const { name, avatar, onClick } = props;

  return (
    <div className={s.contactItem} onClick={onClick}>
      <img src={avatar} />
      <span className={s.name}>{name}</span>
    </div>
  );
}
