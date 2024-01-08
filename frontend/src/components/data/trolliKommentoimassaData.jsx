import "../css/trolliKommentoimassa.css";
export const TrolliKommentoimassaData = () => {
  const Tekstit = [
    "Tehtävä: Trolli valloittaa keskustelupalstan!",
    "Valeuutisia ja valittavia viestejä kirjoittava trolli on päässyt vauhtiin",
    "Se kirjoittaa nyt perättömiä uutisia ja ikäviä kommentteja keskustelupalstoille.",
    "Minkälaisen valeuutisen tai kommenttisarjan hän olisi voinut keksiä esim. kaupungistasi?",
    "Muistatko vielä, mitkä piirteet ovat tyypillisiä trollaajalle ja valeuutiselle?",
    "Nyt kirjoitetaan trollin juttu",
  ];
  const Tuntomerkit1 = [
    "uutinen ei pidä paikkaansa",
    "uutiselle ei löydy lähteitä mistä tieto on hankittu sekä",
    "sen on kirjoittanut joku muu kuin oikea toimittaja",
  ];
  const Tuntomerkit2 = [
    "yrittää ärsyttää ja saada pahan mielen",
    "ei perustele asiallisesti mielipidettään",
    "levittää huonoa yhteishenkeä netissä",
  ];
  return (
    <div className="trollkomm">
      <div className="normiTekstit">
        {Tekstit.map((Teksti, index) => (
          <p key={index}>{Teksti}</p>
        ))}
      </div>

      <div className="tuntomerkit">
        <p className="Otsikko">Valeuutisen tuntomerkit ovat se, että</p>
        <div className="merkit">
          {Tuntomerkit1.map((Teksti, index) => (
            <p key={index}>• {Teksti}</p>
          ))}
        </div>
        <p className="Otsikko">Trollauksen tuntomerkit:</p>
        <div className="merkit">
          {Tuntomerkit2.map((Teksti, index) => (
            <p key={index}>• {Teksti}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
