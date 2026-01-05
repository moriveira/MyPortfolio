import './intro-text.style.css'

export default function IntroText( {children} ) {
  return (
    <div>
      <nav>
        <div className="intro">
          <h1 className="name-text">
            { children }
          </h1>
        </div>
      </nav>
    </div>
  );
}