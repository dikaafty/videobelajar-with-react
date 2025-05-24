const Container = ({ children, containerClass }) => {
  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}

export default Container;