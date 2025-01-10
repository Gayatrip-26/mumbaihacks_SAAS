// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let input = document.querySelector("input");


// btn.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.innerText = input.value;
//   ul.appendChild(item);
// //   console.log(input);
//   let delBtn =document.createElement("button");
//   delBtn.innerText="delete";
//   delBtn.classList.add("delete");
//   item.appendChild(delBtn);
//   input.value = "";
// });


// ul.addEventListener("click",function(event){
    
//     if(event.target.nodeName=="BUTTON"){
//         let delItem = event.target.parentElement;
//         delItem.remove();
//     }
// })



let btn= document.querySelector("button");
let input= document.querySelector("input");
let ul= document.querySelector("ul");

btn.addEventListener("click",function(){
    let list= document.createElement("li");
    list.innerText=input.value;
    ul.appendChild(list);

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    ul.appendChild(delBtn);
    input.value=" ";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let del= event.target.parentElement;
        del.remove();
    }
})




















