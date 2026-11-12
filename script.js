(() => {
  const originalTitle = document.title;
  const attentionMessage = "Come Back!";
  let blinkEvent = null;

  function startBlinkingTitle() {
    if (blinkEvent !== null) return;
    blinkEvent = window.setInterval(() => {
      document.title = document.title === attentionMessage
        ? originalTitle
        : attentionMessage;
    }, 1000);
  }

  function stopBlinkingTitle() {
    if (blinkEvent !== null) {
      window.clearInterval(blinkEvent);
      blinkEvent = null;
    }
    document.title = originalTitle;
  }

  // The browser fires visibilitychange when the user switches tabs/apps.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) startBlinkingTitle();
    else stopBlinkingTitle();
  });

  // Restore the normal title when the page is closed or navigated away.
  window.addEventListener("pagehide", stopBlinkingTitle);

  const feedback = document.querySelector("#feedback");
  document.querySelector("#yesButton").addEventListener("click", () => {
    feedback.textContent = "Awesome! Try switching to another tab.";
  });
  document.querySelector("#ofCourseButton").addEventListener("click", () => {
    feedback.textContent = "Great! Switch tabs and watch the browser title.";
  });
})();
