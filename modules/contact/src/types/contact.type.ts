import { GENDER } from "../constants/contact.const";

export interface IContact {
  /** 联系人 ID */
  id: string
  /** 首字母索引 */
  alphaIndex: string;
  /** 头像图片地址 */
  avatar: string;
  /** 联系人自己设置的名称 */
  name: string;
  /** 当前用户给该联系人设置的昵称 */
  nickname: string;
  /** 地区 */
  area: string[];
  /** 微信号 */
  wechatAccount: string;
  /** 性别 */
  gender: GENDER
}
