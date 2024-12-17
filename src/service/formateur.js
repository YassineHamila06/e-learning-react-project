
import axios from '../service/serviceContext'; 
const addformateur = (data)=> {
    return axios.post(`/formateur/add`,data)
}
const getformateur = ()=> {
    return axios.get('/formateur/get')
}
const deleteformateur =(id)=> {
    return axios.delete(`/formateur/delete/${id}`)
}

const updateformateur =(id,data)=> {
    return axios.put(`/formateur/update/${id}`,data)
}

export default{addformateur,getformateur,updateformateur,deleteformateur}