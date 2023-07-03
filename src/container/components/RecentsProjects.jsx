import { useRef } from 'react';
import { Card } from './Card';
import { Footer } from './Footer';
import './Card.css';

export const RecentsProjects = () => {
  const recentProjectsRef = useRef(null);

  return (
    <>
      <div id="recentprojects" ref={recentProjectsRef} className="custom-background">
        <div className="mb-2 px-3 media-font-title-1">Recents projects</div>
        <Card
          title="EvoPlus"
          desc="An Ecommerce website built with React.js, offering a seamless shopping experience."
          url="https://649f7dd213d46c5fe95484f4--starlit-sable-7acd1c.netlify.app/"
          image="assets/EvoPLus.PNG"
        />
        <Card
          title="Tindog"
          desc="A fun and interactive webpage dedicated to dogs, showcasing various breeds and providing information for dog lovers."
          url="https://josemek098dev.github.io/103-BOO/"
          image="assets/tindog.JPG"
        />
        <Card
          title="TodoList"
          desc="A feature-rich Todo list application powered by MongoDB and EJS, making it easy to organize and manage your tasks."
          url="https://clean-kimono-hen.cyclic.app/"
          image="assets/todo.JPG"
        />

        <Card title="Designing Dashboards" />

        <div className="mb-2 mx-2 text-end media-font-title-2">Ver más &#xBB; </div>
      </div>
      <Footer />
    </>
  );
};
