import React, { useState } from 'react'
import etudiant from '../../../service/etudiant'


const Addetudiant = () => {
    const [data,Setdata] = useState({})
    const [gal,setgal]=useState({})
    const changeHandller = (e)=>{
        Setdata({...data, [e.target.name]:e.target.value

         })}
         const changeImage=(e)=>{
            setgal(e.target.files)
          }
         const submitHandller = (e)=>{
            e.preventDefault()
            const formData=new FormData()
            formData.append('cv',gal[0])
            formData.append('name',data.name)
            formData.append('email',data.email)
            formData.append('phone',data.phone)
            formData.append('password',data.password)
            formData.append('niveau',data.niveau)
            etudiant.addetudiant(formData).then((res)=>{
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
      <h5 className="card-title fw-semibold mb-4">add etudiant</h5>
      <div className="card">
        <div className="card-body">
          <form onSubmit={submitHandller}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">name</label>
              <input type="text" name='name' onChange={changeHandller} className="form-control" id="name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">email</label>
              <input type="text" name='email' onChange={changeHandller}  className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">password</label>
              <input type="password" name="password" onChange={changeHandller} className="form-control" id="password"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">phone</label>
              <input type="number" name="phone" onChange={changeHandller} className="form-control" id="phone"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">cv</label>
              <input type="file" name="cv" onChange={changeImage} className="form-control" id="cv"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">niveau</label>
              <input type="text" name="niveau" onChange={changeHandller} className="form-control" id="niveau"/>
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

export default Addetudiant
