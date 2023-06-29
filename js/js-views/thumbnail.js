import { Meme } from "../Métier/Meme.js";
import { ressource } from "../Métier/Ressources.js";

const baseView = "#thumbnail";
const PREVIEW_CONTAINER="#thumbnail-container";
export const initThumbnail = () => {
  if (ressource.isLoaded) {
    initPreview();
  } else {
    ressource.loadRessources((res) => {
      initPreview();
    });
  }
};
const initPreview = () => {
    const ListContainer=document.querySelector(PREVIEW_CONTAINER)
    const basePreviewer=document.querySelector('#thumbnail-meme-')    
    ressource.memes.forEach(m=>{
        const newPreviewer=basePreviewer.cloneNode(true);
        newPreviewer.id+=m.id;
        newPreviewer.querySelector('a').href+=m.id;
        newPreviewer.querySelector('a>div').innerHTML=m.titre
        ListContainer.appendChild(newPreviewer);
        const img=ressource.images.find(im=>im.id===m.imageId)
        Meme.render(m,'#'+newPreviewer.id,img)
    }) 
};
