class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer-link:hover {
          color: #dc2626;
          transition: color 0.3s ease;
        }
      </style>
      <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">EscándaloDigital</h3>
              <p class="text-gray-400">Periodismo de investigación y denuncia sobre abusos de poder en la era digital.</p>
            </div>
            
            <div>
              <h4 class="font-semibold mb-4">Secciones</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Últimas noticias</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Investigaciones</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Denuncias</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Opinión</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-semibold mb-4">Legal</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Aviso legal</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Política de privacidad</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Cookies</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-semibold mb-4">Síguenos</h4>
              <div class="flex space-x-4">
                <a href="#" class="footer-link text-gray-400 hover:text-white">
                  <i data-feather="twitter"></i>
                </a>
                <a href="#" class="footer-link text-gray-400 hover:text-white">
                  <i data-feather="facebook"></i>
                </a>
                <a href="#" class="footer-link text-gray-400 hover:text-white">
                  <i data-feather="instagram"></i>
                </a>
                <a href="#" class="footer-link text-gray-400 hover:text-white">
                  <i data-feather="youtube"></i>
                </a>
              </div>
              
              <h4 class="font-semibold mt-6 mb-4">Suscríbete</h4>
              <div class="flex">
                <input type="email" placeholder="Tu email" class="px-4 py-2 rounded-l text-gray-800 w-full">
                <button class="bg-red-600 px-4 py-2 rounded-r">
                  <i data-feather="send"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 EscándaloDigital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);