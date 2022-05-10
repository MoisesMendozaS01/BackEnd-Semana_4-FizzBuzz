const Reader = require("./../../../../BackEnd-Semana_4-FizzBuzz/lib/utils/Reader")


describe("Unit Test for Reader class",()=>{
    test("Parte 1: refactoring",()=>{
        const explorers = Reader.readJsonFile("./../../../../BackEnd-Semana_4-FizzBuzz/explorers.json")
        console.log(explorers)
        expect(explorers).not.toBeUndefined()
    })
})