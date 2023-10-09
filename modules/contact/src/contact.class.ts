import { BaseModule } from "@/modules/base.module";
import { IContact } from "./types/contact.type";
import * as ContactAPI from "./api/contact.api";

export class Contact extends BaseModule<IContact, never> {
  async deleteContact() {
    await ContactAPI.deleteContact(this.get("id"));
  }

  async editContact(params: { nickname: string }) {
    await ContactAPI.editContact(this.get("id"), {
      nickname: params.nickname,
    });
  }

  static async getContacts() {
    const resp = await ContactAPI.getContacts();

    return resp.map((item) => new Contact(item));
  }

  static async createContacts(params: Omit<IContact, "id">) {
    const resp = await ContactAPI.createContact({
      alpha_index: params.alphaIndex,
      avatar: params.avatar,
      name: params.name,
      nickname: params.nickname,
      area: params.area,
      wechat_account: params.wechatAccount,
      gender: params.gender,
    });

    return new Contact(resp);
  }
}
