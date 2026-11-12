# Change Title When User Changes Tab

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/change-title-on-tab-switch/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 7.83-second screen recording.

## What the video demonstrates

The video is titled **Change Title When User Changes Tab**. It shows a browser tab initially titled `This is a Heading in level 1`. When the visitor switches to another tab, the page title alternates between the original title and `Come Back!`. When the visitor returns, the original title is restored and the blinking timer is cleared.

## Core JavaScript reconstructed from the visible code

```js
const pageTitle = document.title;
const attentionMessage = "Come Back!";
let blinkEvent = null;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    blinkEvent = setInterval(() => {
      document.title = document.title === attentionMessage
        ? pageTitle
        : attentionMessage;
    }, 1000);
  } else {
    clearInterval(blinkEvent);
    blinkEvent = null;
    document.title = pageTitle;
  }
});
```

The video’s source panel is small and compressed; the implementation above follows the readable logic and adds a guard against starting multiple intervals.

## Features

- Detects when the browser tab becomes hidden or visible.
- Alternates the browser tab title with `Come Back!` every second.
- Restores the original page title on return.
- Clears the interval when the page becomes active.
- Includes a small browser-tab preview and interactive demo buttons.
- No dependencies or build step.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000. Keep this tab open, switch to another browser tab for a few seconds, then return and observe the title change.

## Structure

```text
change-title-on-tab-switch/
├── index.html
├── style.css
├── script.js
└── README.md
```

Note: Browser tab titles are controlled by the page itself. The browser may throttle background timers in some situations, so the title may not update at precisely one-second intervals on every device.
