const Divider = ({ className, dividerText = "" }) => {
  return (
    <div 
      className={className}>
        {dividerText}
    </div>
  );
}

export default Divider;