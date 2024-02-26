 /**
   * 调用客户端提供给前端的方法
   * @param   {String}   methodName   调用方法名
   * @param   {String}   methodParam  调用方法的参数
   * @param   {String}   androidJsObj android 提供的对象名 
   * @return  {Any}                   返回值
   */
 function callMethod(methodName, methodParam = null, androidJsObj = 'androidJsObj') {
  let value;
  if (app) {
    if (ios && window.webkit?.messageHandlers?.[methodName]) {
      value = window.webkit.messageHandlers[methodName].postMessage(methodParam);
    } else if (android) {
      if (window[androidJsObj] && typeof window[androidJsObj] === 'object' && window[androidJsObj][methodName]) {
        if (methodParam) {
          typeof methodParam === 'object' && (methodParam = JSON.stringify(methodParam));
          value = window[androidJsObj][methodName](methodParam);
        } else {
          value = window[androidJsObj][methodName]();
        }
      }
    }
  }
  return value;
}