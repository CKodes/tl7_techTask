import React from 'react';
import { ImgContentBox } from '../ImgContentBox';
import LinkedInLogo from '../images/linkedinImg.png';
import GithubLogo from '../images/githubImg.png';
import TechEdtLogo from '../images/techedtImg.png';

const linkedIn = {
  img: { LinkedInLogo },
  title: 'LinkedIn',
  website: 'https://www.linkedin.com/in/kimrcasper',
};

const gitHub = {
  img: { GithubLogo },
  title: 'GitHub',
  website: 'https://github.com/CKodes',
};

const techEdt = {
  img: { TechEdtLogo },
  title: 'Tech EDT',
  website: 'https://www.techedt.com/author/kim-casper',
};

function ContactMePage() {
  return (
    <section className='main-style content-holder'>
      <ImgContentBox
        img={LinkedInLogo}
        title={linkedIn.title}
        website={linkedIn.website}
      />
      <ImgContentBox
        img={GithubLogo}
        title={gitHub.title}
        website={gitHub.website}
      />
      <ImgContentBox
        img={TechEdtLogo}
        title={techEdt.title}
        website={techEdt.website}
      />
    </section>
  );
}

export default ContactMePage;
