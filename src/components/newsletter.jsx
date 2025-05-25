const Newsletter = () => {
  return (
    <div className="newsletterContent">
      <div className="newsletter">
        <p 
          className="newsletterText">
            NEWSLETTER
        </p>

        <div className="newsletterDesc">
          <h3 
            className="newsletterTitle">
              Mau Belajar Lebih Banyak?
          </h3>

          <p 
            className="newsletterSubTitle">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
          </p>
        </div>
      </div>

      <div className="newsletterInputContainer">
        <input 
          type="email" 
          name="userEmail" 
          id="userEmail" 
          placeholder="Masukkan Emailmu" 
        />

        <button 
          className="subscribeBtn">
            Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;