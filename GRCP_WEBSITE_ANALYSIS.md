# GRCP Website — Complete Analysis & Recreation Blueprint
> Generated: 2026-05-21 | Source: https://grcp.ac.in

---

## TABLE OF CONTENTS
1. [Overall Design System](#1-overall-design-system)
2. [Navigation Structure](#2-navigation-structure)
3. [Homepage Section Order](#3-homepage-section-order)
4. [Internal Page Layouts](#4-internal-page-layouts)
5. [UI Components Inventory](#5-ui-components-inventory)
6. [Typography Hierarchy](#6-typography-hierarchy)
7. [Color & Theme Usage](#7-color--theme-usage)
8. [Spacing & Layout Patterns](#8-spacing--layout-patterns)
9. [Footer Structure](#9-footer-structure)
10. [Responsive Behavior](#10-responsive-behavior)
11. [UI Inconsistencies & Modernization Areas](#11-ui-inconsistencies--modernization-areas)
12. [Website Structure Breakdown (All Pages)](#12-website-structure-breakdown-all-pages)
13. [React Component Architecture](#13-react-component-architecture)
14. [Folder Structure (React + Vite + Tailwind)](#14-folder-structure-react--vite--tailwind)
15. [Reusable Components List](#15-reusable-components-list)
16. [Modern Improvements](#16-modern-improvements)
17. [Suggested Design System](#17-suggested-design-system)
18. [Responsive Strategy](#18-responsive-strategy)
19. [Development Roadmap](#19-development-roadmap)

---

## 1. OVERALL DESIGN SYSTEM

### Current State
The existing website is a **traditional PHP-based institutional site** built around 2012 with incremental updates. It relies on Bootstrap (likely v3 or v4) for its responsive grid, jQuery-based carousels, and a flat HTML/CSS approach for content pages. There is no unified design system — styles appear to have been added page-by-page over 13+ years.

### Key Observations
- **Architecture:** Multi-page PHP application, each page is a standalone `.php` file
- **Framework hints:** Bootstrap grid patterns, jQuery carousel (`carouselExampleControls` class = Bootstrap 4 carousel)
- **Layout approach:** Full-width header + fixed top navbar + main content area + footer
- **Content width:** Appears to use a ~1200px max-width container
- **Visual style:** Flat, institutional, minimal shadows, no animations
- **Branding consistency:** Logo is consistent; color application is inconsistent across pages
- **Image caching:** Manual cache-busting via `?v=0.1`, `?v=0.2` query strings on asset URLs

---

## 2. NAVIGATION STRUCTURE

### Top Header Bar
```
[College Logo Left]                    [Affiliation Logos Right - 11 badges]
[TG EAPCET: GRCP]  [TG PGECET: GRCP1]
```

### Main Navbar (Horizontal, 10 top-level items)
All items are dropdown-enabled. Structure:

```
Home
├── (no dropdown)

About Us
├── About GRCP
├── PEO
└── POs

Administration
├── Chairman
├── Vice President
├── Principal
├── Governing Body
├── IDMC
└── Organizational Chart

Admissions
├── Admission Procedure
├── Course Fees
├── EAMCET Last Rank
└── PGECET Last Rank

Programmes
├── B.Pharmacy
└── M.Pharmacy
    ├── Pharmaceutics
    ├── Pharmaceutical Analysis
    └── Pharmacology

Academics
├── Syllabus – B.Pharmacy
├── Syllabus – M.Pharmacy
├── Academic Calendar
├── Timetables
├── Library Committee
├── Information Center
├── E-Journals
├── Daily Newspapers
├── Statistics
├── Title Volumes
├── Faculty
└── Non-Teaching Staff

Research
├── Research Facilities
├── PhD Guideships
├── Publications
├── Patents
└── Consultancy

Examination
├── Branch Info
├── Timetables
├── Results
└── Question Papers

Placements
├── Placement Cell
└── Placement Status

Alumni
├── Registration
├── Enrollment
├── Lists
└── Contributions
```

### Navigation Patterns
- Top-level = horizontal menu bar
- Dropdown = vertical list on hover
- Active state = likely underline or background highlight (not clearly defined)
- No mega-menu patterns
- No search bar in navigation
- No sticky/fixed behavior identified clearly
- Mobile: assumed hamburger collapse (Bootstrap pattern)

---

## 3. HOMEPAGE SECTION ORDER

The homepage follows this exact vertical stacking order:

```
┌─────────────────────────────────────────────────┐
│  1. TOP HEADER                                  │
│     Logo (left) + 11 Affiliation Badges (right) │
│     Counselling codes (GRCP, GRCP1)             │
├─────────────────────────────────────────────────┤
│  2. MAIN NAVIGATION BAR                         │
│     10-item horizontal nav with dropdowns       │
├─────────────────────────────────────────────────┤
│  3. HERO CAROUSEL                               │
│     20+ full-width slides                       │
│     Events, achievements, campus life           │
│     Bootstrap carousel with prev/next controls  │
│     Virtual Tour link embedded nearby           │
├─────────────────────────────────────────────────┤
│  4. ANNOUNCEMENTS MARQUEE / PANEL               │
│     Scrolling or listed exam notices            │
│     Bus service info, event notifications       │
├─────────────────────────────────────────────────┤
│  5. ABOUT COLLEGE BLURB                         │
│     Short paragraph about GRCP                  │
│     Established 2003, PCI-approved              │
├─────────────────────────────────────────────────┤
│  6. PROGRAMME CARDS                             │
│     B.Pharmacy card                             │
│     M.Pharmacy card                             │
│     (2-column card layout)                      │
├─────────────────────────────────────────────────┤
│  7. GOOGLE REVIEWS WIDGET                       │
│     Embedded Google Reviews badge/card          │
├─────────────────────────────────────────────────┤
│  8. COMMITTEES SECTION                          │
│     10 committee links in a grid/list           │
│     (Anti-Ragging, IQAC, ICC, IIC, etc.)        │
├─────────────────────────────────────────────────┤
│  9. ACHIEVEMENTS SECTION                        │
│     Grouped achievement links/highlights        │
├─────────────────────────────────────────────────┤
│  10. QUICK LINKS                                │
│      E-Bulletin, Downloads, NIRF, etc.          │
├─────────────────────────────────────────────────┤
│  11. FOOTER                                     │
│      Contact + address + QR code + social       │
└─────────────────────────────────────────────────┘
```

**Missing from homepage (modernization opportunities):**
- Stats/counters section (students, faculty, years of excellence)
- Testimonials / alumni spotlights
- News & events feed
- Accreditation highlights
- CTA (Call-to-Action) buttons
- Placement highlights / recruiter logos

---

## 4. INTERNAL PAGE LAYOUTS

### 4.1 Administration Pages (e.g., Principal, Chairman)
```
Header → Nav → [Profile Image centered/top] → [Name + Title H1] →
[Biography paragraphs] → [Awards/achievements list] →
[Committees section] → [Quick links] → Footer
```
- **No sidebar** — full-width single column content
- Image is centered above bio
- Divider lines between sections
- No tabs or collapsible content

### 4.2 Programme Pages (B.Pharmacy, M.Pharmacy)
```
Header → Nav → [Programme Title H1] →
[Overview paragraph] →
[Approvals list (6 items)] →
[Career Scope list (10 items)] →
[Programme Committee table (17 members)] →
Footer
```
- Table: S.No | Name | Designation | Position | Email
- No tabs, no sidebar
- Simple numbered lists for careers/approvals

### 4.3 Faculty Page
```
Header → Nav → [Page Title: "Faculty"] →
[Table: S.No | Photo | Name | Qualification | Department | Designation | Experience | Email | CV] →
Footer
```
- 40 faculty members in a single scrollable table
- Photo column: small embedded image
- CV column: PDF download link
- **Critical modernization target** — tables are not mobile-friendly

### 4.4 Research Pages
```
Header → Nav → [Research Title] →
[Tab navigation: Pharmaceutics | Pharma Analysis | Pharmacology] →
[Research focus area content per tab] →
[Research Committee table] →
Footer
```
- Has tab-based navigation (one of the few pages that does)
- Committee table: Name | Designation | Position | Email

### 4.5 Publications Page
```
Header → Nav → [Year anchor links: 2024-25 | 2023-24 | ...] →
[Per-year collapsible/section] →
  [Table: S.No | Faculty | Scopus | WOS | UGC | Non-Indexed | Total] →
[Books section] →
Footer
```
- Anchor-based navigation (no JS filtering)
- Table format varies by year (inconsistency)
- Year 2024-25: 34 faculty, 112 total publications

### 4.6 Events Page
```
Header → Nav → [Year groups: 2026, 2025...] →
[Event cards per year — reverse chronological] →
  [Card: Date | Title | Description | Photos link | Read More] →
Footer
```
- No embedded images in event cards
- External links to Google Photos albums
- No search or filter UI

### 4.7 Infrastructure/Gallery Page
```
Header → Nav → [Title: "Infrastructure"] →
[Thumbnail grid: 38 images, all linking to full-size] →
Footer
```
- No categories, no labels per image
- All alt text is "Mountains" (generic/uncategorized)
- No lightbox (links to raw image files)

### 4.8 Placements Page
```
Header → Nav → [Placement Cell Info] →
[10 core functions list] →
[Placement Committee table: 5 members] →
[Contact details] →
Footer
```
- No company logos displayed
- No placement statistics/numbers
- No year-wise data

### 4.9 Fee Structure Page
```
Header → Nav → [B.Pharmacy fee table] → [M.Pharmacy fee table] → Footer
```
- Tables: Year | Tuition Fee | Special Fee | NBA Fee | Total
- Multiple year rows (2020-21 through 2025-26)

### 4.10 NIRF Page
```
Header → Nav → [NIRF 2026 links] → [NIRF 2025 links] → [Historical links] → Footer
```
- Simple list of PDF download links grouped by year

---

## 5. UI COMPONENTS INVENTORY

### Currently Used Components
| Component | Implementation | Quality |
|-----------|----------------|---------|
| Navigation Bar | Bootstrap 4 navbar + dropdowns | Basic |
| Hero Carousel | Bootstrap 4 carousel | Functional, no animations |
| Data Tables | Plain HTML `<table>` | Poor mobile experience |
| Programme Cards | Bootstrap card or custom div | Minimal styling |
| Announcements | Likely `<marquee>` or static list | Outdated |
| Committee Links | `<ul><li><a>` list | No visual treatment |
| Footer | Multi-column div layout | Functional |
| Forms | Bootstrap form elements | Basic |
| Tabs (Research) | Bootstrap tabs | Functional |
| Affiliation Logos | Horizontal `<img>` row | No carousel/responsive |
| QR Code | Static `<img>` | Fine |
| PDF Links | `<a>` with icon | Minimal |
| Anchor Navigation | `<a href="#id">` | Functional |

### Missing Modern Components
- Toast/alert notifications
- Progress bars or stats counters
- Modal dialogs
- Accordion/FAQ sections
- Breadcrumbs (no page orientation for users)
- Loading states
- Pagination
- Search/filter UI
- Lightbox for gallery
- Timeline for history/events
- Map embed (contact page)
- Video embed (virtual tour)

---

## 6. TYPOGRAPHY HIERARCHY

### Observed Current Typography
- **Font family:** System sans-serif (likely Arial/Helvetica fallback via Bootstrap)
- **No custom web fonts identified** (no Google Fonts or Adobe Fonts links observed)

### Estimated Type Scale (Bootstrap defaults)
| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| H1 — Page Title | ~32px | Bold | Admin profile names |
| H2 — Section Title | ~26px | Bold | Section headers |
| H3 — Sub-section | ~22px | Semi-bold | Card titles |
| H4 | ~18px | Semi-bold | Table headers |
| Body text | ~14–16px | Regular | Paragraphs |
| Nav items | ~14px | Regular/Bold | Menu |
| Footer text | ~12–13px | Regular | Small print |
| Table content | ~13–14px | Regular | Data rows |

### Typography Issues
- No consistent heading hierarchy across pages
- Some pages use `<b>` instead of semantic headings
- Font size not standardized (some pages feel cramped)
- Line-height appears tight for long-form content
- No clear distinction between UI text and content text

---

## 7. COLOR & THEME USAGE

### Observed Colors (inferred from institutional branding + Bootstrap defaults)
| Usage | Color | Notes |
|-------|-------|-------|
| Primary brand | Deep Blue / Navy (~#1a3a6e or similar) | Navbar, headings |
| Secondary | White (#ffffff) | Backgrounds |
| Accent | Orange/Gold (~#f5a623 or similar) | Highlights, links |
| Text | Near-black (#1a1a1a or #333333) | Body text |
| Link default | Blue (#0066cc Bootstrap default) | In-content links |
| Link hover | Darker blue / underline | Standard |
| Table border | Light grey (#dee2e6 Bootstrap) | Table grid lines |
| Footer bg | Dark (~#1a1a2e or similar) | Dark footer |
| Footer text | Light grey / white | Contrast text |
| Badge/labels | Varies — no system | Inconsistent |

### Theme Issues
- No CSS custom properties (variables) — colors hardcoded
- Inconsistent accent color usage across pages
- Some pages use green links, some blue (no rule)
- Button colors not standardized
- Hover states missing or inconsistent

---

## 8. SPACING & LAYOUT PATTERNS

### Container Strategy
- Bootstrap container (max-width ~1140px) used on most pages
- Header area appears full-width
- Content sections use standard Bootstrap padding

### Section Spacing
- Sections separated by `<hr>` dividers more than margin/padding
- No consistent vertical rhythm
- Some sections feel cramped; others have too much whitespace
- Card gaps: minimal (likely ~15px Bootstrap gutter)

### Grid Usage
- Bootstrap 12-column grid used inconsistently
- Programme cards: likely `col-md-6` (2-column)
- Faculty table: full-width, not grid-based
- Committee links: appear as a simple list, not a grid

### Padding Patterns
- Section padding: ~20–30px top/bottom (no system)
- Card padding: ~15px (Bootstrap default)
- Table cell padding: Bootstrap default (~8px)

---

## 9. FOOTER STRUCTURE

```
┌─────────────────────────────────────────────────────┐
│ CONTACT INFORMATION                                 │
│   Address: Survey No. 288, Nizampet, Bachupally     │
│            Road, Kukatpally, Hyderabad - 500 090    │
│   Phone: 7095271271                                 │
│   Email: info@grcp.ac.in                            │
│   Hours: Mon–Sat, 9 AM–4 PM                         │
│          (2nd Saturday holiday)                     │
├─────────────────────────────────────────────────────┤
│ QR CODE for college contact                         │
├─────────────────────────────────────────────────────┤
│ GRIEVANCE REDRESSAL FORM (embedded/linked)          │
├─────────────────────────────────────────────────────┤
│ ANTI-RAGGING INFO                                   │
│   Helpline: 1800-180-5522 (toll-free)               │
│   UGC Monitoring Agency: Analytic Minds Pvt Ltd     │
│   Committee contacts listed                         │
│   UGC Regulations PDF link                          │
├─────────────────────────────────────────────────────┤
│ SOCIAL MEDIA                                        │
│   Instagram icon/link                               │
├─────────────────────────────────────────────────────┤
│ COPYRIGHT                                           │
│   © 2012–2026 www.grcp.ac.in                        │
└─────────────────────────────────────────────────────┘
```

### Footer Gaps (for modern recreation)
- No quick navigation links in footer
- No sitemap section
- No programme quick links
- No Google Maps embed
- Only 1 social media platform (Instagram only)

---

## 10. RESPONSIVE BEHAVIOR

### Current State
- Bootstrap 4 responsive grid used
- Hamburger menu likely collapses navigation on mobile
- Tables are NOT responsive — horizontal scroll on small screens
- Faculty table (40 rows × 9 columns) is very problematic on mobile
- Image gallery uses fixed-size thumbnails — may not reflow well
- Affiliation logos row likely breaks on very small screens
- Carousel images may not have responsive height

### Breakpoints (Bootstrap 4 defaults)
| Breakpoint | Width | Class prefix |
|------------|-------|--------------|
| xs | < 576px | (none) |
| sm | ≥ 576px | sm |
| md | ≥ 768px | md |
| lg | ≥ 992px | lg |
| xl | ≥ 1200px | xl |

---

## 11. UI INCONSISTENCIES & MODERNIZATION AREAS

### Critical Issues
1. **Faculty table** — 9-column table with 40 rows breaks on all mobile screens
2. **Generic alt text** — all gallery images say "Mountains" (accessibility fail)
3. **External gallery links** — events link to Google Photos instead of on-site gallery
4. **`<marquee>` announcements** — deprecated HTML element likely in use
5. **No breadcrumbs** — users have no orientation on deep internal pages
6. **No search functionality** — no way to search faculty, publications, events
7. **Placement page lacks data** — no stats, no company logos, no placement records
8. **Homepage missing stats section** — no counters for students/faculty/years
9. **Inconsistent table formats** — publications tables change format each year
10. **No loading states, no transitions** — page feels static

### Design Inconsistencies
- Links styled differently across pages (some underlined, some not)
- Heading sizes vary page to page with no system
- Some pages have sidebars (implied), others don't
- Footer appears duplicated or misaligned on some pages
- Button styles are inconsistent (some are `<a>` styled as buttons, some are `<button>`)

### Content Issues
- Committee pages repeat the same contact info redundantly across many pages
- Anti-ragging information appears in the footer of EVERY page (overkill)
- No 404 page (returns server 404 with no college branding)
- Virtual Tour link goes to external resource with no context

---

## 12. WEBSITE STRUCTURE BREAKDOWN (ALL PAGES)

### Complete Page Inventory

```
/ (Home)
├── /aboutus.php          → About GRCP
├── /PEOs.php             → Programme Educational Objectives
├── /pos.php              → Programme Outcomes
├── /Chairman.php         → Chairman profile
├── /Vice_President.php   → Vice President profile
├── /principal.php        → Principal profile
├── /Governing_Body.php   → Governing Body table
├── /IDMC.php             → IDMC committee
├── /Organization_Chart.php → Org chart image/diagram
│
├── /admission_procedure.php → Admission steps
├── /FEE_Structure.php    → Fee tables
├── /EAMCET.php           → EAMCET rank data
├── /PGCET.php            → PGECET rank data
│
├── /b_pharmacy.php       → B.Pharmacy programme
├── /m_pharmacy_Pharmaceutics.php
├── /m_pharmacy_Pharmaceutical_Analysis.php
├── /m_pharmacy_Pharmacology.php
├── /PG-Program-Committee.php
│
├── /Syllabus-B-Pharmacy.php
├── /Syllabus-M-Pharmacy.php
├── /Academic_Calendar.php
├── /timetable.php
├── /Library_Committee.php
├── /information_center.php
├── /e_journals.php
├── /Daily_News_Papers.php
├── /Statistics.php
├── /Title-Volumes.php
├── /faculty.php          → Faculty table (40 members)
├── /Non-teaching-staff.php
│
├── /research.php         → Research (tabbed: 3 departments)
├── /phd_guideships.php
├── /publications.php     → Publications by year
├── /Patents.php
├── /consultancy.php
│
├── /events.php           → Events by year
├── /Infrastructure.php   → Image gallery (38 photos)
├── /Placements.php       → Placement cell info
├── /NIRF.php             → NIRF PDFs by year
├── /Mandatory_Disclosures.php
├── /Rules_and_Regulations.php
```

**Total estimated pages: ~35–40 unique pages**

---

## 13. REACT COMPONENT ARCHITECTURE

### Architecture Philosophy
- **Feature-based folder structure** (not type-based)
- **Compound components** for complex UI (Navbar, Tables, Tabs)
- **Data-driven components** — content separated from UI via data files
- **React Router v6** for client-side routing
- **Tanstack Query** (optional) for any future API calls
- **Context API** for theme/global state (lightweight, no Redux needed)

### Component Hierarchy

```
<App>
├── <Router>
│   ├── <Layout>                     ← Wraps all pages
│   │   ├── <TopBar>                 ← Counselling codes + affiliation logos
│   │   ├── <Navbar>                 ← Main navigation with dropdowns
│   │   │   ├── <NavItem>
│   │   │   └── <NavDropdown>
│   │   ├── <main>                   ← Page content slot
│   │   │   └── {Outlet}
│   │   └── <Footer>
│   │       ├── <FooterContact>
│   │       ├── <FooterLinks>
│   │       └── <FooterLegal>
│   │
│   ├── <HomePage>
│   │   ├── <HeroCarousel>
│   │   ├── <AnnouncementBanner>
│   │   ├── <AboutSnippet>
│   │   ├── <ProgrammeCards>
│   │   │   └── <ProgrammeCard> (×2)
│   │   ├── <StatsCounter>           ← NEW
│   │   ├── <CommitteesGrid>
│   │   ├── <AchievementsSection>
│   │   ├── <NewsEventsFeed>         ← NEW
│   │   └── <QuickLinks>
│   │
│   ├── <AboutPage>
│   ├── <PEOsPage>
│   ├── <POsPage>
│   │
│   ├── <AdminProfilePage>           ← Generic template for Chairman/VP/Principal
│   │   ├── <ProfileHero>
│   │   └── <BiographyContent>
│   ├── <GoverningBodyPage>
│   │   └── <CommitteeTable>
│   ├── <OrgChartPage>
│   │
│   ├── <AdmissionProcedurePage>
│   ├── <FeeStructurePage>
│   │   └── <FeeTable>
│   ├── <RankDataPage>               ← Generic for EAMCET/PGECET
│   │
│   ├── <ProgrammePage>              ← Generic template for all programmes
│   │   ├── <ProgrammeHero>
│   │   ├── <ApprovalsSection>
│   │   ├── <CareerScopeSection>
│   │   └── <ProgrammeCommitteeTable>
│   │
│   ├── <FacultyPage>
│   │   ├── <FacultyFilters>         ← NEW: Filter by dept/designation
│   │   ├── <FacultyGrid>            ← NEW: Card layout instead of table
│   │   │   └── <FacultyCard>
│   │   └── <FacultyTable>           ← Fallback/desktop table view
│   │
│   ├── <ResearchPage>
│   │   ├── <ResearchTabs>
│   │   │   └── <DepartmentResearch>
│   │   └── <ResearchCommitteeTable>
│   ├── <PublicationsPage>
│   │   ├── <YearAnchorNav>
│   │   └── <PublicationsYearSection>
│   │       └── <PublicationsTable>
│   ├── <PatentsPage>
│   ├── <PhDGuideships>
│   │
│   ├── <EventsPage>
│   │   ├── <EventYearGroup>
│   │   │   └── <EventCard>
│   │   └── <EventsFilter>           ← NEW
│   │
│   ├── <InfrastructurePage>
│   │   ├── <GalleryGrid>
│   │   │   └── <GalleryImage>
│   │   └── <Lightbox>               ← NEW
│   │
│   ├── <PlacementsPage>
│   │   ├── <PlacementStats>         ← NEW
│   │   ├── <RecruiterLogos>         ← NEW
│   │   └── <PlacementCommitteeTable>
│   │
│   ├── <NIRFPage>
│   └── <ContactPage>                ← NEW consolidated contact page
│       ├── <ContactForm>
│       ├── <ContactInfo>
│       └── <MapEmbed>
```

---

## 14. FOLDER STRUCTURE (REACT + VITE + TAILWIND)

```
grcp-website/
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── carousel/          ← Hero carousel images
│   │   ├── faculty/           ← Faculty photos
│   │   ├── infra/             ← Infrastructure gallery
│   │   ├── affiliations/      ← Accreditation badge logos
│   │   └── admin/             ← Admin profile photos
│   ├── documents/
│   │   ├── nirf/              ← NIRF PDFs
│   │   ├── syllabus/          ← Syllabus PDFs
│   │   └── faculty-cv/        ← Faculty CV PDFs
│   └── favicon.ico
│
├── src/
│   ├── main.jsx               ← Vite entry point
│   ├── App.jsx                ← Router setup
│   │
│   ├── components/            ← Reusable UI components
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── TopBar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NavItem.jsx
│   │   │   ├── NavDropdown.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Breadcrumb.jsx
│   │   │
│   │   ├── ui/                ← Primitive/atomic UI
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── Divider.jsx
│   │   │   ├── Tabs.jsx
│   │   │   ├── Accordion.jsx
│   │   │   ├── Table.jsx
│   │   │   ├── Spinner.jsx
│   │   │   ├── Tag.jsx
│   │   │   └── PDFLink.jsx
│   │   │
│   │   ├── common/            ← Shared cross-feature components
│   │   │   ├── PageHero.jsx
│   │   │   ├── StatsCounter.jsx
│   │   │   ├── CommitteeTable.jsx
│   │   │   ├── AnnouncementBanner.jsx
│   │   │   ├── QuickLinks.jsx
│   │   │   ├── AffiliationLogos.jsx
│   │   │   ├── Lightbox.jsx
│   │   │   └── GalleryGrid.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── HeroCarousel.jsx
│   │   │   ├── AboutSnippet.jsx
│   │   │   ├── ProgrammeCards.jsx
│   │   │   ├── NewsEventsFeed.jsx
│   │   │   ├── AchievementsSection.jsx
│   │   │   └── CommitteesGrid.jsx
│   │   │
│   │   ├── faculty/
│   │   │   ├── FacultyCard.jsx
│   │   │   ├── FacultyGrid.jsx
│   │   │   ├── FacultyTable.jsx
│   │   │   └── FacultyFilters.jsx
│   │   │
│   │   ├── events/
│   │   │   ├── EventCard.jsx
│   │   │   └── EventYearGroup.jsx
│   │   │
│   │   ├── research/
│   │   │   ├── ResearchTabs.jsx
│   │   │   └── PublicationsTable.jsx
│   │   │
│   │   └── placements/
│   │       ├── PlacementStats.jsx
│   │       └── RecruiterLogos.jsx
│   │
│   ├── pages/                 ← Route-level page components
│   │   ├── Home.jsx
│   │   ├── about/
│   │   │   ├── AboutGRCP.jsx
│   │   │   ├── PEOs.jsx
│   │   │   └── POs.jsx
│   │   ├── administration/
│   │   │   ├── Chairman.jsx
│   │   │   ├── VicePresident.jsx
│   │   │   ├── Principal.jsx
│   │   │   ├── GoverningBody.jsx
│   │   │   ├── IDMC.jsx
│   │   │   └── OrgChart.jsx
│   │   ├── admissions/
│   │   │   ├── AdmissionProcedure.jsx
│   │   │   ├── FeeStructure.jsx
│   │   │   ├── EAMCETRank.jsx
│   │   │   └── PGECETRank.jsx
│   │   ├── programmes/
│   │   │   ├── BPharmacy.jsx
│   │   │   ├── MPharmaceutics.jsx
│   │   │   ├── MPharmaAnalysis.jsx
│   │   │   └── MPharmaPharmacology.jsx
│   │   ├── academics/
│   │   │   ├── Syllabus.jsx
│   │   │   ├── AcademicCalendar.jsx
│   │   │   ├── Timetable.jsx
│   │   │   ├── Library.jsx
│   │   │   ├── EJournals.jsx
│   │   │   ├── Faculty.jsx
│   │   │   └── NonTeachingStaff.jsx
│   │   ├── research/
│   │   │   ├── ResearchFacilities.jsx
│   │   │   ├── Publications.jsx
│   │   │   ├── Patents.jsx
│   │   │   ├── PhDGuideships.jsx
│   │   │   └── Consultancy.jsx
│   │   ├── examination/
│   │   │   ├── BranchInfo.jsx
│   │   │   ├── ExamTimetable.jsx
│   │   │   ├── Results.jsx
│   │   │   └── QuestionPapers.jsx
│   │   ├── placements/
│   │   │   ├── PlacementCell.jsx
│   │   │   └── PlacementStatus.jsx
│   │   ├── alumni/
│   │   │   ├── AlumniRegistration.jsx
│   │   │   └── AlumniList.jsx
│   │   ├── Events.jsx
│   │   ├── Infrastructure.jsx
│   │   ├── NIRF.jsx
│   │   ├── MandatoryDisclosures.jsx
│   │   ├── RulesAndRegulations.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/                  ← Static data files (JSON / JS arrays)
│   │   ├── navigation.js      ← Nav structure
│   │   ├── faculty.js         ← Faculty list
│   │   ├── events.js          ← Events data
│   │   ├── publications.js    ← Publications by year
│   │   ├── committees.js      ← All committee data
│   │   ├── carousel.js        ← Carousel images/captions
│   │   ├── programmes.js      ← Programme details
│   │   └── placements.js      ← Placement stats + recruiters
│   │
│   ├── hooks/                 ← Custom React hooks
│   │   ├── useScrollSpy.js
│   │   ├── useCounterAnimation.js
│   │   └── useMediaQuery.js
│   │
│   ├── utils/                 ← Utility functions
│   │   ├── formatDate.js
│   │   └── slugify.js
│   │
│   └── styles/
│       └── index.css          ← Tailwind directives + custom CSS
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 15. REUSABLE COMPONENTS LIST

### Layout Components
| Component | Props | Usage |
|-----------|-------|-------|
| `Layout` | `children` | Wraps every page |
| `TopBar` | — | Counselling codes + affiliation logos |
| `Navbar` | `navItems[]` | Main navigation |
| `NavDropdown` | `label, items[]` | Dropdown menu |
| `MobileMenu` | `navItems[], isOpen` | Hamburger menu |
| `Footer` | — | Site footer |
| `Breadcrumb` | `items[]` | Page path indicator |

### UI Primitives
| Component | Props | Usage |
|-----------|-------|-------|
| `Button` | `variant, size, href, onClick` | All CTA buttons |
| `Badge` | `color, label` | Status labels |
| `Card` | `title, children, footer` | Content containers |
| `SectionTitle` | `title, subtitle, center?` | Section headings |
| `Tabs` | `tabs[], activeTab` | Tabbed content |
| `Accordion` | `items[]` | Expandable content |
| `Table` | `columns[], data[], responsive?` | All data tables |
| `PDFLink` | `href, label` | PDF download buttons |
| `Tag` | `label, color` | Category tags |

### Common Components
| Component | Props | Usage |
|-----------|-------|-------|
| `PageHero` | `title, subtitle, image?` | Internal page header |
| `StatsCounter` | `stats[]` | Animated number counters |
| `CommitteeTable` | `members[], year` | Any committee listing |
| `AnnouncementBanner` | `items[]` | Scrolling announcements |
| `QuickLinks` | `links[]` | Quick access grid |
| `AffiliationLogos` | `logos[]` | Accreditation badges |
| `GalleryGrid` | `images[]` | Image gallery with lightbox |
| `Lightbox` | `images[], currentIndex` | Full-screen image viewer |

### Feature Components
| Component | Props | Usage |
|-----------|-------|-------|
| `HeroCarousel` | `slides[]` | Homepage hero |
| `ProgrammeCard` | `title, description, href` | Programme showcase |
| `FacultyCard` | `faculty{}` | Faculty member card |
| `FacultyFilters` | `departments[], onChange` | Faculty filter UI |
| `EventCard` | `event{}` | Single event display |
| `EventYearGroup` | `year, events[]` | Year-grouped events |
| `PublicationsTable` | `year, publications[]` | Research publications |
| `PlacementStats` | `stats{}` | Placement numbers |
| `RecruiterLogos` | `companies[]` | Recruiter company logos |
| `ResearchTabs` | `departments[]` | Research dept tabs |
| `FeeTable` | `programme, fees[]` | Fee structure display |
| `NewsEventsFeed` | `items[]` | Recent news/events |

---

## 16. MODERN IMPROVEMENTS

### Priority 1 — Critical UX Fixes
1. **Replace faculty table with card grid** — Photo, name, designation, department cards with department filter
2. **Add breadcrumb navigation** to all internal pages
3. **Create proper 404 page** with college branding
4. **Fix gallery alt text** — meaningful descriptions for each image
5. **Replace `<marquee>` with CSS ticker or animated announcement bar**
6. **Add responsive overflow** to all data tables (horizontal scroll or stacked mobile layout)
7. **Implement lightbox** for gallery images (Fancybox/custom modal)

### Priority 2 — Content & Data Enhancements
8. **Homepage stats counter** — e.g., "23+ Years | 40+ Faculty | 500+ Alumni | 4.5★ Rating"
9. **Placement page overhaul** — Add statistics, year-wise data, recruiter logos
10. **Events page on-site photos** — Instead of linking to Google Photos
11. **Consistent publications tables** — Same column format across all years
12. **Add a consolidated Contact page** — Form + Map + Info in one place
13. **Virtual Tour integration** — Embedded video/360° tour on a dedicated page

### Priority 3 — Navigation & Discovery
14. **Site-wide search** — Search faculty, publications, events, pages
15. **Sticky navbar** — Fixed position on scroll
16. **Active nav state** — Highlight current section in navbar
17. **Footer navigation** — Add quick links section in footer

### Priority 4 — Visual Modernization
18. **Consistent button system** — Defined variants (primary, secondary, outline, ghost)
19. **CSS custom properties** — Centralized color/spacing tokens
20. **Subtle animations** — Fade-in on scroll, counter animations, hover transitions
21. **Modern card design** — Box shadows, rounded corners, hover lift effects
22. **Dark footer** with proper contrast and organized link columns
23. **Hero carousel** — Overlay text, gradient, modern controls, auto-pause on hover

### Priority 5 — Accessibility & SEO
24. **Proper heading hierarchy** — One H1 per page, logical H2/H3 nesting
25. **ARIA labels** on interactive elements
26. **Alt text** on all images
27. **Meta tags** — Title, description, OG tags per page
28. **Keyboard navigation** for dropdowns and modals

---

## 17. SUGGESTED DESIGN SYSTEM

### Color Palette

```
Primary (Institutional Blue)
  --color-primary-900: #0f2a5e   ← Deep navy
  --color-primary-800: #1a3a7c
  --color-primary-700: #1e4799
  --color-primary-600: #2355b5   ← Main brand blue
  --color-primary-500: #2d65cc   ← Interactive/hover
  --color-primary-100: #dce8ff   ← Light backgrounds
  --color-primary-50:  #f0f5ff   ← Subtle tint

Accent (Pharmacy Gold/Saffron)
  --color-accent-600: #c97a00    ← Deep gold
  --color-accent-500: #f5a623    ← Main accent
  --color-accent-400: #f7bc52    ← Hover
  --color-accent-100: #fdf3dc    ← Soft background

Neutral
  --color-gray-900: #111827
  --color-gray-800: #1f2937
  --color-gray-700: #374151
  --color-gray-600: #4b5563
  --color-gray-500: #6b7280
  --color-gray-400: #9ca3af
  --color-gray-300: #d1d5db
  --color-gray-200: #e5e7eb
  --color-gray-100: #f3f4f6
  --color-gray-50:  #f9fafb
  --color-white:    #ffffff

Semantic
  --color-success: #16a34a
  --color-warning: #d97706
  --color-error:   #dc2626
  --color-info:    #0284c7
```

### Typography

```
Font Stack:
  Headings:  'Inter', 'Segoe UI', system-ui, sans-serif
  Body:      'Inter', 'Segoe UI', system-ui, sans-serif
  Mono:      'JetBrains Mono', 'Consolas', monospace  (for codes/CVs)

Type Scale (Tailwind-aligned):
  text-xs:   12px / 16px line-height  → Captions, legal
  text-sm:   14px / 20px              → Secondary text, nav
  text-base: 16px / 24px              → Body copy
  text-lg:   18px / 28px              → Lead text
  text-xl:   20px / 28px              → Card titles
  text-2xl:  24px / 32px              → Section headings (H3)
  text-3xl:  30px / 36px              → Page sub-headings (H2)
  text-4xl:  36px / 40px              → Page headings (H1)
  text-5xl:  48px / 52px              → Hero text

Font Weights:
  Regular:     400
  Medium:      500
  Semibold:    600
  Bold:        700
```

### Spacing Scale (Tailwind defaults — 4px base)
```
2  → 8px    (tight inline gaps)
3  → 12px   (small gaps)
4  → 16px   (standard gap)
6  → 24px   (card padding)
8  → 32px   (section inner padding)
12 → 48px   (between sub-sections)
16 → 64px   (between major sections)
20 → 80px   (section vertical padding)
24 → 96px   (hero padding)
```

### Border Radius
```
rounded-sm:  4px   → Tags, badges
rounded:     6px   → Buttons
rounded-md:  8px   → Cards, inputs
rounded-lg:  12px  → Large cards
rounded-xl:  16px  → Feature cards
rounded-full:9999px → Avatars, pills
```

### Shadows
```
shadow-sm:  Subtle — table rows, inputs
shadow:     Default — cards
shadow-md:  Elevated — dropdowns
shadow-lg:  High — modals, overlays
shadow-xl:  Feature — hero callouts
```

### Button Variants
```jsx
// Primary
<Button variant="primary">Apply Now</Button>
bg-primary-600, text-white, hover:bg-primary-700

// Secondary
<Button variant="secondary">Learn More</Button>
bg-accent-500, text-white, hover:bg-accent-600

// Outline
<Button variant="outline">View All</Button>
border-primary-600, text-primary-600, hover:bg-primary-50

// Ghost
<Button variant="ghost">Download PDF</Button>
text-primary-600, hover:bg-primary-50

// Sizes: sm | md (default) | lg
```

### Card Variants
```
Card Default:  bg-white, rounded-lg, shadow, p-6
Card Feature:  bg-white, rounded-xl, shadow-md, p-8, border-t-4 border-primary-600
Card Outlined: bg-white, rounded-lg, border border-gray-200, p-6
Card Colored:  bg-primary-600, text-white, rounded-lg, p-6
```

---

## 18. RESPONSIVE STRATEGY

### Breakpoints (Tailwind defaults)
| Name | Min-width | Target devices |
|------|-----------|---------------|
| (default) | 0px | Mobile portrait |
| sm | 640px | Mobile landscape |
| md | 768px | Tablet portrait |
| lg | 1024px | Tablet landscape / small desktop |
| xl | 1280px | Desktop |
| 2xl | 1536px | Large desktop |

### Mobile-First Rules

**Navigation:**
- Mobile: Full-screen slide-in menu or drop-down hamburger
- Tablet: Compact horizontal nav, dropdowns on tap
- Desktop: Full horizontal nav with hover dropdowns

**Hero Carousel:**
- Mobile: Reduced height (250px), simplified text overlay
- Tablet: Medium height (400px), full text
- Desktop: Full height (500–600px), animated overlays

**Faculty Section:**
- Mobile: Single column card (photo + name + dept)
- Tablet: 2-column card grid
- Desktop: 3–4 column card grid OR table view toggle

**Data Tables:**
- Mobile: Horizontal scroll container + card-stacked alternative
- Tablet: Full table, reduced column padding
- Desktop: Full table with all columns

**Gallery Grid:**
- Mobile: 2-column
- Tablet: 3-column
- Desktop: 4–5 column

**Footer:**
- Mobile: Single column stacked sections
- Tablet: 2-column
- Desktop: 4-column grid

**Affiliation Logos:**
- Mobile: Auto-scrolling horizontal carousel (3 visible)
- Tablet: Static row (6 visible, scrollable)
- Desktop: Full row (all 11 visible)

---

## 19. DEVELOPMENT ROADMAP

### Phase 0 — Setup (Day 1)
- [ ] Initialize Vite + React + TypeScript project
- [ ] Configure Tailwind CSS with custom design tokens
- [ ] Set up React Router v6
- [ ] Create folder structure as per Section 14
- [ ] Set up ESLint + Prettier
- [ ] Move all assets (images, PDFs) to `/public/`
- [ ] Create `src/data/` files with all static content
- [ ] Create `tailwind.config.js` with full design system

### Phase 1 — Shell & Layout (Day 2–3)
- [ ] `TopBar` component (affiliation logos, counselling codes)
- [ ] `Navbar` component (all 10 items + all dropdowns)
- [ ] `MobileMenu` (hamburger, slide-in drawer)
- [ ] `Footer` component (4-column, dark)
- [ ] `Layout` wrapper
- [ ] `Breadcrumb` component
- [ ] `PageHero` (reusable internal page header)
- [ ] Basic routing setup for all ~35 pages

### Phase 2 — Homepage (Day 3–5)
- [ ] `HeroCarousel` (auto-play, 20 slides, overlay text)
- [ ] `AnnouncementBanner` (animated ticker)
- [ ] `AboutSnippet` section
- [ ] `ProgrammeCards` (B.Pharm + M.Pharm)
- [ ] `StatsCounter` (animated on scroll)
- [ ] `CommitteesGrid`
- [ ] `AchievementsSection`
- [ ] `QuickLinks`

### Phase 3 — About & Administration (Day 5–6)
- [ ] About GRCP page
- [ ] PEOs page
- [ ] POs page
- [ ] `AdminProfilePage` template
- [ ] Chairman / Vice President / Principal pages
- [ ] Governing Body page (CommitteeTable)
- [ ] IDMC page
- [ ] Org Chart page

### Phase 4 — Admissions & Programmes (Day 6–7)
- [ ] Admission Procedure page
- [ ] Fee Structure page (FeeTable component)
- [ ] EAMCET/PGECET Rank pages
- [ ] `ProgrammePage` generic template
- [ ] B.Pharmacy page
- [ ] 3× M.Pharmacy pages (Pharmaceutics, Analysis, Pharmacology)

### Phase 5 — Academics (Day 7–9)
- [ ] Syllabus pages (with PDF download links)
- [ ] Academic Calendar
- [ ] Timetable page
- [ ] Library pages (Committee, Info Center, E-Journals, Newspapers, Statistics)
- [ ] Faculty page (FacultyGrid + FacultyFilters + FacultyCard)
- [ ] Non-Teaching Staff page

### Phase 6 — Research (Day 9–10)
- [ ] Research Facilities (ResearchTabs)
- [ ] Publications page (year sections + tables)
- [ ] Patents page
- [ ] PhD Guideships
- [ ] Consultancy

### Phase 7 — Events & Infrastructure (Day 10–11)
- [ ] Events page (EventCard, EventYearGroup, filter)
- [ ] Infrastructure/Gallery page (GalleryGrid, Lightbox)

### Phase 8 — Placements, NIRF, Misc (Day 11–12)
- [ ] Placements page (PlacementStats, RecruiterLogos, CommitteeTable)
- [ ] NIRF page (PDF links, year groups)
- [ ] Mandatory Disclosures
- [ ] Rules & Regulations
- [ ] Examination pages

### Phase 9 — Alumni & Contact (Day 12–13)
- [ ] Alumni pages (Registration form, Enrollment, List)
- [ ] Consolidated Contact page (Form + Map + Info)
- [ ] 404 Not Found page

### Phase 10 — Polish & Launch (Day 13–14)
- [ ] Meta tags and OG tags for all pages
- [ ] Accessibility audit (ARIA, alt text, keyboard nav)
- [ ] Performance audit (image optimization, lazy loading)
- [ ] Mobile/tablet testing on all pages
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Fix all console errors/warnings
- [ ] Final review against original site

---

## SUMMARY: KEY DESIGN DECISIONS

| Decision | Recommendation | Reason |
|----------|----------------|--------|
| CSS Framework | Tailwind CSS v3+ | Utility-first, highly customizable |
| Router | React Router v6 | Industry standard |
| Icons | Lucide React | Clean, consistent, tree-shakeable |
| Carousel | Swiper.js | Feature-rich, mobile-friendly |
| Lightbox | yet-another-react-lightbox | Lightweight, accessible |
| Tables | TanStack Table v8 | Sortable, filterable |
| Animations | Framer Motion | Smooth, declarative |
| Fonts | Inter (Google Fonts) | Modern, highly legible |
| Images | Lazy loading + WebP | Performance |
| State | React Context + useState | No backend/complex state needed |
| Build | Vite | Fast HMR, optimized bundles |

---

*This document is the complete planning reference for recreating the GRCP website as a modern React + Vite + Tailwind application.*
*Total estimated pages: ~38 | Total estimated components: ~60+ | Estimated build time: 12–14 focused development days*
