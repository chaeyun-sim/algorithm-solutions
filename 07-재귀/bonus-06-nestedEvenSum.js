// 09. 보너스 도전 재귀문제

// @TODO - nestedEvenSum이라는 재귀 함수를 작성하시오. 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수입니다.

function nestedEvenSum(obj) {
  let total = 0;

  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === 'number' && !(obj[key] % 2)) {
      total += obj[key];
    } else if (typeof obj[key] === 'object') {
      total += nestedEvenSum(obj[key]);
    }
  }

  return total;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

//
//
// @NOTE - 강의 풀이
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// sum을 인수로 주는 방법도 있다.
