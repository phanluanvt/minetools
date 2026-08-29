export const items=[
{id:"diamond_sword",name:"Diamond Sword",cat:"combat",stack:1,renewable:true,recipe:"2 Diamonds + 1 Stick",uses:"High-damage melee weapon."},
{id:"diamond_pickaxe",name:"Diamond Pickaxe",cat:"tools",stack:1,renewable:true,recipe:"3 Diamonds + 2 Sticks",uses:"Mines stone and high-tier ores."},
{id:"crafting_table",name:"Crafting Table",cat:"utility",stack:64,renewable:true,recipe:"4 Planks",uses:"Unlocks the 3×3 crafting grid."},
{id:"furnace",name:"Furnace",cat:"utility",stack:64,renewable:true,recipe:"8 Cobblestone",uses:"Smelts and cooks items."},
{id:"chest",name:"Chest",cat:"utility",stack:64,renewable:true,recipe:"8 Planks",uses:"Stores items."},
{id:"beacon",name:"Beacon",cat:"utility",stack:64,renewable:true,recipe:"5 Glass + Nether Star + 3 Obsidian",uses:"Provides area status effects."},
{id:"elytra",name:"Elytra",cat:"transport",stack:1,renewable:false,recipe:"Not craftable",uses:"Enables gliding flight."},
{id:"totem_of_undying",name:"Totem of Undying",cat:"combat",stack:1,renewable:true,recipe:"Not craftable",uses:"Prevents one death when held."}
];
export const mobs=[
{id:"zombie",name:"Zombie",type:"Hostile",health:20,drops:"Rotten Flesh",behavior:"Melee undead mob that burns in daylight."},
{id:"skeleton",name:"Skeleton",type:"Hostile",health:20,drops:"Bones, Arrows",behavior:"Ranged undead mob using a bow."},
{id:"creeper",name:"Creeper",type:"Hostile",health:20,drops:"Gunpowder",behavior:"Approaches players and explodes."},
{id:"enderman",name:"Enderman",type:"Neutral",health:40,drops:"Ender Pearl",behavior:"Teleports and becomes hostile when provoked."},
{id:"villager",name:"Villager",type:"Passive",health:20,drops:"None",behavior:"Trades based on profession and level."},
{id:"iron_golem",name:"Iron Golem",type:"Utility",health:100,drops:"Iron Ingots, Poppies",behavior:"Defends villages and attacks hostile mobs."},
{id:"warden",name:"Warden",type:"Hostile",health:500,drops:"Sculk Catalyst",behavior:"Powerful blind mob that tracks vibrations and scent."}
];
