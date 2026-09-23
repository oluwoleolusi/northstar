import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'aura',
    slug: 'aura',
    title: 'AURA',
    client: 'Aura',
    category: 'Brand Identity / Digital',
    year: '2026',
    description:
      'A skincare brand built on restraint — identity, packaging system and a digital experience for a label that lets the product speak first.',
    accent: '#8C6B57',
    heroImage: `${import.meta.env.BASE_URL}images/work-aura-01.jpg`,
    gallery: [`${import.meta.env.BASE_URL}images/work-aura-01.jpg`, `${import.meta.env.BASE_URL}images/work-aura-02.jpg`, `${import.meta.env.BASE_URL}images/work-aura-03.jpg`],
    services: ['Brand Identity', 'Digital Experiences'],
    challenge:
      'Aura arrived with strong formulations and no visual language to match — a brand that read as generic despite genuinely different chemistry.',
    approach:
      'We built the identity around restraint: one typeface, one accent tone, and a packaging system designed to be read at arm\u2019s length on a crowded shelf.',
    outcome:
      'A system that scales from a single serum bottle to a full retail wall without losing the quiet the brand was built on.',
    layout: 'featured',
  },
  {
    id: 'mota',
    slug: 'mota',
    title: 'MOTA',
    client: 'Mota',
    category: 'Digital / Art Direction',
    year: '2025',
    description:
      'A mobility platform preparing for public launch — visual identity and a product interface built around speed and clarity.',
    accent: '#5A93B8',
    heroImage: `${import.meta.env.BASE_URL}images/work-mota-01.jpg`,
    gallery: [`${import.meta.env.BASE_URL}images/work-mota-01.jpg`, `${import.meta.env.BASE_URL}images/work-mota-02.jpg`, `${import.meta.env.BASE_URL}images/work-mota-03.jpg`],
    services: ['Digital Experiences', 'Art Direction', 'Creative Strategy'],
    challenge:
      'Mota needed to feel serious to city partners and effortless to daily riders — two audiences the existing product spoke to unevenly.',
    approach:
      'We separated the system into two registers sharing one grid: a confident, technical language for partners, and a lighter one for the app itself.',
    outcome:
      'A unified visual system now used across partner decks, signage and the product, launched in three cities within the first year.',
    layout: 'standard',
  },
  {
    id: 'field-notes',
    slug: 'field-notes',
    title: 'FIELD NOTES',
    client: 'Field Notes',
    category: 'Editorial Direction / Digital',
    year: '2025',
    description:
      'An independent culture publication — editorial system, typography and a reading experience built to slow people down.',
    accent: '#8A7F63',
    heroImage: `${import.meta.env.BASE_URL}images/work-fieldnotes-01.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/work-fieldnotes-01.jpg`,
      `${import.meta.env.BASE_URL}images/work-fieldnotes-02.jpg`,
      `${import.meta.env.BASE_URL}images/work-fieldnotes-03.jpg`,
    ],
    services: ['Art Direction', 'Digital Experiences'],
    challenge:
      'Field Notes had strong writers and no reading experience worth the name — a template site competing for attention against its own words.',
    approach:
      'We designed the site as a publication first: a type system built for long-form reading, and a layout that gets out of the way of the work.',
    outcome:
      'Average time on page more than doubled within the first quarter after launch, without a single new distribution channel.',
    layout: 'text-led',
  },
  {
    id: 'noma-house',
    slug: 'noma-house',
    title: 'NOMA HOUSE',
    client: 'Noma House',
    category: 'Brand Identity / Campaign',
    year: '2024',
    description:
      'A boutique hospitality group opening its second property — identity and launch campaign across print, signage and site.',
    accent: '#96795D',
    heroImage: `${import.meta.env.BASE_URL}images/work-noma-01.jpg`,
    gallery: [`${import.meta.env.BASE_URL}images/work-noma-01.jpg`, `${import.meta.env.BASE_URL}images/work-noma-02.jpg`, `${import.meta.env.BASE_URL}images/work-noma-03.jpg`],
    services: ['Brand Identity', 'Campaigns', 'Art Direction'],
    challenge:
      'The first Noma House property built its reputation on word of mouth. The second needed an identity strong enough to travel without it.',
    approach:
      'We built a mark and material system drawn from the properties themselves — finishes, light and texture — rather than hospitality convention.',
    outcome:
      'A launch campaign and identity system now applied across both properties, with a third in development using the same foundation.',
    layout: 'wide',
  },
  {
    id: 'orbit',
    slug: 'orbit',
    title: 'ORBIT',
    client: 'Orbit',
    category: 'Digital / Brand Identity',
    year: '2024',
    description:
      'A developer-infrastructure company rebuilding its identity and site around a single idea: reliability as a visual language.',
    accent: '#5A82FF',
    heroImage: `${import.meta.env.BASE_URL}images/work-orbit-01.jpg`,
    gallery: [`${import.meta.env.BASE_URL}images/work-orbit-01.jpg`, `${import.meta.env.BASE_URL}images/work-orbit-02.jpg`, `${import.meta.env.BASE_URL}images/work-orbit-03.jpg`],
    services: ['Digital Experiences', 'Brand Identity', 'Creative Strategy'],
    challenge:
      'Orbit\u2019s product was trusted by serious engineering teams. Its brand looked like every other developer tool launched that year.',
    approach:
      'We built the system around a single grid used consistently from marketing site to documentation to status page — structure as the brand.',
    outcome:
      'A visual system engineering teams describe, unprompted, as the reason they trusted the product before reading a line of documentation.',
    layout: 'standard',
  },
  {
    id: 'sona',
    slug: 'sona',
    title: 'SONA',
    client: 'Sona',
    category: 'Brand Identity / Campaign',
    year: '2023',
    description:
      'A fast-growing beverage brand outgrowing its first identity — a system built to hold up from a market stall to a retail cooler.',
    accent: '#D06A3C',
    heroImage: `${import.meta.env.BASE_URL}images/work-sona-01.jpg`,
    gallery: [`${import.meta.env.BASE_URL}images/work-sona-01.jpg`, `${import.meta.env.BASE_URL}images/work-sona-02.jpg`, `${import.meta.env.BASE_URL}images/work-sona-03.jpg`],
    services: ['Brand Identity', 'Campaigns'],
    challenge:
      'Sona\u2019s original identity worked at a market stall and fell apart at retail scale — inconsistent color, no system behind the logo.',
    approach:
      'We rebuilt the identity around one flexible mark and a strict color system, tested across formats before a single asset was finalized.',
    outcome:
      'The brand moved into national retail distribution within six months of the identity launch, unchanged since.',
    layout: 'text-led',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
