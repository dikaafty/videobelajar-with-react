const Action = ({ children, actionType = "action" }) => {
  return (
    <div className="action">
      {children}
    </div>
  );
}

export default Action;