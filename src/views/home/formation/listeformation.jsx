import React, { useEffect, useState } from 'react';
import formation from '../../../service/formation';
import { Link } from 'react-router-dom';


const Listeformation = () => {
    const [data, setData] = useState([]);

    // Fetch courses when the component mounts
   
      const getformation = async () => {
        try {
          const response = await formation.getformation();
          setData(response.data.data);
          console.log(response.data.data)
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(()=>{
        getformation();
      },[]) 

      const deletbutton = (id)=>{
        formation.deleteformation(id).then((res)=>{
          getformation()
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
            <h6 className="fw-semibold mb-0">nom</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">description</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">date de debut</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">date de fin</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">deadline inscription</h6>
          </th>
          <th className="border-bottom-0">
            <h6 className="fw-semibold mb-0">Action</h6>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((formatione,index) => {
          return(
            <tr key={formatione._id}>
            <td className="border-bottom-0">
              <h6 className="fw-semibold mb-0">{formatione._id}</h6>
            </td>
            <td className="border-bottom-0">
              <h6 className="fw-semibold mb-1">{formatione.nom}</h6>
              <span className="fw-normal"></span>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formatione.description}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formatione.date_de_debut}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formatione.date_de_fin}</p>
            </td>
            <td className="border-bottom-0">
              <p className="mb-0 fw-normal">{formatione.deadline_inscription}</p>
            </td>
           

            <td className="border-bottom-0">
              <button className="btn btn-danger" onClick={() => deletbutton(formatione._id)}>Delete</button>
              <Link to={`/updatefor/${formatione._id}`}>
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

export default Listeformation
