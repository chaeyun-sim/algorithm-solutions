// 09. 보너스 도전 재귀문제

// @TODO - 전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성하시오. 팔린드롬이 아닐 경우 false 를 반환합니다.

function isPalindrome(str) {
  if (str.length < 1) return true;
  if (str.slice(-1) === str[0]) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

isPalindrome('awesome'); // false
isPalindrome('foobar'); // false
isPalindrome('tacocat'); // true
isPalindrome('amanaplanacanalpanama'); // true
isPalindrome('amanaplanacanalpandemonium'); // false

// @NOTE
// str.slice(-1) 과 str.at(-1)의 차이가 뭘까? 왜 .slice(-1)만 통과하는걸까?

// at은 문자열 내의 ‘지정된 인덱스’의 문자를 반환하는 메서드로, 모든 경우에 해당 인덱스가 유효한지 확인하여 아닐 경우 undefined를 반환한다. 따라서 재귀적으로 문자열을 다루는 경우에 str의 길이가 1보다 작아질 있어 생각하지 못한 오류가 발생할 수 있다.
// 반면, slice는 인덱스 기반으로 문자열을 잘라내어 부분적으로 반환하기 때문에 마지막 문자를 가져올 수 있게 되는 것이다.
