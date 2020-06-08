const defaultState = {
  bannerImgSrc:
    'https://lh3.googleusercontent.com/proxy/SjvEKEazLBCgXTuulsTm2SGTqHaNt565xlxPQHSTrzYrUIcIALSLT-xzj8rlB1X5jjDjvTg9oU7IayM6PSuSEpvDY3D8sbnNK_d8qFguWtmrQqAkdGs',
  SfqList: [
    {
      title: '北辰壹号院',
      desc: '暮听林泉乐，深居涧野中',
      imgURL: require('../../../static/img/SFQ/壹号院.jpg'),
    },
    {
      title: '苏州旭辉吴门府',
      desc: '通过对空间的分隔掌握来营造古典园林的韵味',
      imgURL: require('../../../static/img/SFQ/吴门府.jpg'),
    },
    {
      title: '长沙旭辉湖山赋',
      desc: '旭辉集团长沙置业公司2017年度的高端标杆项目',
      imgURL: require('../../../static/img/SFQ/湖山赋.jpg'),
    },
    {
      title: '苏州旭辉铂悦府',
      desc: '旭辉集团打造的第一个铂悦系项目',
      imgURL: require('../../../static/img/SFQ/铂悦府.jpg'),
    },
    {
      title: '上坤狮山四季',
      desc: '城在青山绿水间，人在鸟语花香中',
      imgURL: require('../../../static/img/SFQ/上坤狮山.jpg'),
    },
    {
      title: '嘉定北首创旭辉城',
      desc: '嘉定老城和新城双重辐射下的城市高品质社区',
      imgURL: require('../../../static/img/SFQ/首创.png'),
    },
    {
      title: '南京旭辉铂悦秦淮',
      desc: '精致壮观的廊架映，大片干干净净的水景',
      imgURL: require('../../../static/img/SFQ/秦淮.jpg'),
    },
    {
      title: '苏州旭辉铂悦犀湖',
      desc: '从未来人居与东方传统融合寻求美感',
      imgURL: require('../../../static/img/SFQ/犀湖.jpg'),
    },
  ],
  JfqList: [
    {
      title: '万科琥珀臻园',
      desc: '北区人文生态第一城',
      imgURL: require('../../../static/img/JFQ/琥珀.jpg'),
    },
    {
      title: '阳光欧洲城',
      desc: '将建筑与自然紧密地连接在一起',
      imgURL: require('../../../static/img/JFQ/欧洲.jpg'),
    },
    {
      title: '金虹桥国际中心',
      desc: '虹桥地区最醒目、最具地标意义的城市综合体',
      imgURL: require('../../../static/img/JFQ/虹桥.png'),
    },
    {
      title: '上海北外滩白玉兰广场',
      desc: '采用公司独创先进的反季节种植技术',
      imgURL: require('../../../static/img/JFQ/白玉兰.jpg'),
    },
  ],
};

export default (state = defaultState) => {
  return state;
};
