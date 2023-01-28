function App() {
  
  return (
    <>
      <header>
        <div class="container">
        <img src="logo.svg" alt="Clipboard landing page" />
        </div>
      </header>

      <main>
        <section class="showcase">
          <div class="small-container">
            <div class="para">
              <h2>A history of everything you copy</h2>
              <p>Clipboard allows you to track and organize everything you 
                copy. Instantly access your clipboard on all your devices.</p>
                <div class="download">
                  <a href="" class="download_btn one">Download for iOS</a>
                  <a href="" class="download_btn two">Download for Maac</a>
                </div>
            </div>
          </div>
        </section>

        <section class="keep-track">
            <h3 class="small-container">Keep track of your snippets</h3>
            <p class="small-container">Clipboard instantly stores any item you copy in the cloud, 
              meaning you can access your snippets immediately on all your 
              devices. Our Mac and iOS apps will help you organize everything.</p>
            <div class="lower">
              <div class="lower-left">
                <img src="image-computer.png" alt="computer-image" class="" />
              </div>
              <div class="lower-right">
                <div class="feature-container">
                  <div class="feature">
                    <h5>Quick Search</h5>
                    <p> Easily search your snippets by content, category, web address, application, and more.</p>
                  </div>
                  <div class="feature">
                    <h5>iCloud Sync</h5>
                    <p>Instantly saves and syncs snippets across all your devices.</p>
                  </div>
                  <div class="feature">
                    <h5>Complete History</h5>
                    <p>Retrieve any snippets from the first moment you started using the app.</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section class="accessibility">
          <div class="small-container">
            <h3>Access Clipboard anywhere</h3>
            <p>Whether you’re on the go, or at your computer, you can access all your Clipboard 
              snippets in a few simple clicks.</p>
          </div>
          <img src="image-devices.png" alt="images of different deviecs" />
        </section>

        <section class="tools">
          <h3>Supercharge your workflow</h3>
          <p>We’ve got the tools to boost your productivity.</p>
          <div class="container">
            <div class="tool">
              <img src="icon-blacklist.svg" alt="Blacklist icon" />
              <h5>Create blacklists</h5>
              <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
            </div>
            <div class="tool">
              <img src="icon-text.svg" alt="Text's icon" />
              <h5>Plain text snippets</h5>
              <p>Remove unwanted formatting from copied text for a consistent look.</p>
            </div>
            <div class="tool">
              <img src="icon-preview.svg" alt="preview icon" />
              <h5>Sneak preview</h5>
              <p>Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>
          </div>
        </section>

        <div class="brands">
          <div class="brand">
          <img src="logo-google.png" alt="google-logo" />
          </div>
          <div class="brand">
          <img src="logo-ibm.png" alt="ibm logo" />
          </div>
          <div class="brand">
          <img src="logo-microsoft.png" alt="Microsoft Logo" />
          </div>
          <div class="brand">
          <img src="logo-hp.png" alt="HP Logo" />
          </div>
          <div class="brand">
          <img src="logo-vector-graphics.png" alt="Vector Graphics Logo" />
          </div>
        </div>

        <section class="install">
          <div class="small-container">
            <div class="para">
              <h3>Clipboard for iOS and Mac OS</h3>
              <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
                and you’re ready to start adding to your clipboard.</p>
                <div class="download">
                  <a href="" class="download_btn one">Download for iOS</a>
                  <a href="" class="download_btn two">Download for Maac</a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="container">
          <div class="footer-logo">
            <img src="logo.svg" alt="Logo" />
          </div>
          <div class="footer-menu">
            <div class="f-menu">
              <a href="#">FAQs</a>
              <a href="#">Contact Us</a>
            </div>
            <div class="f-menu">
              <a href="#">Privacy Policy</a>
              <a href="#">Preses Kit</a>
            </div>
            <div class="f-menu">
              <a href="#">Install Kit</a>
            </div>
          </div>
          <div class="social-icons">
            <a href="https://twitter.com/rai_jenis"><img src="icon-twitter.svg" alt="" /></a>
            <a href="https://twitter.com/rai_jenis"><img src="icon-twitter.svg" alt="" /></a>
            <a href="#"><img src="icon-facebook.svg" alt="https://twitter.com/rai_jenis" /></a>
          </div>
        </div>
      </footer>
  </>
  )
}

export default App
