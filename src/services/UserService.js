import Api from 'http://10.31.27.240:8081/speakers'
export default {
    index(search) {
        return Api().get('users')
    },
    show(userId) {
        return Api().get('user/' + userId)
    },
    post(user) {
        return Api().post('user', user)
    },
    put(user) {
        return Api().put('user/' + user.id, user)
    },
    delete(user) {
        return Api().delete('user/' + user.id, user)
    },
}