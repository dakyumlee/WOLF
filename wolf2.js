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

window.onload = function() {
    timer = setInterval(typingIntroTitle, 200);
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
    alert("[당신은 꿈을 꿉니다.]")

  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  

  function playGame(playerChoice) {
    let choices = ["1", "2", "3", "4", "5"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = determineWinner(playerChoice, computerChoice);
    document.getElementById("result").innerHTML = result;
  }
  
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "[당신은 안개 속에서 늑대를 마주칩니다. 당황하던 찰나, 늑대는 유유히 숲으로 돌아갑니다.]";
    } else if (
      (playerChoice === "1" && computerChoice === "2") ||
      (playerChoice === "1" && computerChoice === "3") ||
      (playerChoice === "1" && computerChoice === "4") ||
      (playerChoice === "1" && computerChoice === "5")
    ) {
      return "[당신은 늑대에게 쫓기는 꿈을 꿉니다. 당신은은 늑대를 피해 숲 속으로 도망가면서 다양한 어려움을 겪습니다. 하지만 마침내 당신은 숲 속에 있는 안전한 동굴을 찾아들어 늑대로부터 벗어납니다]";
    } else if (
        (playerChoice === "1" && computerChoice === "2") ||
        (playerChoice === "1" && computerChoice === "3") ||
        (playerChoice === "1" && computerChoice === "4") ||
        (playerChoice === "1" && computerChoice === "5")
      ) {
        return "[당신은 늑대에게 쫓기는 꿈을 꿉니다. 당신은은 늑대를 피해 숲 속으로 도망가면서 다양한 어려움을 겪습니다. 하지만 마침내 당신은 숲 속에 있는 안전한 동굴을 찾아들어 늑대로부터 벗어납니다]";
      } else if (
        (playerChoice === "2" && computerChoice === "3") ||
        (playerChoice === "2" && computerChoice === "4") ||
        (playerChoice === "2" && computerChoice === "5")
      ) {
        return "[꿈 속에서 당신은 산속으로 여행을 떠나며 아름다운 자연과 동물들을 만납니다. 그런데 어느 날, 당신은 늑대의 군무를 듣게 됩니다. 늑대는 고립된 동물들을 위협하고 있으며, 당신은 동물들과 협력하여 늑대의 악행을 막는 모험을 함께 합니다.]";
      } else if (
        (playerChoice === "3" && computerChoice === "4") ||
        (playerChoice === "3" && computerChoice === "5")
      ) {
        return "[당신은 늑대에게 납치되어 숲 속에 갇힙니다. 그러나 당신은 용감하게 늑대와 대결하며 늑대의 진짜 모습을 파악합니다. 당신은 늑대를 교묘하게 속이고 자유를 얻으며, 늑대는 결국 자신의 잘못을 깨닫게 됩니다.]";
       } else if (
        (playerChoice === "4" && computerChoice === "5")
      ) {
        return "[당신은 꿈 속에서 늑대가 되어 숲 속을 돌아다닙니다. 당신은 자신의 강인함을 발견하며 동물들과 친구가 되어가는 과정을 겪습니다. 이 꿈은 당신 자신의 내면을 탐구하고 변화를 받아들이는 것을 상징할 수 있습니다.]";
      }
      else {
      return "[당신은 꿈의 미로에서 서성이다가 마침내 꿈에서 깨어납니다.]";
    }
  }

  function dream() {
    let a = document.getElementById("value").value;
      document.getElementById("value2").innerHTML = a;
    }