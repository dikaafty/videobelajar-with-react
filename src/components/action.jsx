const Action = ({ children }) => {
  return (
    <div className="action">
      <form action="" method="post">
        {children}
      </form>
    </div>
  );
}