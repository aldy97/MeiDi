const defaultState = {
  navItemList: [
    { name: '首页', dropDown: [] },
    {
      name: '关于美地',
      dropDown: ['公司简介', '企业文化', '企业资质', '合作伙伴'],
    },
    { name: '业务领域', dropDown: ['生态景观', '后期维护', '智慧民生'] },
    { name: '精品案例', dropDown: ['交付区案例', '示范区案例'] },
    { name: '新闻资讯', dropDown: ['公司资讯', '行业资讯'] },
    { name: '加入美地', dropDown: ['校园招聘', '社会招聘', '人才理念'] },
    { name: '联系我们', dropDown: ['公司联系人', '公司地址'] },
  ],
};

export default (state = defaultState, action) => {
  return state;
};
