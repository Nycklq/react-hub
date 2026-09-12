import "./header.css";

function Header() {
  const links = [
    { href: "https://google.com", nome: "Home"},
    { href: "https://youtube.com", nome: "Sobre mim"},
    { href: "https://facebook.com", nome: "Projetos"}
  ]
  return (
    <header className="header">
      <h1>Nycklq</h1>
      <nav>
        <ul className="links">
          {
            links.map(link => {
              return(
                <li><a href={link.href}>{link.nome}</a></li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;