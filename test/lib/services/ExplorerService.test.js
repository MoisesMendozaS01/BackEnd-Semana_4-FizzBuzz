const Reader = require("./../../../../BackEnd-Semana_4-FizzBuzz/lib/utils/Reader")
const explorers = Reader.readJsonFile("./explorers.json");

const ExplorerService = require("./../../../../BackEnd-Semana_4-FizzBuzz/lib/services/ExplorerService")


describe('Unit Test for ExplorerService',()=>{
    test('Parte 1: static funtion filter',()=>{
        const ExplorersInNode = ExplorerService.filterByMission(explorers,"node");
        expect(ExplorersInNode.length).toBe(10)
    })
})