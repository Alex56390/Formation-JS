var uneVariableLambda
/**
 * fonction d'initialisation
 * @returns(undefined) aucun retour
 */
function init(){
    var currentDate=new Date();
    console.log(currentDate.toISOString());
    var footer=document.getElementsByTagName('footer')[0];
    footer.innerHTML=currentDate.toISOString();
    footer.style.backgroundColor='rgba(50,50,50,0.3)';
    footer.style.color='white';
    footer.style.fontStyle='italic';
    footer.style.textDecoration='Underline';
    footer.style.fontWeight='900';
}
document.addEventListener('DOMContentLoaded',function(evt){
    console.log(evt);
    init();
})