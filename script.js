const catBtn=document.querySelector('button')
const img=document.querySelector('div')
const catGenerator=function(){
 fetch("https://api.thecatapi.com/v1/images/search?size=full")
   .then((response) => response.json())
   .then(
     (json) =>
       (img.innerHTML = `<img style="height: 300px;width: 300px;" src="${json[0].url}" alt="">`)
   );}
   catBtn.addEventListener('click',catGenerator)

