const defaultState = [
    {
        Table: 101,
        Diners: 1,
        Concat: [
            102,
            103
        ]
    },
    {
        Table: 102,
        Diners: 1,
        Concat: [
            101,
            103
        ]
    },
    {
        Table: 103,
        Diners: 1,
        Concat: [
            101,
            102
        ]
    },
    {
        Table: 201,
        Diners: 2,
        Concat: [
            202
        ]
    },
    {
        Table: 202,
        Diners: 2,
        Concat: [
            201
        ]
    },
    {
        Table: 203,
        Diners: 2,
        Concat: [
            601
        ]
    },
    {
        Table: 301,
        Diners: 3,
        Concat: []
    },
    {
        Table: 302,
        Diners: 3,
        Concat: [
            501
        ]
    },
    {
        Table: 401,
        Diners: 4,
        Concat: [
            402
        ]
    },
    {
        Table: 402,
        Diners: 4,
        Concat: [
            401
        ]
    },
    {
        Table: 501,
        Diners: 5,
        Concat: [
            302
        ]
    },
    {
        Table: 601,
        Diners: 6,
        Concat: [
            203
        ]
    }
];

const tables = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default tables;