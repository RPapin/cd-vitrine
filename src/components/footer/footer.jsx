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
            Politique de confidentialité
          </div>
          <div className='col-md-2 text-footer'>
            Mentions légales
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

