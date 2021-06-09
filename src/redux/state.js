const state = {
    messagesPage: {
        messagesData: [
            {id: 1, message: 'Hi', name: 'she'},
            {id: 2, message: 'hello', name: 'me'},
            {id: 3, message: 'how are you?', name: 'she'},
            {id: 4, message: 'i am fine. and you?', name: 'me'},
            {id: 5, message: 'fine thanks', name: 'she'},
        ],
        dialogsData: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Alina'},
            {id: 3, name: 'Ilia'},
            {id: 4, name: 'Arman'},
            {id: 5, name: 'Hrant'},
            {id: 6, name: 'Artur'},
            {id: 7, name: 'Sveta'},
        ],
    },
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi. how are you?', likesCount: 15},
            {id: 2, message: 'it\'s my first post.', likesCount: 25},
            {id: 3, message: 'i am fine and you?', likesCount: 35},
            {id: 4, message: 'i am fine thanks', likesCount: 95},

        ]
    }
}
export default state