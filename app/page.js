const tools = [
  {icon:"✦",title:"Title Generator",desc:"Build Minecraft /title commands with subtitle, timing and colors.",href:"/title-generator",tag:"Live"},
  {icon:"💬",title:"Tellraw Generator",desc:"Create JSON chat messages and copy a ready-to-use /tellraw command.",href:"/tellraw-generator",tag:"Live"},
  {icon:"⌖",title:"Coordinate Calculator",desc:"Convert Overworld and Nether X/Z coordinates instantly.",href:"/coordinate-calculator",tag:"Live"},
  {icon:"§",title:"Color Codes",desc:"Minecraft formatting codes for chat, MOTD and legacy text.",href:"/color-codes",tag:"Live"},
  {icon:"◎",title:"Target Selector",desc:"Build @a, @e, @p, @r and @s selectors with common filters.",href:"/target-selector",tag:"Live"},
  {icon:"⚔",title:"Enchant Command",desc:"Generate a simple /enchant command for common Java enchantments.",href:"/enchant-generator",tag:"Live"},
  {icon:"☠",title:"Mob Generator",desc:"Advanced summon command builder with equipment and attributes.",href:"#",tag:"Next"},
  {icon:"🧪",title:"Potion Generator",desc:"Create custom potion commands, effects and durations.",href:"#",tag:"Next"},
  {icon:"⚑",title:"Banner Maker",desc:"Design layered Minecraft banners with a visual preview.",href:"#",tag:"Next"}
];

export default function Home(){
 return <main>
  <section className="hero"><div className="wrap">
    <span className="badge">FREE MINECRAFT UTILITIES</span>
    <h1>Build commands.<br/>Craft smarter.</h1>
    <p>Fast Minecraft generators and calculators built for players, server owners and map makers. No signup required for tools.</p>
    <div className="heroActions"><a className="button primary" href="#tools">Explore tools</a><a className="button" href="/title-generator">Try a generator</a></div>
    <div className="stats"><div className="stat"><b>6</b><span>working tools in phase 1</span></div><div className="stat"><b>0</b><span>login walls</span></div><div className="stat"><b>100%</b><span>mobile friendly</span></div></div>
  </div></section>
  <section className="section" id="tools"><div className="wrap">
    <div className="sectionHead"><div><h2>Minecraft tools</h2><p id="popular">Phase 1 foundation — more generators are being added.</p></div></div>
    <div className="toolGrid">{tools.map(t=><a className="toolCard" href={t.href} key={t.title}><div><span className="toolIcon">{t.icon}</span><span className="pill">{t.tag}</span></div><h3>{t.title}</h3><p>{t.desc}</p><span className="go">{t.tag==="Live"?"Open tool →":"Coming next"}</span></a>)}</div>
  </div></section>
  <section className="section alt" id="about"><div className="wrap help">
    <h2>Built around useful tools, not filler</h2>
    <p>MineTools focuses on practical Minecraft utilities. Each generator is designed to put the tool first, keep commands easy to copy, and work well on phones and desktops. Advanced generators, saved creations and a public gallery are planned after the core tool set is complete.</p>
  </div></section>
 </main>
}