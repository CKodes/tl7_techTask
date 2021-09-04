import React from 'react';
import TextContentBox from '../components/TextContentBox';

const people = {
  title: 'People',
  para: 'Of all the lessons that the pandemic has taught me, the most poignant one has been the affirmation that strong relationships lies at the core of success. The greatest privilege in my professional life is having had the opportunity to work with, and learn from inspiring individuals.',
  paraTwo:
    'Travelling with differently-abled athletes, working together with caregivers and nurses, gave me a treasured perspective and appreciation of life and our social interdependencies. These experiences has moulded me into a person who values relationships, and makes nurturing strong connections with people a lifelong endeavour.',
  paraThree:
    'These challenging times have re-affirm my beliefs in the importance of building relationships, and I am looking forward to learn, connect as well as forge new friendships with peers in the bootcamp.',
};

const design = {
  title: 'Design',
  para: 'My journey into the tech field started off with picking up a basic UI/UX course in 2019. This led to opportunities for me to share my knowledge in creating low-fidelity wireframes with the digitalisation task-force in my company back then.',
  paraTwo:
    'When COVID19 struck, I once again used my UI/UX knowledge to iteratively come up with processess that prioritizes user experience to ensure the sharp pivot to online learning was as smooth as possible.',
  paraThree:
    'During my Mixed Reality immersive last year, I assumed the UI/UX role in my team to conduct usability testing for our VR project with first-time Oculus users to improve our onboarding interface. I am hoping that these experiences would help in having the UI/UX perspective during the bootcamp too.',
};

const technology = {
  title: 'Technology',
  para: 'As a growth-driven individual, I am attracted to the tech industry because it provides the platform for me to learn something new. To me, a fulfilling career is when I am able to apply what I have learnt, to not only solve problems but also connect with people.',
  paraTwo:
    'The trajectory that I see myself in for the next 5 years is to do a deep-dive in the technical aspects of front-end and interaction development. Armed with the technical expertise, I am hoping it would lead to a succesful progression to a more people-oriented role (eg technical consultant / project manager).',
  paraThree:
    'I am fortunate to have a network of peers, mentors, and organizations like The Codette Project to support me as I pursue this endeavour, and I look forward to moving closer to my goals with Techladies.',
};

function AboutMePage() {
  return (
    <section className='main-style content-holder'>
      <TextContentBox
        title={people.title}
        para={people.para}
        paraTwo={people.paraTwo}
        paraThree={people.paraThree}
      />
      <TextContentBox
        title={design.title}
        para={design.para}
        paraTwo={design.paraTwo}
        paraThree={design.paraThree}
      />
      <TextContentBox
        title={technology.title}
        para={technology.para}
        paraTwo={technology.paraTwo}
        paraThree={technology.paraThree}
      />
    </section>
  );
}

export default AboutMePage;
