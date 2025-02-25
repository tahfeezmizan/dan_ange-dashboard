const Loading: React.FC = () => {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.loader}></div>
      </div>
    );
  };
  
  const styles = {
    loaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    loader: {
      border: "4px solid #f3f3f3",
      borderTop: "6px solid #015584",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      animation: "spin 1s linear infinite",
    },
  };
  
  export default Loading;