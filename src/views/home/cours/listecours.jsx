import React, { useEffect, useState } from 'react';
import cours from '../../../service/cours';
import { Link } from 'react-router-dom';


const Listecours = () => {
  const [data, setData] = useState([]);

  // Fetch courses when the component mounts
 
    const getcourse = async () => {
      try {
        const response = await cours.getcours();
        setData(response.data.data);
        console.log(response.data.data)
      } catch (err) {
        console.log(err);
      }
    };

 
useEffect(()=>{
  getcourse();
},[])  

const deletbutton = (id)=>{
  cours.deletecours(id).then((res)=>{
    getcourse()
    console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
}

  return (
    <div className="table-responsive">
      <table className="table text-nowrap mb-0 align-middle">
        <thead className="text-dark fs-4">
          <tr>
            <th className="border-bottom-0">
              <h6 className="fw-semibold mb-0">Id</h6>
            </th>
            <th className="border-bottom-0">
              <h6 className="fw-semibold mb-0">Title</h6>
            </th>
            <th className="border-bottom-0">
              <h6 className="fw-semibold mb-0">Number of Courses</h6>
            </th>
            <th className="border-bottom-0">
              <h6 className="fw-semibold mb-0">Description</h6>
            </th>
            <th className="border-bottom-0">
              <h6 className="fw-semibold mb-0">Image</h6>
            </th>
            <th className="border-bottom-0">
              <h6 className="fw-semibold mb-0">Action</h6>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((course,index) => {
            return(
              <tr key={course._id}>
              <td className="border-bottom-0">
                <h6 className="fw-semibold mb-0">{course._id}</h6>
              </td>
              <td className="border-bottom-0">
                <h6 className="fw-semibold mb-1">{course.title}</h6>
                <span className="fw-normal"></span>
              </td>
              <td className="border-bottom-0">
                <p className="mb-0 fw-normal">{course.nombre_de_cours}</p>
              </td>
              <td className="border-bottom-0">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-primary rounded-3 fw-semibold">
                    {course.description}
                  </span>
                </div>
              </td>
              <td className="border-bottom-0">
                  <img
                    src={`http://localhost:3000/${course.image}`}
                    alt="course" width={100} height={100}
              
                  />
              </td>
              <td className="border-bottom-0">
                <button className="btn btn-danger" onClick={() => deletbutton(course._id)}>Delete</button>
                <Link to={`/update/${course._id}`}>
                <button className="btn btn-danger">Update</button>
                </Link>
              </td>
            </tr>
            )
          }
            
          )}
          
        </tbody>
      </table>
    </div>
  );
};

export default Listecours;
