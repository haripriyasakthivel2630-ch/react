import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2025 @Shopping Hub. Thank You.</p>
        </footer>
    );
}
const styles = {
    footer: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#000000ff',
        color: 'white',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        fontFamily: 'Arial, sans-serif',
    },
}; export default Footer;