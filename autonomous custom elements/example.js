class ProductGrid extends HTMLElement{
    constructor(){
        super();
    }

     connectedCallback(){

        //console.time('start');
        var element=document.createDocumentFragment();

         fetch('Assets/random_data.json')
            .then(res=>res.json())
            .then(data=>{
                for(const product of data){
                    var container = document.createElement("div");
                    container.className='container';
                    //product image
                    var img = document.createElement("img");
                    img.setAttribute("src",product.image);
                    img.setAttribute("alt","Some Image");
                    //product title
                    var h2 = document.createElement("h2");
                    h2.innerHTML=product.product_name;
                    //append all 
                    container.append(img);
                    container.append(h2);
                    element.append(container);
                }
                this.append(element);
                //console.timeEnd('start');
            });
    }
}

customElements.define('product-grid',ProductGrid);
