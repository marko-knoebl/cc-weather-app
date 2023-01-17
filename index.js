const rootElement = document.getElementById("root");

const navbarComponent = () =>
  `<div style="padding: 12px; background-color: lightgrey;">${titleComponent()}</div>`;

const titleComponent = () =>
  `<h1 style="font-weight: 500; font-family: sans-serif">Weather</h1>`;

const aboutComponent = () => `
  <div>
    <h3>About</h3>
    Welcome to the weather service! Enter the name of a city for which you want to know the weather!
  </div>
`;

rootElement.innerHTML += navbarComponent();
rootElement.innerHTML += aboutComponent();
