class BannerElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
       
        const shadowElem = this.attachShadow({ mode: "open" });
        
        const template = document.getElementById('bannerTemplate').content.cloneNode(true);
        shadowElem.appendChild(template);
    }
}

customElements.define('banner-element',BannerElement);