import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; {new Date().getFullYear()} react-quotes-maker</p>
        </footer>
    )
}
export default Footer;