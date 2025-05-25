const CardSectionTabs = () => {
  return (
    <div 
      className="cardSectionTabs" 
      role="tablist">
        <button 
          role="tab" 
          aria-selected="true" 
          className="tab active">
            Semua Kelas
        </button>

        <button 
          role="tab" 
          aria-selected="false" 
          className="tab">
            Pemasaran
        </button>

        <button 
          role="tab" 
          aria-selected="false" 
          className="tab">
            Desain
        </button>

        <button 
          role="tab" 
          aria-selected="false" 
          className="tab">
            Pengembangan Diri
        </button>

        <button 
          role="tab" 
          aria-selected="false" 
          className="tab">
            Bisnis
        </button>
    </div>
  );
}

export default CardSectionTabs;