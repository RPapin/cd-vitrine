import './footer.scss'

const Footer = () => {
  const imageUrl = window.innerWidth >= 768 ? "./img/funnypony/full_header.png" : "./img/funnypony/full_header_mobile.png";

  return (
    <div className='full-width'>
      <div className='container container-footer'>
        <div className='row'>
          <div className='col-md-8 d-flex align-items-center text-footer'>
            
            © 2022 Chloé Deschamps
          </div>
          <div className='col-md-2 text-footer'>
            <a href='/confidentialite' className='invisible-link'>
            Politique de confidentialité
            </a>
          </div>
          <div className='col-md-2 text-footer'>
            <a href='/mentions-legales' className='invisible-link'>
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

