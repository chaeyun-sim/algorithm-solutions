// 09. 보너스 도전 재귀문제

// @TODO - 문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 reverse함수를 작성합니다.

function reverse(str) {
  if (str.length <= 1) return str;
  return str.slice(-1) + reverse(str.slice(0, -1));
}

reverse('awesome'); // 'emosewa'
reverse('rithmschool'); // 'loohcsmhtir'
