import { useEffect } from 'react'
import './navigation.scss'
export const Navigation = (props) => {
  const handleCLick = () => {
    let isExpanded = document.getElementById('bs-example-navbar-collapse-1').getAttribute('aria-expanded')
    if(isExpanded === 'true'){
      document.getElementById('btn-toggle-navbar').click()
    }
  }

  useEffect(() => {
    if(window.innerWidth < 768){
      window.addEventListener('click', handleCLick)
      return () => {
        window.removeEventListener('click', handleCLick)
      }
    }
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="img/logo_dessin.png" alt="Chloé Deschamps Dessin" className="img-responsive" id="logo-dessin"></img>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
   
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto mx-auto">
          <li className="nav-item">
            <a className="nav-link mx-2 active" aria-current="page" href="/#header">Accueil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">Accompagnement</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">Funny-Pony</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">A Propos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
