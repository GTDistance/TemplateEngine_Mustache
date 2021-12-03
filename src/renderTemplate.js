import lookup from "./lookup"
import parseArray from "./parseArray"

/**
 * 将tokens数组变成dom字符串
 */
export default function renderTemplate(tokens, data) {
  let templateStr = ''
  tokens.forEach((token) => {
    if (token[0] == 'text') {
      templateStr += token[1]
    } else if (token[0] == 'name') {
      templateStr += lookup(data,token[1])
    }else if(token[0] == '#'){
      templateStr += parseArray(token,data)
    }
  })
  return templateStr
}
