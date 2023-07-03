import './Home.css'

export const Home = () => {
    return (
        <div className="d-flex margin-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 order-lg-last text-center mx-auto ">
                        <img id='profile' src="/assets/yo.png" alt="as" />
                    </div>
                    <div className="custom-container col-lg-7  order-lg-first">
                        <div className="">Hello, I'm <span style={{ color: '#FF6464' }}>Jose Cordoba,</span></div>
                        <div ><span style={{ color: '#FF6464' }}>Frontend</span> developer.</div>
                        <div className="custom-container-description">I enjoy designing and building user interfaces with clean and efficient code. I'm constantly learning, consider myself a self-learner, and enjoy seeing projects come to life.</div>
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