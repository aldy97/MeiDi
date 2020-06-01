const defaultState = {
  aboutImg: require('../../../static/img/关于美地.png'),
  navigation: [
    { title: '公司简介', id: 0, desc: 'intro' },
    { title: '公司文化', id: 1, desc: 'culture' },
    { title: '公司资质', id: 2, desc: 'certificate' },
    { title: '合作伙伴', id: 3, desc: 'partner' },
  ],
};

export default (state = defaultState, action) => {
  return state;
};
