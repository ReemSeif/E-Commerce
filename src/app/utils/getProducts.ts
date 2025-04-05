export const getProducts=async()=>{
    const res= await fetch('https://fakestoreapi.com/products');
    const data =await res.json();
    return data;
} 

export const getID=async(id:Number)=>{
    const res= await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
  
} 