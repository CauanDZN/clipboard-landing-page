import './tools.css'

export function Tools() {
  return (
    <section className="tools">
      <h3 data-aos="fade-down">Supercharge your workflow</h3>
      <p data-aos="fade-down">We’ve got the tools to boost your productivity.</p>
      <div  className="container">
        <div data-aos="fade-down" className="tool">
          <img src="icon-blacklist.svg" alt="Blacklist icon" />
          <h5>Create blacklists</h5>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div data-aos="fade-down" className="tool">
          <img src="icon-text.svg" alt="Text's icon" />
          <h5>Plain text snippets</h5>
          <p>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div data-aos="fade-down" className="tool">
          <img src="icon-preview.svg" alt="preview icon" />
          <h5>Sneak preview</h5>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
    </section>
  )
}
