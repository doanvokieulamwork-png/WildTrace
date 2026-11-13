import { useEffect } from 'react'

/** Every Flow 1 image (onboarding, welcome, home), as built URLs. */
const flowImages = Object.values(
  import.meta.glob<string>('../../assets/flow1/**/*.{png,jpg,svg}', { eager: true, import: 'default' }),
)

/**
 * Warms the image cache while the splash screens play, so onboarding/welcome/home
 * artwork is decoded before the dissolve transitions run (no pop-in mid-fade).
 */
export function usePreloadFlowImages() {
  useEffect(() => {
    for (const src of flowImages) {
      const img = new Image()
      img.decoding = 'async'
      img.src = src
    }
  }, [])
}
