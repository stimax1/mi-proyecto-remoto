import foto from "../assets/foto.jpg"; // Importación correcta
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="photo-container">
        <img src={foto} alt="Foto" />
      </div>

      <h1 className="name">Stiven Macea Montes</h1>
      <p className="profession">Desarrollador Web | React | JavaScript</p>

      <div className="personal-info">
        <p>📧 macea351@gmail.com</p>
        <p>📱 +57 322 370 4761</p>
        <p>📍 Medellin, Antioquia</p>
      </div>

    </header>
  );
}

export default Header;
