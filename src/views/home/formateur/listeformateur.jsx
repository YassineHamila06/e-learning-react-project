import React, { useEffect, useState } from 'react'
import formateur from '../../../service/formateur';
import { Link } from 'react-router-dom';

const Listeformateur = () => {
    const [data , setData] = useState([]);

    const getformateur = async ()=>{
        try{
            const response = await formateur.getformateur();
            setData(response.data.data);
            console.log(response.data.data)
        } catch (err){
            console.log(err);
        }
    };
    useEffect(()=>{
        getformateur();
    },[])
    const deletebutton = (id)=>{
        formateur.deleteformateur(id).then(res => {
            getformateur()
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
            <h6 className="fw-semibold mb-0">specialite</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">diplome</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">description</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">Action</h6>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((formateure,index)=>{
            return(
                <tr key={formateure._id}>
                     <td className="border-bottom-0">
              <h6 className="fw-semibold mb-0">{formateure._id}</h6>
            </td>
            <td className="border-bottom-0">
              <h6 className="fw-semibold mb-1">{formateure.name}</h6>
              <span className="fw-normal"></span>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formateure.email}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formateure.password}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formateure.phone}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formateure.specialite}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formateure.diplome}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formateure.description}</p>
            </td>
            <td className="border-bottom-0">
              <button className="btn btn-danger" onClick={() => deletebutton(formateure._id)}>Delete</button>
              <Link to={`/updatefore/${formateure._id}`}>
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

export default Listeformateur
