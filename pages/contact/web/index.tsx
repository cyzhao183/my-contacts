"use client";

import IndexList, { IndexListItem } from "@/components/index-list";
import s from "./style.module.css";
import SearchList from "@/components/search-list";
import ContactDetailPanel from "@/components/contact-detail-panel";
import { useContactData } from "../../../hooks/useData";

export default function ContactsPage() {
  const {
    onSearch,
    options,
    searchOptions,
    searchValue,
    setCurrentContact,
    currentContact,
  } = useContactData();

  return (
    <div className={s["contact-page"]}>
      <div className={s.left}>
        <input
          className={s.search}
          value={searchValue}
          type="text"
          onChange={onSearch}
        />
        {searchValue === "" ? (
          <IndexList
            isMobile={false}
            onSelect={(record) => {
              setCurrentContact(record);
            }}
            options={options}
          />
        ) : (
          <>
            {searchOptions && (
              <SearchList
                onSelect={(record) => {
                  setCurrentContact(record);
                }}
                title={"联系人"}
                options={searchOptions}
              />
            )}
          </>
        )}
      </div>
      <div className={s.right}>
        {currentContact ? (
          <ContactDetailPanel isMobile={false} contact={currentContact} />
        ) : (
          <div className={s.empty}>暂无数据</div>
        )}
      </div>
    </div>
  );
}
