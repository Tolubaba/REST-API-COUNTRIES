import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Singlecountry = () => {


  const [singlecountry, setsinglecountry] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const { name } = useParams();
  const location = useLocation();
  
  
  const fetchdata = async () => {
    setloading(true);
    try {
      const response = location.state?.country? await fetch(`https://restcountries.com/v2/alpha/${location.state?.country}`): await fetch(`https://restcountries.com/v2/name/${name}?fullText=true`);
      const data = await response.json();
      console.log(data);
      setsinglecountry(data[0]?data:new Array(data));
      setloading(false);
    } catch (error) {
      seterror(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [name]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2> oops! internet connection needed</h2>;
  } else {
    return (
      <section className="singlecountrybodysection">
        <Link to="/">
          <div className="backhome">
            <FaArrowLeft /> Back
          </div>
        </Link>
        <div className="singlecountrybody">
          {singlecountry.map((item, index) => {
            const {
              name,
              flags,
              population,
              region,
              subregion,
              nativeName,
              capital,
              topLevelDomain,
              languages,
              borders,
              currencies,
            } = item;
            return (
              <section className="singlecountrysection" key={index}>
                <div className="divimage">
                  <img src={flags.png} />
                </div>
                <div className="singlecountrydiv">
                  <h2>{name}</h2>
                  <div >
                    <article className="article">
                    <div className="singlecountryfirst">
                      <div className="lists">
                        {" "}
                        <h4>Native Name:</h4> <span>{nativeName} </span>{" "}
                      </div>
                      <div className="lists">
                        {" "}
                        <h4>Poplulation: </h4> <span>{population}</span>{" "}
                      </div>

                      <div className="lists">
                        {" "}
                        <h4>Sub Region:</h4> <span> {subregion}</span>{" "}
                      </div>
                      <div className="lists">
                        {" "}
                        <h4>Capital: </h4> <span> {capital}</span>{" "}
                      </div>
                    </div>

                    <div className="singlecountrysecond">
                      <div className="lists">
                        {" "}
                        <h4> Top Level Domain: </h4>{" "}
                        <span>{topLevelDomain}</span>{" "}
                      </div>
                      <div className="lists">
                        {" "}
                        <h4> Currencies: </h4> <span>{currencies[0].name}</span>{" "}
                      </div>
                      <div className="lists">
                        {" "}
                        <h4>Languages: </h4> <span>{languages[0].name}</span>{" "}
                      </div>

                    </div>
                    </article>

                    <div className="borderslist">
                  <h4> Border Countries:</h4>
                  <span className="list">
                    {borders
                      ? borders.map((item) => {
                          return (
                            <div className="borders">
                              <Link
                                to={`/singlecountry/${item}`}
                                state={{ country: `${item}` }}
                              >
                                {item}
                              </Link>
                            </div>
                          );
                        })
                      : "nil"}{" "}
                  </span>
                </div>
                  </div>
                </div>
                
                
              </section>
            );
          })}
        </div>
      </section>
    );
  }
};

export default Singlecountry;
