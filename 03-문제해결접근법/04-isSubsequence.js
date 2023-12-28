// @TODO - 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

function isSubsequence(str1, str2) {
  let cnt = 0;
  let i = 0;
  let j = 0;

  while (i <= str1.length) {
    if (cnt === str1.length) {
      return true;
    }

    if (str1[i] === str2[j]) {
      cnt++;
      i++;
    } else {
      j++;
    }
  }
  return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
