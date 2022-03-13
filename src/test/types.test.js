import '@testing-library/jest-dom'
import { loginReducer } from '../reducers/loginReducer'
import { types } from '../types/types'

describe('Verificar types', () => { 
    test('should', () => {

    })

    test('Validación de types', () => { 
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register'
        })
    })

    test('Login reducer, usuarios', () => { 

        const initState = {};

        const action = {
            type: types.login,
            payload: {
                id: 'l1d2b3v4',
                displayname: 'David B'
            }
        };

        const state = loginReducer( initState, action);

        expect(state).toEqual({
            id: 'l1d2b3v4',
            name: 'David B'
        })
    })
})