import { useRef } from 'react';
import { Card } from './Card';
import { Footer } from './Footer';
import './Card.css';

export const RecentsProjects = () => {
  const recentProjectsRef = useRef(null);

  return (
    <>
      <div id="recentprojects" ref={recentProjectsRef} className="custom-background">
        <div className="mb-2 px-3 media-font-title-1">Últimos proyectos</div>

        <Card title="Tindog" desc="simple page about dogs" url="https://josemek098dev.github.io/103-BOO/" image="assets/tindog.JPG"/>
        <Card title="Designing Dashboards" />
        <Card title="Designing Dashboards" />

        <div className="mb-2 mx-2 text-end media-font-title-2">Ver más &#xBB; </div>
      </div>
      <Footer />
    </>
  );
};
