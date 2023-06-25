/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Home.css';
import lexar from '../Home/assets/lexar-jews.gif'
import lexar2 from '../Home/assets/lexar-jews2.gif'
import lexar3 from '../Home/assets/lexar-jews3.gif'

const Home = () => {
  return (
    <div>
      <div className="title-container">
        <h1>Babylon Library Project</h1>
        <div>
          <h3>
            <p>
              <em>Napisał to "człowiek który pokazał mi że matma jest przyjemna" ~ Kamil ślimak</em>
            </p>
          </h3>
          <h3>
            <p>
              <em>"Szybko, tanio, jak należy"</em>
            </p>
          </h3>
        </div>
      </div>
      <div className="content">
        <p>
          Projekt <em>"Babylon Library"</em> jest projektem typu open source stworzonym w ramach projektu społecznego oraz rozbudowy portfolia
        </p>
        <img src={lexar} alt="image" />

        <p>Zasadniczym pomysłem wiodącym projektu jest to by zapewnić w przystępnej formie naukę przedmiotów ścisłych i jej popularyzację wśród uczniów szkoł średnich i wyższych. Zapewne ktoś może napisać że Matemaks już to zrobił. Nas natomiast od Matemaksa różni fundamentalna różnica - jesteśmy bogatsi o onwe technologie. Projekt w fazie 2.0v zyska i odda do użytkownika aktualnie bardzo pożyteczne oraz potężne narzędzie jakim jest <strong>SZTUCZNA INTELIGENCJA</strong>.</p>
        <img src={lexar2} alt='image' />
        <p>Jednakże pomimo faktu jej używania nie dajemy narzędzia do rozwiązywania zadań domowych lecz platformę do nauki zarówno przedmiotów ścisłych jak i nauki relatywnie nowych technologi. Naszym zadaniem jest nauka korzystania z potężnego narzędzia jakim jest AI w celu stymulowania procesu nauki trudnych rzeczy. Zamiast więc czytać nową definicję zapisaną językiem rodem z doktoranckich prac - AI pozwoli ci to samo zrozumieć i wytlumaczy ci to. Nawet jako pirat lub gangster <strong>bo czemu nie?</strong></p>
        <img src={lexar3} alt='image' />
        <p>Liczymy że nasz projekt przyjmie sie z ciepłym przyjęciem wśród grupy docelowej.</p>
      
      </div>
    </div>
  );
};

export default Home;
