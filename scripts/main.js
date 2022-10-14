
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to my portfolio machine! ");
  await delay(700);
  createText("Ley me introduce myself... 😇");  

  await delay(1500);
  createText("My name is Majd and I am a Software Engineer Specialized in Web Development 🙂");
  createText("What else would you like to know?");
  createCode("about", "Who is Majd");
  createCode("projects", "Show my projects.");
  createCode("social", "Social Media Links.");
  createCode("all", "Show all commands");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "#guest";
  span1.textContent = " on";
  span2.textContent = " ~/majd.codes";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all" || value === "All"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about", "Who am i and what do i do.");
    createCode("social", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects" || value === "Projects"){ 
    trueValue(value); 
    createText("<li><a href='https://emuers.netlify.app/' target='_blank'> 🚨 Emergency Reporting System</a></li>")
    createText("<p>Emergency Reporting System is a centralized system (Progressive web application) for emergencies where users can report their emergency from any device. The app will report this emergency to several government departments. For example, an accident report is sent to the police, hospital, and fire departments. </p>")

    createText("<li><a href='https://coachmajdd.com/' target='_blank'> 😎 Coach Majd</a></li>")
    createText("<p>Coach Majd is an online fitness coach, providing meal plans, workout programs and supplements guides using E-commerce website.</p>")

    createText("<li><a href='https://elegants.me/' target='_blank'> 🏚  Elegants Engineering Office</a></li>")
    createText("<p>Elegants Engineering Office provide architectural services including project management, urban design and interior design for houses, villas and many more.</p>")

  }
  else if(value === "about" || value === "About"){  
    trueValue(value);
    createText("Hello, I am Majd 🥳") 
    createText("I love building web applications.")
    createText(`<li>Creative Computer Engineer specialized in Web Development with 2+ years of experience.</li>
    <li>Experienced in building web applications using MVC framework.
    <li>Proficiency in web application deployment and linux-based server administration.
    <li>Comfortable with Git, Github and Bash scripting.
    <li>Prefer to work with Laravel and MySQL.
    <li>Good knowledge of the creation of graphic design, UI and UX using standard HTML5/CSS3/JavaScript, Bootstrap, Blade templating engine, while incorporating data from back-end databases and services.
    <li>Experienced in content mangment systems including Wordpress.
    <li> Basic knowledge in Node JS, React JS, JQuery, Python, C and Java.`)
  }

  else if(value === "social" || value === "Social"){
    trueValue(value);
    createText("<a href='mailto:majd.ghithan20@gmail.com' target='_blank'><i class='fas fa-envelope-square'></i> majd.ghithan20@gmail.com</a>")
    createText("<a href='https://github.com/majdghithan' target='_blank'><i class='fab fa-github white'></i> github.com/majdghithan</a>")
    createText("<a href='https://www.linkedin.com/in/majdghithan/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/majdghithan</a>")
    createText("<a href='https://www.instagram.com/coach.majdd/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/coach.majdd</a>")
    createText("<a href='https://www.youtube.com/channel/UCA_eyFkZZSbxABkNdPPjdIw' target='_blank'><i class='fab fa-youtube white'></i> Coach Majd</a>")
  }
  
  else if(value === "clear" || value === "Clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }

  else if(value === ""){
    trueValue(value);
  }

  

  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();