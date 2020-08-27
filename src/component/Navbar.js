class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#" id="home"><strong><strong id="tanda">| </strong>Movies 7</strong></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#upcoming">Upcoming Movies<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#top-rate">Top Rated Movie</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#" id="cari">Search Movies</a>
          </li>
        </ul>
      </div>
    </nav>`;
  }
}

customElements.define("nav-bar", Navbar);
