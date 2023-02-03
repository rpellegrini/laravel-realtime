export default {
    state: {
        messages: {},
        users: {}
    },

    actions: {
        storeMessage(context, params) {
            return axios.post('/chat/message', params)
                .then(response => console.log(response))
                .catch(() => console.log('error'))
        }
    }
}
