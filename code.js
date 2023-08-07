

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

console.log(form);
console.log(input);
console.log(msg);
console.log(posts);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("button clicked");
    formValidation(); 
})

let formValidation= () =>{
    if(input.value==""){
        msg.innerHTML = "TODO can't be blank";
        // console.log("failed");
    }else{
        // console.log("success")
        msg.innerHTML=""
        acceptData();
        createPosts();
        // deletePost();
    }
}

let data={}

let acceptData=()=>{
    data["text"]=input.value;
    // console.log(data);
}

let createPosts = ()=>{
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editPost(this)"    class="fas fa-edit"></i>
        <i onClick="deletePost(this)"  class="fas fa-trash-alt"></i>
    </span>
</div>
`;
input.value="";
}

let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let editPost=(e)=>{
    // console.log("edited")
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}