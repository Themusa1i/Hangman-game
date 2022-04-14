const word_el = document.getElementById('word');
const popup = document.getElementById('popup');
const message_el = document.getElementById('success-meassage')
const items = document.querySelectorAll('.item');
const wrong_el = document.getElementById('wrong-letter');
const mesageagain = document.getElementById('message')
const btn = document.getElementById('play-again');

var selected = displayrandom();

var correctletter = ['a', 'j', 'p', 'h', 'w', 'l'];

var wrongletter = [];


function displayrandom() {
    var word = ['java', 'javascript', 'php', 'css', 'html', 'python', 'wondows', 'linux'];
    return word[Math.floor(Math.random() * word.length)];
}

function displayword() {
    word_el.innerHTML = `${selected.split('').map(letter => `
    <div class="letter">${correctletter.includes(letter) ? letter : ''}</div>`).join('')}`;

    var w =word_el.innerText.replace(/\n/g,'');
    if (w === selected) {
        popup.style.display ='flex';
        message_el.innerText = 'congrutulation'
    }


}
displayword()

function displaywrongletter(){
    wrong_el.innerHTML=`${wrongletter.length>0?`<h3>xetali herfler</h3>`:''}
                         ${wrongletter.map(letter=>`<span>${letter}</span>`)}`

                         items.forEach((item,index)=>{
                             var errorcorect=wrongletter.length;
                             if(index<errorcorect){
                                 item.style.display='block'
                             }else{
                                item.style.display='none';

                             }



                         })
                         if(wrongletter.length===items.length){

                                     popup.style.display='flex';
                                     message_el.innerText='game over';
                                     popup.style.backgroundColor='red'
                            
                                }
                                



}
function displayfun() {
         mesageagain.classList.add('show')
    
         setTimeout(function () {
             mesageagain.classList.remove('show')
    
         }, 2000)
    
    
     }

window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode < 90) {
        var letter = e.key
    if (selected.includes(letter)) {
    if (!correctletter.includes(letter)) {
         correctletter.push(letter);
         displayword()
     } else {
        displayfun()
     }
     } else {
      if (!wrongletter.includes(letter)) {
          wrongletter.push(letter)
          displaywrongletter()
            }
        }
    }


})

























// var selected = getrandom();


// var correctletter = ['j', 'p', 'c', 'h', 'w', 'l'];
// var wrongletter = [];


// function getrandom() {
//     var word = ['java', 'php', 'css', 'html', 'javascript', 'python', 'windows', 'linux'];
//     return word[Math.floor(Math.random() * word.length)]
// }


// function displayword() {

//     word_el.innerHTML = `${selected.split('').
//         map(letter => `<div class="letter">${correctletter.includes(letter) ? letter : ''}</div>`).join('')}`

//     const w = word_el.innerText.replace(/\n/g, '');
//     if (w === selected) {
//         popup.style.display = 'flex';
//         message_el.innerText = 'congrutulation'
//     }

// }

// displayword()

// function displaywrongletter() {
//     wrong_el.innerHTML = `${wrongletter.length > 0 ? `<h3>xetali herifler</h3>` : ''}
//                               ${wrongletter.map(letter => `<span>${letter}</span>`)}`

//                               items.forEach((item,index )=>{
//                                   var errorcount=wrongletter.length;
//                                   if(index<errorcount){
//                                       item.style.display='block';

//                                   }else{
//                                     item.style.display='none';

//                                   }


//                               })

// }

// window.addEventListener('keydown', function (e) {
//     if (e.keyCode >= 65 && e.keyCode <= 90) {
//         var letter = e.key
//         if (selected.includes(letter)) {

//             if (!correctletter.includes(letter)) {
//                 correctletter.push(letter)
//                 displayword();
//             } else {
//                 console.log('bu herifi daxil etmisiniz');
//             }
//         } else {
//             if (!wrongletter.includes(letter)) {
//                 wrongletter.push(letter);
//                 displaywrongletter();

//             }

//             }

//             }




// })














// var correctletter = ['j','p','t','c','x','w'];
// var wrongletter = [];
// let selected = getrandom();


// function getrandom() {
//     var word = ['javascript', 'java', 'php', 'html', 'css', 'linux', 'window'];
//     return word[Math.floor(Math.random() * word.length)];
// }
// function getword() {
//     word_el.innerHTML = `${selected.split('').map(letter => `<div class="letter">
//     ${correctletter.includes(letter) ? letter : ''}</div>`).join('')}`
//     var w = word_el.innerText.replace(/\n/g, '');
//     if (w === selected) {
//         popup.style.display = 'flex';
//         message_el.innerText = 'tebrikler,qazandiniz';

//     }

// }
// getword();


// function  updatewronglatter(){
//     wrong_el.innerHTML=`${wrongletter.length>0 ?`<h3>her sehf yazdiginiz herif ipe birazda yaxinlasdirir sizi</h3>`:''}
//     ${wrongletter.map(letter=>`<span>${letter}</span>`)}`

//     items.forEach((item,index)=>{
//         var errorcorect=wrongletter.length;
//         if(index<errorcorect){
//             item.style.display='block'
//         }else{
//             item.style.display='none'

//         }


//     })
//     if(wrongletter.length===items.length){

//         popup.style.display='flex';
//         message_el.innerText='game over';
//         popup.style.backgroundColor='red'

//     }


// }


// function displayfun() {
//     mesageagain.classList.add('show')

//     setTimeout(function () {
//         mesageagain.classList.remove('show')

//     }, 2000)


// }

// btn.addEventListener('click',function(){
//     correctletter.splice(0)
//     wrongletter.splice(0);
//     selected=getrandom();
//     getword();
//     updatewronglatter();
//     popup.style.display='none';
// })

// window.addEventListener('keydown', function (e) {

//     const letter = e.key;
//     if (selected.includes(letter)) {
//         if (!correctletter.includes(letter)) {
//             correctletter.push(letter);
//             getword();
//         } else {
//             displayfun();
//         }
//     }
//     else {
//         if (!wrongletter.includes(letter))
//             wrongletter.push(letter);
//         updatewronglatter();
//     }

// })