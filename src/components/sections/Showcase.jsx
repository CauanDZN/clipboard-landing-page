import './showcase.css'
import { BtnsDownload } from "../btns/BtnsDownload";
export function Showcase() {
  return (
    <section class="showcase">
          <div class="small-container">
            <div class="para">
              <h2>A history of everything you copy</h2>
              <p>Clipboard allows you to track and organize everything you 
                copy. Instantly access your clipboard on all your devices.</p>
              <BtnsDownload/>
            </div>
          </div>
        </section>
  )
}