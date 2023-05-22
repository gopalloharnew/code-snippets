export const snippets = [
  {
    title: "HTML Boilerplate code",
    language: "html",
    code: `&lt!DOCTYPE html&gt
&lthtml lang="en"&gt
  &lthead&gt
    &ltmeta charset="UTF-8" /&gt
    &ltmeta http-equiv="X-UA-Compatible" content="IE=edge" /&gt
    &ltmeta name="viewport" content="width=device-width, initial-scale=1.0" /&gt
    &ltstyle&gt&lt/style&gt
    &lttitle&gt&lt/title&gt
  &lt/head&gt
  &ltbody&gt
    &ltscript&gt&lt/script&gt
  &lt/body&gt
&lt/html&gt`,
  },
  {
    title: "Table",
    language: "html",
    code: `&lt;table&gt;
&lt;tr&gt;
  &lt;th&gt;Header 1&lt;/th&gt;
  &lt;th&gt;Header 2&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;td&gt;Data 1&lt;/td&gt;
  &lt;td&gt;Data 2&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;`,
  },
  {
    title: "searchbar like youtube",
    language: "html",
    code: `&lt;input
  id="search"
  autocapitalize="none"
  autocomplete="off"
  autocorrect="off"
  name="search_query"
  tabindex="0"
  type="text"
  spellcheck="false"
  placeholder="Search"
  aria-label="Search"
  aria-autocomplete="list"
  dir="ltr"
  class="ytd-searchbox"
  style="outline: none"
/&gt;`,
  },
  {
    title: "Animation Shorthand",
    language: "css",
    code: `.element{
  animation: name duration timing-function delay iteration-count direction fill-mode;
}`,
  },
  {
    title: "Animation Keyframes",
    language: "css",
    code: `@keyframes myAnimation {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}`,
  },
  {
    title: "Customize Scrollbar",
    language: "css",
    code: `::-webkit-scrollbar {
  width: 1rem; /* width of vertical scrollbar */
  height: 1rem; /* height of horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: hsl(0, 0%, 50%);
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: hsl(0, 0%, 40%);
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}`,
  },
  {
    title: "Mask Image Icon",
    language: "css",
    code: `.icon {
  /* add these */
  /* -webkit-mask-image: url();
  mask-image: url();
  --icon-size: ;
  --icon-color: ; */
  --size: var(--icon-size, 1rem);
  background-color: var(--icon-color);
  display: inline-block;
  flex-shrink: 0;
  height: var(--size);
  width: var(--size);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
  vertical-align: middle;
}`,
  },
  {
    title: "For Loop",
    language: "javascript",
    code: `for (let i = 0; i < length; i++) {
  // Code to execute in each iteration
}`,
  },
  {
    title: "Switch Case Statement",
    language: "javascript",
    code: `switch (choice) {
case 'A':
  // Code to execute for choice A
  break;
case 'B':
  // Code to execute for choice B
  break;
case 'C':
  // Code to execute for choice C
  break;
default:
  // Code to execute for any other choice
  break;
}`,
  },
  {
    title: "fetch using promises",
    language: "javascript",
    code: `fetch(url)
  .then(response => response.json())
  .then(data => {
    // Code to handle retrieved data
  })
  .catch(error => {
    // Code to handle errors
  });`,
  },
  {
    title: "fetch async await",
    language: "javascript",
    code: `async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    const data = await response.json();
    // Process the retrieved data
    console.log(data);
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}

// Usage example
fetchData('https://api.example.com/data');`,
  },
  {
    title: "try catch",
    language: "javascript",
    code: `try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
}`,
  },
  {
    title: "Array.reduce",
    language: "javascript",
    code: `const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);`,
  },
  {
    title: "request animation frame",
    language: "javascript",
    code: `let startTime;
const FPS = 60;

function animate(timestamp) {
  if (!startTime) startTime = timestamp;
  requestAnimationFrame(animate);
  if (elapsedTime < 1000 / FPS) return;

  const elapsedTime = timestamp - startTime;
  // Calculate any animation logic based on elapsed time

  // Code for animation logic goes here
}
requestAnimationFrame(animate);`,
  },
  {
    title: "Copy To Clipboard",
    language: "javascript",
    code: `function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error.message);
    }
  } else {
    const textarea = document.createElement("textarea");
    textarea.classList.add("visually-hidden");
    textarea.value = codeElement.innerText;
    /*
    .visually-hidden{
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 0px;
      height: 0px;
    }
    */
    document.body.append(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand("copy");
    textarea.remove();
  }
}`,
  },
];
