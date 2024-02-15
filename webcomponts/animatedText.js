
//============= COMPONENT =========================//
const AnimatedText = document.createElement('template');
AnimatedText.innerHTML = `

<style>
.w-100{
    width:100%;
}
    h4 {
        font-size: 40px;
        text-align: center;
        color: #fff;
        font-weight: 500;
        display: block;
        width: 100%;
        line-height: 45px !important;
    }

</style>
        <div class="w-100">
        <h4></h4>
        </div>
 
</div>
  `;

class animatedtextcomp extends HTMLElement{ 
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(AnimatedText.content.cloneNode(true));
        this.shadowRoot.querySelector('h4').innerText = this.getAttribute('msg');
        
        //this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
    }



  connectedCallback(){
    this.h4 = this.getAttribute("msg")
    this.render();
  }
 
  render(){
    this.h4;
  }
}
window.customElements.define('animatedtext-component', animatedtextcomp);



//=============INDEX > DYNAMIC TEXT (GET DATA BY JSON FILE)=========================//
$.getJSON("./data/msg.json", function (data) {
  var dynamictextscroll = '';
  $.each(data, function (key, value) {
      dynamictextscroll += `
          <div class="w-100">
              <animatedtext-component msg="${value.msg}"></animatedtext-component>
              </div>`;
  });
  $('#dynamictextscroll-block').html(dynamictextscroll);
}).fail(function () {
  document.write("An error has occurred.");
});


// ==================== DYNAMIC TEXT SLIDE SHOW ==========================

document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const slides = document.querySelectorAll('#dynamictextscroll-block > div');
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1; // If index is negative, loop to the last slide
    } else if (index >= totalSlides) {
      index = 0; // If index exceeds totalSlides, loop to the first slide
    }
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    currentIndex = index;
  }

  // Automatically advance the slides every 3 seconds
  setInterval(function() {
    currentIndex = (currentIndex + 1) % totalSlides; // Increase currentIndex
    showSlide(currentIndex); // Show the next slide
  }, 6000);
});
