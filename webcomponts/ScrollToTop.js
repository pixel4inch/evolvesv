class ScrollTop extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <div class="scroll-top-to">
      <i class="ti-angle-up"></i>
     </div>

      `;
    }
  }
      
  customElements.define('scrolltop-component', ScrollTop);