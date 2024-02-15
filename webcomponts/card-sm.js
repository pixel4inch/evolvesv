
//============= COMPONENT =========================//

const cardSm = document.createElement('template');
cardSm.innerHTML = `

<style>

@import "../css/custome.css";
.card-sm{
   background: #000;
    text-align: center;
    border-radius: 15px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    position:relative;
    background-size: cover;
    outline:rgba(255,255,255,0.5) solid 1px;
    overflow:hidden;
  

}

.card-sm::before{
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9) 100%);
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    -webkit-transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card-sm:hover::before{
  background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.85) 100%);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  -webkit-transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card-sm h3 {
  font-family: "roboto";
  font-size: 22px;
  font-weight: 900;
  text-shadow: 0 2px 2px rgba(0,0,0,0.5);
  z-index:99
}
 





</style>


    <div class="card-sm p-2 border">
        <h3></h3>
    </div>

  `;

class smallcard extends HTMLElement{ 
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(cardSm.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('cardtitle');
    }

 connectedCallback(){
    this.h3 = this.getAttribute("cardtitle")
    this.render();
  }

  connectedCallback() {
    const frontImage = this.getAttribute("card-image");
    if (frontImage) {
      this.shadowRoot.querySelector('.card-sm').style.backgroundImage = `url(${frontImage})`;
    }
  }
 
  render(){
    this.h3;

  }
 
}
window.customElements.define('small-card', smallcard);


//============= INDEX > SURVIVAL (GET DATA BY JSON FILE)=========================//
$.getJSON("./data/survival.json", function (data) {
  var survival = '';
  var delay = 1; // Initialize delay
  $.each(data, function (key, value) {
    survival += `
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 p-2 wow flipInY" animation-duration:1s data-wow-delay="${delay}">
              <a herf="${value.herf}">  
              <small-card cardtitle="${value.title}"  card-image="${value.imgpath}"></small-card>
              </a>  
          </div>
          `;
          delay += 10; // Increment delay by 0.2 for each iteration
  });
  $('#survivallist').html(survival);
}).fail(function () {
  document.write("An error has occurred.");
});