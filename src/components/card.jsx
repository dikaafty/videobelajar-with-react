import cardImgOne from "../assets/images/card-image-one.jpeg";
import cardImgTwo from "../assets/images/card-image-two.jpeg";
import cardImgThree from "../assets/images/card-image-three.jpeg";
import cardImgFour from "../assets/images/card-image-four.jpeg";
import cardImgFive from "../assets/images/card-image-five.jpeg";
import cardImgSix from "../assets/images/card-image-six.jpeg";
import cardImgSeven from "../assets/images/card-image-seven.jpeg";
import cardImgEight from "../assets/images/card-image-eight.jpeg";
import cardImgNine from "../assets/images/card-image-nine.jpeg";
import charOne from "../assets/images/char-one.png";
import charTwo from "../assets/images/char-two.png";
import charThree from "../assets/images/char-three.png";
import charFour from "../assets/images/char-four.png";
import charFive from "../assets/images/char-five.png";
import charSix from "../assets/images/char-six.png";
import charSeven from "../assets/images/char-seven.png";
import charEight from "../assets/images/char-eight.png";

const cardImgMap = {
  1: cardImgOne,
  2: cardImgTwo,
  3: cardImgThree,
  4: cardImgFour,
  5: cardImgFive,
  6: cardImgSix,
  7: cardImgSeven,
  8: cardImgEight,
  9: cardImgNine,
}

const charImgMap = {
  1: charOne,
  2: charTwo,
  3: charThree,
  4: charFour,
  5: charFive,
  6: charSix,
  7: charSeven,
  8: charEight,
  9: charThree,
}

const Card = ({ id }) => {
  return (
    <div className="card">
      <img 
        src={cardImgMap[id]} 
        alt={`Card Image ${id}`}
        className="cardImg" 
      />

      <div className="cardDesc">
        <h6 
          className="cardTitle">
            Big 4 Auditor Financial Analyst
        </h6>

        <p 
          className="cardSubTitle">
            Mulai transformasi dengan instruktur profesional,
            harga yang terjangkau, dan kurikulum terbaik
        </p>
      </div>
    </div>
  );
}