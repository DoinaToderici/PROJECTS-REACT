import React from "react";
import "./Card.scss";

const CardEnd = (props) => {
  console.log(props.yourTastes);
  return (
    <div className="info-card col-12 col-lg-8">
      <div>
        <iframe
          src="https://giphy.com/embed/JLFq4Jh5bSJEDHZjSB"
          width="280"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/studiosoriginals-good-job-cheerleader-you-did-it-JLFq4Jh5bSJEDHZjSB"></a>
      </p>
      <h4>
        On peut maintenant te proposer les plats en fonction de tes goûts.
      </h4>
      {props.yourTastes.dietForm ? (
        <p>
          {props.yourTastes.dietForm === "nodiet"
            ? "Vous n'avais pas un style de vie bien definie"
            : `Vous êtes ${props.yourTastes.dietForm}`}
        </p>
      ) : props.yourTastes.foodStyle.length ? (
        <p>{`Vous preferez la cuisine ${props.yourTastes.foodStyle}`}</p>
      ) : props.yourTastes.allergies.length ? (
        <p>{`Vous etes allergique au ${props.yourTastes.allergies}`}</p>
      ) : props.yourTastes.prefs.love ? (
        <p>{`Vous preferez aussi ${props.yourTastes.prefs.love}`}</p>
      ) : props.yourTastes.prefs.hate ? (
        <p>{`Vous detestez ${props.yourTastes.prefs.hate}`}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardEnd;
