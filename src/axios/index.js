import axios from 'axios'

const BASE_URL = 'https://motion.propulsion-home.ch/backend/api'

const UserAxios = axios.create({
    baseURL: BASE_URL
})


export const getMyUserDatas = async (token) => {
        return await UserAxios.get('/users/me/', {headers: {
        Authorization: `Bearer ${token}`
      }})
}





export default UserAxios
