class FooterComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      
      
	  <footer>
	  <P>EVOLVE 2024
	</footer>

      
      
      
      
      `;
	}
}

customElements.define('footer-component', FooterComponent);