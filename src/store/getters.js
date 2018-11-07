const getters = {
  tag: state => state.tags.tag,
  website:state => state.common.website,
  userInfo: state => state.user.userInfo,
  theme: state => state.common.theme,
  isCollapse: state => state.common.isCollapse,
  isLock: state => state.common.isLock,
  isFullScren: state => state.common.isFullScren,
  lockPasswd: state => state.common.lockPasswd,
  tagList: state => state.tags.tagList,
  tagCurrent: state => state.tags.tagCurrent,
  tagWel: state => state.tags.tagWel,
  token: state => state.user.token,
  roles: state => state.user.roles,
  permission: state => state.user.permission,
  menu: state => state.user.menu,
  menuAll: state => state.user.menuAll,
  errLog: state => state.errLog.errLog,
  imgpath: state => state.common.imgpath,
  serviceUrl: state => state.common.serviceUrl,
  location: state => state.common.location,
  queryconditions: state => state.common.queryconditions
}
export default getters
