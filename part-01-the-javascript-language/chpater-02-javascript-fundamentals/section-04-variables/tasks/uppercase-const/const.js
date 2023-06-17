const date = new Date(); // 현재 날짜와 시간
const thisYear = date.getFullYear(); // 현재 년도

// 생일을 이용한 나이 도출 함수
function getAge(BIRTHDAY) {
  const yearOfBirth = BIRTHDAY.slice(6, 10); // 태어난 년도

  return thisYear - yearOfBirth; // 나이 = 현재 년도 - 태어난 년도
}

/*
 * BIRTHDAY은 실행 이전에 값을 알 수 있는 상수이다.
 * 따라서 대문자 상수로 표기해야 한다.
 */
const BIRTHDAY = "18.04.1982"; // 태어난 날짜 정보
/*
 * 반면 age는 상수이지만 런타임 과정에서 계산된 값이다.
 * 따라서 일반적인 변수와 마찬가지로 카멜 표기법으로 표기해야 한다.
 */
const age = getAge(BIRTHDAY); // 나이
