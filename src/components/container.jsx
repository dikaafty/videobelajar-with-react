const Action = ({ children, actionType = "action" }) => {
  return (
    <div className={actionType}>
      {children}
    </div>
  );
}

export default Action;