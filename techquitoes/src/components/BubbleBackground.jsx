const BubbleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${10 + Math.random() * 40}px`,
            height: `${10 + Math.random() * 40}px`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
