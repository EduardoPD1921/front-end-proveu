import React from 'react'

const Footer = props => {
    return (
        <footer className="page-footer teal lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Avaliação técnica</h5>
                <p className="grey-text text-lighten-4">Feito com muito carinho por: Eduardo Gomes Heleno</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Contato</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/EduardoPD1921">Github</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/eduardo-gomes-heleno-a16b4b1aa/">Linkedin</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://twitter.com/duardoheleno">Twitter</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/eduardo_gomes_heleno/">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2021 Copyright Text
            </div>
          </div>
        </footer>
    )
}

export default Footer