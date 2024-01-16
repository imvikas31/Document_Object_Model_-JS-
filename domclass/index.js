// document.addEventListener('click' , function(){
//     console.log("I clicked on Document")
// })
// document.removeEventListener('click' , function(){
//     console.log("I clicked on Document")
// })

// function eventFunction(){
//     console.log("I clicked on Document");
// }

// document.addEventListener('click' , eventFunction)
// document.removeEventListener('click' , eventFunction)


//Prints an Event Object with all its propertis and methods --->>>
// const content = document.querySelector('#wrapper');
// content.addEventListener('click',function (event){
//     console.log(event)
// })

//Prevent occurence of default actions  using preventDefault() method --->>>
// let links = document.querySelectorAll('a');
//finding third a tag from all a tags:
// let thirdlink = links[2]
// thirdlink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("Abhi thi krke deta huu!!")
// });

//
// let myDiv = document.createElement('div')
// for(let i = 1 ; i <=100; i++ ){
//     let newElement = document.createElement('p')
//     newElement.innerText = "This is a para "+i;
//     newElement.addEventListener('click' , function(event){
//         console.log("I have clicked on para tag"+i)
//     });
//     myDiv.appendChild(newElement)
// }
// document.body.appendChild(myDiv)


// let myDiv = document.createElement('div')

// function paraStatus(event){
//     console.log("Para"+event.target.innerText)
// }
// myDiv.addEventListener('click' ,paraStatus);

// for(let i = 1 ; i <=100; i++ ){
//     let newElement = document.createElement('p')
//     newElement.innerText = "This is a para "+i;
//     myDiv.appendChild(newElement)
// }
// document.body.appendChild(myDiv)