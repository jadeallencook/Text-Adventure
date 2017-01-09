$(function(){
   // main character build 
    var character = {
        name: 'Lk',
        health: 100,
        attack: 5,
        money: 0,
        inventory:{
            weapons: [],
            food: [],
            potions: [],
            armour: [],
            abilities: [],
        }
    };
    
    var enemy = function(name, health, attack, symbol){
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.symbol = symbol;
    };
    
    var enemies = {
        desert: [
            new enemy('Mummy', 25, [1, 5], 'Mu'),
            new enemy('Sand Dragon', 100, [25, 30], 'Sd')
        ],
        woods: [],
        water:  [],
        graveyard:  [],
        mountains:  [],
        random:  [],
        grass:  []
    };
    
    var drops = {
        desert: [],
        woods: [],
        water:  [],
        graveyard:  [],
        mountains:  [],
        random:  [],
        grass:  []
    };
    
    console.log(enemies.desert);
    
});