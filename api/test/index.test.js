//const { DESCRIBE } = require("sequelize/dist/lib/query-types")
const loginServices = require("../services/loginServices")
const login = new loginServices()

describe('Prueba para login',()=>{
    test('login fallido',async () =>{
        const data = await login.find('18268191','F@bian6420')
        expect(data).toBe(false)
    })
})