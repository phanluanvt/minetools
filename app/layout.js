import "./globals.css";

export const metadata={
  metadataBase:new URL("https://minetools.io"),
  title:{default:"Minecraft Tools & Generators | MineTools",template:"%s | MineTools"},
  description:"Free Minecraft generators, crafting tools, calculators and command editors for Java and Bedrock Edition.",
  robots:{index:true,follow:true}
};

const menu=[
["Skin Grabber","/skin-grabber"],["Crafting","/crafting"],["Custom crafting","/custom-crafting"],["Flat world","/flat-world-generator"],["Enchant calculator","/enchant-calculator"],["Armor color","/armor-color"],["Firework crafting","/firework-generator"],["Banners crafting","/banner-generator"],["Shield crafting","/shield-generator"],["Mobs Generator","/mob-generator"],["Loot tables","/loot-table-generator"],["Custom potions","/potion-generator"],["Beacon color","/beacon-color"],["Coordinate Calculator","/coordinate-calculator"],["Target Selector","/target-selector"],["Color codes","/color-codes"],["JSON Text Component","/json-text-generator"],["Title generator","/title-generator"],["Sign generator","/sign-generator"],["Book editor","/book-generator"],["/tellraw editor","/tellraw-generator"],["Custom server MOTD","/motd-generator"]
];

export default function RootLayout({children}){
 return <html lang="en"><body>
  <header className="classicHeader"><div className="pixelBand"></div><a className="classicLogo" href="/" aria-label="MineTools home"><span className="logoMain">MINECRAFT</span><span className="logoSub">MINE<span>TOOLS</span></span></a></header>
  <div className="classicShell">
   <aside className="classicSidebar">
    <div className="loginBox"><div className="sideTitle">LOG IN</div><input placeholder="Login" aria-label="Login"/><input placeholder="Password" type="password" aria-label="Password"/><button type="button">Log in</button><div className="loginLinks"><a href="/saved">Saved drafts</a></div></div>
    <div className="sideTitle communityTitle">COMMUNITY CONTENT</div>
    <nav className="classicMenu" aria-label="Minecraft tools">{menu.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav>
    <a className="galleryLink" href="/community">PUBLIC GALLERY</a>
   </aside>
   <main className="classicMain">{children}</main>
  </div>
  <footer className="classicFooter"><div>© MineTools — tools for Minecraft made for players.</div><div><a href="/community">Community</a> · <a href="/items">Database</a> · <a href="/versions">Versions</a> · <a href="/sitemap.xml">Sitemap</a></div><small>MineTools is independent and is not affiliated with Mojang or Microsoft.</small></footer>
 </body></html>
}