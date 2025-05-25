const Nav = ({ navText, navList = [] }) => {
  return (
    <div className="nav">
      <p 
        className="navText">
          {navText}
      </p>

      <div className="navLists">
        {
          navList.length !== 0 && navList.map((nav) => (
            <p>{nav}</p>
          ))
        }
      </div>
    </div>
  );
}

export default Nav;