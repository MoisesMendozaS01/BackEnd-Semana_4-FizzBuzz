const Reader = require("./../../../../BackEnd-Semana_4-FizzBuzz/lib/utils/Reader")
const explorers = Reader.readJsonFile("./explorers.json");

const ExplorerService = require("./../../../../BackEnd-Semana_4-FizzBuzz/lib/services/ExplorerService")


describe('Unit Test for ExplorerService',()=>{
    test('Parte 1: static funtion filter',()=>{
        const ExplorersInNode = ExplorerService.filterByMission(explorers,"node");
        expect(ExplorersInNode).not.toBeUndefined()
    });
    test('Parte 2: get Amount Of Explorers By Mission',()=>{
        const ExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers,"node");
        const ExplorersInJava = ExplorerService.getAmountOfExplorersByMission(explorers,"java")
        expect(ExplorersInNode).toBe(10)
        expect(ExplorersInJava).toBe(5)
    })
})