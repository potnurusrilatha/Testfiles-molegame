import { FooterProps } from "@/utils/types";

const Footer = ({developer = "Srilatha", version = "1.0.0"}:FooterProps) => {
    return (
        <footer data-testid="footer" className="text-center">
            <p>Developed by {developer}</p>
            <p>Version: {version}</p>
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    )
}
export default Footer;