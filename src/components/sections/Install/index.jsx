import { BtnsDownload } from '../../btns/BtnsDownload'
import './install.css'

export function Install() {
  return (
    <section className="install">
      <div className="small-container">
        <div className="para">
          <h3>Clipboard for iOS and Mac OS</h3>
          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          <BtnsDownload />
        </div>
      </div>
    </section>
  )
}
