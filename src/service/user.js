import axios from '../service/serviceContext'; 
const login = (data)=> {
    return axios.post(`/user/login`,data)
}
const forgotPassword = (data)=> {
    return axios.post('/user/forget',data)
}
const resetPassword =(token,data)=> {
    return axios.post(`/user/reset/${token}`,data)
}

export default{login,forgotPassword,resetPassword}