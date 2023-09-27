const pickupPointsByCities = [
    {
        id: 'city_1',
        name: 'Самара',
        pickupPoints: [
            'ул. Авроры д.191',
            'пр. Гагарина д.57',
            'ул. Молодежная 9'
        ]
    },
    {
        id: 'city_2',
        name: 'Москва',
        pickupPoints: [
            'пер. Вишняковский, д.23',
            'ул. Покровка, д.34',
            'ул. Костикова, д.5'
        ]
    },
    {
        id: 'city_3',
        name: 'Санкт-Петербург',
        pickupPoints: [
            'пер. Гривцова, д.3',
            'Введенский канал, д.7',
            'ул. 12-я Красноармейская, д.11'
        ]
    }
];

const defaultSelectedProducts = [
    {
        id: 'product_1',
        name: "product1",
        count: 1,
    },
    {
        id: 'product_2',
        name: "product2",
        count: 2,
    }
];

const clientDataFields = [
    {
        type: 'text',
        fieldName: "name",
        label: "Имя"
    },
    {
        type: 'text',
        fieldName: "surname",
        label: "Фамилия"
    },
    {
        type: 'number',
        fieldName: "phone",
        label: "Номер телефона"
    }
]

export { pickupPointsByCities, defaultSelectedProducts, clientDataFields };