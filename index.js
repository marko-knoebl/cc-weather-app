const rootElement = document.getElementById("root");

const headingComponent = () => {
  const heading = document.createElement("h1");
  heading.innerText = "Weather";
  return heading;
};

const aboutComponent = () => {
  const about = document.createElement("div");
  about.id = "about";
  about.innerHTML += `
    <h3>About</h3>
    Welcome to the weather service! Enter the name of a city for which you want to know the weather!
  `;
  const closeBtn = document.createElement("button");
  closeBtn.addEventListener("click", () => about.remove());
  closeBtn.innerText = "close";
  about.append(closeBtn);
  return about;
};

rootElement.appendChild(headingComponent());
rootElement.appendChild(aboutComponent());
