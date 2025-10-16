export const getProducts=async()=>{
    const res= await fetch('https://dummyjson.com/products');
    const data =await res.json();
    return data;
} 

export const getID=async(id:number)=>{
    const res= await fetch(`https://dummyjson.com/products/${id}`);
    return res.json();
  
} 