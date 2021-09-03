import './Hero.css';
import Navbar from './Navbar';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-holder'>
        <div className='main-style'>
          <div className='hero-title'>
            <h1>To Dare All Things for a Righteous End.</h1>
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
