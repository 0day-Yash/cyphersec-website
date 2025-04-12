# CypherSec

CypherSec is a closed collective of offensive researchers, intelligence gatherers, and underground engineers. We exist to explore systems, expose flaws, and release knowledge.

🏠 1. Home (/)

🧱 Sections (in order):

1. Hero Banner
   - A dark panel with:
     - Codename-style logo or text (e.g. C̵Y̷P̸H̶E̵R̴S̸E̸C̵ in glitch text style)
     - Tagline below it:
       “Observe. Exploit. Document. Repeat.”
     - Button: [ACCESS ARCHIVES] → /ops
     - Background: Slow, subtle animated matrix/hex/noise

2. Mission Statement
   - “CypherSec is a closed collective of offensive researchers, intelligence gatherers, and underground engineers. We exist to explore systems, expose flaws, and release knowledge.”
   - Text alignment: Center or 2-column split (with low-opacity graphic, eg. network node map)

3. What We Do
   - 3-column grid:
     - Offensive Security
       - “Red team, pentesting, tool drops”
     - Recon & Surveillance
       - “Passive data collection, OSINT, surveillance networks”
     - Research & Publication
       - “Whitepapers, docs, guides, field notes”

4. Featured Ops
   - Top 3 most recent drops/tools with quick view
     - Title + type + signature + date
     - [View Drop] button → full page

5. Leadership
   - Cards for the 3 heads (hover to reveal codenames)
   - Link: [View Full Team] → /team

6. Contact
   - Email + socials preview
   - “No job offers. No collabs. We reach out.”

🧬 2. About (/about)

- Timeline:
  - Founded in 2023, international presence
  - "Formed out of necessity and obsession."
- Collective Philosophy:
  - “We are not activists, we are not influencers. We break things to understand them.”
  - No preachy tone. Pure technical intent.
- Structure:
  - Org chart: 3 heads → contributors
- Invite-Only:
  - “No open application. You’ll know if we’re interested.”

📁 3. Ops (/ops)

- Dynamic content from CMS (whitepapers, tools, etc.)
- Each card: Title, Type (Paper / Tool / Recon / Field Note), Tags, Short summary, Signature, Date
- Filters by tag/type
- Sort by date or popularity
- Click = go to full page → /ops/[slug]

📝 4. Drop Details (/ops/[slug])

- Markdown-rendered post
- Title, date, signature
- Body content: rendered from CMS (images optional via links)
- Optional: file download, GitHub repo, external links
- Signed at bottom by one of 3 heads
- Tags listed

🧠 5. Team (/team)

- Top Section: The Three Heads
  - Cards with:
    - Name
    - Codename
    - Role + responsibilities (from your hierarchy)
  - Glitch-style hover effect or shadow pulse
- Lower Section:
  - Members (optional) with role/codename
  - Or just a line: “Remaining members are undisclosed.”

📜 6. Archive (/archive)

- Every drop ever made
- Ordered by date, grouped by year
- Pure text
- Example:
  - [2024-12-01] ShadowPath: OSINT pivot tool (by ObsidianHalo)
  - [2024-11-12] CradleSniffer: Wi-Fi exfiltrator (by IvoryPhantom)

📨 7. Contact (/contact)

- ProtonMail
- Future links: GitHub, Instagram (low-profile, monochrome)
- Optional contact form (no backend needed — use form-to-email via FormSubmit or similar)

🧿 8. Hidden Dropzone (/blackfile or /dropzone)

- Password protected route or obfuscated link
- For alpha releases, experimental tools, private docs
- Optional: passphrase check + redirect

📦 CMS Integration (Free & Serverless-Friendly)

Recommended: Contentlayer + Markdown + GitHub
- Fully local + version-controlled = no external dashboards
- Store markdown files under /content/drops, /content/members, etc.
- GitHub commits = automatic Vercel redeploy


CMS-powered content:
- /ops (whitepapers, tools) — fetched from CMS
- /team — optionally dynamic (or can be static)

🔗 Deployment Stack

- Framework: Next.js (app router if you want full modern setup)
- Hosting: Vercel
- CMS: Contentlayer or Hygraph
- Styling: TailwindCSS
- Fonts: Inter or IBM Plex Mono
- Icons: Lucide (or simple SVGs)
- Markdown Rendering: MDX or contentlayer + rehype
