import React, { useEffect, useState } from 'react'
import etudiant from '../../../service/etudiant';
import { Link } from 'react-router-dom';

const Listeetudiant = () => {
    const [data,setdata] = useState([]);
    const getetudiant = async()=>{
        try{
            const response = await etudiant.getetudiant();
            setdata(response.data.data);
            console.log(response.data.data)
        } catch (err){
            console.log(err);
        }
    };
    useEffect(()=>{
        getetudiant();
    },[])
    const deletebutton = (id)=>{
        etudiant.deleteetudiant(id).then(res => {
            getetudiant()
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
            <h6 className="fw-semibold mb-0">name</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">email</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">password</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">phone</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">cv</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">niveau</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">Action</h6>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((etudiants,index)=>{
            return(
                <tr key={etudiants._id}>
                     <td className="border-bottom-0">
              <h6 className="fw-semibold mb-0">{etudiants._id}</h6>
            </td>
            <td className="border-bottom-0">
              <h6 className="fw-semibold mb-1">{etudiants.name}</h6>
              <span className="fw-normal"></span>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{etudiants.email}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{etudiants.password}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{etudiants.phone}</p>
            </td>
            <td className="border-bottom-0">
            <img
                     src={`http://localhost:3000/${etudiants.cv}`}
                     alt="course" width={100} height={100}
                  />
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{etudiants.niveau}</p>
            </td>
            <td className="border-bottom-0">
              <button className="btn btn-danger" onClick={() => deletebutton(etudiants._id)}>Delete</button>
              <Link to={`/updateforr/${etudiants._id}`}>
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
  )
}

export default Listeetudiant
