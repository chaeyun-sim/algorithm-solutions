// 09. 보너스 도전 재귀문제

// @TODO - capitalizeFirst라는 재귀 함수를 작성하시오. 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.

function capitalizeFirst(arr) {
  if (arr.length < 1) return arr;
  const newStr = arr[0][0].toUpperCase() + arr[0].slice(1);
  return [newStr, ...capitalizeFirst(arr.slice(1))];
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']
