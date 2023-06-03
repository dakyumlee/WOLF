const introTitle = document.getElementsByClassName("intro__title")[0];

const title = "W O L F";

let cnt = 0;
let timer = 0;

function typingIntroTitle() {
  let character = title[cnt++];

  if (character === "\n") {
    introTitle.innerHTML = introTitle.innerHTML + "<br/>";
  } else {
    introTitle.innerHTML = introTitle.innerHTML + character;
  }

  if (cnt === title.length) {
    clearInterval(timer);
    return;
  }
}

window.onload = function () {
  timer = setInterval(typingIntroTitle, 200);
};

function t() {
  let garb = document.getElementById("nameInput").value;

  let t = [
    "당신이 염려하던" + garb + "는 아무도 모르는 곳에 잘 버려졌습니다.",
  ];

  let modal = document.createElement("div");
  modal.innerHTML = `
    <div class="modal" style="display: block;">
      <div class="modal-content">
        <h2>당신의 쓰레기통</h2>
        <p>${t}</p>
        <br>
        <button onclick="closeModal()">닫기</button>
      </div>
    </div>
    <style>
      @font-face {
        font-family: 'Chosunilbo_myungjo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }

      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
      }

      .modal-content {
        background-color: #D984A3;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #D984A3;
        width: 400px;
        text-align: center;
      }

      .modal-content h2 {
        font-family: 'Chosunilbo_myungjo';
        margin-top: 0;
        font-weight: bold;
        color: #0F88F2;
      }

      .modal-content p {
        font-family: 'Chosunilbo_myungjo';
        font-size: 18px;
        font-weight: bold;
        color: #0F88F2;
      }
    </style>
  `;

  document.body.appendChild(modal);

  window.closeModal = function () {
    modal.style.display = "none";
  };
}

function showLetters() {
    let Messages = [
        "행복하고 환상적인 세계에서 자유롭게 날아다니는 꿈을 꾸세요. 꿈은 자유로움과 무한한 가능성을 상징합니다.",
        "아름다운 자연 속에서 푸른 잔디 위에 누워 햇살을 받으며 평온한 꿈을 꾸세요. 여유와 평화로운 순간을 경험할 수 있을 것입니다.",
        "사랑과 행복으로 가득한 가족과 함께하는 따뜻한 꿈을 꾸세요. 가족들과의 소중한 시간을 공유하며 행복을 느낄 수 있을 것입니다.",
        "세계 일주를 하며 다양한 문화와 사람들을 만나는 모험적인 꿈을 꾸세요. 새로운 경험과 발견으로 인생을 더욱 풍요롭게 만들 수 있을 것입니다.",
        "당신의 열망과 열정을 이루기 위해 도전하는 꿈을 꾸세요. 성취감과 성공의 기쁨을 경험할 수 있을 것입니다.",
        "아름다운 음악과 춤으로 가득 찬 무대 위에서 자유롭게 표현하는 꿈을 꾸세요. 예술의 감동과 자신의 재능을 발휘할 수 있을 것입니다.",
        "마법의 세계에서 모험을 떠나 신비로운 경험을 하는 꿈을 꾸세요. 상상력과 창의력을 자유롭게 발휘할 수 있을 것입니다.",
        "당신이 사랑하고 존경하는 분과 함께 아름다운 추억을 만드는 로맨틱한 꿈을 꾸세요. 사랑과 행복으로 가득한 순간을 느낄 수 있을 것입니다.",
        "성공적인 사업을 창업하고 세계적으로 인정받는 기업가의 꿈을 꾸세요. 당신의 비전을 실현하며 사회에 긍정적인 영향을 줄 수 있을 것입니다.",
        "마법같은 여행을 떠나 아름다운 자연 경관과 풍요로운 음식을 즐기며 여유로운 꿈을 꾸세요. 휴식과 여유로움을 경험할 수 있을 것입니다."
    ];

  let random = Messages[Math.floor(Math.random() * Messages.length)];

  let modal = document.createElement("div");
  modal.innerHTML = `
    <div class="modal" style="display: block;">
      <div class="modal-content">
        <h2>Good night!</h2>
        <p>${random}</p>
        <br>
        <button onclick="closeModal()">닫기</button>
      </div>
    </div>
    <style>
        @font-face {
        font-family: 'Chosunilbo_myungjo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
      }

      .modal-content {
        background-color: #D984A3;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 400px;
        text-align: center;
      }

      .modal-content h2 {
        font-family: 'Chosunilbo_myungjo';
        margin-top: 0;
        font-weight: bold;
        color: #0F88F2;
      }

      .modal-content p {
        font-family: 'Chosunilbo_myungjo';
        font-size: 18px;
        font-weight: bold;
        color: #0F88F2;
      }
    </style>
  `;

  document.body.appendChild(modal);

  window.closeModal = function() {
    modal.style.display = "none";
  };
}
