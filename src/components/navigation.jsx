import './navigation.scss'
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
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
              <a href='#features' className='page-scroll'>
                Qui suis-je
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Prestations
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Reservation
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Retours d'experiences
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team partenaires
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
