import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://minetools.io"),
  title: { default: "Minecraft Tools & Generators for Java & Bedrock | MineTools", template: "%s | MineTools" },
  description: "Free Minecraft tools and generators for Java and Bedrock Edition. Create commands, calculate coordinates, build effects, colors, server MOTDs and more.",
  applicationName: "MineTools",
  category: "games",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "Minecraft Tools & Generators | MineTools", description: "Free browser-based Minecraft generators, command tools and calculators.", url: "https://minetools.io", siteName: "MineTools", type: "website" },
  twitter: { card: "summary_large_image", title: "Minecraft Tools & Generators | MineTools", description: "Free Minecraft generators, command tools and calculators." }
};

const websiteSchema={"@context":"https://schema.org","@type":"WebSite",name:"MineTools",url:"https://minetools.io/",description:"Free Minecraft tools, generators and calculators for Java and Bedrock Edition."};

const quick=[
["Crafting","/crafting"],["Custom Crafting","/custom-crafting"],["Flat World","/flat-world-generator"],["Enchant Calculator","/enchant-calculator"],["Armor Color","/armor-color"],["Firework","/firework-generator"],["Banners","/banner-generator"],["Shields","/shield-generator"],["Mob Generator","/mob-generator"],["Loot Tables","/loot-table-generator"],["Potions","/potion-generator"],["Beacon Color","/beacon-color"],["Coordinates","/coordinate-calculator"],["Target Selector","/target-selector"],["Color Codes","/color-codes"],["JSON Text","/json-text-generator"],["Title","/title-generator"],["Sign","/sign-generator"],["Book","/book-generator"],["Tellraw","/tellraw-generator"],["Server MOTD","/motd-generator"]
];

export default function RootLayout({children}) {
 return <html lang="en"><body>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteSchema)}}/>
  <header className="siteHeader">
   <div className="wrap headerInner">
    <a className="brand" href="/" aria-label="MineTools home"><span className="brandCube">M</span><span>MineTools</span></a>
    <nav className="topNav" aria-label="Main navigation"><a href="/community">Community</a><a href="/items">Database</a><a href="/saved">Saved</a></nav>
   </div>
   <div className="toolStrip"><div className="wrap toolStripInner">{quick.map(x=><a key={x[1]} href={x[1]}>{x[0]}</a>)}</div></div>
  </header>
  {children}
  <footer className="footer"><div className="wrap footerInner"><div><strong>MineTools</strong><br/><span>Free Minecraft tools & generators.</span></div><div className="footerLinks"><a href="/">Home</a><a href="/community">Community</a><a href="/items">Database</a><a href="/sitemap.xml">Sitemap</a></div></div><div className="wrap legal">MineTools is an independent utility site and is not an official Minecraft product. It is not approved by or associated with Mojang or Microsoft.</div></footer>
 </body></html>
}