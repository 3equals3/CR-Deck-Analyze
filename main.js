/*--------------------------------*\
| 🔔 script: CRDA Alpha
| 🔥 author: 3equals3
| 📅 version: 1
|
| ⛔ Don't Remove Any Credits 
\*--------------------------------*/

var CRDA = new Object({
    names: new Array(),
    cards: new Array()
});



var createCard = (name, type, stats) => {
    CRDA.cards.push({
        name: name.split(":"),
        type: type,
        stats: stats,
        specialCode: "",
    })
    CRDA.names.push(name.split(":")[0]);
};
var getCard = (name) => {
    for (var i in CRDA.cards) {
        if ((CRDA.cards[i].name[0] || CRDA.cards[i].name[1]) == name) {
            return CRDA.cards[i]
        }
    }
};
(() => {
    createCard("Ice Spirit", 1, {
        e: 1,
        hp: 305,
        dps: 145,
        sp: 2,
        tg: 2,
        r: 2.5
    });
    createCard("Skeletons", 1, {
        e: 1,
        hp: 108 * 3,
        dps: 108 * 3,
        sp: 1.5,
        tg: 1,
        r: 1
    });
    createCard("Fire Spirit", 1, {
        e: 1,
        hp: 305,
        dps: 301,
        sp: 2,
        tg: 2,
        r: 2
    });
    createCard("Electro Spirit", 1, {
        e: 1,
        hp: 305,
        dps: 132,
        sp: 2,
        tg: 2,
        r: 2.5
    });
    createCard("Heal Spirit", 1, {
        e: 1,
        hp: 305,
        dps: 145,
        sp: 2,
        tg: 2,
        r: 2.5
    });
    createCard("Goblins", 1, {
        e: 2,
        hp: 267 * 3,
        dps: 144 * 3,
        sp: 2,
        tg: 1,
        r: 1
    });
    createCard("Bomber", 1, {
        e: 2,
        hp: 440,
        dps: 164,
        sp: 1,
        tg: 1.5,
        r: 4.5
    });
    createCard("Spear Goblins", 1, {
        e: 2,
        hp: 176 * 3,
        dps: 63.5 * 3,
        sp: 1.5,
        tg: 2,
        r: 5
    });
    createCard("Ice Golem", 1, {
        e: 2,
        hp: 1587,
        dps: 100,
        sp: 0.75,
        tg: 3,
        r: 0.5
    });
    createCard("Bats", 1, {
        e: 2,
        hp: 108 * 5,
        dps: 83 * 5,
        sp: 2,
        tg: 2,
        r: 1
    });
    createCard("Wall Breakers", 1, {
        e: 2,
        hp: 438 * 2,
        dps: 519 * 2 / 2,
        sp: 2,
        tg: 2,
        r: 0.5
    });
    createCard("Knight", 1, {
        e: 3,
        hp: 2206,
        dps: 222,
        sp: 1,
        tg: 1,
        r: 2
    });
    createCard("Goblin Barrel", 1, {
        e: 3,
        hp: 267*3,
        dps: 159/1.1*3,
        sp: 2,
        tg: 3,
        r: 1.5
    });
    createCard("Archers", 1, {
        e: 3,
        hp: 403 * 2,
        dps: 129 * 2,
        sp: 1,
        tg: 2,
        r: 5
    });
    createCard("Minions", 1, {
        e: 3,
        hp: 305 * 3,
        dps: 135 * 3,
        sp: 1.5,
        tg: 2,
        r: 2.5
    });
    createCard("Skeleton Army", 1, {
        e: 3,
        hp: 108 * 15,
        dps: 108 * 15,
        sp: 1.5,
        tg: 1,
        r: 0.5
    });
    createCard("Ice Wizard", 1, {
        e: 3,
        hp: 910,
        dps: 120 + 40,
        sp: 1,
        tg: 2,
        r: 5.5
    });
    createCard("Guards", 1, {
        e: 3,
        hp: (108 + 318) * 3,
        dps: 161 * 3,
        sp: 1.5,
        tg: 1,
        r: 2
    });
    createCard("Princess", 1, {
        e: 3,
        hp: 345,
        dps: 74 * 2,
        sp: 2,
        tg: 2.5,
        r: 9
    });
    createCard("Miner", 1, {
        e: 3,
        hp: 1600,
        dps: 145,
        sp: 1.5,
        tg: 3,
        r: 1
    });
    createCard("Mega Minion", 1, {
        e: 3,
        hp: 1109,
        dps: 258,
        sp: 1,
        tg: 2,
        r: 2
    });
    createCard("Dart Goblin", 1, {
        e: 3,
        hp: 345,
        dps: 249,
        sp: 2,
        tg: 2,
        r: 6.5
    });
    createCard("Goblin Band", 1, {
        e: 3,
        hp: 267 * 3 + 176 * 2,
        dps: 144 * 3 + 63.5 * 2,
        sp: 2,
        tg: 2,
        r: 5
    });
    createCard("Bandit", 1, {
        e: 3,
        hp: 1200,
        dps: 512 + 256 / 2,
        sp: 1.5,
        tg: 1,
        r: 6
    });
    createCard("Royal Ghost", 1, {
        e: 3,
        hp: 1600,
        dps: 191,
        sp: 1.5,
        tg: 1.5,
        r: 1
    });
    createCard("Skeleton Barrel", 1, {
        e: 3,
        hp: 705,
        dps: 176 / 2 + 108 * 3,
        sp: 1.5,
        tg: 3,
        r: 1
    });
    createCard("Fisherman", 1, {
        e: 3,
        hp: 1152,
        dps: 196,
        sp: 1,
        tg: 1,
        r: 7
    });
    createCard("Firecracker", 1, {
        e: 3,
        hp: 403,
        dps: 140,
        sp: 1.5,
        tg: 2,
        r: 6
    });
    createCard("Elixir Golem", 1, {
        e: 3,
        hp: (477 * 4),
        dps: 84*2,
        sp: 0.75,
        tg: 3,
        r: 0.5
    });
    createCard("Valkyrie", 1, {
        e: 4,
        hp: 2529,
        dps: 236,
        sp: 1,
        tg: 1.5,
        r: 1
    });
    createCard("Musketeer", 1, {
        e: 4,
        hp: 955,
        dps: 289,
        sp: 1,
        tg: 2,
        r: 6
    });
    createCard("Baby Dragon", 1, {
        e: 4,
        hp: 1526,
        dps: 141,
        sp: 1.5,
        tg: 2,
        r: 3.5
    });
    createCard("Mini PEKKA", 1, {
        e: 4,
        hp: 1804,
        dps: 596,
        sp: 1.5,
        tg: 1,
        r: 0.5
    });
    createCard("Hog Rider", 1, {
        e: 4,
        hp: 2248,
        dps: 263,
        sp: 2,
        tg: 3,
        r: 0.5
    });
    createCard("Dark Prince", 1, {
        e: 4,
        hp: 1590 + 318,
        dps: 328 / 1.3,
        sp: 1,
        tg: 1.5,
        r: 1
    });
    createCard("Lumberjack", 1, {
        e: 4,
        hp: 1696,
        dps: 400,
        sp: 2,
        tg: 1,
        r: 0.5
    });
    createCard("Battle Ram", 1, {
        e: 4,
        hp: 1208 + 888 * 2,
        dps: 379 / 2 + 254 * 2 / 1.4,
        sp: 1,
        tg: 3,
        r: 0.5
    });
    createCard("Inferno Dragon", 1, {
        e: 4,
        hp: 1712,
        dps: (1400 - 120) * 0.4,
        sp: 1,
        tg: 2,
        r: 3.5
    });
    createCard("Electro Wizard", 1, {
        e: 4,
        hp: 944,
        dps: 80 * 2 + 254 / 3,
        sp: 1.5,
        tg: 2,
        r: 5
    });
    createCard("Hunter", 1, {
        e: 4,
        hp: 1110,
        dps: 112 * 10 / 2.2,
        sp: 1,
        tg: 2,
        r: 6.5
    });
    createCard("Night Witch", 1, {
        e: 4,
        hp: 1200,
        dps: 277 + 108 * 2 / 1.3,
        sp: 1,
        tg: 1.5,
        r: 2
    });
    createCard("Zappies", 1, {
        e: 4,
        hp: 702 * 3,
        dps: 73 * 3,
        sp: 1,
        tg: 2,
        r: 4.5
    });
    createCard("Flying Machine", 1, {
        e: 4,
        hp: 814,
        dps: 227 / 1.1,
        sp: 1.5,
        tg: 2,
        r: 6
    });
    createCard("Magic Archer", 1, {
        e: 4,
        hp: 704,
        dps: 177 / 1.1,
        sp: 1,
        tg: 2,
        r: 7
    });
    createCard("Battle Healer", 1, {
        e: 4,
        hp: 2276 + 134 * 3,
        dps: 130,
        sp: 1,
        tg: 1,
        r: 2
    });
    createCard("Skeleton Dragons", 1, {
        e: 4,
        hp: 705 * 2,
        dps: 213 * 2 / 1.9,
        sp: 1.5,
        tg: 2,
        r: 3.5
    });
    createCard("Mother Witch", 1, {
        e: 4,
        hp: 704 + 832,
        dps: 70 / 1.2 + 176 / 1.1,
        sp: 1,
        tg: 2,
        r: 5.5
    });
    createCard("Giant", 1, {
        e: 5,
        hp: 5423,
        dps: 224,
        sp: 0.75,
        tg: 3,
        r: 1
    });
    createCard("Balloon", 1, {
        e: 5,
        hp: 2226,
        dps: 318 / 3 + 424,
        sp: 1,
        tg: 3,
        r: 1
    });
    createCard("Witch", 1, {
        e: 5,
        hp: 1110,
        dps: 178 / 1.1 + 3 * 108,
        sp: 1,
        tg: 2,
        r: 5.5
    });
    createCard("Barbarians", 1, {
        e: 5,
        hp: 888 * 5,
        dps: 181 * 5,
        sp: 1,
        tg: 1,
        r: 1
    });
    createCard("Prince", 1, {
        e: 5,
        hp: 2544,
        dps: 370 + 1038 / 3,
        sp: 1.25,
        tg: 1,
        r: 2
    });
    createCard("Wizard", 1, {
        e: 5,
        hp: 955,
        dps: 373 / 1.4,
        sp: 1,
        tg: 2,
        r: 5.5
    });
    createCard("Minion Horde", 1, {
        e: 5,
        hp: 305 * 5,
        dps: 135 * 5,
        sp: 1,
        tg: 2,
        r: 2
    });
    createCard("Bowler", 1, {
        e: 5,
        hp: 2756,
        dps: 381 / 2.5,
        sp: 0.75,
        tg: 1.5,
        r: 4
    });
    createCard("Executor", 1, {
        e: 5,
        hp: 1696,
        dps: 224 * 2,
        sp: 1,
        tg: 2,
        r: 6.5 / 2 + 2
    });
    createCard("Ram Rider", 1, {
        e: 5,
        hp: 2337,
        dps: 195 + 704 / 3,
        sp: 1,
        tg: 3,
        r: 2
    });
    createCard("Rascals", 1, {
        e: 5,
        hp: 2423 + 345 * 2,
        dps: 176 * 2 + 176 / 1.5,
        sp: 1,
        tg: 1.5,
        r: 5
    });
    createCard("Cannon Cart", 1, {
        e: 5,
        hp: 1182 * 2,
        dps: 281,
        sp: 1,
        tg: 1,
        r: 5.5
    });
    createCard("Royal Hogs", 1, {
        e: 5,
        hp: 1109 * 4,
        dps: 81 * 4,
        sp: 2,
        tg: 3,
        r: 0.5
    });
    createCard("Electro Dragon", 1, {
        e: 5,
        hp: 1259,
        dps: 254 * 3 / 2.1,
        sp: 1,
        tg: 2,
        r: 3.5
    });
    createCard("Giant Skeleton", 1, {
        e: 6,
        hp: 4770,
        dps: 252 + 708 / 3 * 2,
        sp: 1,
        tg: 1.5,
        r: 0.5
    });
    createCard("Royal Giant", 1, {
        e: 6,
        hp: 4068,
        dps: 406 / 1.7,
        sp: 1,
        tg: 3,
        r: 5
    });
    createCard("Sparky", 1, {
        e: 6,
        hp: 1920,
        dps: 1760,
        sp: 0.75,
        tg: 1.5,
        r: 5
    });
    createCard("Elite Barbarians", 1, {
        e: 6,
        hp: 1776 * 2,
        dps: 362 * 2,
        sp: 2,
        tg: 1,
        r: 1
    });
    createCard("Goblin Giant", 1, {
        e: 6,
        hp: 4170 + 176 * 2,
        dps: 108 * 2 / 1.7,
        sp: 1,
        tg: 3,
        r: 5.5
    });
    createCard("PEKKA", 1, {
        e: 7,
        hp: 4982,
        dps: 600,
        sp: 0.75,
        tg: 1,
        r: 1
    });
    createCard("Lava Hound", 1, {
        e: 7,
        hp: 5040 + 286 * 6,
        dps: 72 + 120 * 6 / 1.7,
        sp: 0.75,
        tg: 3,
        r: 3.5
    });
    createCard("Royal Recruits", 1, {
        e: 7,
        hp: 705 * 6 + 318 * 6,
        dps: 135 * 6,
        sp: 1,
        tg: 1,
        r: 2
    });
    createCard("Mega Knight", 1, {
        e: 7,
        hp: 5280,
        dps: 208 + 710 / 3,
        sp: 1,
        tg: 1.5,
        r: 4.25
    });
    createCard("Electro Giant", 1, {
        e: 7,
        hp: 4685,
        dps: 102 + 254 / 2.1,
        sp: 1,
        tg: 3,
        r: 2.5
    });
    createCard("Golem", 1, {
        e: 8,
        hp: 6784,
        dps: 165 + 296 / 3 + 65 * 2 / 2.5,
        sp: 0.75,
        tg: 3,
        r: 1
    });
    createCard("Three Musketeers", 1, {
        e: 9,
        hp: 955 * 3,
        dps: 289 * 3,
        sp: 1,
        tg: 2,
        r: 6
    });
    //spells
    createCard("Zap", 2, {
        e: 2,
        ad: 254,
        ctd: 77,
        tg: 2,
        r: 2.5
    });
    createCard("Log", 2, {
        e: 2,
        ad: 384,
        ctd: 116,
        tg: 1,
        r: 3.9
    });
    createCard("Barbarian Barrel", 2, {
        e: 2,
        ad: 320,
        ctd: 254/1.4,
        tg: 1,
        r: 2.6
    });
    createCard("Arrows", 2, {
        e: 3,
        ad: 486,
        ctd: 147,
        tg: 2,
        r: 4
    });
    createCard("Tornado", 2, {
        e: 3,
        ad: 448/3,
        ctd: 78,
        tg: 2,
        r: 5.5
    });
    createCard("Earthquake", 2, {
        e: 3,
        ad: 245*3,
        ctd: 71*3,
        tg: 1,
        r: 3.5
    });
    createCard("Royal Delivery", 2, {
        e: 3,
        ad: 579,
        ctd: 0,
        tg: 2,
        r: 3
    });
    createCard("Fireball", 2, {
        e: 4,
        ad: 913,
        ctd: 274,
        tg: 2,
        r: 2.5
    });
    createCard("Freeze", 2, {
        e: 4,
        ad: 152*4,
        ctd: 46,
        tg: 2,
        r: 3
    });
    createCard("Poison", 2, {
        e: 4,
        ad: 120*4,
        ctd: 36*8,
        tg: 2,
        r: 3.5
    });
    createCard("Graveyard", 2, {
        e: 5,
        ad: 108*5,
        ctd: 108*5,
        tg: 2,
        r: 4
    });
    createCard("Rocket", 2, {
        e: 6,
        ad: 1967,
        ctd: 591,
        tg: 2,
        r: 2
    });
    createCard("Lightning", 2, {
        e: 6,
        ad: 1399,
        ctd: 420,
        tg: 1.5,
        r: 3.5
    });
    //buildings
    createCard("Cannon", 3, {
        e: 3,
        hp: 1186,
        d: 281,
        ctd: 0,
        tg: 1,
        r: 5.5
    });
    createCard("Tombstone", 3, {
        e: 3,
        hp: 702,
        d: 108*2,
        ctd: 108*2/8,
        tg: 1,
        r: 1
    });
    createCard("Mortar", 3, {
        e: 4,
        hp: 1949,
        d: 352/5,
        ctd: 352/5,
        tg: 1.5,
        r: 11.5
    });
    createCard("Bomb Tower", 3, {
        e: 4,
        hp: 1798,
        d: 295/1.6,
        ctd: 0,
        tg: 1.5,
        r: 6
    });
    createCard("Tesla", 3, {
        e: 4,
        hp: 1525,
        d: 254,
        ctd: 0,
        tg: 2,
        r: 5.5
    });
    createCard("Furnace", 3, {
        e: 4,
        hp: 1124,
        d: 301/6,
        ctd: 301/6,
        tg: 2,
        r: 2.5
    });
    createCard("Goblin Cage", 3, {
        e: 4,
        hp: 983+1362,
        d: 446/1.1,
        ctd: 446/1.1,
        tg: 1,
        r: 0.75
    });
    createCard("Goblin Drill", 3, {
        e: 4,
        hp: 1908+267*3,
        d: 108+159*3/1.1,
        ctd: 33+159*3/1.1,
        tg: 1,
        r: 1
    });
    createCard("Goblin Hut", 3, {
        e: 5,
        hp: 1124 + 3*176,
        d: 108*3/1.7,
        ctd: 108/1.7,
        tg: 2,
        r: 5
    });
    createCard("Inferno", 3, {
        e: 5,
        hp: 2318,
        d: (2810-140)*0.4,
        ctd: 0,
        tg: 2,
        r: 6
    });
    createCard("X-Bow", 3, {
        e: 6,
        hp: 2120,
        d: 55/0.3,
        ctd: 55/0.3,
        tg: 1,
        r: 11.5
    });
    createCard("Barbarian Hut", 3, {
        e: 7,
        hp: 1545 + 2*888,
        d: 254*2/1.4,
        ctd: 254/1.4,
        tg: 1,
        r: 0.75
    });
})();

var attack = 0;
var defense = 0;
var balance = 0;
var elixir = 0;

var deck0 = ["Ice Spirit","Mini PEKKA","Goblin Barrel","Skeleton Barrel","Bats","Tornado","Log","Goblin Hut"];       //punishment     - 4724
var deck1 = ["Ice Spirit","Knight","Goblin Barrel","Princess","Goblin Band","Rocket","Log","Inferno"];              //spellbait      - 8194
var deck2 = ["Ice Spirit","Valkyrie","Goblin Barrel","Princess","Guards","Rocket","Log","Inferno"];                 //spellbait v2   - 6556
var deck3 = ["Ice Spirit","Knight","Goblin Barrel","Princess","Goblin Band","Rocket","Log","Tesla"];                //spellbait v1.5 - 8334
var deck4 = ["Musketeer","Bats","Mega Knight","Barbarian Barrel","Fireball","Bandit","Wall Breakers","Miner"];      //non-meta       - 6836
var deck5 = ["Ice Spirit","Knight","Skeletons","Musketeer","Miner","Log","Tesla","Poison"];                         //miner control  - 5624
var deck6 = ["Zap","Bats","Fireball","Goblin Barrel","Tesla","Mini PEKKA","Skeleton Barrel","Elixir Golem"];        //non-meta 2     - 5044
var deck7 = ["Hog Rider","Musketeer","Fireball","Ice Golem","Cannon","Ice Spirit","Skeletons","Log"];               //hog 2.6        - 6926
var deck8 = ["Knight","Musketeer","Archers","Minions","Arrows","Fireball","Giant","Mini PEKKA"];                    //start deck     - 6760

deck.forEach(function (e) {
    let c = getCard(e);
    if(c.type == 1){
        attack+=c.stats.hp/c.stats.e + c.stats.dps * c.stats.tg*c.stats.sp;
        defense+=(c.stats.hp + c.stats.dps * c.stats.tg*c.stats.r)/c.stats.e;
        elixir+=c.stats.e/8;
        console.log(e + ": "+ (c.stats.hp/c.stats.e + c.stats.dps * c.stats.tg*c.stats.sp) + ", "+ (c.stats.hp + c.stats.dps * c.stats.tg*c.stats.r)/c.stats.e);
    };
    if(c.type == 2){
        attack+=c.stats.ctd*c.stats.r*c.stats.tg/c.stats.e;
        defense+=c.stats.ad*c.stats.r*c.stats.tg/c.stats.e;
        elixir+=c.stats.e/8;
        console.log(e + ": "+ (c.stats.ctd*c.stats.r*c.stats.tg/c.stats.e) + ", "+ c.stats.ad*c.stats.r*c.stats.tg/c.stats.e);
    };
    if(c.type == 3){
        attack+=(c.stats.ctd*c.stats.tg)/c.stats.e;
        defense+=(c.stats.hp/30*c.stats.e + c.stats.d*c.stats.tg)/c.stats.e;
        elixir+=c.stats.e/8;
        console.log(e + ": "+ (c.stats.ctd*c.stats.tg)/c.stats.e + ", "+ (c.stats.hp + c.stats.d*c.stats.tg)/c.stats.e);
    };
    attack = Math.round(attack);
    defense = Math.round(defense);
    //console.log(e + ": "+ attack + ", "+ defense);
    //console.log(e + ": "+ c.stats.e);
});
elixir = Math.round(elixir*10)/10;
(attack/defense) < 1 ? (balance = 1/(attack/defense)) : (balance = attack/defense);
console.log("---\nA:" + attack + ", D:"+ defense + ", E:"+ elixir + ", B:"+balance);
console.log(Math.round((attack+defense)/(elixir + balance*balance)) *2);


