import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://minetools.io"),
  title: {
    default: "Minecraft Tools & Generators for Java & Bedrock | MineTools",
    template: "%s | MineTools"
  },
  description: "Free Minecraft tools and generators for Java and Bedrock Edition. Create commands, calculate coordinates, build effects, colors, server MOTDs and more.",
  applicationName: "MineTools",
  category: "games",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "Minecraft Tools & Generators | MineTools",
    description: "Free browser-based Minecraft generators, command tools and calculators for Java and Bedrock.",
    url: "https://minetools.io",
    siteName: "MineTools",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Minecraft Tools & Generators | MineTools", description: "Free Minecraft generators, command tools and calculators." }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MineTools",
  url: "https://minetools.io/",
  description: "Free Minecraft tools, generators and calculators for Java and Bedrock Edition."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}} />
        <header className="siteHeader">
          <div className="wrap headerInner">
            <a className="brand" href="/" aria-label="MineTools home"><span className="brandCube">M</span><span>MineTools</span></a>
            <nav className="topNav" aria-label="Main navigation">
              <a href="/#tools">Tools</a><a href="/mob-generator">Generators</a><a href="/tellraw-generator">Commands</a><a href="/#about">About</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="wrap footerInner">
            <div><strong>MineTools</strong><br/><span>Free Minecraft tools and generators.</span></div>
            <div className="footerLinks"><a href="/">Home</a><a href="/#tools">Tools</a><a href="/sitemap.xml">Sitemap</a></div>
          </div>
          <div className="wrap legal">MineTools is an independent utility site and is not an official Minecraft product. It is not approved by or associated with Mojang or Microsoft.</div>
        </footer>
      </body>
    </html>
  );
}