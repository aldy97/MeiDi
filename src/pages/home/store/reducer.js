const defaultState = {
  swiperImgList: [
    { imgURL: require('../../../static/img/homeSlide1.jpg'), id: 0 },
    { imgURL: require('../../../static/img/homeSlide2.jpg'), id: 1 },
    { imgURL: require('../../../static/img/homeSlide3.jpg'), id: 2 },
  ],
  aboutInfoList: [
    { title: '生态景观' },
    { title: '后期维护' },
    { title: '智慧民生' },
  ],
  projectList: [{}, {}, {}],
};

export default (state = defaultState, action) => {
  return state;
};
