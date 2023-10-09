const getIsMobile = (ua: string) => {
  return new RegExp(
    'iphone|midp|ucweb|android|windows ce|windows mobile',
    'i',
  ).test(ua);
};

export default {
  getIsMobile,
};
