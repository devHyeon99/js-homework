const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const form = document.querySelector(".login-form");

// 1. 최상위 부모에게 이벤트를 위임하여 form의 모든 자식 요소에서 발생하는 input을 처리
//  1.1 위와 같은 이벤트 위임 패턴으로 이벤트 핸들러를 개별 요소에 직접 연결하는 대신, 상위 요소에 하나의 핸들러만 연결하여 메모리 사용량을 줄일 수 있음.
// 2. 본 과제에서는 다루지 않는 로그인 상태유지, IP 보안 ON,OFF 의 이벤트는 발생하여도 분기 처리를 통해 이벤트를 무시함.
// 3. 수업 과정에서 배운 throttle과 debounce 중에서 debounce를 사용하여 이벤트 처리를 하였음.
//  3.1 이유는 텍스트 입력이 끝날때 까지 기다렸다가 호출 되는것이 가장 적합할거 같아서 사용함.
// 4. 삼항 연산자를 통해 이벤트를 발생시킨 타겟이 userEmail이면 emailReg 검증 함수를 호출, 아니라면 pwReg 검증 함수를 호출.

form.addEventListener(
  "input",
  debounce((e) => {
    const inputElement = e.target;

    // 'loginState'와 'loginIp' 요소에서 발생한 이벤트는 무시
    if (inputElement.id === "loginState" || inputElement.id === "loginIp") {
      return;
    }

    const validationFunction =
      inputElement.id === "userEmail" ? emailReg : pwReg;

    if (!validationFunction(inputElement.value)) {
      inputElement.classList.add("is--invalid");
    } else {
      inputElement.classList.remove("is--invalid");
    }
  })
);

// 1. form 태그의 submit 이벤트를 이용하여 로그인 기능을 구현 하였습니다.
// 2. userEmail, userPassword가 빈값일 경우 return 반환
// 3. userEmail, userPassword가 모두 일치할 경우 welcome.html로 이동. 틀릴시 alert 이벤트 처리
form.addEventListener("submit", (e) => {
  e.preventDefault(); // 폼의 기본 제출 동작을 무시

  const userEmail = form.querySelector("#userEmail").value;
  const userPassword = form.querySelector("#userPassword").value;

  if (userEmail == "" || userPassword == "") {
    alert("아이디 혹은 비밀번호를 입력해주세요");
    return;
  }

  if (userEmail === user.id && userPassword === user.pw)
    window.location.href = "/mission01/naver_login/welcome.html";
  else alert("아이디 혹은 비밀번호 일치하지 않음");
});

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function debounce(callback, limit = 500) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}
