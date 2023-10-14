import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';

export default function Forms() {
    const [id,setId]=useState('');
    const [title,setTitle]=useState('');
    const [brand,setBrand]=useState('');
    const [price,setPrice]=useState('');
    const [des,setDes]=useState('');
    const [img,setImg]=useState('');
    const [products,setProducts]=useState([{}])


    const fetchData=()=>{
        axios.get('http://localhost:3002/products')
        .then(res=>setProducts(res.data))
    }

    

    const productData={
        productId : id,
        title : title,
        brand : brand,
        price : price,
        description : des,
        thumbnail : img
    }
    
    useEffect(() => {
        axios.get('http://localhost:3002/products').then((res) => {
          setProducts(res.data);
          fetchData()
        });
      }, []);

      const handleDelete=(id) => {
        axios.delete(`http://localhost:3002/products/${id}`)
        .then((res) => {
          alert('Product deleted')
          fetchData()
        }); 
      }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/products',productData).then((res)=>{
            alert("Success")
            fetchData()
        })
        
    }

    const handleUpdate = (e)=>{
        setId(e.id);
        setTitle(e.title);
        setBrand(e.brand);
        setDes(e.description);
        setImg(e.thumbnail);
        setPrice(e.price);
        setId(e.id);
    }

  return (
    <>
    <div className='row justify-content-center'>
        <div className='col-md-6 image-thumbnail bg-info'>
            <h3 className='text-center text-primary'>Add Products</h3>
                
        <form method='post' onSubmit={handleSubmit}>
            
            <div className='mb-3'>
                <label>Product Id</label>
                <input type='number' className='form-control' value={id} required placeholder='Enter Product Id' onChange={(e)=>{setId(e.target.value)}} />
            </div>
            <div className='mb-3'>
                <label>Product Name</label>
                <input type='text' className='form-control' value={title} required placeholder='Enter Product Name' onChange={(e)=>{setTitle(e.target.value)}} />
            </div>
            <div className='mb-3'>
                <label>Product Brand</label>
                <input type='text' className='form-control' value={brand} required placeholder='Enter Product Brand' onChange={(e)=>{setBrand(e.target.value)}} />
            </div>
            <div className='mb-3'>
                <label>Product Price</label>
                <input type='number' className='form-control' value={price} required placeholder='Enter Product Price' onChange={(e)=>{setPrice(e.target.value)}} />
            </div>
            <div className='mb-3'>
                <label>Description</label>
                <input type='text' className='form-control' value={des} required onChange={(e)=>{setDes(e.target.value)}} />
            </div>
            <div className='mb-3'>
                <label>Image</label>
                <input type='url' className='form-control' value={img} required onChange={(e)=>{setImg(e.target.value)}} placeholder='Enter Image URL' />
            </div>
            <div className='mb-3'>
                <button className=' bg-danger' style={{color: 'white'}} >Submit</button>
            </div>
        </form>
        </div>
    </div>
    <table className='table table-bordered'>
            <tr>
                <th>SNO</th>
                <th>Id</th>
                <th>Title</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Edit/Delete</th>
            </tr>
            
        {products.map((e,i)=>{
return(
    <>
    <tr key={i} >
       <td>{i+1}</td>
        <td>{e.id}</td>
        <td>{e.title}</td>
        <td>{e.brand}</td>
        <td>Rs.{e.price}</td>
        <td>{e.description}</td>
        <td><img height="200px" src={e.thumbnail}/></td>
        <td><button className='btn btn-primary ' onClick={()=>handleUpdate(e)}><i className='fa fa-solid fa-edit'></i></button>
        <button className='btn btn-danger' onClick={()=>handleDelete(e.id)}><i className='fa fa-solid fa-trash'></i></button></td>
        </tr>
        </>
      )
        })}
        </table>
    </>
  )
}
