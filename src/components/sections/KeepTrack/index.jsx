import './keep-track.css'

export function KeepTrack() {
  return (
    <section className="keep-track">
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
            <div className="feature">
              <h4>Quick Search</h4>
              <p>
                {' '}
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="feature">
              <h4>iCloud Sync</h4>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div className="feature">
              <h4>Complete History</h4>
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
