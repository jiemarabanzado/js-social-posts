const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021/6/25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021/09/03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021/05/15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021/04/03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021/03/05"
    }
];
function convertDate(inputFormat) {
    var d = new Date(inputFormat)
    return [d.getDate(), d.getMonth()+1, d.getFullYear()].join('/')
  }

let now=new Date()
let currentMonth=now.getMonth();




let main=document.querySelector('.posts-list');
for (let index = 0; index < posts.length; index++) {
    let element=posts[index];
    let el=document.createElement('div')
    el.classList.add('post')
    main.append(el)
    let div1=document.createElement('div');
    div1.classList.add('post__header');
    el.append(div1);

    let div2=document.createElement('div');
    div2.classList.add('post-meta');
    div1.append(div2);

    let div3=document.createElement('div');
    div3.classList.add('post-meta__icon');
    div2.append(div3);
    if(element.author.image!=null)
        {div3.innerHTML=`<img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">`;}
    else{div3.innerHTML=`<img class="profile-pic" src="https://th.bing.com/th/id/OIP.S171c9HYsokHyCPs9brbPwHaGP?pid=ImgDet&rs=1" alt="${element.author.name}">`}
    let div4=document.createElement('div');
    div4.classList.add('post-meta__data');
    div2.append(div4);
    
    let div5=document.createElement('div');
    div5.classList.add('post-meta__author');
    div5.innerHTML=element.author.name;
    div4.append(div5);

    let div6=document.createElement('div');
    div6.classList.add('post-meta__time');
    console.log(convertDate(element.created)) //date convertite nel format italiano
    let postDate=new Date(element.created)
    let difference=Math.abs(currentMonth-postDate.getMonth());
    div6.innerHTML=`${difference} mesi fa`
    div4.append(div6);

    let div7=document.createElement('div');
    div7.classList.add('post__text');
    div7.innerHTML=element.content;
    el.append(div7);

    let div8=document.createElement('div');
    div8.classList.add('post__image');
    el.append(div8);
    if(element.media!=null)
        {div8.innerHTML=`<img src="${element.media}" alt="">`;}
    else{div8.innerHTML=`<img src="https://th.bing.com/th/id/OIP.S171c9HYsokHyCPs9brbPwHaGP?pid=ImgDet&rs=1" alt="">`}
    
    let div9=document.createElement('div');
    div9.classList.add('post__footer');
    el.append(div9);

    let div10=document.createElement('div');
    div10.classList.add('likes','js-likes');
    div9.append(div10);

    let div11=document.createElement('div');
    div11.classList.add('likes__cta');
    div11.innerHTML=`<button class="like-button  js-like-button"  data-postid="${element.id}">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
</button>`
    div10.append(div11);
    
    let div12=document.createElement('div');
    div12.classList.add('likes__counter');
    div12.innerHTML=`Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone`
    div10.append(div12);
}


function RemoveSingleEvent(element){
    element.removeEventListener('click',Increase);
    element.addEventListener('click',Decrease);
}
let wich=0;
let likes=document.querySelectorAll('.like-button');
let likesNum=document.querySelectorAll('.js-likes-counter');

function Increase(){
    let newArray=Array.from(likes);
    let index=newArray.indexOf(this);
    this.classList.add('blue');
    posts[index].likes+=1;
    console.log(posts[index].likes);
    likesNum[index].innerHTML=posts[index].likes;
    RemoveSingleEvent(this)
}
for (let index = 0; index < likes.length; index++) {
    likes[index].addEventListener('click',Increase);
}

function ReAddEvent(element){
    element.removeEventListener('click',Decrease)
    element.addEventListener('click',Increase);
}

function Decrease(){
    let newArray=Array.from(likes);
    let index=newArray.indexOf(this);
    this.classList.add('blue');
    posts[index].likes-=1;
    console.log(posts[index].likes);
    likesNum[index].innerHTML=posts[index].likes;
    this.classList.remove('blue');
    ReAddEvent(this)
}
