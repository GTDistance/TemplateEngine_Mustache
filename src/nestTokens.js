/**
 * 折叠tokens
 * @param {*} tokens
 */
export default function nestTokens(tokens) {
  const nestedTokens = []
  var sections = []
  let collector = nestedTokens//最精妙的地方就是这个收集器，简直太棒了。
  // 栈结构，存放小tokens，
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch (token[0]) {
      case '#': //入栈
        collector.push(token) //收集器中存入
        sections.push(token) //入栈
        collector = token[2] = []
        break
      case '/'://出栈
        sections.pop()
        collector =
          sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens
        break
      default:
        collector.push(token)
    }
  }
  return nestedTokens
}
