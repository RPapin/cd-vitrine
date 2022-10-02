import './description.scss'

export const Description = (props) => {
    return (
      <>
      <div className='in-between'></div>
      <div id='description' className='text-center section-full-container'>
        <div className='container frame-container'>
            <div className='row row-principal' id='description-anchor'>
                <div className='col-md-6'>
                    <img src="img/presentation/resized.png" 
                    alt="Chloé Deschamps Presentation" className="img-responsive-perso" id="description-img"/>
                </div>
                <div className='col-md-6 section-text'>
                    <h2 className="wix-title">Qui suis-je ?</h2>
                    <hr></hr>
                    <p id="full-description">
                    Propriétaire de Charlie, jument Welsh de 16 ans et de Fanie, ponette Welsh de 7 ans, 
                    j'ai eu envie de créer du lien avec elles et je me suis donc petit à petit intéressée à leur manière de communiquer. 
                    Passionnée par ces sujets, je me suis formée au métier de comportementaliste équin via la formation Animho et 
                    je vous propose aujourd'hui de vous accompagner dans la compréhension du comportement de votre cheval afin d'améliorer votre relation.
                    <br/>
                    <br/>
                    N'hésitez pas à me faire part de vos problématiques actuelles, je serai ravie de pouvoir vous aider à les résoudre !
                    </p>
                </div>
            </div>
        </div>
      </div>
      </>
    )
  }
  