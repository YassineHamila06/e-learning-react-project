import React, { useState } from 'react';
import cours from '../../../service/cours';
import { useParams } from 'react-router-dom';

const Updatecours = () => {
    const {id}=useParams()
    const [gal,setgal]=useState({})
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleFileChange=(e)=>{
    setgal(e.target.files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image',gal[0])
    formData.append('title',data.title)
    formData.append('description',data.description)
    formData.append('nombre_de_cours',Number(data.nombre_de_cours))
    cours.updateCours(id,formData).then((res)=>{
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
              <h5 className="card-title fw-semibold mb-4">Update Course</h5>
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input 
                        type="text" 
                        name='title' 
                        className="form-control" 
                        id="title" 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nombrecours" className="form-label">Number of Courses</label>
                      <input 
                        type="number" 
                        name='nombre_de_cours' 
                        className="form-control" 
                        id="nombrecours" 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <input 
                        type="text" 
                        name="description" 
                        className="form-control" 
                        id="description" 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">Image</label>
                      <input 
                        type="file" 
                        name="image" 
                        className="form-control" 
                        id="image" 
                        accept='image/*' 
                        onChange={handleFileChange} 
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatecours;
