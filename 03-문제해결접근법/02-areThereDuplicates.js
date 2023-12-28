// @TODO - 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.  빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

function areThereDuplicates(...args) {
  if (!args) return true;

  const obj = {};
  args.forEach(item => (!obj[item] ? (obj[item] = 1) : obj[item]++));

  for (const key of Object.keys(obj)) {
    if (obj[key] >= 2) {
      return true;
    }
  }

  return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
