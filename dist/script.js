var img = ['https://osvitanova.com.ua/ckeditor_assets/pictures/5523/content_34197055_images_3906588952-809x610.jpg', 'https://moiarussia.ru/wp-content/uploads/2016/01/6026710-R3L8T8D-650-1.jpg', 'https://bipbap.ru/wp-content/uploads/2016/11/1451909948_638.jpg', 'https://moiarussia.ru/wp-content/uploads/2016/01/6034760-R3L8T8D-650-13.jpg' , 'https://printonic.ru/uploads/images/2016/05/11/img_57330f0bbaf1f.jpg', 'https://printonic.ru/uploads/images/2016/05/11/img_57330e66775dc.jpg'];
var old = 5;
var clicks = 0;
function randomize() {
  let root = document.documentElement
  root.style.setProperty('--image','url('+img[old]+')')
  old++
  if(old > 5) {
    old = 0
  }  
  var ul = document.querySelectorAll('#puzz i');
  for(var i=0;i<ul.length;i++){
    ul[i].style.left = Math.random()*(window.innerWidth-100) + 'px'
    ul[i].style.top = Math.random()*(window.innerHeight-100) + 'px'
  }
  // for (var i = ul.children.length; i >= 0; i--) {
  //   ul.appendChild(ul.children[Math.random() * i | 0]);    
  // }
}
randomize()

function reload() {
  var done = document.querySelectorAll('.done')
  done.forEach(function(e){
    e.classList.toggle('done')
  })
  var dropped = document.querySelectorAll('.dropped')
  dropped.forEach(function(e){
    e.classList.toggle('dropped')
  })
  var allDone = document.querySelector('.allDone')
  allDone.style = ''
  allDone.classList.toggle('allDone')
}


// mobile functionality
var p = document.querySelectorAll('#puzz i')
p.forEach(function(e){
  e.addEventListener('mousedown', function(){
    clicks++
    document.querySelector('#clicks').innerHTML = clicks
  })
  e.addEventListener('click', function(){
    if(document.querySelector('.clicked')){
      document.querySelector('.clicked').classList.toggle('clicked')
      e.classList.toggle('clicked')
    } else {
      e.classList.toggle('clicked')  
    }    
  })
})

var fp = document.querySelectorAll('#puz i')
fp.forEach(function(el){
  el.addEventListener('click', function(){
    if(document.querySelector('.clicked')){
      var c = document.querySelector('.clicked')
      if(c.classList.contains(el.classList)) {
        el.classList.add('dropped')
        c.classList.add('done')
        c.classList.toggle('clicked')

        if(document.querySelectorAll('.dropped').length == 9) {
          document.querySelector('#puz').classList.add('allDone')
          document.querySelector('#puz').style.border = 'none'  
          document.querySelector('#puz').style.animation = 'allDone 1s linear forwards'

          setTimeout(function(){
            reload()
            randomize()            
          },1500)
        } 
      }
    }    
  })
})

// desktop drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.className);  
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text")

  if(ev.target.className == data){
    ev.target.classList.add('dropped')
    document.querySelector('.'+data+"[draggable='true']").classList.add('done')

    if(document.querySelectorAll('.dropped').length == 9) {
      document.querySelector('#puz').classList.add('allDone')
      document.querySelector('#puz').style.border = 'none'  
      document.querySelector('#puz').style.animation = 'allDone 1s linear forwards'  

      setTimeout(function(){
        reload()
        randomize()        
      },1500)
    }    
  }  
}