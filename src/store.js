const STORAGE_KEY = 'questionnaire';

export default {
  get(key=STORAGE_KEY) {
    return JSON.parse(window.localStorage.getItem(key));//将json字符串转换为对象
  },
  save(items, key=STORAGE_KEY) {
    window.localStorage.setItem(key, JSON.stringify(items));//从对象中解析出json字符串
  }
}