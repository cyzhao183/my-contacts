"use client";

import IndexList from "@/components/index-list";
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
      <div className={s.content}>
        {currentContact ? (
          <>
            <div className={s.back} onClick={() => setCurrentContact(null)}>
              返回
            </div>
            <ContactDetailPanel isMobile contact={currentContact} />
          </>
        ) : (
          <>
            <input
              className={s.search}
              value={searchValue}
              type="text"
              onChange={onSearch}
            />
            {searchValue === "" ? (
              <IndexList
                isMobile
                onSelect={(record) => {
                  setCurrentContact(record);
                }}
                options={options}
              />
            ) : (
              <>
                {searchOptions.length > 0 ? (
                  <SearchList
                    onSelect={(record) => {
                      setCurrentContact(record);
                    }}
                    title={"联系人"}
                    options={searchOptions}
                  />
                ) : (
                  <div className={s.empty}>暂无数据</div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
