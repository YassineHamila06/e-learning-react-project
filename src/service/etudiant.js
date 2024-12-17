
import axios from '../service/serviceContext'; 
const addetudiant = (data)=> {
    return axios.post(`/etudiant/add`,data)
}
const getetudiant = ()=> {
    return axios.get('/etudiant/get')
}
const deleteetudiant =(id)=> {
    return axios.delete(`/etudiant/delete/${id}`)
}

const updateetudiant =(id,data)=> {
    return axios.put(`/etudiant/update/${id}`,data)
}

export default{addetudiant,getetudiant,updateetudiant,deleteetudiant}