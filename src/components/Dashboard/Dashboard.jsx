import React from 'react'
import './dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div>
                <h2>My Dashboard</h2>
                <div className="shadow container col-3">

                    <div className="d-flex justify-content-center gap-5">
                        <p>Active Users</p>
                        <p>for August 2020</p>
                    </div>

                    {/* First User Start */}

                    <div>
                        <div className="d-flex justify-content-start">
                            <img src="https://picsum.photos/200" alt="userProfile" />

                            <div>
                                <p>Syammed2924</p>
                                <p>Kelantan, Malaysia</p>
                            </div>
                        </div>

                        <div>
                            <div className="blue-slide"></div>
                            <div className="white-slide"></div>

                            <div className="mt-5 pl" >
                                <p>Professional Level 15</p>
                                <p className="fw-bold">4723 Points</p>
                            </div>

                        </div>
                    </div>
                    {/* First User End */}



                    {/* Second Start */}
                    <div>
                        <div className="d-flex justify-content-start">
                            <img src="https://picsum.photos/200" alt="test" />

                            <div>
                                <p>Syammed2924</p>
                                <p className="">Kelantan, Malaysia</p>
                            </div>
                        </div>

                        <div>
                            <div className="blue-slide2"></div>
                            <div className="white-slide2"></div>

                            <div className="mt-5 pl" >
                                <p>Professional Level 11</p>
                                <p className="fw-bold">2339 Points</p>
                            </div>

                        </div>
                    </div>

                    {/* Second End */}

                    {/* Third Start */}


                    <div >
                        <div className="d-flex justify-content-start">
                            <img src="https://picsum.photos/200" alt="test" />

                            <div>
                                <p>Syammed2924</p>
                                <p className="">Kelantan, Malaysia</p>
                            </div>
                        </div>

                        <div>
                            <div className="blue-slide3"></div>
                            <div className="white-slide3"></div>

                            <div className="mt-5 pl" >
                                <p>Professional Level 6</p>
                                <p className="fw-bold">1884 Points</p>
                            </div>
                        </div>
                    </div>

                    {/* Third End */}


                </div>
            </div>
        </>
    )
}

export { Dashboard }
