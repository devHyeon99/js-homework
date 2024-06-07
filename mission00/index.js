// 1. 문제 설명

// 문제: 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.

// 설명: 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.

function getValueAtObject(obj, key) {
  return Object.hasOwn(obj, key) ? obj[key] : "Error !";
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !

// 2. 문제 설명

// 문제: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.

// 설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.

// 추가 설명
// - 배열의 인덱스는 0부터 시작하며, 주어진 인덱스가 배열의 유효한 범위 내에 있는지 확인해야 합니다.
// - 인수로 받은 대상이 배열이 아닐 경우 에러를 생성하고 생성한 에러를 반환해야 합니다.
// - 유효한 인덱스일 경우 해당 인덱스의 값을 반환하고, 그렇지 않으면  에러를 생성하고 생성한 에러를 반환해야 합니다.

function getNumberAtArray(arr, index) {
  // 배열의 길이는 1부터 시작하므로 인덱스와 맞추기 위해 1을 빼고 범위 비교, index가 0 이하, arr 파라미터가 배열이 아닐시에 에러
  if (arr.length - 1 < index || index < 0 || !Array.isArray(arr))
    return "Error !";

  return arr[index];
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
console.log(getNumberAtArray({ 1: "2" }, 4)); // Error!
console.log(getNumberAtArray([{ 1: "2" }], 0)); // {1: '2'}
console.log(getNumberAtArray([{ 1: "2" }], 1)); // Error!
