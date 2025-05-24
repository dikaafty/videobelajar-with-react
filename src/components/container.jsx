const Container = ({ children, containerClass = "action" }) => {
  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}

export default Container;