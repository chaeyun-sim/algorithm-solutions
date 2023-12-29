// @TODO - 밑과 지수를 받아들이는 power라는 함수를 작성합니다. 이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다. 이 함수는 Math.pow()의 기능을 모방해야 합니다. 음의 밑과 지수에 대해서는 신경쓰지 마세요.

function power(number, count) {
  if (count === 0) return 1;
  return number * power(number, count - 1);
}

power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16
