import React from "react";
const Header = () => {
  return (
    <nav>
        <div style={styles.nav}>
            <img src="my_react_app\public\SRM.png" alt="Logo" />
            <h1> Shopping Hub</h1>
        </div>
    </nav>
    );
};
const styles = {
    nav: {
        display : "flex",
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#15c5faff',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
    },
};
export default Header;