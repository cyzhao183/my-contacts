import { IContact } from "../types/contact.type";
import { IContactApiData } from "../types/api-response.type";

export function parseContact(apiData: IContactApiData): IContact {
  return {
    /** 用户 ID */
    id: apiData.id,
    /** 首字母索引 */
    alphaIndex: apiData.alpha_index,
    /** 头像图片地址 */
    avatar: apiData.avatar,
    /** 用户名 */
    name: apiData.name,
    /** 当前用户给该用户设置的昵称 */
    nickname: apiData.nickname,
    /** 地区 */
    area: apiData.area,
    /** 微信号 */
    wechatAccount: apiData.wechat_account,
    /** 性别 */
    gender: apiData.gender,
  };
}
