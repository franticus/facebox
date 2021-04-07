const state = {
    messagePage: {
        dialogsData: [
            {id: '1', name: 'Настя'},
            {id: '2', name: 'Женик'},
            {id: '3', name: 'Хмарик'},
            {id: '4', name: 'Полина'}
        ],
        messagesData: [
            {id: '1', text: 'Люблю'},
            {id: '2', text: 'Хочу пива'},
            {id: '3', text: 'Хочу пиццу'},
            {id: '4', text: 'Хочу Вову'}
        ],
    },
    profilePage: {
        postsData: [
            {
                id: '1',
                text: '„Каждый волен распоряжаться своей жопой, как ему хочется. Поэтому я свою поднимаю и уёбываю.“',
                likesCount: '335',
            },
            {
                id: '2',
                text: '„Грустной жопой радостно не пукнешь.“',
                likesCount: '633',
            },
            {
                id: '3',
                text: '„Душа не жопа — высраться не может.“',
                likesCount: '223',
            }
        ]
    }
}

export default state;