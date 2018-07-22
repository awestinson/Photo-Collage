const apiKey = '563492ad6f91700001000001fa6acaae7b3944cfa79660412f124bb2';
let url = `https://api.pexels.com/v1/search?query=${'landscape'}&per_page=15&page=1`;
let imgUrl = [],newImgUrl = [];

document.addEventListener('keypress',(event) => {
    if(event.keyCode === 13) {
        let searchParameter = encodeURI(document.getElementById('photo').value);
        url = `https://api.pexels.com/v1/search?query=${searchParameter}&per_page=15&page=1`;
        fetch(url,{
            method : 'GET',
            headers : {
                Authorization : apiKey
            }
        }).then(res => res.json())
        .then(fres => {
            for(let i=0;i<9;i++) {
                newImgUrl[i] = fres.photos[i].src.medium;
                document.getElementById('ph' + i).src = newImgUrl[i];
            }
        }).catch(err => console.log(err));
    }
});

fetch(url,{
    method : 'GET',
    headers : {
        Authorization : apiKey
    }
}).then(res => res.json())
.then(fres => {
    for(let i=0;i<9;i++) {
        imgUrl[i] = fres.photos[i].src.medium;
        document.querySelector('script').insertAdjacentHTML('beforebegin','<img class="Images" id=ph'+ i + ' src=' + imgUrl[i] + '>');
    }
}).catch(err => console.log(err));