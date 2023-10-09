export enum GENDER {
  MALE,
  FEMALE,
}

export namespace GENDER {
  export function $name(gender: GENDER) {
    return gender === GENDER.MALE ? "男" : "女";
  }
}
