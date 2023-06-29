export class Meme {
  titre = "";
  text = "";
  x = 0;
  y = 20;
  imageId = 1;
  fontSize = 20;
  fontWeight = "500";
  underline = false;
  italic = false;
  color = "#000000";
  static render(meme, selecteurCss, img) {
    const svg = document.querySelector(selecteurCss +" svg");
    svg.setAttribute(
        "viewBox",
        `0 0 ${undefined !== img ? img.w : 500} ${
          undefined !== img ? img.h : 500
        }`
      );
    const imgElement = svg.querySelector("image");
    const textElement=svg.querySelector("text");
    imgElement.setAttribute("xlink:href", undefined != img ? img.url : "");
    textElement.style.fill = meme.color;
    textElement.setAttribute("font-size", meme.fontSize);
    textElement.style.textDecoration = meme.underline ? "underline" : "none";
    textElement.innerHTML = meme.text;
    textElement.setAttribute("x", meme.x);
    textElement.setAttribute("y", meme.y);
  }
}
