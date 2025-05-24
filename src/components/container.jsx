const Container = ({ children, actionType = "action" }) => {
  return (
    <div className={actionType}>
      {children}
    </div>
  );
}

export default Container;