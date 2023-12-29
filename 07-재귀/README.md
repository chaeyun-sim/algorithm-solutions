# ⭐️ 재귀

## 재귀 함수란?

스스로를 호출하여 내부적으로 로직을 반복하다가, 일정 조건이 만족되면 함수를 탈출하여 결과를 출력한다.

반드시 `중단점`과 `다른 입력값`이 있어야한다.

<br />

## 일반적인 재귀에서 흔히 발생하는 문제점

1. 종료 조건이 없거나 잘못된 경우, RangeError: Maximum call stack size exceeded 에러가 발생하게 된다.

```js
function factorial(num) {
  return num * factorial(num - 1);
}
```

위 코드에서는 종료 조건이 없기 때문에 재귀가 종료되지 않고 에러를 발생시킨다.

2. 잘못된 값을 반환하거나 없는 경우, 1번과 같이 RangeError가 발생하게 된다.

```js
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial('');
}
```

위 코드에서는 반환 값으로 Number를 반환해야하지만, 문자열을 반환하고 있기 때문에 에러가 발생한다.

3. 재귀 함수가 무한히 자기 자신을 호출할 경우 스택 오버플로우가 발생한다.

```js
function factorial(num) {
  factorial(num);
}
```

<br />

## 헬퍼 메소드 재귀

현재까지 작성한 코드는 모두 `단일 단독 함수(single standalone function)`이지만, 같이 내부의 재귀 함수 즉 헬퍼 메소드 재귀를 사용할 수도 있다.

```js
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // < 여기!
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

외부에서 빈 배열을 만들어 모든 데이터를 입력한 뒤, 헬퍼 함수를 호출해서 연산을 수행하는 형태이다.

<br />

## 순수 재귀

필요한 모든 코드가 함수 자체에 포함되어있어 외부 데이터 구조를 사용하지 않는 재귀이다.

```js
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```
