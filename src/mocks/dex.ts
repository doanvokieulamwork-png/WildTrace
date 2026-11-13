import atlasMothAscii from '../assets/flow1/insect-atlas-moth-ascii.png'
import atlasMoth from '../assets/flow1/insect-atlas-moth.png'
import sacredMantisBase from '../assets/flow1/insect-sacred-mantis-base.png'
import sacredMantis from '../assets/flow1/insect-sacred-mantis.png'
import bluetailBase from '../assets/flow1/insect-common-bluetail-base.png'
import bluetail from '../assets/flow1/insect-common-bluetail.png'
import leafInsectBase from '../assets/flow1/insect-leaf-insect-base.png'
import leafInsect from '../assets/flow1/insect-leaf-insect.png'
import tropidoderusBase from '../assets/flow1/insect-tropidoderus-base.png'
import tropidoderus from '../assets/flow1/insect-tropidoderus.png'
import underwingBase from '../assets/flow1/insect-yellow-underwing-moth-base.png'
import underwing from '../assets/flow1/insect-yellow-underwing-moth.png'

export type DexEntry = {
  id: string
  name?: string
  latinName: string
  rarity: 'Common' | 'Rare'
  location: string
  baseImage: string
  insectImage: string
  /** Figma rotates most card illustrations by -23°; the Atlas Moth card is upright. */
  tilted: boolean
  /** Base illustration fit (most are `contain`, two are `cover`). */
  baseFit: 'contain' | 'cover'
}

/** Mock "New in your dex" entries (Figma Home 4022:17937). */
export const newInDex: DexEntry[] = [
  { id: 'atlas-moth', name: 'Atlas Moth', latinName: 'Attacus atlas', rarity: 'Rare', location: 'Ho Chi Minh', baseImage: atlasMothAscii, insectImage: atlasMoth, tilted: false, baseFit: 'contain' },
  { id: 'sacred-mantis', name: 'Sacred Mantis', latinName: 'Mantis religiosa', rarity: 'Common', location: 'Ho Chi Minh', baseImage: sacredMantisBase, insectImage: sacredMantis, tilted: true, baseFit: 'contain' },
  { id: 'common-bluetail', name: 'Common Bluetail', latinName: 'Ischnura senegalensis', rarity: 'Common', location: 'Ho Chi Minh', baseImage: bluetailBase, insectImage: bluetail, tilted: true, baseFit: 'contain' },
  { id: 'leaf-insect', name: 'Leaf insects', latinName: 'Phylliidae', rarity: 'Rare', location: 'Ho Chi Minh', baseImage: leafInsectBase, insectImage: leafInsect, tilted: true, baseFit: 'contain' },
  { id: 'tropidoderus', name: 'Genus Tropidoderus', latinName: 'Tropidoderus', rarity: 'Common', location: 'Ho Chi Minh', baseImage: tropidoderusBase, insectImage: tropidoderus, tilted: true, baseFit: 'cover' },
  { id: 'acherontia-atropos', latinName: 'Acherontia atropos', rarity: 'Common', location: 'Ho Chi Minh', baseImage: underwingBase, insectImage: underwing, tilted: true, baseFit: 'cover' },
]
