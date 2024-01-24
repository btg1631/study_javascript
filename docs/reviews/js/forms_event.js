// button에 id 지정 후 불러오기
radio_delete = document.querySelector("#radio_delete");
radio_show = document.querySelector("#radio_show");

radio_delete.addEventListener('click', (radio_delete) => {
    // delete - 기존 코드를 messages 내용으로 대체
    let radio_button = document.querySelector("#radio_button");
    messages = "<div></div>";
    radio_button.innerHTML = messages;
});
radio_show.addEventListener('click', (radio_show) => {
    // reshow - 기존 코드 다시 불러오기
    let radio_button = document.querySelector("#radio_button");
    messages = '<div id="radio_button"><div class="form-check"><label for="hopedoglang">강아지 말 희망</label><input class="form-check-input" type="radio" name="hope_lang" value="dog_lang" id="hopedoglang"></div><div class="form-check"><label class="form-check-label" for="hopecatlang-label">고양이 말 희망</label><input class="form-check-input" type="radio" name="hope_lang" value="cat_lang" id="hopecatlang"></div></div>';
    radio_button.innerHTML = messages;
});

// option - select 선택시 consol에 값 표시
carcompanyname = document.querySelector("#carcompanyname");
carcompanyname.addEventListener("change", (event) => {
    console.log(`${event.target.value}`);
});