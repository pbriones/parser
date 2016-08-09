module.exports.isNumber = function (text) {
  if (isNaN(Number(text))) {
    return false;
  }
  return true;
}
module.exports.remove = function (text, exp) {
  var regex = new RegExp(exp, 'gi')
  return text.replace(regex, '')
}

module.exports.hasShortDate = function (text) {
  var match = text.match(/\d{2}(?:\-|\/|\.)\d{2}(?:\-|\/|\.)(?:\d{4}|\d{2})/g);
  if(match !== null){
    return match[0].replace(/(?:\-|\/|\.)/g, '/');
  }
  return '';
}