
import axios from '../service/serviceContext'; 
const addcours = (data)=> {
    return axios.post(`/cours/add`,data)
}
const getcours = ()=> {
    return axios.get('/cours/get')
}
const deletecours =(id)=> {
    return axios.delete(`/cours/delete/${id}`)
}

const updateCours =(id,data)=> {
    return axios.put(`/cours/update/${id}`,data)
}

export default{addcours,getcours,updateCours,deletecours}