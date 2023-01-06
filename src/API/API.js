import axios from 'axios';

const instans = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'cea460ad-0a1b-411e-b073-b48e8d84a55a'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (instans.get(`users?page=${currentPage}&count=${pageSize}`))
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instans.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(id) {
        return instans.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
};

export const authAPI = {
    getAuth() {
        return instans.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    loginAuth(email, password, rememberMe = false) {
        return instans.post(`auth/login`, { email, password, rememberMe })
            .then(response => {
                return response.data;
            })
    },
    logoutAuth() {
        return instans.delete(`auth/login`)
        .then(response => {
            return response.data;
        })
    },
};

export const profileAPI = {
    getProfile(profileId) {
        return instans.get(`profile/${profileId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatus(profileId) {
        return instans.get(`profile/status/${profileId}`)
            .then(response => {
                return response.data;
            })
    },
    updateStatus(status) {
        return instans.put(`profile/status`, { status })
            .then(response => {
                return response.data;
            })
    },
}



