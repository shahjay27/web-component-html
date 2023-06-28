class BannerElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        /* Create Shadow Element */
        //const shadowElem = this.attachShadow({ mode: "open" });
        const shadowElem = this.attachShadow({ mode: "closed" });

        /* Style Shadow Element */
        //const styleElem = document.createElement('style');
        //styleElem.innerHTML =
        //will have to remove <style></style> if using styleElem 
        const style=`<style>
                            p,
                            h2 {
                                margin: 10px 5px;
                            }

                            .wrapper {
                                margin:5px;
                                width: 30%;
                                padding: 10px;
                                background-color: rgb(22, 115, 22);
                                color: white;
                                border: 0.5px solid black;
                                border-radius: 10px;
                            }

                            .light {
                                font-size: 25px;
                                text-decoration: underline;
                            }

                            a {
                                color: white;
                                letter-spacing: 1.5px;
                                font-weight: lighter;
                            }

                            a:hover {
                                color: rgb(169, 31, 31);
                            }
                            </style>
                        `
        shadowElem.innerHTML=style;
        //shadowElem.appendChild(styleElem);
        
        /* Markup */
        const divElem = document.createElement('div');
        divElem.innerHTML = `<div class="wrapper">
                                    <p class="light">${this.getAttribute('category') || ''}</p>
                                    <h2>${this.getAttribute('title') || ''}</h2>
                                    <p>${this.getAttribute('description') || ''}</p>
                                    <h3><a href="some website">Learn More</a></h3>
                                </div>`;
        shadowElem.appendChild(divElem);
    }
}

customElements.define('banner-element',BannerElement);