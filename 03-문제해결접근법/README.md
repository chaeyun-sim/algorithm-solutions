# ⭐️ 문제 해결 패턴

- 빈도 카운터 (frequency counter)
- 다중 포인터 (multiple pointers)
- 슬라이딩 윈도우 (sliding window)
- 분할 정복 (divide and conquer)
- 다이나믹 프로그래밍
- 탐욕 알고리즘 (greedy algorithms)
- 백트래킹 (backtracking)

<br />

## 빈도수 세기 패턴 (frequency counter)

자바스크립트 객체를 사용하여 다양한 값과 빈도를 수집한다.

### 기존 코드

```js
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		const value = arr1[i]
		const index = arr2.findIndex(value ** 2);

		if (index === -1) {
			return false;
		}
		arr2.splice(index, 1
	}
	return true;
}
```

### 빈도 카운터 패턴으로 리팩토링된 코드

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key of frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}
```

<br />

## 다중 포인터 패턴 (multi pointers pattern)

인덱스나 위치에 해당하는 포인터나 값을 만든 다음, 특정 조건에 따라 특정 지점 또는 양쪽 지점을 향해 이동하는 패턴이다.

### 기존 코드

```js
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
```

### 다중 포인터 패턴으로 리팩토링된 코드

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

<br />

## 기준점 간 이동 배열 패턴 (sliding window)

배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인 데이터의 하위 집합을 찾는 경우에 사용하는 패턴이다.

### 기존 코드

```js
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}
```

### 기준점 간 이동 배열 패턴으로 리팩토링한 코드

```js
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // 선택한 배열의 첫번째 값을 제거하고 그다음 값을 추가하기
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

<br />

## 분할 정복 패턴 (divide and conquer)

세분화하여 조각마다 평가한 뒤 다시 결합하여 하나로 만들어 사용하는 패턴이다.

### 기존 코드

```js
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
```

### 이진 탐색으로 리팩토링한 코드

```js
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```
