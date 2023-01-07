const team1Score = document.querySelector(".score_team1 .value1");
const team2Score = document.querySelector(".score_team2 .value2");

team1Score.addEventListener("pointerdown", handlePointerDown);
team1Score.addEventListener("pointerup", handlePointerUp);

team2Score.addEventListener("pointerdown", handlePointerDown);
team2Score.addEventListener("pointerup", handlePointerUp);

let initialY = null;

function handlePointerDown(event) {
  initialY = event.clientY;
}

function handlePointerUp(event) {
  if (initialY === null) {
    return;
  }

  const currentY = event.clientY;
  const diffY = initialY - currentY;

  if (diffY > 0) {
    // Swipe ke atas
    if (event.target.classList.contains("value1")) {
      if (team1Score.textContent < 21) {
        team1Score.textContent = parseInt(team1Score.textContent) + 1;
      }
    } else if (event.target.classList.contains("value2")) {
      if (team2Score.textContent < 21) {
        team2Score.textContent = parseInt(team2Score.textContent) + 1;
      }
    }
    
  } else {
    // Swipe ke bawah
    if (event.target.classList.contains("value1")) {
      if (team1Score.textContent > 0) {
        team1Score.textContent = parseInt(team1Score.textContent) - 1;
      }
    } else if (event.target.classList.contains("value2")) {
      if (team2Score.textContent > 0) {
        team2Score.textContent = parseInt(team2Score.textContent) - 1;
      }
    }
  }

  initialY = null;
}


team1Score.addEventListener("touchstart", handleTouchStart);
team1Score.addEventListener("touchend", handleTouchEnd);

team2Score.addEventListener("touchstart", handleTouchStart);
team2Score.addEventListener("touchend", handleTouchEnd);

function handleTouchStart(event) {
  initialY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  if (initialY === null) {
    return;
  }

  const currentY = event.changedTouches[0].clientY;
  const diffY = initialY - currentY;

  if (diffY > 0) {
    // Swipe ke atas mobile
    if (event.target.classList.contains("value1")) {
      if (team1Score.textContent < 21) {
        team1Score.textContent = parseInt(team1Score.textContent) + 1;
      }
    } else if (event.target.classList.contains("value2")) {
      if (team2Score.textContent < 21) {
        team2Score.textContent = parseInt(team2Score.textContent) + 1;
      }
    }
    
  } else {
    // Swipe ke bawah mobile
    if (event.target.classList.contains("value1")) {
      if (team1Score.textContent > 0) {
        team1Score.textContent = parseInt(team1Score.textContent) - 1;
      }
    } else if (event.target.classList.contains("value2")) {
      if (team2Score.textContent > 0) {
        team2Score.textContent = parseInt(team2Score.textContent) - 1;
      }
    }
  }

  initialY = null;
}
