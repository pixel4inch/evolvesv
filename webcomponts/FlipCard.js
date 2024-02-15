

//============= COMPONENT =========================//

const flipcardTemplate = document.createElement('template');
flipcardTemplate.innerHTML = `

<style>

@import "../css/custome.css";

.flip-card {
    background-color: transparent;
    width: 100%;
    height: 500px;
    perspective: 1000px;
    overflow: hidden !important;
    border-radius:25px !important;
    padding:15px;
    border:rgba(255,255,255,0.5) solid 1px;
    box-sizing: border-box;
    transform-style: preserve-3d;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    border-radius: 40px;
   
  }


  .flip-card-front h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 43px;
    line-height: 54px;
    text-align: center;
    text-shadow: 0 2px 5px rgba(0,0,0,0.5);
    transform: translateZ(50px);
    font-weight: 900;
    transform: translateZ(150px);
    transform-style: preserve-3d;
}


  
  
  .flip-card:focus {
      outline: 0;
  }
  
  .flip-card:hover .flip-card-inner,
  .flip-card:focus .flip-card-inner{
    transform: rotateY(180deg);
  }
  
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .flip-card-front {
    color: black;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:15px;
    
   }

   .flip-card-front:before {
    content:"";
    width:100%;
    height:100%;
    position:absolute;
    left:0px;
    top:0px;
    background:rgba(0,0,0,0.6);

   }


  .flip-card-back {
    background: #000;
    color: white;
    transform: rotateY(180deg);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flip-card-back p{
    text-align:left;
    padding:10px;
  }

  h3 {
    font-size: 20px;
    font-family: Verdana, sans-serif;
    font-weight: bold;
    color: #fff;
  }
  

/***** WHY PAGE *****/

  #why-cards .col-lg-4:nth-child(2) .flip-card-front{
 
}




</style>

<div class="flip-card" tabIndex="0">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3></h3>
    </div>
    <div class="flip-card-back">
      <p> </p>
    </div>
  </div>

</div>
  `;

class flipcard extends HTMLElement{ 
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(flipcardTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('cardtitle');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('para');
       
        //this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
    }

 connectedCallback(){
    this.h3 = this.getAttribute("cardtitle")
    this.render();
  }

  connectedCallback(){
    this.p = this.getAttribute("para")
    this.render();
  }

  connectedCallback() {
    const frontImage = this.getAttribute("front-image");
    if (frontImage) {
      this.shadowRoot.querySelector('.flip-card-front').style.backgroundImage = `url(${frontImage})`;
    }
  }
 
  render(){
    this.h3;

  }
  render(){
    this.p;
  }
}
window.customElements.define('flip-card', flipcard);



//============= INDEX > WHY (GET DATA BY JSON FILE)=========================//

$.getJSON("./data/why.json", function (data) {
  var whycardsData = '';
  $.each(data, function (key, value) {
      // Accessing each element inside the cardContent array
      var flipcontent = '';
      $.each(value.cardContent, function (index, content) {
          flipcontent += content.flipcontent ; // Append <br> for line break
      });

      whycardsData += `
          <div class="col-lg-4 card`+ value.id +`">
              <flip-card cardtitle="${value.cardTitle}" para="${flipcontent}" front-image="${value.cardImage}"></flip-card>
              <a href="javascript:valid(0)" class="card-footer">${value.cardFooter} <i class="lni lni-arrow-right"></i></a>
          </div>
          `;
  });
  $('#why-cards').html(whycardsData);
}).fail(function () {
  document.write("An error has occurred.");
});
