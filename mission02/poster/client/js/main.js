/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
import {
  data,
  setBgColor,
  setImage,
  setNameText,
  AudioPlayer,
} from "./index.js";

const nav = document.querySelector(".nav");
const elem = document.querySelector("body");
const target = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");

const audioPlayers = data.map(
  (item) => new AudioPlayer(`./assets/audio/${item.name}.m4a`)
);

function handleClick(e) {
  const li = e.target.closest("li");

  if (!li) return;

  // nav 안에 있는 모든 li 요소에서 'is-active' 클래스 제거
  const allLi = nav.querySelectorAll("li");
  allLi.forEach((li) => li.classList.remove("is-active"));

  // 클릭된 li 요소에 'is-active' 클래스 추가
  li.classList.add("is-active");

  const index = li.dataset.index - 1;
  const { color, name, alt } = data[index];

  // 배경색, 이미지, 텍스트 변경
  setBgColor(elem, ...color);
  setImage(target, name, alt);
  setNameText(nickName, name);

  audioPlayers.forEach((player) => player.stop());

  audioPlayers[index].play();
}

nav.addEventListener("click", handleClick);
