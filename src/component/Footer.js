class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="text-muted bg-dark">
        <div class="container">
            <p style="color:white">Submission Dicoding Academy - Belajar Fundamental Front-End Web Developer</p>
        </div>
    </footer>
        `;
  }
}

customElements.define("footer-bar", Footer);
