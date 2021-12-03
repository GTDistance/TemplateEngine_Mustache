import parseTemplateToTokens from './paseTemplateToTokens'
import renderTemplate from './renderTemplate'

window.Thomas_TemplateEngine = {
  render(templateStr,data) {
    console.log('123')
    //针对模板字符串工作
    const tokens = parseTemplateToTokens(templateStr)
   console.log('tokens',tokens)
   //将tokens渲染成template
   const domStr = renderTemplate(tokens,data)
   console.log('domStr',domStr)
   return domStr
  },
}