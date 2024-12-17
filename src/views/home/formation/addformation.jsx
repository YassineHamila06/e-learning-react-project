import React, { useState } from 'react'
import formation from '../../../service/formation'
import Swal from "sweetalert2"
const Addformation = () => {
  const [data,setdata]=useState({}) 
  const changeHandller = (e)=>{
    setdata({ ...data, [e.target.name]:e.target.value
  })}
  const submitHandller = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    
    // Ensure `data` exists and `formation.addformation` is available
    formation.addformation(data)
      .then((res) => {
        console.log(res?.data?.data); // Safely access data
        
        // Display a success message using SweetAlert2
        Swal.fire({
          title: "Success!",
          text: "Your form has been submitted successfully.",
          icon: "success",
          showCloseButton: true,
          confirmButtonText: "OK",
        });
      })
      .catch((err) => {
        console.error("Error:", err);
  
        // Display an error message
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          showCloseButton: true,
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div>
      <div className="container-fluid">
  <div className="container-fluid">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-semibold mb-4">add formation</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={submitHandller}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                <input type="text" name='nom' onChange={changeHandller} className="form-control" id="nom"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">description</label>
                <input type="text" name='description' onChange={changeHandller}  className="form-control" id="description" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">date de debut</label>
                <input type="date" name="date_de_debut" onChange={changeHandller} className="form-control" id="date_de_debut"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">date de fin</label>
                <input type="date" name="date_de_fin" onChange={changeHandller} className="form-control" id="date_de_fin"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">deadline_inscription</label>
                <input type="date" name="deadline_inscription" onChange={changeHandller} className="form-control" id="deadline_inscription"/>
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

export default Addformation
