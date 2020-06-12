const defaultState = {
  navItemList: [
    { name: '首页', dropDown: [], href: '/' },
    {
      name: '关于美地',
      dropDown: ['公司简介', '公司文化', '公司资质', '合作伙伴'],
      href: '/about',
    },
    {
      name: '业务领域',
      dropDown: ['地产景观', '市政工程', '苗木基地'],
      href: '/field',
    },
    { name: '精品项目', dropDown: ['示范区', '交付区'], href: '/projects' },
    { name: '新闻资讯', dropDown: ['公司资讯', '行业资讯'], href: '/news' },
    {
      name: '加入美地',
      dropDown: ['校园招聘', '社会招聘', '人才理念'],
      href: '/join',
    },
    {
      name: '联系我们',
      dropDown: ['公司联系人', '公司地址'],
      href: '/contact',
    },
  ],
};

export default (state = defaultState) => {
  return state;
};
