const API = "https://jsonplaceholder.typicode.com/posts";

const container_posts_api = document.getElementById("posts");
const btn_alt = document.getElementById("alt");
const subtitle = document.getElementById("sub-title");
const container_form = document.getElementById("container-form");
const form = document.querySelector("form");

const string_values = [
  "ATIVE O CONSOLE DO SEU NAVEGADOR",
  "POSTS DA API",
  "TESTAR API",
  "VOLTAR"
];

let alt = true;

async function selectPosts() {
  try {
    const res = await fetch(API);
    
    if (!res.ok) {
      throw new Error(`[ERROR - Connection failed HTTP REQUEST] ${res.status}`);
    };
    
    const data = await res.json();
    data.forEach((post) => {
      const container = document.createElement("div");
      const title = document.createElement("h1");
      const body = document.createElement("p");
      const link = document.createElement("a");
      
      title.innerText = post.title;
      body.innerText = post.body;
      
      link.innerText = "visualizar";
      link.setAttribute("href", `/post.html?id=${post.id}`);
      
      container.appendChild(title);
      container.appendChild(body);
      container.appendChild(link);
      
      container_posts_api.appendChild(container);
    });
  } catch (err) {
    console.error("[ERROR]", err);
  };
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const name = document.querySelector("#user-name");
  const age = document.querySelector("#user-age");
  const comment = document.querySelector("#user-description");
  const check = document.querySelector("#user-check");
  const name_failed = document.querySelector(".name_error");
  const age_failed = document.querySelector(".age_error");
  const check_failed = document.querySelector(".check_error");
  
  const value_name = name.value;
  const value_age = age.value;
  const value_comment = comment.value;
  const value_check = check.checked;
  
  const nameRegex = /^[^0-9]*$/;
  
  let vld = true;
   
   name.classList.remove("error");
   age.classList.remove("error");
   check.classList.remove("error");
   name_failed.classList.remove("failed");
   age_failed.classList.remove("failed");
   check_failed.classList.remove("failed");
   
   if(value_name.trim() === "" || !nameRegex.test(value_name)){
     name.classList.add("error");
     name_failed.classList.add("failed");
     vld = false;
   };
   if(value_age.trim() === "" || isNaN(value_age) || Number(value_age) > 75){
     age.classList.add("error");
     age_failed.classList.add("failed");
     vld = false;
   };
   if(!value_check){
     check.classList.add("error");
     check_failed.classList.add("failed");
     vld = false;
   };
   
  if (!vld) return;
  
  const post_data = {
    name: value_name,
    age: value_age,
    comment: value_comment
  };
  
  try {
    const post_res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post_data)
    });
    
    if (!post_res.ok) {
      throw new Error(`[ERROR - POST FAILED] ${post_res.status}`);
    };
    
    const content = await post_res.json();
    
    form.reset();
    
    console.log("Object - Campos Preenchidos :", content);
  } catch (err) {
    console.error("[ERROR]", err);
  };
});

btn_alt.addEventListener("click", () => {
  if (alt) {
    container_posts_api.classList.remove("visible");
    container_posts_api.classList.add("hide");
    subtitle.innerText = string_values[0];
    btn_alt.innerHTML = string_values[3];
    btn_alt.classList.add("test_api");
    container_form.classList.add("access");
  } else {
    container_posts_api.classList.remove("hide");
    container_posts_api.classList.add("visible");
    subtitle.innerText = string_values[1];
    btn_alt.innerHTML = string_values[2];
    btn_alt.classList.remove("test_api");
    container_form.classList.remove("access");
  };
  
  alt = !alt;
});

selectPosts();