import './Card.css'

export const Card = ({ title }) => {
    return (
        <>
            <div className="container ">

                <div className="row d-flex justify">

                    <div className="col-lg-4 media-card md:mx-auto  ">
                        <div className="custom-rectangle-projects"> </div>
                    </div>
                    <div className=" col-lg-8 media-font mt-2 mx-2">
                        <div className="weigth-700 fs-30 ">
                            {title}
                        </div>
                        <div className="">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>

                    </div>
                   
                        
                    
                </div>
            </div>

            <hr />
        </>
    )
}
