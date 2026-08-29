const sections=[
["Crafting & Visual Tools",[
["▦","Crafting Recipes","Find recipes quickly with a 3×3 grid.","/crafting"],
["✚","Custom Crafting","Create shaped datapack recipe JSON.","/custom-crafting"],
["🎆","Firework Crafting","Build rockets with colors, shape, trail and flicker.","/firework-generator"],
["⚑","Banner Generator","Build layered banner patterns.","/banner-generator"],
["🛡","Shield Generator","Create banner-style shield designs.","/shield-generator"],
["🎨","Armor Color","Generate dyed leather armor colors.","/armor-color"],
["◆","Beacon Color","Mix beacon beam colors.","/beacon-color"]
]],
["World & Calculation",[
["🌎","Flat World Generator","Build custom superflat layers and biome presets.","/flat-world-generator"],
["⌖","Coordinate Calculator","Overworld, Nether, chunk and region conversion.","/coordinate-calculator"],
["✧","Enchant Calculator","Plan enchantments, levels and conflicts.","/enchant-calculator"],
["👤","Skin Grabber","Validate Minecraft usernames for skin lookup.","/skin-grabber"]
]],
["Commands & Data Generators",[
["☠","Mob Generator","Summon mobs, spawn eggs, spawners and custom entity data.","/mob-generator"],
["🧪","Custom Potions","Generate effects and custom potion item data.","/potion-generator"],
["⚙","Loot Tables","Build starter loot table JSON for datapacks.","/loot-table-generator"],
["◎","Target Selector","Build advanced @e, @a and player selectors.","/target-selector"],
["§","Color Codes","Minecraft text and formatting code reference.","/color-codes"],
["{}","JSON Text Component","Build styled JSON text with click and hover events.","/json-text-generator"],
["✦","Title Generator","Create title, subtitle and timing commands.","/title-generator"],
["▤","Sign Generator","Generate custom sign text data.","/sign-generator"],
["📖","Book Editor","Create written book commands and pages.","/book-generator"],
["💬","Tellraw Editor","Create formatted JSON chat commands.","/tellraw-generator"],
["▤","Server MOTD","Build custom Minecraft server MOTD text.","/motd-generator"],
["⚔","Enchant Command","Generate quick /enchant commands.","/enchant-generator"]
]]
];

export const metadata={
 title:"Minecraft Tools & Generators",
 description:"Free Minecraft crafting tools, command generators, calculators and references for Java and Bedrock Edition."
};

export default function Home(){
 const count=sections.reduce((n,s)=>n+s[1].length,0);
 return <main className="directoryHome">
  <section className="compactHero"><div className="wrap">
   <div className="homeTitleRow"><div><h1>Minecraft Tools</h1><h2>Minecraft crafting, generators, calculators and much more!</h2></div><a className="communityButton" href="/community">Community Content →</a></div>
   <p className="welcome">Welcome to MineTools. Free browser-based tools for Minecraft Java and Bedrock players, map makers and server owners.</p>
  </div></section>
  <section className="directorySection" id="tools"><div className="wrap">
   <div className="directoryMeta"><strong>{count} tools available</strong><span>No signup required to use generators</span></div>
   {sections.map(s=><section className="directoryGroup" key={s[0]}><h2>{s[0]}</h2><div className="directoryGrid">{s[1].map(t=><a className="directoryItem" href={t[3]} key={t[1]}><span className="directoryIcon">{t[0]}</span><span className="directoryCopy"><strong>{t[1]}</strong><small>{t[2]}</small></span><span className="directoryArrow">›</span></a>)}</div></section>)}
  </div></section>
  <section className="homeBottom"><div className="wrap homeBottomGrid"><div><h2>Community Content</h2><p>Save drafts, remix creations and browse the community foundation.</p><a href="/community">Open Community →</a></div><div><h2>Minecraft Database</h2><p>Browse item, mob and recipe reference pages with stable SEO-friendly URLs.</p><a href="/items">Open Database →</a></div></div></section>
 </main>
}