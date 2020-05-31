const defaultState = {
  swiperImgList: [
    {
      imgURL: require('../../../static/img/homeSlide1.jpg'),
      id: 0,
      title: '苏州和风花园',
      desc: '人道我居城市里，我疑身在万山中',
    },
    {
      imgURL: require('../../../static/img/homeSlide2.jpg'),
      id: 1,
      title: '长沙赋山湖',
      desc: '三千年湖湘浩瀚，名岳盛流俊杰若星，道不尽风华万千',
    },
    {
      imgURL: require('../../../static/img/homeSlide3.jpg'),
      id: 2,
      title: '苏州吴门府',
      desc: '一迳抱幽山，居然城市间',
    },
  ],
  aboutInfoList: [
    {
      title: '工程设计',
      id: 0,
      imgURL: require('../../../static/img/aboutIMG1.jpg'),
      desc: '美地拥有专业的园林设计师，为客户提供专业的设计服务。',
    },
    {
      title: '技术咨询',
      id: 1,
      imgURL:
        'https://www.homelight.com/blog/wp-content/uploads/2019/02/counter-offer-real-estate.jpg',
      desc: '美地以极致的细心为您提供专业的咨询服务',
    },
    {
      title: '施工服务',
      id: 2,
      imgURL: require('../../../static/img/aboutIMG3.png'),
      desc: '美地的建筑师队伍拥有丰富的施工经验',
    },
  ],
  projectList: [{}, {}, {}],
};

export default (state = defaultState, action) => {
  return state;
};
