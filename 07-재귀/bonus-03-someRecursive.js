// 09. 보너스 도전 재귀문제

// @TODO - 배열과 콜백을 받아들이는 someRecursive 라는 재귀(recursive) 함수를 작성하시오. 이 함수는 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, fn) {
  if (arr.length < 1) return false;
  if (fn(arr[0])) {
    return true;
  } else {
    return someRecursive(arr.slice(1), fn);
  }
}

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], val => val > 10); // false
