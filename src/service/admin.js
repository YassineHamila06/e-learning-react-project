
import axios from '../service/serviceContext'; 
const addadmin = (data)=> {
    return axios.post(`/admin/add`,data)
}
const getadmin = ()=> {
    return axios.get('/admin/get')
}
const deleteadmin =(id)=> {
    return axios.delete(`/admin/delete/${id}`)
}

const updateadmin =(id,data)=> {
    return axios.get(`/admin/update/${id}`,data)
}

export default{addadmin,getadmin,updateadmin,deleteadmin}