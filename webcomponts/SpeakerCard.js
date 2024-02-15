
//============= COMPONENT =========================//

const speakercardTemplate = document.createElement('template');
speakercardTemplate.innerHTML = `

<style>

@import "../css/custome.css";

.speakers-card {
    border: rgba(255,255,255,0.3) solid 1px;
    border-radius: 30px;
    overflow: hidden;
    height: 100%;
    margin:20px;
}

.speakers-image-block {
    width: 305px;
    height: 190px;
    background: #ccc;
    border-radius: 30px;
    margin: 30px 0px;
    background-size: 100%;
    background-position: 0px ;
    background-repeat: no-repeat;
    filter: grayscale(3);
    margin: 0 auto;
    margin-top:50px;
    margin-bottom:30px;
}

.speakers-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h3.speaker-name {
    font-family: roboto;
    font-size: 28px;
    text-align: center;
    line-height: normal;
    margin: 10px 0px 5px 0px;
}

h4.speaker-designation {
    font-size: 16px;
    font-weight: bold;
    color: var(--mainBrandColor);
    margin-bottom: 0px;
    margin-top: 0px;
    text-align:center;
}

h5.speaker-company {
    font-size: 16px;
    display: inline-block;
    background: #6e6868;
    padding: 5px 20px;
    border-radius: 8px;
    margin-bottom: 50px;
    margin-top: 30px;
}




</style>

        <div class="w-100 speakers-card h-100">
            <div class="d-flex flex-column justify-content-center ">
                <div class="speakers-image-block">
                </div>
                <div class="speakers-info">
                    <h3 class="speaker-name">CLAIR HUGHES JOHNSON</h3>
                    <h4 class="speaker-designation">CHIEF CORPORATE ADVISOR OF STRIPE</h4>
                    <h5 class="speaker-company">FINTECH</h5>
                </div>
            </div>
        </div>
  `;

class speakercard extends HTMLElement{ 
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(speakercardTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('speakername');
        this.shadowRoot.querySelector('h4').innerText = this.getAttribute('speakerdeg');
        this.shadowRoot.querySelector('h5').innerText = this.getAttribute('speakercompnay');
       
        //this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
    }

 connectedCallback(){
    this.h3 = this.getAttribute("speakername")
    this.render();
  }

  connectedCallback(){
    this.h4 = this.getAttribute("speakerdeg")
    this.render();
  }

  connectedCallback(){
    this.h5 = this.getAttribute("speakercompnay")
    this.render();
  }

  connectedCallback() {
    const speakerImage = this.getAttribute("speakerimage");
    if (speakerImage) {
      this.shadowRoot.querySelector('.speakers-image-block').style.backgroundImage = `url(${speakerImage})`;
    }
  }
 

}
window.customElements.define('speaker-card', speakercard);




//============= INDEX > SPEAKER (GET DATA BY JSON FILE) =========================//
$.getJSON("./data/speakers.json", function (data) {
  var  speakers = '';
  $.each(data, function (key, value) {
     speakers += `
          <div>
          <speaker-card class="col-lg-4 p-2" speakername="${value.speakerName}"  speakerdeg="${value.speakerDesignation}"  speakercompnay="${value.speakerCompany}" speakerimage="../images/speakers/${value.speakerImage}"></speaker-card>
          </div>
          `;
  });
  $('#speakers-block').html(speakers);
}).fail(function () {
  document.write("An error has occurred.");
});



//============= INDEX > SPEAKER (SLIDE SHOW BY SLICK PLUGIN) =========================//

$(document).ready(function(){
  $('#speakers-block').slick({
    centerMode: true,
centerPadding: '60px',
slidesToShow:3,
easing:"linear",
autoplay:"true",
arrows:"flase",
cssEase:'linear',
focusOnSelect: false, 
autoplaySpeed:0,
speed: 12000,
infinite: true,
responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: false,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
]
  });
});
