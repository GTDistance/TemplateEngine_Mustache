/**
 * 寻找在dataObj 中，用连续点符号的keyname寻找属性
 */

export default function lookup(dataObj, keyName) {
  if (keyName.indexOf('.') != -1&& keyName!='.') {
    const keys = keyName.split('.')
    let temp = dataObj
    keys.forEach((key) => {
      temp = temp[key]
    })
    console.log('temp',temp)
    return temp
  }
  return dataObj[keyName]
}
