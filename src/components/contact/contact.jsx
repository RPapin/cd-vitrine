import { useState } from 'react'
import emailjs from 'emailjs-com'
import './contact.scss'
import { Snackbar } from '../snackbar'

const initialState = {
  from_name: '',
  reply_to: '',
  message: '',
  message_obj: '',
}
export const Contact = (props) => {
  const [{ from_name, reply_to, message, message_obj}, setState] = useState(initialState)
  const [showToast, setShowToast] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setShowToast(false)
    setState((prevState) => ({ ...prevState, [name]: value }))

  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
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
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Me contacter</h2>
                <p>
                  Si vous souhaitez prendre un rendez-vous, échanger avec moi sur votre problématique ou pour toute autre question, 
                  contactez-moi via ce formulaire ou par mail à : <br/>
                  <span className='sp-email'>contact@chloe-deschamps.com</span> et je vous répondrai au plus vite !
                </p>
              </div>
              <form name='sentMessage' validate="true" onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='from_name'
                        name='from_name'
                        className='form-control'
                        placeholder='Nom / Prénom'
                        value={from_name}
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='reply_to'
                        name='reply_to'
                        className='form-control'
                        placeholder='Email'
                        required
                        value={reply_to}
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='message_obj'
                        name='message_obj'
                        className='form-control'
                        placeholder='Objet de votre message'
                        required
                        value={message_obj}
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Votre message'
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Informations complémentaires</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Adresse
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            {/* <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div> */}
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            <div className='contact-item social-item'>
              
              <a href={props.data ? props.data.instagram : '/'} className='social'>
                <i className='fa fa-instagram'></i>
              </a>
            </div>
          </div>
          <div className='col-md-12'>
            {/* <div className='row'> */}
              {/* <div className='social'>
                <ul>
                  {/* <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li> 
                   <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>  
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li> *
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022, Design by Rémi Papin. 
          </p>
        </div>
      </div>
    </div>
  )
}
