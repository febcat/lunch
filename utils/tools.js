//随机生成十六进制颜色
export const randomHexColor = () => {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  return 'rgba('+ r +','+ g +','+ b +', .5)';
}


export const getRandom = (m, n) => {
  return Math.floor(Math.random()*(m-n+1)+n)
}
