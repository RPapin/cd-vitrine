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
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
            id='btn-toggle-navbar'
          >
            {' '}
            <span className='sr-only'>Déplier</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'> 
            <img src="img/logo_dessin.png" alt="Chloé Deschamps Dessin" className="img-responsive" id="logo-dessin"></img>
            <img src="img/logo_ecrit.png" alt="Chloé Deschamps" className="img-responsive" id="logo-ecrit"></img>
          </a>
        </div>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/#header' className='page-scroll'>
                Accueil
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a href='#' className='page-scroll nav-link dropdown-toggle' role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="navbarDropdown">
                Prestations
              </a>
              <ul className="dropdown-menu nav navbar-nav navbar-right" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/funnypony">Funny Pony</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/accompagnement">Séance d'accompagnement</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='/presentation' className='page-scroll'>
                Qui suis-je
              </a>
            </li>
            <li>
              <a href='/#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
