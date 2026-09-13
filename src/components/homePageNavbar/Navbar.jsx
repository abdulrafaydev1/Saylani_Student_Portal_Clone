import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import rafay_image from "../../assets/images/My-image.jpg";

const Navbar = () => {

    const [showOptions, setShowOptions] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <>
            <nav>
                <div id="user-image-and-name" className="profile-menu" onClick={() => setShowProfile(!showProfile)} > <img src={rafay_image} alt="" /> <p>Abdul Rafay</p> <div className={`profile-dropdown ${showProfile ? "show" : ""}`}> <button>Profile</button> <button>Settings</button> <button>Logout</button> </div> </div>

                <div id="input-and-courses">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search Course"
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="search-icon"
                        />
                    </div>

                    <div className="enrolled-menu">

                        <button
                            className="enrolled-btn"
                            onClick={() => setShowOptions(!showOptions)}
                        >
                            ENROLLED

                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`arrow-icon ${showOptions ? "rotate" : ""
                                    }`}
                            />
                        </button>


                        <div
                            className={`dropdown ${showOptions ? "show" : ""
                                }`}
                        >
                            <button> All </button>
                            <button> ENROLLED </button>
                            <button> COMPLETED </button>
                            <button> DROPPED </button>
                        </div>

                    </div>

                </div>

                <div id="nav-feedback">
                    <button>Feedback</button>
                </div>

            </nav>
        </>
    );
};

export default Navbar;