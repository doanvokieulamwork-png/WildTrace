import { asciiTreeFrames } from './asciiTreeFrames'
import { useFrameSequence } from './useFrameSequence'
import './AsciiTree.css'

/** Growing ASCII plant (Figma "ASCII Animation", 18 frames · 3.255s, plays once). */
export function AsciiTree() {
  const frame = useFrameSequence(asciiTreeFrames.length, 181)
  const f = asciiTreeFrames[frame]
  return (
    <div className="ascii-tree" aria-hidden>
      <div className="ascii-tree__clip">
        <pre
          className="ascii-tree__frame"
          style={{ left: f.left, top: f.top, width: f.width, height: f.height, fontSize: f.fontSize, lineHeight: `${f.fontSize}px` }}
        >
          {f.text}
        </pre>
      </div>
    </div>
  )
}
