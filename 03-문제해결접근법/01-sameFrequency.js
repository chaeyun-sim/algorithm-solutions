// @TODO - sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

function sameFrequency(num1, num2) {
  const count1 = {};
  const count2 = {};

  String(num1)
    .split('')
    .forEach(val => (!count1[val] ? (count1[val] = 1) : count1[val]++));
  String(num2)
    .split('')
    .forEach(val => (!count2[val] ? (count2[val] = 1) : count2[val]++));

  for (let key of Object.keys(count1)) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
