import dragonflies from '../assets/flow1/blog-dragonflies.png'
import butterflies from '../assets/flow1/blog-butterflies.png'
import ladybugs from '../assets/flow1/blog-ladybugs.png'

export type BlogPost = {
  id: string
  title: string
  description: string
  publishedAt: string
  /** Image layers, bottom → top (Figma stacks the cover images). */
  images: string[]
}

/** Mock "Wild Blogs" posts (Figma Home 4022:17937). */
export const wildBlogs: BlogPost[] = [
  {
    id: 'dragonflies',
    title: 'Dragonflies Can Reveal the Health of Wet Habitats',
    description: 'Because they depend on clean water and healthy vegetation, dragonflies can offer clues about the condition of nearby aquatic habitats.',
    publishedAt: '12 Aug 2026 • 08:14',
    images: [dragonflies],
  },
  {
    id: 'butterflies',
    title: 'Why Butterflies Matter More Than We Think',
    description: 'Butterflies help pollinate plants and also serve as food for other species, making them an important part of urban ecosystems.',
    publishedAt: '10 Aug 2026 • 12:10',
    images: [dragonflies, butterflies],
  },
  {
    id: 'ladybugs',
    title: 'What Ladybugs Can Tell Us About a Place',
    description: 'Explore how repeated sightings of familiar insects can reveal clues about the health and conditions of a local habitat.',
    publishedAt: '10 Aug 2026 • 12:10',
    images: [dragonflies, butterflies, ladybugs],
  },
]
