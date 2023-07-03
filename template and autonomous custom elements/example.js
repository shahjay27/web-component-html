class ProductGrid extends HTMLElement{
    constructor(){
        super();
    }

     connectedCallback(){

        //console.time('start');
        // creating a template to store child templates!! taking toll on rendering time?
        const element=document.createDocumentFragment();

         fetch('Assets/random_data.json')
            .then(res=> res.json())
            .then(data=>{

                for(let i=0; i<data.length; i++){
                    
                    const template = document.getElementById('shoppingGrid').content.cloneNode(true);
                    template.getElementById('productImage').setAttribute("src",data[i].image);
                    template.getElementById('productName').innerHTML=data[i].product_name;
                    
                    element.appendChild(template);
                }
                this.appendChild(element);
                //console.timeEnd('start');
            })
            .catch(error=>{
                console.log("Error: " + error.message);
            });
    }
}

customElements.define('product-grid',ProductGrid);
