const template = document.createElement('template');
template.innerHTML = `

<style>
.title{
  /*margin-bottom:48px;*/
}


.title h1 {
    font-size: 63px;
    font-weight: 900;
    color: #fff;
    line-height: normal !important;
    margin-bottom:0px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing:2.5px;
    margin:0px
}

h4 {
    font-size: 21PX;
    font-weight: BOLD;
    color: #fff;
    text-align: center;
    margin-top: -10px;
    line-height: normal;
    margin-bottom: 0px;
    letter-spacing: 1px;
}



</style>

    <div class="col-12">
        <div class=" title">
            <h1 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"> </h1>
            <h4 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s" data-wow-offset="10"></h4>
        </div>
    </div>
  `;

class PageTitle extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('title');
        this.shadowRoot.querySelector('h4').innerText = this.getAttribute('subtitle');
       
        //this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
    }

 connectedCallback(){
    this.h1 = this.getAttribute("title")
    this.render();
  }

  connectedCallback(){
    this.h4 = this.getAttribute("subtitle")
    this.render();
  }
 
  render(){
    this.h1;

  }
  render(){
    this.h4;

  }
}
window.customElements.define('page-title', PageTitle);