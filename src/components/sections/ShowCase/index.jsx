import { BtnsDownload } from '../../btns/BtnsDownload'
import './showcase.css'

export function Showcase() {
  return (
    <section className="showcase">
      <div className="small-container">
        <div className="para">
          <h2>A history of everything you copy</h2>
          <p>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <BtnsDownload />
        </div>
      </div>
    </section>
  )
}
