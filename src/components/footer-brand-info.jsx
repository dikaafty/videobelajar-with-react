import videobelajarLogo from "../assets/images/videobelajar-logo.png";

const FooterBrandInfo = () => {
  return (
    <div className="footerBrandInfo">
      <img 
        src={videobelajarLogo} 
        alt="videobelajar logo" 
      />

      <div className="brandInfo">
        <p 
          className="textInfo">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
        </p>

        <p 
          className="brandAddress">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
        </p>

        <p 
          className="brandPhoneNumber">
            +62-877-7123-1234
        </p>
      </div>
    </div>
  );
}