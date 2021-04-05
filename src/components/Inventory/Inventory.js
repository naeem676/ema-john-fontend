import React from 'react';



const Inventory = () => {
    
   
    const handleAddProducts = () => {
        const products = {}
       fetch('https://desolate-savannah-74449.herokuapp.com/addProducts', {
           method: 'POST',
           headers:{'Content-Type': 'application/json'},
           body: JSON.stringify(products)
       })
    }
    return (
        <div>
        <form action={handleAddProducts}>
            <p><span>Name:</span><input type="text"/></p>
            <p><span>Price:</span><input type="text"/></p>
            <p><span>Quantity:</span><input type="text"/></p>
            <p><span>Picture:</span><input type="file"/></p>
            <button type='submit'  >add products</button>
            
        </form>
        
            
        </div>
    );
};

export default Inventory;