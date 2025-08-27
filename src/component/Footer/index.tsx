import { FooterProps } from "@/utils/types";

const Footer = ({developer = "Srilatha", version = "1.0.0" }:FooterProps) => {
    return (
        <footer className="w-full py-6 mt-auto text-center bg-red-400 text-stone-200" data-testid="footer"  role="contentinfo">
             <p>&copy; {new Date().getFullYear()} {developer} | Version {version}</p>
        </footer>
    )
}
export default Footer;