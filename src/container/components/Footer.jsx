import "./Footer.css";
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';


// Importa los iconos de marcas que desees utilizar en tu footer


export const Footer = () => {
    return (
        <div className="footer-container">

            <ul className="social-icons mx-auto text-center mt-5 ">
                <li><a className="facebook" href="#"><Facebook /></a></li>
                <li><a className="twitter" href="#"><Twitter /></a></li>
                <li><a className="dribbble" href="#"><Instagram /></a></li>
                <li><a className="linkedin" href="#"><LinkedIn /></a></li>
            </ul>

        </div>

    );
};
