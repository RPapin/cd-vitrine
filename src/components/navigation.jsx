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
              <a href='#header' className='page-scroll'>
                Accueil
              </a>
            </li>
            <li>
              <a href='#all-prestations' className='page-scroll'>
                Prestations
              </a>
            </li>
            <li>
              <a href='#description' className='page-scroll'>
                Qui suis-je
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
