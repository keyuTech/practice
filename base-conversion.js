// 实现10进制数字转换为N进制数字的字符串表示，2 <= N <= 16

// Number(1234).toString(16)

Number.prototype.transformByBase = function (base) {
  // 除基取余
  let num = this;
  let result = [];
  let prefix = '';
  if (num < 0) {
    prefix = '-';
    num = -num
  }
  const resMap = ['A', 'B', 'C', 'D', 'E', 'F'];
  while (num > 0) {
    const res = num % base
    num = Math.floor(num / base)
    result.push(res > 9 ? resMap[res - 10] : res)
  }
  return `${prefix}${result.reverse().join('')}`
};

const r = Number(1234).transformByBase(16)
console.log(r);
