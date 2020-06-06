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
      title: '长沙湖山赋',
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
      desc: '美地拥有专业的园林设计师，为客户提供定制化的设计服务。',
      iconfont: '&#xe617;',
    },
    {
      title: '技术咨询',
      id: 1,
      imgURL:
        'https://www.homelight.com/blog/wp-content/uploads/2019/02/counter-offer-real-estate.jpg',
      desc: '美地以极致的细心为您提供专业的咨询服务。',
      iconfont: '&#xe62c;',
    },
    {
      title: '施工服务',
      id: 2,
      imgURL: require('../../../static/img/aboutIMG3.png'),
      desc: '美地的建筑师队伍拥有丰富的施工经验。',
      iconfont: '&#xe600;',
    },
  ],
  projectList: [
    {
      title: '苏州北辰壹号院',
      desc: '以现代手法演绎江南传统园林意境',
      imgURL: require('../../../static/img/壹号院.jpg'),
    },
    {
      title: '苏州铂悦府',
      desc: '旭辉集团打造的第一个铂悦系示范区',
      imgURL: require('../../../static/img/铂悦府.jpg'),
    },
    {
      title: '嘉定北首创旭辉城',
      desc: '嘉定老城和新城双重辐射下的城市高品质社区',
      imgURL: require('../../../static/img/北首.png'),
    },
    {
      title: '苏州铂悦犀湖',
      desc: '从未来人居与东方传统融合中寻求灵感',
      imgURL: require('../../../static/img/铂悦犀湖.jpg'),
    },
    {
      title: '南京铂悦秦淮',
      desc: '壮观的廊架, 婉约的水景，让人流连忘返',
      imgURL: require('../../../static/img/秦淮.jpg'),
    },
  ],
};

export default (state = defaultState, action) => {
  return state;
};
