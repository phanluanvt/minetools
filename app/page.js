const tools = [
  {icon:"✦",title:"Title Generator",desc:"Build Minecraft /title commands with subtitle, timing and colors.",href:"/title-generator",tag:"Live"},
  {icon:"💬",title:"Tellraw Generator",desc:"Create JSON chat messages and copy a ready-to-use /tellraw command.",href:"/tellraw-generator",tag:"Live"},
  {icon:"☠",title:"Mob Generator",desc:"Create summon commands with common mob NBT settings.",href:"/mob-generator",tag:"Live"},
  {icon:"🧪",title:"Potion Effects",desc:"Generate /effect commands with duration, amplifier and particles.",href:"/potion-generator",tag:"Live"},
  {icon:"🎆",title:"Firework Generator",desc:"Build firework rocket commands with shape, color, trail and flicker.",href:"/firework-generator",tag:"Live"},
  {icon:"⌖",title:"Coordinate Calculator",desc:"Convert Overworld and Nether X/Z coordinates instantly.",href:"/coordinate-calculator",tag:"Live"},
  {icon:"§",title:"Color Codes",desc:"Minecraft formatting codes for chat, MOTD and legacy text.",href:"/color-codes",tag:"Live"},
  {icon:"◎",title:"Target Selector",desc:"Build @a, @e, @p, @r and @s selectors with common filters.",href:"/target-selector",tag:"Live"},
  {icon:"⚔",title:"Enchant Command",desc:"Generate a simple /enchant command for common Java enchantments.",href:"/enchant-generator",tag:"Live"},
  {icon:"▤",title:"Server MOTD",desc:"Create a colored two-line Minecraft server MOTD.",href:"/motd-generator",tag:"Live"},
  {icon:"◆",title:"Beacon Color Mixer",desc:"Estimate a beacon beam color from two stained-glass colors.",href:"/beacon-color",tag:"Live"},
  {icon:"⚑",title:"Banner Maker",desc:"Design layered Minecraft banners with a visual preview.",href:"#",tag:"Next"},
  {icon:"▦",title:"Custom Crafting",desc:"Build custom crafting recipes with a visual 3×3 grid.",href:"#",tag:"Next"},
  {icon:"☰",title:"Loot Table Generator",desc:"Create custom loot tables for maps and datapacks.",href:"#",tag:"Next"},
  {icon:"🌎",title:"Flat World Generator",desc:"Configure superflat world layers and presets.",href:"#",tag:"Next"}
];

export default function Home(){
 return <main>
  <section className="hero"><div className="wrap">
    <span className="badge">FREE MINECRAFT UTILITIES</span>
    <h1>Build commands.<br/>Craft smarter.</h1>
    <p>Fast Minecraft generators and calculators built for players, server owners and map makers. No signup required for tools.</p>
    <div className="heroActions"><a className="button primary" href="#tools">Explore tools</a><a className="button" href="/mob-generator">Try Mob Generator</a></div>
    <div className="stats"><div className="stat"><b>11</b><span>working tools</span></div><div className="stat"><b>0</b><span>login walls</span></div><div className="stat"><b>100%</b><span>mobile friendly</span></div></div>
  </div></section>
  <section className="section" id="tools"><div className="wrap">
    <div className="sectionHead"><div><h2>Minecraft tools</h2><p id="popular">Phase 1 is halfway built — core generators are live now.</p></div></div>
    <div className="toolGrid">{tools.map(t=><a className="toolCard" href={t.href} key={t.title}><div><span className="toolIcon">{t.icon}</span><span className="pill">{t.tag}</span></div><h3>{t.title}</h3><p>{t.desc}</p><span className="go">{t.tag==="Live"?"Open tool →":"Coming next"}</span></a>)}</div>
  </div></section>
  <section className="section alt" id="about"><div className="wrap help">
    <h2>Minecraft tools that get to the point</h2>
    <p>MineTools puts the utility first: configure, generate, copy and get back to Minecraft. The current build covers commands, coordinates, formatting, server MOTDs and other everyday utilities. Deeper editors and community features will follow after the core tool library is complete.</p>
  </div></section>
 </main>
}