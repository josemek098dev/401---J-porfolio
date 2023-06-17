import './Home.css'

export const Home = () => {
    return (
        <div className="d-flex margin-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 order-lg-last text-center mx-auto ">
                        <img id='profile' src="/assets/yo.png" alt="as"  />
                    </div>
                    <div className="custom-container col-lg-7  order-lg-first">
                        <div className="">Hola, soy <span style={{color:'#FF6464'}}>J</span>osé Córdoba,</div>
                        <div ><span style={{color:'#FF6464'}}>Frontend</span> developer.</div>
                        <div className="custom-container-description">Me gusta diseñar y construir interfaces de usuario con código limpio y eficiente. Estoy constantemente aprendiendo, me considero autodidacta y me gusta ver a los proyectos hacerse realidad</div>
                        <div className="d-flex ico-container">
                            <img src="/assets/img2.png" alt="a" className='img-ico' />
                            <img src="/assets/img3.png" alt="a" className='img-ico' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
