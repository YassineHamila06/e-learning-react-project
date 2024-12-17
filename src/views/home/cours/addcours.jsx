import React, { useState } from 'react'
import cours from '../../../service/cours'
import Swal from "sweetalert2"

const Addcours = () => {
  const [data,setdata]=useState({}) //usestate nsta3mloha ki ybda 3ana modification a chaque fois -- react hooks//
  const [gal,setgal]=useState({})
  const changeHandller = (e)=>{
    setdata({ ...data, [e.target.name]:e.target.value
  })}
  const changeImage=(e)=>{
    setgal(e.target.files)
  }
  
  const submitHandller = (e)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append('image',gal[0])
    formData.append('title',data.title)
    formData.append('description',data.description)
   formData.append('nombre_de_cours',Number(data.nombre_de_cours))
    cours.addcours(formData).then((res)=>{
      console.log(res.data.data);
             Swal.fire({
                title: "Success!",
                text: "Your form has been submitted successfully.",
                icon: "warning",
                showCloseButton: true,
                confirmButtonText: "OK",
              })
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
        <h5 className="card-title fw-semibold mb-4">add cours</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={submitHandller}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">title</label>
                <input type="text" name='title' onChange={changeHandller} className="form-control" id="title"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">nombre de cours</label>
                <input type="number" name='nombre_de_cours' onChange={changeHandller} className="form-control" id="nombrecours" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">description</label>
                <input type="text" name="description" onChange={changeHandller} className="form-control" id="description"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">images</label>
                <input type="file" name="image" onChange={changeImage} className="form-control" id="image" accept='image/*'/>
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

export default Addcours
