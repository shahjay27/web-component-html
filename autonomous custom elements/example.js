class ProductGrid extends HTMLElement{
    constructor(){
        super();
    }

     connectedCallback(){

        console.time('start');
        var element=document.createDocumentFragment();

         fetch('Assets/random_data.json')
            .then(res=> res.json())
            .then(data=>{
                for(let i=0; i<data.length; i++){
                    var container = document.createElement("div");
                    container.className='container';
                    var img = document.createElement("img");
                    img.setAttribute("src",data[i].image);
                    img.setAttribute("alt","Some Image");
                    var h2 = document.createElement("h2");
                    h2.innerHTML=data[i].product_name;
                    container.appendChild(img);
                    container.appendChild(h2);
                    element.appendChild(container);
                }
                this.appendChild(element);
                console.timeEnd('start');
            })
    }
}

customElements.define('product-grid',ProductGrid);
