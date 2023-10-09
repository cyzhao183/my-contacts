import { useCallback, useEffect, useRef, useState } from "react";
// import { getContacts } from "@/modules/contact/src/api/contact.api";
import { Contact } from "@/modules/contact";
import { IndexListItem } from "@/components/index-list";
import { debounce } from "lodash-es";

// web 和 h5 的复用逻辑, 特殊逻辑写在页面内
export function useContactData() {
  // 列表数据
  const [options, setOptions] = useState<IndexListItem[]>([]);
  // 搜索结果
  const [searchOptions, setSearchOptions] = useState<Contact[]>([]);
  // 搜索内容
  const [searchValue, setSearchValue] = useState("");
  // 当前选中的用户信息
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);

  // 原始数据
  const originOptionsRef = useRef<Contact[]>([]);

  useEffect(() => {
    Contact.getContacts().then((contacts) => {
      const map = new Map();
      contacts.forEach((contact: Contact) => {
        if (map.get(contact.get("alphaIndex"))) {
          const arr = map.get(contact.get("alphaIndex"));
          map.set(contact.get("alphaIndex"), [...arr, contact]);
        } else {
          map.set(contact.get("alphaIndex"), [contact]);
        }
      });
      const opt = Array.from(map.keys()).map((key) => {
        return {
          index: key,
          list: map.get(key),
        };
      });
      setOptions(opt);
      originOptionsRef.current = contacts;
    });
  }, []);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      const result = originOptionsRef.current.filter((contact) => {
        if (contact.get("name").includes(value)) {
          return contact;
        }
      });
      setSearchOptions(result);
    }, 200),
    []
  );

  const onSearch = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  return {
    options,
    searchOptions,
    searchValue,
    currentContact,
    setCurrentContact,
    onSearch,
  };
}
