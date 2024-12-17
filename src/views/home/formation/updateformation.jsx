import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import formation from '../../../service/formation';

const Updateformation = () => {
    const {id}=useParams()
    const [data,setData]=useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const handleSubmit = (e)=>{
        e.preventDefault()
        formation.updateformation(id,data).then((res)=>{
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
        <h5 className="card-title fw-semibold mb-4">update formation</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                <input type="text" name='nom' onChange={handleChange} className="form-control" id="nom"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">description</label>
                <input type="text" name='description' onChange={handleChange}  className="form-control" id="description" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">date de debut</label>
                <input type="text" name="date_de_debut" onChange={handleChange} className="form-control" id="date_de_debut"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">date de fin</label>
                <input type="text" name="date_de_fin" onChange={handleChange} className="form-control" id="date_de_fin"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">deadline_inscription</label>
                <input type="text" name="deadline_inscription" onChange={handleChange} className="form-control" id="deadline_inscription"/>
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

export default Updateformation
