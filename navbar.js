class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar-link:hover {
          color: #dc2626;
          transition: color 0.3s ease;
        }
        .navbar-link::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #dc2626;
          transition: width 0.3s;
        }
        .navbar-link:hover::after {
          width: 100%;
        }
      </style>
      <nav class="bg-white shadow-md">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <div class="flex items-center space-x-4">
              <a href="/" class="text-2xl font-bold text-red-600">EscándaloDigital</a>
            </div>
            
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="navbar-link text-gray-700 font-medium">Inicio</a>
              <a href="#" class="navbar-link text-gray-700 font-medium">Noticias</a>
              <a href="#" class="navbar-link text-gray-700 font-medium">Investigaciones</a>
              <a href="#" class="navbar-link text-gray-700 font-medium">Contacto</a>
              
              <div class="flex items-center space-x-4">
                <button class="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                  <i data-feather="search"></i>
                </button>
                <button class="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                  <i data-feather="user"></i>
                </button>
              </div>
            </div>
            
            <button class="md:hidden p-2 rounded-full bg-gray-100 text-gray-700">
              <i data-feather="menu"></i>
            </button>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);