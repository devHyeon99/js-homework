# Poster

---

썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.

---

#### 요구사항

>    <br>
>
> 1.  이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
>     a. 이벤트 위임
>     b. 반복문
>     <br>
> 2.  이미지와 색상의 데이터는 `data.js` 에서 불러와주세요.
>     <br>
> 3.  각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
>     a. 배경색 변경 ( colorB의 기본값은 `#000` 으로 한다 )
>
> ```jsx
> elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
> ```
>
> b. 이미지 변경
>
> ```jsx
> target.src = `./assets/${data.name}.jpeg`;
> target.alt = data.alt;
> ```
>
> 4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
>
> ```jsx
> target.textContent = data.name;
> ```
>
> 5. 함수를 분리시켜주세요.
>    a. `setBgColor` 함수
>    b. `setImage` 함수
>    c. `setNameText` 함수
>    <br>
> 6. 가독성이 좋은 코드로 리팩토링 해주세요.
>    <br>
