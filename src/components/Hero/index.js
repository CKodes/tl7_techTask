import Navbar from '../Navbar/index';
import Weather from '../Weather';
import './index.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-holder'>
        <div className='main-style'>
          <div className='hero-title'>
            <h1>TechLadies Bootcamp #7 Technical Task</h1>
            <div className='weather-box'>
              <Weather />
            </div>
            <h2 className='scrolldown'>Scrolldown</h2>
          </div>
        </div>
      </div>

      <div className='main-style avatar-content'>
        <img src='./avatar.png' alt='avatar' />

        <div>
          <h4>👋🏽 Hello! My name is Kim.</h4>
          <p className='para-lg'>
            I am endlessly curious about everything that intersects between{' '}
            <strong>people</strong>, <strong>design</strong>, and{' '}
            <strong>technology</strong>
          </p>
          <div className='navbar-lg'>
            <Navbar />
          </div>
        </div>
      </div>

      <div className='main-style navbar-sml'>
        <Navbar />
      </div>
    </div>
  );
}

export default Hero;
