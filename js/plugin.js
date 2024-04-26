let landingSection = document.querySelector(".landing"),
    testmoinalsSection = document.querySelector(".our-company .testmoinals"),
    landingSlides = document.querySelectorAll(".landing .slide"),
    testmoinalSlides = document.querySelectorAll(".testmoinals .testmonial"),
    currentIndex = 0,
    nextButton = document.querySelector(".landing .fa-chevron-right"),
    prevButton = document.querySelector(".landing .fa-chevron-left");

//choose the current slide function
function currentSlide(){
    landingSlides.forEach(slide => {
        slide.classList.remove("active");
    })
    landingSlides[currentIndex].classList.add("active");
}

// create next button function
nextButton.onclick = function(){
    if(currentIndex < landingSlides.length - true){
        currentIndex++;
        currentSlide();
    }else{
        currentIndex = 0 ;
        currentSlide();
    }
}

// create previous button function
prevButton.onclick = function(){
    if(currentIndex > 0){
        currentIndex--;
        currentSlide();
    }else{
        currentIndex = landingSlides.length - true ;
        currentSlide();
    }
}
// create shuffle function for our work gallery
let designs = Array.from(document.querySelectorAll(".gallery .design")),
    catogries = document.querySelectorAll(".catogries li");
catogries.forEach(cat => {
    cat.onclick = function (){
        designs.forEach(design => {
            design.classList.add("hidden");
                if(design.classList.contains(cat.getAttribute("data-type"))) {
                    design.classList.remove("hidden")
            }
        }) 
    }   
})

// create global slider function
function createPagination(slides,pagicontainer) {
    let  pagiDiv = document.createElement("div");
        pagiDiv.classList.add("pagi-container");
    // create span for every slide of slides
    for(let i = 0 ; i < slides.length ; i++) {
        let pagi = document.createElement("span");         
            pagi.classList.add("pagination");
            pagi.setAttribute("data-index",i)
            pagiDiv.appendChild(pagi);
            pagicontainer.appendChild(pagiDiv);
    }
    // add active class on the defualt pagination
    pagiDiv.children[currentIndex].classList.add("active")
}

// call function to create pagination for landing slider
createPagination(landingSlides,landingSection);

// call function to create pagination for testmonials slider
createPagination(testmoinalSlides,testmoinalsSection);

// create pagination|| Bullets function
document.addEventListener("click", e => {
    if(e.target.classList.contains("pagination")){
        let paginationArray = Array.from(e.target.parentNode.children);
        // // remove active class from pagination
        paginationArray.forEach(ele =>{
            ele.classList.remove("active")
        });
        // add active class on clicked pagination
        e.target.classList.add("active");
        currentIndex = e.target.getAttribute("data-index");
        currentSlide();
    }
})