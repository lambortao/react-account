import axios from 'axios'

/**
 * 后台接口函数
 * 
 * @param {string} url 接口的具体地址 - 必须
 * @param {obj} data 需要传到后台的文件 - 可选
 */
const __port = (url, param) => {
  let params = new URLSearchParams();
  Object.keys(param).forEach(key => {
    params.append(key, param[key])
  })
  let nowUrl = window.location.href;
  let newUlr = null;
  if (nowUrl.indexOf('http://localhost') > -1 || nowUrl.indexOf('http://192.168') > -1) {
    newUlr = `${url}`;
  } else {
    newUlr = `https://www.brp-crm.com/admin.php/${url}`;
  }
  return axios({
    url: newUlr,
    // url: `${url}`,
    method: 'post',
    data: params
  }).then(res => {
    if (res.status === 200) {
      return res.data
    }
  })
}

export default __port