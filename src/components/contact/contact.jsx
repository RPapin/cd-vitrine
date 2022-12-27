import { useState } from 'react'
import emailjs from 'emailjs-com'
import './contact.scss'
import { Snackbar } from '../snackbar/snackbar'

const initialState = {
  from_name: '',
  name: '',
  first_name: '',
  reply_to: '',
  message: '',
  message_obj: '',
}
export const Contact = (props) => {
  const [{ from_name, name, first_name, reply_to, message, message_obj}, setState] = useState(initialState)
  const [showToast, setShowToast] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setShowToast(false)
    setState((prevState) => ({ ...prevState, [name]: value }))

  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          clearState()
          setShowToast(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      {showToast && 
        <Snackbar showToast={showToast}/>
      }
      <div className="row g-0 accompagnement-header">
        <div className="col-xl-6 offset-xl-0 col-lg-8 offset-lg-2 col-md-12 col-sm-12 right-panel">
          <img src=".\img\contact\contact-chloe-dechamps-kasmine.jpg" alt="Chloé caresse Orphée" className="img-fluid"></img>
        </div>
        <div id="contact-left-panel" className="col-xl-6 offset-xl-0 col-lg-8 offset-lg-2 col-md-12 col-sm-12 left-panel ">
          {/*  */}
          <h1>Contact</h1>
          <p>
            N'hésitez pas à me contacter pour plus d'informations. Je vous répondrai avec plaisir sous 24h !<br/><br/>
          <b>À bientôt !</b>
          </p>
        </div>
      </div>
      <div className='container container-form'>
        <div className='row'>
          <div className='col-md-4 left-side'>
            <h2>Coordonnées</h2>
            <p>
              Chloé Deschamps<br/>
              La Tour de Salvagny (69)<br/>
              contact@chloe-deschamps.com<br/>

            </p>
            <div className='social-block'>
              <a href='https://www.instagram.com/chloedeschamps_/' className='social'><img className='social-media' src='.\img\social-media\instagram.png' alt='instagram'/></a>
              <a href='https://www.tiktok.com/@chloedeschamps_' className='social'><img className='social-media' src='.\img\social-media\tiktok.png' alt='tiktok'/></a>
            </div>
          </div>
          <div className='col-md-8'>
          <form name='sentMessage' validate="true" onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label for="name">Nom *</label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        value={name}
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label for="first_name">Prénom *</label>
                      <input
                        type='text'
                        id='first_name'
                        name='first_name'
                        className='form-control'
                        value={first_name}
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label for="reply_to">Email *</label>
                      <input
                        type='email'
                        id='reply_to'
                        name='reply_to'
                        className='form-control'
                        required
                        value={reply_to}
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                <label for="message">Message *</label>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                <div id='success'></div>
                <div className='form-group'></div>
                <button type='submit' className='btn btn-contact btn-full-width'>
                  Envoyer
                </button>
                <span className='small-text'>Merci pour votre envoi</span>
                </div>
              </form>
          </div>
        </div>

      </div>
      </div>





              
  )
}
