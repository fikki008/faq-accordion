const image = document.querySelectorAll(".toggle-icon");
image.forEach(img => {
  img.addEventListener("click", () =>{
    const faqContainer = img.closest(".faq-container");
    const answer = faqContainer.querySelector(".answer");

    if(answer.style.display === "block"){
      answer.classList.remove("show");
      setTimeout( () => {
           answer.style.display = "none";
      }, 400);
      img.src ="images/icon-plus.svg"
    }else{
      answer.style.display = "block";
       
      requestAnimationFrame(() => {
       answer.classList.add("show");
      });
      img.src ="images/icon-minus.svg"
    }

  })
})