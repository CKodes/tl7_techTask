import React from 'react';
import TextContentBox from '../TextContentBox';

const people = {
  title: 'People',
  para: 'Yeah, but your scientists were so preoccupied with whether or not they could, they did not stop to think if they should.',
};

const design = {
  title: 'Design',
  para: 'You are a very talented young man, with your own clever thoughts and ideas.',
};

const technology = {
  title: 'Technology',
  para: 'Life finds a way. Must go faster... go, go, go, go, go! I was part of something special.',
};

function AboutMePage() {
  return (
    <section className='main-style'>
      <TextContentBox title={people.title} para={people.para} />
      <TextContentBox title={design.title} para={design.para} />
      <TextContentBox title={technology.title} para={technology.para} />
    </section>
  );
}

export default AboutMePage;
