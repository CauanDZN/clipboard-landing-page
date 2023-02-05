import './keep-track.css'

export function KeepTrack() {
  return (
    <section data-aos="fade-down" className="keep-track">
      <h3 className="small-container">Keep track of your snippets</h3>
      <p className="small-container">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
      <div className="lower">
        <div className="lower-left">
          <img src="image-computer.png" alt="computer-image" className="" />
        </div>
        <div className="lower-right">
          <div className="feature-container">
            <div data-aos="fade-down" className="feature">
              <h5>Quick Search</h5>
              <p>
                {' '}
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div data-aos="fade-down" className="feature">
              <h5>iCloud Sync</h5>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div data-aos="fade-down" className="feature">
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


