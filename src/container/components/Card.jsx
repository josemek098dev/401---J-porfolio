import './Card.css'
import { Link } from 'react-router-dom';

export const Card = ({ title, desc, url, image }) => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify">
          <div className="col-lg-4 col-sm-5 media-card md:mx-auto">
            <Link to={url}>
              <div className="custom-rectangle-projects" style={{ backgroundImage: `url(${image})` }}></div>
            </Link>
          </div>
          <div className="col-lg-7 col-sm-5 media-font mt-2 px-4">
            <div className="weigth-700 fs-30 media-font-title">{title}</div>
            <div className="media-font-desc">{desc}</div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
