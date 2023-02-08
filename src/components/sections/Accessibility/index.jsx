import './accessibility.css'

export function Accessibility() {
  return (
    <section className="accessibility">
      <div className="small-container">
        <h3 data-aos="fade-down">Access Clipboard anywhere</h3>
        <p data-aos="fade-down">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>
      <div data-aos="fade-down">
        <img src="image-devices.png" alt="images of different deviecs" />
      </div>
    </section>
  )
}
