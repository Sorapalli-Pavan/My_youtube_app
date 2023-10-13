import React from 'react'
import img2 from '../Images/Youtube.png'
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <>
            <div className='col-md-2 bg-warning'>
                <i class="fa-solid fa-bars"></i>
                <img src={img2} width={50} />
                <span style={{ fontSize: "20px", fontFamily: "caliberi" }}>Youtube</span>
                <br></br>
                <br></br>
                <div className='text-center'>
                </div>
                <div className='sidebar'>

                    <ul>

                        <Link to="Home"><li><i class="fa-solid fa-house"></i>  Home</li></Link><br></br>

                        <Link to="Shorts"><li><i class="fa-brands fa-tiktok"></i>  Shorts</li></Link><br></br>
                        <li><i class="fa-solid fa-window-restore"></i>  Subscriptions</li><br></br>
                        <hr></hr>
                        <li><i class="fa-solid fa-folder"></i>Library</li><br></br>
                        <li><i class="fa-sharp fa-solid fa-download"></i> download</li><br></br>
                        <li><i class="fa fa-history" aria-hidden="true"></i>History</li><br></br>
                        <li><i class="fa-solid fa-photo-film"></i>Movies</li><br></br>
                        <li><i class="fa-solid fa-thumbs-up"></i>Liked Videos</li><br></br>
                        <li><i class="fa-solid fa-chevron-down"></i>Show More</li><br></br>
                        <hr></hr>
                    </ul>
                    <h6>. Descriptions</h6>
                </div>

            </div>

        </>
    )
}
export default Sidebar;
