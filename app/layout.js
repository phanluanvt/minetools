import "./globals.css";

export const metadata={
  metadataBase:new URL("https://minetools.io"),
  title:{default:"Minecraft Tools | MineTools",template:"%s | MineTools"},
  description:"Free Minecraft crafting tools, generators and calculators.",
  robots:{index:true,follow:true}
};

const menu=[
["Skin stealer","/skin-grabber"],["Crafting","/crafting"],["Custom crafting","/custom-crafting"],["Flat world","/flat-world-generator"],["Enchant calculator","/enchant-calculator"],["Armor color","/armor-color"],["Firework crafting","/firework-generator"],["Banners crafting","/banner-generator"],["Banners gallery","/community"],["Shield crafting","/shield-generator"],["Shield gallery","/community"],["Mobs Generator","/mob-generator"],["Loot tables","/loot-table-generator"],["Custom potions","/potion-generator"],["Beacon color","/beacon-color"],["Coordinate Calculator","/coordinate-calculator"],["Target Selector","/target-selector"],["Text generators","/json-text-generator"],["Color codes","/color-codes"],["JSON Text Component","/json-text-generator"],["Title generator","/title-generator"],["Sign generator","/sign-generator"],["Book editor","/book-generator"],["/tellraw editor","/tellraw-generator"],["Custom server MOTD","/motd-generator"]
];

export default function RootLayout({children}){
 return <html lang="en"><body>
  <header className="mtHeader">
   <div className="mtHeaderPattern"></div>
   <a className="mtLogo" href="/">
    <span className="mtLogoTop">MINECRAFT</span>
    <span className="mtLogoBottom">MINE TOOLS</span>
   </a>
  </header>
  <div className="mtPage">
   <aside className="mtSidebar">
    <div className="mtLogin">
      <div className="mtBoxTitle">Log in</div>
      <input placeholder="Login" />
      <input placeholder="Password" type="password"/>
      <button type="button">Log in</button>
      <a href="/saved">Forget password?</a>
      <a href="/saved">Create my account</a>
    </div>
    <a className="mtCommunityTitle" href="/community">Community Content</a>
    <nav className="mtMenu">
      {menu.map(([label,href])=><a href={href} key={label}>{label}</a>)}
    </nav>
   </aside>
   <main className="mtContent">{children}</main>
  </div>
  <footer className="mtFooter">
    <div>© MineTools: Tools for Minecraft crafted for players ❤.</div>
    <div><a href="/community">Community</a> — <a href="/items">Database</a> — <a href="/sitemap.xml">Sitemap</a></div>
    <div>“Minecraft” is a trademark of Mojang. MineTools is not affiliated with Mojang or Microsoft.</div>
  </footer>
 </body></html>
}