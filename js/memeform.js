var currentMeme = new Meme();
function initMemeEditor() {
  var form = document.forms["meme-form"];
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
    renderMeme();
  });
  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    renderMeme();
  });
  form["imageId"].addEventListener("change", function (evt) {
    currentMeme.imageId = Number(evt.target.value);
    renderMeme();
  });
  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
    renderMeme();
  });
  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
    renderMeme();
  });
  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    renderMeme();
  });
  form["fontSize"].addEventListener("input", function (evt) {
    currentMeme.fontSize = Number(evt.target.value);
    renderMeme();
  });
  loadSelectImages(images);
  // form['fontWeight'].addEventListener('input',function(evt){
  //     currentMeme.fontWeight=evt.target.value;
  // })
  function renderMeme(meme) {
    if (undefined === meme) {
      meme = currentMeme;
    }
    var imgElement = svg.querySelector("image");
    var img = images.find(function (img) {
      return img.id === meme.imageId;
    });
    imgElement.setAttribute("xlink:href", undefined != img ? img.url:"");
    var svg = document.querySelector("#editor-viewer svg");
    svg.setAttribute("viewBox",`0 0 ${undefined !== img ? img.w :500} ${undefined !== img ?img.h :500}`);
    textElement.style.fill = meme.color;
    textElement.setAttribute("font-size", meme.fontSize);
    textElement.style.textDecoration = meme.underline ? "underline" : "none";
    textElement.innerHTML = meme.text;
    textElement.setAttribute("x", meme.x);
    textElement.setAttribute("y", meme.y);
 
  }
}

function loadSelectImages(images) {
  var select = document.forms["meme-form"]["imageId"];
  var children = select.children[0].cloneNode(true);
  select.innerHTML = "";
  select.appendChild(children);
  var optBase = document.createElement("option");
  images.forEach(function (img) {
    var opt = optBase.cloneNode(true);
    opt.value = img.id;
    opt.innerHTML = img.titre;
    select.appendChild(opt);
  });
}
