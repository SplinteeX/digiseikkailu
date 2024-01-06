import { useState } from "react";
import "../css/Kassa.css";
import Input from "../elements/input";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { AnimatedSlider } from "../elements/animatedSlider";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCoupon } from "../hooks/useCoupon";

export const Kassa = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [loggingSkipped, setLoggingSkipped] = useState(false);
  /* Login */
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [email, setEmail] = useState("");

  /* Laskutus / create account */
  const [newPassword, setNewPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const cart = useShoppingCart();
  const cartContext = useShoppingCart();
  const shoppingCart = cart.cart;
  const { user, role } = useAuthContext();
  const { login, error } = useLogin();

  //* Coupon:
  const [couponCode, setCoupon] = useState("");
  const { coupon, CouponError } = useCoupon();

  const handleLogin = async () => {
    const loginSuccess = await login(emailLogin, passwordLogin);
    if (loginSuccess) {
      window.location.reload();
      setCurrentSection(2);
      setLoggingSkipped(false);
    }
  };
  const handleCoupon = async () => {
    const couponSuccess = await coupon(couponCode);
    if (localStorage.getItem("coupon") === null && couponSuccess) {
      localStorage.setItem("coupon", couponSuccess.Coupon);
    }
  };

  const handleNext = () => {
    if (currentSection === 1) {
      setLoggingSkipped(true);
    }
    setCurrentSection((prevSection) => prevSection + 1);
  };
  const handlePrevious = () => {
    setCurrentSection((prevSection) => prevSection - 1);
  };
  const totalPrice = () => {
    let sum = 0;
    shoppingCart.forEach((item) => {
      if (item.type === "subscription") {
        sum += parseFloat(item.price) * item.quantity * item.months;
      } else {
        sum += parseFloat(item.price) * item.quantity;
      }
    });
    return sum.toFixed(2);
  };

  if (currentSection === 1 && user != null) {
    setCurrentSection(2);
    setLoggingSkipped(false);
  }

  const images = [
    "/games/apin-maja.webp",
    "/games/Dogen-boxi.webp",
    "/games/Häsän-studio.webp",
    "/games/Kursorin-ullakko.webp",
    "/games/Laaman-aitaus.webp",
    "/games/Miuku-maukun-kirjasto.webp",
    "/games/ohjelmointipolku.png",
    "/games/Siryn-älytalo.webp",
    "/games/Tweetyn-viestiseinä.webp",
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="section">
            <h2>Kirjaudu</h2>
            <p>
              Jos olet tehnyt ostoksia meillä aiemmin, kirjoita tietosi alla
              oleviin kenttiin. Jos olet uusi asiakas, siirry Laskutus ja
              toimitus -osioon.
            </p>
            <div className="Login">
              <Input
                className="Login"
                text="Sähköposti"
                type="email"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
              />
              <Input
                className="Login"
                text="Salasana"
                type="password"
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Kirjaudu</button>
          </div>
        );
      case 2:
        return (
          <div className="section">
            <h2>Laskutus</h2>
            <div className="Names">
              <Input
                text="Etunimi"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                text="Sukunimi"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                text="Yritys"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="Home">
              <p>Katuosoite</p>
              <div className="Inputs">
                <Input
                  placeholder="Kadunnimi ja talonnumero"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
                <Input
                  placeholder={"Huoneisto, yksikkö jne. (Valinnainen)"}
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                />
              </div>
            </div>
            <div className="Delivery">
              <Input
                text="Postinumero"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <Input
                text="Postitoimipaikka"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="Credentials">
              <Input
                text="Puhelinnumero"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Input
                text="Sähköposti"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {loggingSkipped && (
              <div className="Password">
                <Input
                  text="Salasana"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div className="section">
            <h2>Toimitus</h2>
            <h3>Lisätiedot</h3>
            <div className="Additional" style={{ height: "300px" }}>
              <textarea
                placeholder="Lisätietoja tilauksesta"
                rows="5"
                cols="50"
                style={{
                  resize: "none",
                  width: "95%",
                  height: "100%",
                  padding: "2.5%",
                }}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="section">
            <h2>Tilaus</h2>
            {/* <div className="Kuponki">
              <p>Jos sinulla on kuponkikoodi, kirjoita se nyt alle.</p>
              <div className="Lower">
                <Input
                  placeholder="Kuponkikoodi"
                  Input={couponCode}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button onClick={handleCoupon}>Käytä</button>
              </div>
            </div> */}

            <div className="Tilauksesi">
              <h3>Tilauksesi</h3>
              {shoppingCart.map((item) => (
                <div className="Item">
                  {item.type === "subscription" ? (
                    <>
                      {item.title === "Opettaja" && (
                        <>
                          <p>{item.title}</p>
                          <p>{item.price}€</p>
                          <p>
                            x {item.quantity}{" "}
                            {item.quantity > 1 ? "oppilasta" : "oppilas"}
                          </p>
                          <p>
                            x {item.months}{" "}
                            {item.months > 1 ? "kuukautta" : "kuukausi"}
                          </p>
                          <p>({item.price * item.quantity * item.months}€)</p>
                        </>
                      )}
                      {item.title === "Oppilaitos" && (
                        <>
                          <p>{item.title}</p>
                          <p>{item.price}€</p>
                          <p>
                            x {item.quantity}{" "}
                            {item.quantity > 1 ? "oppilasta" : "oppilas"}
                          </p>
                          <p>
                            x {item.months}{" "}
                            {item.months > 1 ? "kuukautta" : "kuukausi"}
                          </p>
                          <p>● {item.teachers} Opettaja</p>
                          <p>({item.price * item.quantity * item.months}€)</p>
                        </>
                      )}
                      {item.title === "Yksityishenkilö" && (
                        <>
                          <p>{item.title}</p>
                          <p>{item.price}€</p>
                          <p>
                            x {item.months}{" "}
                            {item.months > 1 ? "kuukautta" : "kuukausi"}
                          </p>
                          <p>({item.price * item.months}€)</p>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <p>{item.title}</p>
                      <p>{item.price} €</p>
                      <p>x {item.quantity} kpl</p>
                      <p>({item.quantity * item.price}€)</p>
                    </>
                  )}
                </div>
              ))}
              <h3>Summa: {totalPrice()}€</h3>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="section">
            <h2>Maksu</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Kassa">
      <div className="Left-side">
        <AnimatedSlider children={images} />
      </div>
      <div className="Right-side">
        {renderSection()}
        <div className="Buttons">
          <button
            className="Button-1"
            disabled={currentSection === 1}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="Button-2"
            disabled={currentSection === 5}
            onClick={handleNext}
          >
            {currentSection === 1 ? "Ohita kirjautuminen" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};
