import { DOWNLOADED_KEY, SELECTED_KEY } from './constants';

const LS = localStorage;
// 持久化存储已经下载的id
const LSDownloadedManager = {
  cache: undefined,
  initCache() {
    const dListStr = LS.getItem(DOWNLOADED_KEY);
    if (dListStr === null) {
      this.cache = [];
      return;
    }
    this.cache = JSON.parse(dListStr);
  },
  /**
   * 添加id至已下载列表并保存
   * @param {number} id
   */
  add(id) {
    const dListStr = LS.getItem(DOWNLOADED_KEY);
    const dList = dListStr === null ? [] : JSON.parse(dListStr);
    dList.push(id);
    LS.setItem(DOWNLOADED_KEY, JSON.stringify(dList));
    this.cache = dList;
  },
  /**
   * 查询指定id是否在列表中
   * @param {number} id
   * @returns {boolean}
   */
  has(id) {
    if (!this.cache) {
      this.initCache();
    }
    const numberSet = new Set(this.cache);
    return numberSet.has(id);
  },
};

/**
 * 待下载视频详情
 * @typedef {Object} SelectedVideoInfo
 * @property {number} videoId 视频ID，不同清晰度ID相同
 * @property {string} videoTitle 视频标题
 * @property {string} videoUrl 视频下载链接
 * @property {string} videoRes 视频清晰度
 */

// 持久化存储已经选中、待下载的信息
const LSSelectedManager = {
  cache: undefined,
  initCache() {
    const dListStr = LS.getItem(SELECTED_KEY);
    if (dListStr === null) {
      this.cache = [];
      return;
    }
    this.cache = JSON.parse(dListStr);
  },
  /**
   * 添加视频信息至待下载列表
   * @param {SelectedVideoInfo} info 视频信息
   */
  add(info) {
    const dListStr = LS.getItem(SELECTED_KEY);
    const dList = dListStr === null ? [] : JSON.parse(dListStr);
    dList.push(info);
    LS.setItem(SELECTED_KEY, JSON.stringify(dList));
    this.cache = dList;
  },
  /**
   * 清空列表
   */
  clear() {
    this.cache = [];
    LS.removeItem(SELECTED_KEY);
  },
  /**
   * 获取待下载列表
   * @returns {SelectedVideoInfo[]} 待下载列表
   */
  getList() {
    if (!this.cache) {
      this.initCache();
    }
    return this.cache;
  },
};
export default { LSDownloadedManager, LSSelectedManager };
