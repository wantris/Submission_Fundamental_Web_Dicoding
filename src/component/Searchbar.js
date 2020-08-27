class Searchbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="row mt-3 justify-content-center">
      <div class="col-md-8">
        <h1 class="text-center">Search Movie</h1>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Movies Title" id="search-input"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-primary"
              id="search-button"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("search-bar", Searchbar);
