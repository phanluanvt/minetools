import "./globals.css";

export const metadata={
  metadataBase:new URL("https://minetools.io"),
  title:{default:"Minecraft Tools | MineTools",template:"%s | MineTools"},
  description:"Free Minecraft generators, crafting tools, calculators and command editors.",
  robots:{index:true,follow:true}
};

const sideGroups=[
  ["MAIN",[
    ["🎏","Banner Generator","/banner-generator"],
    ["🌍","Flat World Generator","/flat-world-generator"],
    ["🧟","Mob Spawner","/mob-generator"],
    ["🧰","Crafting Recipes","/crafting"],
    ["🟧","Command Generator","/tellraw-generator"],
    ["🧪","Potion Generator","/potion-generator"],
    ["🎆","Fireworks Generator","/firework-generator"],
    ["🧑","Skin Grabber","/skin-grabber"],
    ["💎","Beacon Color","/beacon-color"],
    ["🛡️","Armor Color","/armor-color"],
    ["🧮","Coordinate Calculator","/coordinate-calculator"]
  ]],
  ["ADVANCED TOOLS",[
    ["◎","Target Selector","/target-selector"],
    ["§","Color Codes","/color-codes"],
    ["{}","JSON Text Component","/json-text-generator"],
    ["✦","Title Generator","/title-generator"],
    ["▤","Sign Generator","/sign-generator"],
    ["📖","Book Editor","/book-generator"],
    ["💬","Tellraw Editor","/tellraw-generator"],
    ["M","Custom Server MOTD","/motd-generator"],
    ["⚙","Loot Tables","/loot-table-generator"]
  ]],
  ["OTHER",[
    ["🗃","Item Database","/items"],
    ["☠","Mob Database","/mobs"],
    ["▦","Recipe Database","/recipes"],
    ["👥","Community","/community"]
  ]]
];

export default function RootLayout({children}){
  return <html lang="en"><body>
    <header className="refTopbar">
      <a href="/" className="refBrand">
        <span className="brandCube3d">▦</span>
        <span><strong>MINETOOLS</strong><small>MINECRAFT TOOLS</small></span>
      </a>
      <div className="refLang">🇺🇸 EN ▾</div>
    </header>

    <div className="refShell">
      <aside className="refSidebar">
        <section className="loginPanel">
          <h3>LOGIN</h3>
          <input placeholder="Username or Email"/>
          <input placeholder="Password" type="password"/>
          <button type="button">LOGIN</button>
          <div><a href="/saved">Register</a><a href="/saved">Lost Password?</a></div>
        </section>

        {sideGroups.map(([title,items])=><section className="sideGroup" key={title}>
          <h4>{title}</h4>
          {items.map(([icon,label,href])=><a className="sideNavItem" href={href} key={href}>
            <span>{icon}</span><b>{label}</b><em>▾</em>
          </a>)}
        </section>)}
      </aside>

      <main className="refMain">{children}</main>
    </div>
  </body></html>
}