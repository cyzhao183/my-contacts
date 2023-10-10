import { IPaginationReq, IPaginationResp } from "@/types/pagination.type";
import { E_REQUEST_METHODS, request } from "@/utils/request";
import { IContactApiData } from "../types/api-response.type";
import { IContact } from "../types/contact.type";
import { parseContact } from "../parsers/contact.parser";
import Mock, { Random } from "mockjs";
import { GENDER } from "../constants/contact.const";

/**
 * 获取联系人列表
 * @param id
 * @param params
 * @returns
 */
export function getContacts(): Promise<IContact[]> {
  let num = 0;
  // 生成按顺序排列的数据
  function generateIndex() {
    const arr = ["A", "B", "C", "D", "E"];
    const index = num < arr.length ? num : num % arr.length;
    num++;
    return arr[index];
  }

  function generateGender() {
    return Math.random() > 0.5 ? GENDER.FEMALE : GENDER.MALE;
  }

  const res: {
    list: IContactApiData[];
  } = Mock.mock({
    "list|100": [
      {
        "id|1": () => "@random()",
        "alpha_index|1": () => generateIndex(),
        "avatar|20": Random.image("1", Random.color(), ""),
        "name|1": "@cname()",
        "nickname|1": "@name()",
        "wechat_account|1": "@email()",
        "area|1": "@county(true)",
        "gender|1": () => generateGender(),
      },
    ],
  });

  return Promise.resolve(res.list.map(parseContact));

  // return request.send<IContactApiData[]>({
  //   url: "/contacts",
  //   method: E_REQUEST_METHODS.GET,
  //   data: params,
  // }).then((res) => res.map(parseContact));
}

/**
 * 编辑联系人信息
 * @param id
 * @param params
 * @returns
 */
export function editContact(
  id: string,
  params: Pick<IContactApiData, "nickname">
) {
  return request.send<void>({
    url: `/contacts/${id}`,
    method: E_REQUEST_METHODS.PATCH,
    data: params,
  });
}

/**
 * 创建联系人
 * @param id
 * @param params
 * @returns
 */
export function createContact(params: Omit<IContactApiData, "id">) {
  return request
    .send<IContactApiData>({
      url: `/contacts`,
      method: E_REQUEST_METHODS.POST,
      data: params,
    })
    .then((res) => parseContact(res));
}

/**
 * 删除联系人
 * @param id    联系人 IDs
 * @returns
 */
export function deleteContact(id: string) {
  return request.send<void>({
    url: `/contacts/${id}`,
    method: E_REQUEST_METHODS.DELETE,
  });
}
