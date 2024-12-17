import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import formateur from '../../../service/formateur'

const Updateformateur = () => {
    const{id}=useParams()
    const [data,setData]= useState({})
    const handlechange = (e) => {
        const { name, value } = e.target;
        setData((prevFromdata) =>({
            ...prevFromdata,
            [name]: value,
        }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault()
        formateur.updateformateur(id,data).then((res)=>{
            console.log(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
      <div className="container-fluid">
  <div className="container-fluid">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-semibold mb-4">update formateur</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">name</label>
                <input type="text" name='name' onChange={handlechange} className="form-control" id="name"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                <input type="text" name='email' onChange={handlechange}  className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">password</label>
                <input type="password" name="password" onChange={handlechange} className="form-control" id="password"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">phone</label>
                <input type="number" name="phone" onChange={handlechange} className="form-control" id="phone"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">specialite</label>
                <input type="text" name="specialite" onChange={handlechange} className="form-control" id="specialite"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">diplome</label>
                <input type="text" name="diplome" onChange={handlechange} className="form-control" id="diplome"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">description</label>
                <input type="text" name="description" onChange={handlechange} className="form-control" id="description"/>
              </div>
              
              <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Updateformateur
