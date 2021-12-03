import lookup from './lookup'
import renderTemplate from './renderTemplate'
export default function parseArray(token, data) {
  console.log('parseArray', token, data)
  const arr = lookup(data, token[1])
  console.log('arr', arr)
  let resultStr = ''
  arr.forEach((item) => {
    resultStr += renderTemplate(token[2], {
      ...item,
      '.': item,
    })
  })
  return resultStr
}
