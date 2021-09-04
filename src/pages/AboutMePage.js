import React from 'react';
import TextContentBox from '../components/TextContentBox';

const people = {
  title: 'People',
  para: 'The most poignant lesson that the pandemic has taught me is the affirmation that strong relationships lies at the core of success. One of the greatest privilege in my professional life is having had the opportunity to work with, and learn from inspiring individuals. It has moulded me into a person who values relationships, and has made nurturing strong connections with people a lifelong endeavour of mine.',
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
    <section className='main-style content-holder'>
      <TextContentBox title={people.title} para={people.para} />
      <TextContentBox title={design.title} para={design.para} />
      <TextContentBox title={technology.title} para={technology.para} />
    </section>
  );
}

export default AboutMePage;
