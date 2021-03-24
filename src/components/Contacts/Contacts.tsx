import React from 'react';
import './Contact.scss'

const Contacts:React.FC = () => {
  return (
    <div className={'contact'}>
      <div className="contact__image">
        <img src="https://avatars.githubusercontent.com/u/60394886?s=460&u=0351face4ac5348d3f5af6dee57c6822b5447380&v=4" alt="contact"/>
      </div>
      <div className="contact__description">
        <div className="contact__description-header">
          <h3>Alexey Horbunov</h3>
          <h6>Frontend developer</h6>
        </div>
        <div className="contact__description-body">
          Hello, I`m Alex, JavaScript(ReactJS) developer. Also can write awesome apps on TypeScript(like this)

          Check my Github account and see more interesting projects :)
        </div>
        <div className="contact__description-buttons">
          <a href={'https://github.com/Algoritm211'} target={'_blank'} rel="noreferrer">
            <button>
              <i className="fab fa-github-square" /> Go to my GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
