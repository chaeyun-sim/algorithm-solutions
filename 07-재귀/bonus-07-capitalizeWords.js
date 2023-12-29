// 09. 보너스 도전 재귀문제

// @TODO - capitalizeWords라는 재귀 함수를 작성하시오. 단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환합니다.

function capitalizeWords(arr) {
  if (arr.length < 1) return arr;
  const firstStr = arr[0].toUpperCase();
  return [firstStr, ...capitalizeWords(arr.slice(1))];
}
