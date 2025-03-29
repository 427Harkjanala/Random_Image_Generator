
const imgContainer = document.querySelector('.img-container');

const btnEle = document.querySelector('.btn');


btnEle.addEventListener('click',()=>{
    imgNum = 6;
    addImage();
})

function addImage(){
    for(let i = 0;i<imgNum;i++){
        const newImg =  document.createElement('img');
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
        imgContainer.appendChild(newImg);
    }
}