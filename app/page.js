export const metadata={title:"Minecraft Tools",description:"Minecraft crafting, enchant calculator, firework crafting, flat world generator and much more!"};
const cards=[["Custom Crafting","/custom-crafting","craft"],["Firework Crafting","/firework-generator","firework"],["Flat World Generator","/flat-world-generator","world"],["Mobs Generator","/mob-generator","mob"],["Enchant calculator","/enchant-calculator","enchant"],["Crafting help","/crafting","crafting"],["Armor color","/armor-color","armor"],["Beacon color","/beacon-color","beacon"],["Skin Grabber","/skin-grabber","skin"],["Color codes","/color-codes","color"],["/title Generator","/title-generator","title"],["Sign Generator","/sign-generator","sign"],["Book Generator","/book-generator","book"],["/tellraw Generator","/tellraw-generator","tellraw"],["Custom servers MOTD","/motd-generator","motd"],["Shield Crafting","/shield-generator","shield"],["Loots Tables","/loot-table-generator","loot"],["Custom potion","/potion-generator","potion"]];

function PixelIcon({type}){
 return <span className={"pxIcon px-"+type}><i></i><b></b><em></em></span>
}

export default function Home(){
 return <div className="mtHome benchmarkHome">
  <h1>Minecraft Tools</h1>
  <h2>Minecraft crafting, enchant calculator, firework crafting, flat world generator and much more!</h2>
  <p>Welcome on MineTools!</p>
  <p>We propose free tools for Minecraft, like:</p>

  <div className="mtCardGrid">
   {cards.map(([name,href,type])=><a className="mtCard" href={href} key={href}>
    <div className="mtCardTitle">{name}</div>
    <div className="mtCardImage"><PixelIcon type={type}/></div>
   </a>)}
  </div>

  <div className="mtLinks">
   {cards.map(([name,href])=><a href={href} key={href}>{name}</a>)}
  </div>
 </div>
}