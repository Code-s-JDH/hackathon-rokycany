import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { registerUser } from '../services/userApi';
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles/register.css';
import NavBar from '../components/NavBar/NavBar';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const USER_REGEX = /^[a-zA-ZěščřžýáíéúůóňďťľĺäöüßÄÖÜẞ][a-zA-ZěščřžýáíéúůóňďťľĺäöüßÄÖÜẞ0-9\s,'-]*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
const PHONE_REGEX = /^\+?(\d{1,4})?[-. ]?(\d{1,15})$/;
const ADDRESS_REGEX = /^[a-zA-ZěščřžýáíéúůóňďťľĺäöüßÄÖÜẞ][a-zA-ZěščřžýáíéúůóňďťľĺäöüßÄÖÜẞ0-9\s,'-]*$/;
const ZIP_REGEX = /^\d{3}\s?\d{2}$/;

const Register = () => {
  const location = useLocation();
  // const usernameRef = useRef();
  // const errRef = useRef(null);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [username, setUsername] = useState('');
  const [validUsername, setvalidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [street, setStreet] = useState('');
  const [validStreet, setValidStreet] = useState(false);
  const [streetFocus, setStreetFocus] = useState(false);

  const [city, setCity] = useState('');
  const [validCity, setValidCity] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);

  const [zip, setZip] = useState('');
  const [validZip, setValidZip] = useState(false);
  const [zipFocus, setZipFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, [])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);

  useEffect(() => {
    setValidStreet(ADDRESS_REGEX.test(street));
  }, [street]);

  useEffect(() => {
    setValidCity(ADDRESS_REGEX.test(city));
  }, [city]);

  useEffect(() => {
    setValidZip(ZIP_REGEX.test(zip));
  }, [zip]);

  useEffect(() => {
    setvalidUsername(USER_REGEX.test(username));
  }, [username])

  useEffect(() => {
    // Ověření všech inputů a zobrazení chyby, pokud některý není platný
    if (
      !validUsername ||
      !validEmail ||
      !validPwd ||
      !validMatch ||
      !validPhone ||
      !validStreet ||
      !validCity ||
      !validZip
    ) {
      setErrMsg('Některá pole nejsou vyplněna správně.');
    } else {
      setErrMsg('');
    }
  }, [
    validUsername,
    validEmail,
    validPwd,
    validMatch,
    validPhone,
    validStreet,
    validCity,
    validZip,
  ]);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validace všech inputů
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PHONE_REGEX.test(phone);
    const v5 = ADDRESS_REGEX.test(street);
    const v6 = ADDRESS_REGEX.test(city);
    const v7 = ZIP_REGEX.test(zip);

    // Kontrola, zda jsou všechny inputy platné
    if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6 || !v7) {
      setErrMsg("Některá pole nejsou vyplněna správně.");
      return;
    }

    try {
      const userData = {
        username,
        pwd,
        email,
        phone,
        street,
        city,
        zip,
      };

      const response = await registerUser(userData);
      console.log(JSON.stringify(response?.data));

      setSuccess(true);

      // Vynulování stavů a kontrolních inputů
      setUsername('');
      setPwd('');
      setMatchPwd('');
      setEmail('');
      setPhone('');
      setStreet('');
      setCity('');
      setZip('');

    } catch (err) {
      if (!err?.response) {
        setErrMsg('Žádná odezva ze serveru');
      } else if (err.response?.status === 409) {
        setErrMsg('Uživatelské jméno již existuje');
      } else {
        setErrMsg('Registrace selhala');
      }
      // errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <Navigate to="/Login" state={{ from: location }} replace />
      ) : (
        <>
          <header className='headerFull'>
            <div className="redGradientL" id="gradient1"></div>
            <NavBar />
            <section className="register">
              <div>
                <p className="fontHeader2">Registrovat se</p>
                <form onSubmit={handleRegister}>
                  <div>
                    <label htmlFor="email">
                      <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                      <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                      <i className="fa-solid fa-envelope"></i>
                    </label>
                    <input
                      type="text"
                      id="email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="emailnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      placeholder="E-mail"
                    />

                    <label htmlFor="password">
                      <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                      <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                      <i className="fa-solid fa-lock"></i>
                    </label>
                    <input
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      placeholder="Heslo"
                    />

                    <label htmlFor="confirm_pwd">
                      <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                      <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                      <i className="fa-solid fa-lock"></i>
                    </label>
                    <input
                      type="password"
                      id="confirm_pwd"
                      autoComplete="new-password"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      placeholder="Heslo znovu"
                    />

                    <label htmlFor="phone">
                      <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
                      <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? "hide" : "invalid"} />
                      <i className="fa-solid fa-phone"></i>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      autoComplete="off"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      required
                      aria-invalid={validPhone ? "false" : "true"}
                      aria-describedby="phonenote"
                      onFocus={() => setPhoneFocus(true)}
                      onBlur={() => setPhoneFocus(false)}
                      placeholder="Telefon"
                    />

                  </div>

                  <div>
                    <label htmlFor="username">
                      <FontAwesomeIcon icon={faCheck} className={validUsername ? "valid" : "hide"} />
                      <FontAwesomeIcon icon={faTimes} className={validUsername || !username ? "hide" : "invalid"} />
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <input
                      type="text"
                      id="username"
                      // ref={errRef}
                      autoComplete="off"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      required
                      aria-invalid={validUsername ? "false" : "true"}
                      aria-describedby="usernamenote"
                      onFocus={() => setUsernameFocus(true)}
                      onBlur={() => setUsernameFocus(false)}
                      placeholder="Jméno a Příjmení"
                    />

                    <label htmlFor="street">
                      <FontAwesomeIcon icon={faCheck} className={validStreet ? "valid" : "hide"} />
                      <FontAwesomeIcon icon={faTimes} className={validStreet || !street ? "hide" : "invalid"} />
                      <i className="fa-solid fa-home"></i>
                    </label>
                    <input
                      type="text"
                      id="street"
                      autoComplete="off"
                      onChange={(e) => setStreet(e.target.value)}
                      value={street}
                      required
                      aria-invalid={validStreet ? "false" : "true"}
                      aria-describedby="streetnote"
                      onFocus={() => setStreetFocus(true)}
                      onBlur={() => setStreetFocus(false)}
                      placeholder="Ulice"
                    />


                    <label htmlFor="city">
                      <FontAwesomeIcon icon={faCheck} className={validCity ? "valid" : "hide"} />
                      <FontAwesomeIcon icon={faTimes} className={validCity || !city ? "hide" : "invalid"} />
                      <i className="fa-solid fa-city"></i>
                    </label>
                    <input
                      type="text"
                      id="city"
                      autoComplete="off"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      required
                      aria-invalid={validCity ? "false" : "true"}
                      aria-describedby="citynote"
                      onFocus={() => setCityFocus(true)}
                      onBlur={() => setCityFocus(false)}
                      placeholder="Město"
                    />


                    <label htmlFor="zip">
                      <FontAwesomeIcon icon={faCheck} className={validZip ? "valid" : "hide"} />
                      <FontAwesomeIcon icon={faTimes} className={validZip || !zip ? "hide" : "invalid"} />
                      <i className="fa-solid fa-signs-post"></i>
                    </label>
                    <input
                      type="text"
                      id="zip"
                      autoComplete="off"
                      onChange={(e) => setZip(e.target.value)}
                      value={zip}
                      required
                      aria-invalid={validZip ? "false" : "true"}
                      aria-describedby="zipnote"
                      onFocus={() => setZipFocus(true)}
                      onBlur={() => setZipFocus(false)}
                      placeholder="PSČ"
                    />

                  </div>

                  <button
                    disabled={
                      !(
                        validUsername &&
                        validPwd &&
                        validMatch &&
                        validEmail &&
                        validPhone &&
                        validStreet &&
                        validCity &&
                        validZip
                      )
                    }
                  >
                    Sign Up
                  </button>

                </form>

                <p className="fontHeader3">Již máte účet? <Link to="/Login">Přihlásit se</Link></p>
              </div>
            </section>
            <div className="blueGradientR" id="gradient2"></div>
          </header>
        </>
      )}
    </>
  );
}

export default Register;
