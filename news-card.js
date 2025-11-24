class CustomNewsCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const date = this.getAttribute('date') || '';
    const excerpt = this.getAttribute('excerpt') || '';
    const image = this.getAttribute('image') || '';
    const category = this.getAttribute('category') || 'Noticias';
    
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .news-card {
          transition: transform