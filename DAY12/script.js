const input = document.querySelector('input')
const btn = document.querySelector('button')
const todolist = document.querySelector('.todolist')
const todos ={
    
}

btn.addEventListener('click',()=>{
    const newtodo = document.createElement('div');
    newtodo.className="todo"
    if(input.value!=""){
    newtodo.innerHTML=input.value;
    todolist.appendChild(newtodo)
}
   input.value=""
})
 localStorage.setItem('')
 