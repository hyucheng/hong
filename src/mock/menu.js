
const first = [
  /*{
    id: 1,
    label: "公共APP数据",
    href: '#',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [],
  }, {
    id: 2,
    label: "定制APP数据",
    href: '#',
    icon: 'icon-shujuzhanshi2',
    meta: {
      roles: ['admin'],
    },
    children: [],
  }*/
];
const second = [
  {
    id: 3,
    label: "活动策划",
    href: '/operateManage/businessOperate/activeManage',
    icon: 'icon-active1',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },
  {
    id: 4,
    label: "消息资讯",
    href: '/operateManage/businessOperate/messageSend',
    icon: 'icon-listenMessage',
    children: []
  },
  {
    id: 5,
    label: "证照生活",
    icon: 'icon-licenseLife1',
    href:'/operateManage/businessOperate/licenseLife',
    meta: {

    },
    children: [

    ]
  },
  {
    id: 6,
    label: "APP维护",
    href: '/operateManage/appCustom/',
    icon: 'icon-weihu',
    meta: {
      roles: ['admin'],
    },
    children: [
      {
        id: 7,
        label: "版本管理",
        href: '/operateManage/appCustom/mtversion',
        // icon: 'icon-caidanguanli',
        children: []
      },
      {
        id: 8,
        label: "广告页管理",
        href: '/operateManage/businessOperate/startPage',
        // icon: 'icon-caidanguanli',
        children: []
      }
    ],
  }
]
const third = [
  {
    id: 9,
    label: "区域管理",
    href: '/platformManage/areaManage',
    icon: 'icon-areaManage1',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },
  {
    id: 10,
    label: "APP定制",
    href: '#',
    icon: 'icon-appCustom',
    meta: {
      roles: ['admin'],
    },
    children: [
      {
        id: 11,
        label: "APP维护",
        href: '/platformManage/appCustom/',
        // icon: 'icon-yonghuguanli',
        children: []
      }, {
        id: 12,
        label: "广告页管理",
        href: '/platformManage/startPage',
        // icon: 'icon-jiaoseguanli',
        children: []
      },
      {
        id: 13,
        label: "版本管理",
        href: '/platformManage/appCustom/mtversion',
        // icon: 'icon-jiaoseguanli',
        children: []
      },
    ],
  },
  {
    id: 40,
    label: 'FAQ管理',
    href: '/platformManage/appCustom/mtversion',
    children: []
  }
]
const four = [
  {
    id: 14,
    label: "服务运行监控",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },
  {
    id: 15,
    label: "系统异常日志",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },{
    id: 16,
    label: "系统操作日志",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },{
    id: 17,
    label: "系统登录日志",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },{
    id: 18,
    label: "版本管理",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },{
    id: 19,
    label: "意见管理",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  }
]
const five = [
  {
    id: 20,
    label: "服务管理",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },
  {
    id: 21,
    label: "用户管理",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },
  {
    id: 22,
    label: "角色管理",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },
  {
    id: 23,
    label: "系统异常参数",
    href: '/operateManage/areaManage/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  }
]
const six = [
  {
    id: 24,
    label: "APP基础管理",
    icon: 'icon-appBaseManage',
    href:'',
    meta: {

    },
    children: [
      {
        id: 25,
        label: "基础活动配置",
        href: '/systemManage/appBaseManage/baseActiveConfig',
        // icon: 'icon-yonghuguanli',
        children: []
      }, {
        id: 26,
        label: "基础城市生活应用配置",
        href: '/systemManage/appBaseManage/baseCityLifeConfig/',
        // icon: 'icon-jiaoseguanli',
        children: []
      },
      {
        id: 27,
        label: "用户协议配置",
        href: '/systemManage/appBaseManage/userProtocol/',
        // icon: 'icon-caidanguanli',
        children: []
      },
      {
        id: 28,
        label: "联系方式配置",
        href: '/systemManage/appBaseManage/contactConfig/',
        // icon: 'icon-caidanguanli',
        children: []
      },
      {
        id: 29,
        label: "主题配置",
        href: '/systemManage/appBaseManage/themeConfig/',
        // icon: 'icon-caidanguanli',
        children: []
      },
      {
        id: 30,
        label: "证照类型配置",
        href: '/systemManage/appBaseManage/licenseTypeConfig/',
        // icon: 'icon-caidanguanli',
        children: []
      },
      {
        id: 31,
        label: "数据规则配置",
        href: '/systemManage/appBaseManage/activeNumConfig/',
        // icon: 'icon-caidanguanli',
        children: []
      }
    ]
  },
  {
    id: 32,
    label: "用户管理",
    href: '/systemManage/userManage/',
    icon: 'icon-userManage',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },
  {
    id: 33,
    label: "角色管理",
    href: '/systemManage/roleManage/',
    icon: 'icon-jueseManage',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },
  /*{
    id: 34,
    label: "系统参数",
    href: '/systemManage/systemParams/',
    icon: 'icon-quanxian',
    meta: {
      roles: ['admin'],
    },
    children: [

    ],
  },*/
]

/*export const menu = [first,second,third,four,five,six];*/
export const menu = [first,second,third,six];

