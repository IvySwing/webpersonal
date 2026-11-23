import { useState } from "react";

function Home() {
  const [isRevealed, setIsRevealed] = useState(false)
  const [animated, setAnimated] = useState(false)

  return (
    <main className="content">
      <div className="title-block">
        <div className="title-block__content">
          <p className="title-block__title-primary">Kori B. Riddick</p>
          <p className="title-block__title-secondary">Software Engineer . Creative Technologist</p>
          <h1 className="title-block__title-tertiary">Technology is a medium. <span>People are the inspiration.</span></h1>
          <p className="title-block__description">
            I build thoughtful digital experiences where technology, creativity and human connection meet.
          </p>
            <button className="title-block__invitation"
            onClick={
              () => {
                setIsRevealed((prev) => !prev)
                setAnimated(false)
            }}
            >
              A little curiosity goes a long way <span className="arrow"aria-hidden="true">↗</span>
            </button>
            {animated && <p className="title-block__description">You found me!</p>}
            {isRevealed &&
              <div className="surprise__object"
              onAnimationEnd={() => setAnimated(true)}
              aria-hidden='true'>
              </div>}
        </div>
      </div>
    </main>
  );
}

export default Home;