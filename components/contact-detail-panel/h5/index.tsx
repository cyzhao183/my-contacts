"use client";

import { Contact } from "@/modules/contact";
import s from "./style.module.css";

interface IProps {
  contact: Contact;
}

export default function ContactDetailPanel(props: IProps) {
  const { contact } = props;

  return (
    <div className={s.contactDetailPanel}>
      <div className={s.top}>
        <div className={s.name}>{contact.get("name")}</div>
        <div className={s.avatar}>
          <img src={contact.get("avatar")} alt="" />
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.row}>
          <div className={s.label}>备注名</div>
          <div className={s.value}>{contact.get("nickname")}</div>
        </div>
        <div className={s.row}>
          <div className={s.label}>地区</div>
          <div className={s.value}>{contact.get("area")}</div>
        </div>
        <div className={s.row}>
          <div className={s.label}>微信号</div>
          <div className={s.value}>{contact.get("wechatAccount")}</div>
        </div>
      </div>
      <div className={s.btn}>发消息</div>
    </div>
  );
}
