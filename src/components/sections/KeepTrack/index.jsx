import './keep-track.css'

export function KeepTrack() {
  return (
    <section class="keep-track">
      <h3 class="small-container">Keep track of your snippets</h3>
      <p class="small-container">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
      <div class="lower">
        <div class="lower-left">
          <img src="image-computer.png" alt="computer-image" class="" />
        </div>
        <div class="lower-right">
          <div class="feature-container">
            <div class="feature">
              <h5>Quick Search</h5>
              <p>
                {' '}
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div class="feature">
              <h5>iCloud Sync</h5>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div class="feature">
              <h5>Complete History</h5>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


