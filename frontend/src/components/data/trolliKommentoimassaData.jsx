export const TrolliKommentoimassaData = () => {
  const Tekstit = [
    "Tehtävä: Trolli valloittaa keskustelupalstan!",
    "Valeuutisia ja valittavia viestejä kirjoittava trolli on päässyt vauhtiin",
    "Se kirjoittaa nyt perättömiä uutisia ja ikäviä kommentteja keskustelupalstoille.",
    "Minkälaisen valeuutisen tai kommenttisarjan hän olisi voinut keksiä esim. kaupungistasi?",
  ];
  return (
    <div className="normiTekstit">
      {Tekstit.map((Teksti, index) => (
        <p key={index}>{Teksti}</p>
      ))}
    </div>
  );
};
