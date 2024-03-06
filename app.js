/*typing animation*/
var typed = new Typed(".typing",{
    strings:["", "Frontend Developer","Backend Developer","or say Full-Stack Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    })
}


function showSection(element) {
    console.log(element.getAttribute("href").split);
}




/*messege sending and recieveing */

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject= document.getElementById("contact-subject");
const contactContent = document.getElementById("contact-content");


const sendMail=(e)=>{
e.preventDefault();

/*check if the field has a value */
if(contactName.value=== '' ||contactEmail.value=== '' ||contactSubject.value=== '' ||contactContent.value=== ''){
    contactContent.textContent= "Write in all input fields 📝";
}else{
    emailjs.sendForm('service_h34xbpo','template_rbmxfhk','#contact-form','S2rBq00qhMLXVG_V-')
    .then(()=>{
        contactContent.textContent="messege sent ✅";
        setTimeout(()=>{
            contactContent.textContent="",5000
        })
    })
}
}
contactForm.addEventListener("submit",sendMail)






/*Hamburger menu*/

const navTogglerBtn = document.querySelector(".nav-toggler"),
    allSection = document.querySelectorAll(".section"),
    aside = document.querySelector(".aside"),
    totalSection = allSection.length;
navTogglerBtn.addEventListener("click", () => {
    asideSelectionTogglerBtn();
})
function asideSelectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}