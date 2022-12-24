async function getGif (searchTerm) {
  const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  
  
  const allData = res.data.data;
  
  const cont = document.querySelector('#container')
  
    const img = document.createElement('img');
    img.setAttribute('id', 'gifimg');
    const imgURLs = allData[0].images.original.url;
    img.src = imgURLs;
    cont.append(img);
  

  
  
  ;
 
}



const form = document.querySelector('#searchform');
const input = document.querySelector('#search');

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  getGif(input.value);
  
})

const rmv = document.querySelector('#remove');

rmv.addEventListener('click', function(e){

  const imgs = document.querySelectorAll('img')

  for(let img of imgs){
    const lastImg = imgs[imgs.length-1]
    lastImg.remove();
  }
  

  
})