import { BtnsDownload } from '../../btns/BtnsDownload'
import './install.css'

export function Install() {
  return(
    <section className="install">
          <div className="small-container">
            <div className="para">
              <h3 data-aos="fade-down">Clipboard for iOS and Mac OS</h3>
              <p data-aos="fade-down">
                Available for free on the App Store. Download for Mac or iOS,
                sync with iCloud and you’re ready to start adding to your
                clipboard.
              </p>
             <BtnsDownload/>
            </div>
          </div>
        </section>
  )
}