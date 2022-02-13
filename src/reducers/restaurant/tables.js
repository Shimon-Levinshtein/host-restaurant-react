import { CHANGE_TABLE_STATUS } from '../../actions/table';

const defaultState = [
    {
        Table: 101,
        Diners: 1,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            102,
            103
        ]
    },
    {
        Table: 102,
        Diners: 1,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            101,
            103
        ]
    },
    {
        Table: 103,
        Diners: 1,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            101,
            102
        ]
    },
    {
        Table: 201,
        Diners: 2,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            202
        ]
    },
    {
        Table: 202,
        Diners: 2,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            201
        ]
    },
    {
        Table: 203,
        Diners: 2,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            601
        ]
    },
    {
        Table: 301,
        Diners: 3,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: []
    },
    {
        Table: 302,
        Diners: 3,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            501
        ]
    },
    {
        Table: 401,
        Diners: 4,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            402
        ]
    },
    {
        Table: 402,
        Diners: 4,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            401
        ]
    },
    {
        Table: 501,
        Diners: 5,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            302
        ]
    },
    {
        Table: 601,
        Diners: 6,
        Status: 'empty',
        mobile: false,
        diners: false,
        startTimetamp: false,
        Concat: [
            203
        ]
    }
];

const tables = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TABLE_STATUS:
            const newState = [...state];
            newState.map((item, index) => {
                if (item.Table === action.payload.id) {
                    newState[index].Status = action.payload.status;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default tables;