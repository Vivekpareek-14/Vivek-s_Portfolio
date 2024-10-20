import React, { useState } from 'react';
import Close from '../assets/close.svg';

const ProjectsItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="projects__item">
      <img src={img} alt="" className="projects__img" />

      {/* Fix onClick */}
      <div className="projects__hover" onClick={toggleModal}>
        <h3 className="projects__title">{title}</h3>
      </div>

      {modal && (
        <div className="projects__modal">
          <div className="projects__modal-content">
            {/* Add onClick to close the modal */}
            <img src={Close} alt="close modal" className="modal__close" onClick={toggleModal} />

            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li key={index} className="modal__item">
                    <span className="item__icon">{icon}</span>

                    <div>
                      <span className="item__title">{title}</span>
                      <span className="item__details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsItem;
