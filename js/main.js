




var names=['Sally Ahmed Shahin','Sally Ahmed Shahin','Sally Ahmed Shahin','Sally Ahmed Shahin','Sally Ahmed Shahin','Sally Ahmed Shahin','Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',
'Sally Ahmed Shahin',



]

var ages=['18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
'18 years old',
]
var imgs=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg',
'img/8.jpg',
'img/9.jpg',
'img/10.jpg',
'img/11.jpg',
'img/12.jpg',
'img/13.jpg',
'img/14.jpg',
'img/15.jpg',
'img/16.jpg',
'img/17.jpg',
'img/18.jpg',
'img/19.jpg',
'img/20.jpg',
'img/21.jpg',
'img/22.jpg',
'img/23.jpg',
'img/24.jpg', 
'img/25.jpg',
'img/26.jpg',
'img/27.jpg',
'img/28.jpg',
'img/29.jpg',



]
var vid=['aud/1.mp4','aud/2.mp4','aud/3.mp4','aud/4.mp4','aud/5.mp4',
'aud/6.mp4',
'aud/7.mp4',
'aud/8.mp4',
'aud/9.mp4',
'aud/10.mp4',
'aud/11.mp4',
'aud/12.mp4',
'aud/13.mp4',
'aud/14.mp4',
'aud/15.mp4',
'aud/16.mp4',
'aud/17.mp4',
'aud/18.mp4',
'aud/19.mp4',
'aud/20.mp4',
'aud/21.mp4',
'aud/22.mp4',
'aud/23.mp4',
'aud/24.mp4',
'aud/25.mp4',
'aud/26.mp4',
'aud/27.mp4',
'aud/5.mp4',
'aud/10.mp4',




]



var header=document.createElement('header')
document.body.appendChild(header)
var head=document.createElement('h1')
header.appendChild(head);
var text=document.createTextNode('Welcome Sally Ahmed Shain')
head.appendChild(text);


var main=document.createElement('main')
document.body.appendChild(main)




function ele(name1,age,img1){
    
    
    var article=document.createElement('article')
    var h2=document.createElement('h2')
    var pa=document.createElement('p')
    var img=document.createElement('img')
    
    var text1=document.createTextNode(name1)
    var text2=document.createTextNode(age)
    var text3=document.createTextNode(img1)
   
  
    main.appendChild(article)
    article.appendChild(h2)
    article.appendChild(pa)
    article.appendChild(img)
    h2.appendChild(text1)
    pa.appendChild(text2)
}



    
for(var i=0; i<imgs.length;i++){
    document.body.innerHTML+=`
    <article style='text-align:center;'>
    <h2 class='name'>${names[i]}</h2>
    <p class='age'>${ages[i]}</p>
    <img src='${imgs[i]}' width='100%' class='imgim'>
    <video src="${vid[i]}" controls width='100%' class='vdd'></video>
    </article>
    `
}


document.addEventListener('mousemove',(e)=>{
    var body=document.querySelector('body')
    var heart=document.createElement('span')
     var x=e.offsetX
     var y=e.offsetY
     heart.style.left=x+'px'
     heart.style.top=y+'px'
     var size=Math.random()*100
     heart.style.width=20+size+'px'
     heart.style.height=20+size+'px'
    body.appendChild(heart)
    setTimeout(function(){
        heart.remove()
    },2000)
})








class App{
    constructor(){
       main.style.height=screen.height+'px'
       if(screen.width < 500){
        main.style.width=screen.width+'px'
       }
    }
}
var add=new App()





