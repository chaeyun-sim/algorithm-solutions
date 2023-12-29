// 09. 보너스 도전 재귀문제

// @TODO - 객체를 받아 숫자인 모든 값을 찾아 문자열로 변환하는 StringifyNumbers라는 함수를 작성하시오. 재귀(Recursion) 함수는 이 문제를 해결하는 좋은 방법이 될 것입니다!

function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

// 생각보다 너무 어려웠다..
