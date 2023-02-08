import { BtnsDownload } from '../../btns/BtnsDownload'
import './showcase.css'

export function Showcase() {
  return (
    <section className="showcase">
      <div className="small-container">
        <div
          
          className="para"
        >
          <h2 data-aos="fade-down">A history of everything you copy</h2>
          <p data-aos="fade-down">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <BtnsDownload />
        </div>
      </div>
    </section>
  )
}
