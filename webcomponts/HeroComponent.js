
class HeroComponent extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
     
   <!---Hero component--->
   <div class="m-0 p-0">
   <div id="hero">
      <div class="full-video-container">
         <video autoplay muted loop id="myVideo">
            <source src="../videos/video_bg.mp4" type="video/mp4">
         </video>
      </div>
    <div class="hero-content">
    <div class="container-fluid">
            <div class="row mx-0 mb-5">
            <div class="col-lg-4 text-left pl-2">
            <h5 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">THE MOST</h5>
            </div>
            <div class="col-lg-8 ">
            <button class="mb-2 brand-btn wow flipInX" data-wow-delay="2s">JOIN THE EVOLVE MAGIC</button>
            </div>

            <div class="row mx-0 mb-3">
                 <h1 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">FOUNDER-FOCUSED</h1>
            </div>

            <div class="row mx-0">
                <div class="col-lg-8 pl-2">
               <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">Evolve is a not-for-profit building the world’s leading startup event and the largest gathering of VC — delivering actionable company-building advice and bringing together the who’s who in the ecosystem. 
                </div>
                <div class="col-lg-4 text-right">
                <h5 class="p-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">EVENT ON EARTH</h5>
                </div>
            </div>
        </div>
     </div> 
     </div>
    </div>
</div>
    <!---Hero Componet END--->

      
      `;


   }

}



customElements.define('hero-component', HeroComponent);