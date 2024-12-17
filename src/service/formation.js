
import axios from '../service/serviceContext'; 
const addformation = (data)=> {
    return axios.post(`/formation/add`,data)
}
const getformation = ()=> {
    return axios.get('/formation/get')
}
const deleteformation =(id)=> {
    return axios.delete(`/formation/delete/${id}`)
}

const updateformation =(id,data)=> {
    return axios.put(`/formation/update/${id}`,data)
}

export default{addformation,getformation,updateformation,deleteformation}