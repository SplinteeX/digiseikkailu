import "../css/aboutUs.css";

export const AboutUs = () => {
  const infoTexts = [
    {
      strong: "Digiseikkailu Oy:n oppimateriaalit ovat syntyneet tarpeesta ja ilosta tuottaa ajankohtaista opetusmateriaalia tvt-taitojen ja mediataitojen pedagogiikkaan. Nyt koko tuoteperhe on saatavilla kotiin ja kouluun.",
    },
    {
      text: "oppimateriaaliemme arvoja",
    },
  ];
  const Yhteystiedot = [
    {
      text: "info@digiseikkailu.com(tulee olemaan linkki)",
    },
    {
      text: "Digiseikkailu – Digiadventurers.com – on tvt- ja medialukutaito-oppimateriaali esi- ja alakouluun. Opettajien kehittämä tarinallinen Digiseikkailu on pelillinen oppimisympäristö, joka helpottaa tvt:n perustaitojen oppimista ja opettamista.",
    },
    {
      text: "Digiseikkailun Empatiapolku on osa koko Suomen laajuista Empatiapakkausta, joka tuo työvälineitä perheille ja opettajille empaattisempaan viestimiseen netissä.",
    },
    {
      text: [ <p>Digiseikkailu on suunniteltu tukemaan lapsen kasvua kohti <strong>tiedostavaa mediankäyttöä.</strong> Sen tehtävätyypit kannustavat lasta pohtimaan <strong>empatiaa,</strong> viestittelytaitoja ja <strong>yhteisöllisyyden merkitystä</strong> mediankäytössään.</p>,]
    },
    {
      text: [ <p>Digiseikkailu tukee tehtävillään <strong>teknologiataitojen käsitteiden ja menetelmien hallinnassa,</strong> kuten <strong>tekstinkäsittely-, näppäin- ja hiiritaitojen</strong> oppimisessa, sekä auttaa opettajaa rajaamaan ja <strong>arvioimaan</strong> media- ja teknologiakasvatuksen projekteja.</p>,]
    },
    {
      text: [ <p>Digiseikkailun avulla on hauskaa opettaa media- ja monilukutaitoa sekä teknologiataitoja <strong>laadukkaasti,</strong> opettajan kokemuksesta riippumatta.</p>,]
    },
  ];
  return (
  <div className="Kokonaisuus">
    <div className="Tieto-teksti">
      <p>{infoTexts[0].strong}</p>
    </div>

    <div className="Tietoteksti">
      <p>{infoTexts[1].text}</p>
    </div>

    <div className="Yhteystiedot-otsikko">
      <h>Yhteystiedot</h>
    </div>

    <div className="Yhteystiedot-teksti1">
    <a href="mailto:info@digiseikkailu.com">info@digiseikkailu.com</a>
    </div>

    <div className="Yhteystiedot-teksti2">
      <strong>{Yhteystiedot[1].text}</strong>
    </div>

    <div className="Digi-linkki">
      <a href={'Digiadventures.com'}>Digiadventures.com</a>
    </div>

    <div className="Yhteystiedot-teksti3">
      <strong>{Yhteystiedot[2].text}</strong>

      <p>{Yhteystiedot[3].text}</p>
    
      <p>{Yhteystiedot[4].text}</p>

      <p>{Yhteystiedot[5].text}</p>

    </div>

    <div className="Uutiset-nappi">
      <button variant="contained" href="https://digiadventurers.com/fi/uutiset/">Uutiset</button>
    </div>

    <div className="Blogi-nappi">
      <button variant="contained" href="https://digiadventurers.com/fi/blogi/">Blogi</button>
    </div>

  </div>
  );
};
