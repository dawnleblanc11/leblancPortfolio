// wrapper component that houses all other components
import React, { useState } from 'react';
import Header from './components/Header'
import Nav from './components/Nav';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';
import Page from './components/Page';
import Footer from './components/Footer'

function App() {
  const [categories] = useState([
    {
      name: 'about', description: 'none',},
    {
      name: 'frontend', description: 'projects using HTML, CSS, Bootstrap',},
    { name: 'backend', description: 'projects using mysql, mongoDB' },
    { name: 'fullstack', description: 'MERN projects' },
    {
      name: 'contact', description: 'none',},
      {name: 'resume', description: 'none',},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header />
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <Page currentCategory={currentCategory}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;