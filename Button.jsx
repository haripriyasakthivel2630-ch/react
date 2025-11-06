import React from "react";
const Button = () => {
    const click=() => {
        alert("place order");
    }
  return (
    <button style={styles.button} onClick={click}>
      Place Order
    </button>
  );
    

};
const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#7ed210ff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',    
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
  },
}; export default Button;