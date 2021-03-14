const bees = [
    {
        id: 1,
        name: "Sweat Bee",
        family: "Halictidae",
        size: "Very small",
        temper: "Agressive when disturbed",
        funfacts: "It is attracted by sweat and uses the salt for nutrition",
        flowers: ["Siberian Wallflower","Fleabane Daisy","Blue Flax","Plains Coreopsis","California Poppy","Globe Gilia","Tidy Tips","Corn Poppy","Lavender Hyssop","Chinese Forget-Me-Not","Indian Blanket","Purple Coneflower","China Aster"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615576053/SweatBee_lofwap.jpg"
    },
    {
        id: 2,
        name: "Plasterer Bee",
        family: "Colletidae",
        size: "Small",
        temper: "Docile",
        funfacts: "Solitary and have underground nests",
        flowers: ["Chinese Forget-Me-Not","Blue Flax"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615576058/PlastererBee_caar2u.jpg"
    },
    {
        id: 3,
        name: "Masked Bee",
        family: "Colletidae",
        size: "Small",
        temper: "Docile",
        funfacts: "Solitary and have underground nests",
        flowers: ["Chinese Forget-Me-Not"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615576066/MaskedBee_d0xcpl.jpg"
    },
    {
        id: 4,
        name: "Leafcutter Bee",
        family: "Megachilidae",
        size: "Medium",
        temper: "Docile",
        funfacts: "Make nests from plant material, but rarely cause damage to plants",
        flowers: ["Fleabane Daisy","Blue Flax","Lavender Hyssop","Indian Blanket","Purple Coneflower","New England Aster"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615585849/LeafcutterBee_rkq6gx.jpg"
    },
    {
        id: 5,
        name: "Mason Bee",
        family: "Megachilidae",
        size: "Small",
        temper: "Docile",
        funfacts: "Wings move like and helicopter. Have supersight. Every single female is a queen.",
        flowers: ["California Poppy"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615576062/MasonBee_joge6f.png"
    },
    {
        id: 6,
        name: "Mining Bee",
        family: "Adrenidae",
        size: "Large",
        temper: "Agressive when defending eggs",
        funfacts: "Solitary bee that the nests are below in the ground",
        flowers: ["Baby Blue Eyes","Tidy Tips"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615576064/MiningBee_jkwihf.jpg"
    },
    {
        id: 7,
        name: "Bumble Bee",
        family: "Apidae",
        size: "Large",
        temper: "Docile",
        funfacts: "Don't produce much honey, and as they are social bees they tend to be friendly. Don't die when sting and only can withstand 40 minutes of starvation.",
        flowers: ["Siberian Wallflower","Lavender Hyssop","Purple Coneflower","Bergamot","China Aster"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615576084/BumbleBee_stkwlc.jpg"
    },
    {
        id: 8,
        name: "Honey Bee",
        family: "Apidae",
        size: "Medium",
        temper: "Agressive when disturbed",
        funfacts: "All worker bees are female, and produces a teaspoon of honey in her lifetime. Male bees in the hive are called Drones",
        flowers: ["Siberian Wallflower","Baby Blue Eyes","Sweet Alyssum","Lance-Leaved Coreopsis","California Poppy","Globe Gilia","Corn Poppy","Lavender Hyssop","Indian Blanket","Purple Coneflower","Bergamot","China Aster","New England Aster"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615576082/HoneyBee_q0bcri.jpg"
    },
    {
        id: 9,
        name: "Cuckoo Bee",
        family: "Apidae",
        size: "Large",
        temper: "Agressive when disturbed",
        funfacts: "Don't have polen hair in their bodies and they eat other insects and flower nectar. Not social and don't make honey.",
        flowers: ["Indian Blanket"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615576085/CuckooBee_fbdalm.jpg"
    },
    {
        id: 10,
        name: "Carpenter Bee",
        family: "Apidae",
        size: "Large",
        temper: "Docile",
        funfacts: "Don't make honey. Won his nickname due to made tunnels into the wood of tree limb. Tunnel made with its strong jaws",
        flowers: ["Fleabane Daisy","Chinese Forget-Me-Not","New England Aster"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615576087/CarpenterBee_og1bql.jpg"
    },
    {
        id: 11,
        name: "Digger Bee",
        family: "Apidae",
        size: "Large",
        temper: "Docile",
        funfacts: "Don't make honey. Dig until 10 feet long into the ground to build the nests. Sting can cause severe allergic reaction but females very rarely sting.",
        flowers: ["Bergamot"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615585848/DiggerBee_mh1vwk.jpg"
    },
    {
        id: 12,
        name: "Flies",
        family: "Flidae",
        size: "Small to Large",
        temper: "Docile",
        funfacts: "Taste with their feets",
        flowers: ["Sweet Alyssum","Plains Coreopsis", "China Aster"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615585845/fly_assuay.jpg"
    },
    {
        id: 13,
        name: "Wasps",
        family: "Wasdae",
        size: "Medium-Large",
        temper: "Agressive",
        funfacts: "Female wasps use figs to deposit eggs. During the crawl inside, wasps lose its wings and becomes trapped inside, dying consenquently. The figs have an enzime which will completly digest the wasp",
        flowers: ["Plains Coreopsis","Lance-Leaved Coreopsis"],
        pic: "https://res.cloudinary.com/dxzkpsxhf/image/upload/v1615585846/Wasp_pyobvk.jpg"
    }
]

export default bees;