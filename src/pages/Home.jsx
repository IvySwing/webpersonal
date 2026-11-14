import { useState } from "react";

function Home() {
  const [isRevealed, setIsRevealed] = useState(false)

  

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
            <button className="title-block__invitation" onClick={() => setIsRevealed((prev) => !prev)}>A little curiosity goes a long way</button>
            {isRevealed && <p className="title-block__description">You found me!</p>}
        </div>
      </div>
    </main>
  );
}

export default Home;