export const TrolliKommentoimassaData = () => {
  const Tekstit = [
    "Tehtävä: Trolli valloittaa keskustelupalstan!",
    "Valeuutisia ja valittavia viestejä kirjoittava trolli on päässyt vauhtiin",
    "Se kirjoittaa nyt perättömiä uutisia ja ikäviä kommentteja keskustelupalstoille.",
  ];
  return (
    <div className="normiTekstit">
      {Tekstit.map((Teksti, index) => (
        <p key={index}>{Teksti}</p>
      ))}
    </div>
  );
};
