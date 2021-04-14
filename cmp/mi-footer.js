class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Vargas Rojas Karla Ivonne.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
