import Scanner from './Scanner'
import nestTokens from './nestTokens'

/**
 * 将模板字符串变为tokens数组
 * @param {*} templateStr 
 */
export default function parseTemplateToTokens(templateStr){
  const tokens = []
  const scanner = new Scanner(templateStr)
  while(!scanner.eos()){
    const words = scanner.scanUtil('{{')
    if(words) {
      
      tokens.push(['text',words])
    }
    scanner.scan('{{')
    const words2 = scanner.scanUtil('}}')
    if(words2) {
      if(words2[0] == '#'){
        tokens.push(['#',words2.substring(1)])
      }else if(words2[0] == '/'){
        tokens.push(['/',words2.substring(1)])
      }else{
        tokens.push(['name',words2])
      }
    }
    scanner.scan('}}')
  }
  return nestTokens(tokens)
}