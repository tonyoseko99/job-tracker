function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center">
            <p>&copy; {currentYear} Tonny. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
