import { useNavigate } from "react-router-dom";
import style from "./Banner.module.css";
import img1 from "../assets/company/pro_pic.png";
import { MdEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Lightning from "./Lightning/Lightning";
export function Banner() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleContactClick = () => {
    navigate("/feedback"); // Navigate to /feedback route
  };

  return (
    <>
      <div className={style.main_container}>
       
        <div className={style.container1}>
        <Lightning></Lightning>
          <div className={style.div1}>
            <hr className={style.hr1} />
            <h1 className={style.div1_h1}>Hello</h1>
          </div>
          <div className={style.div2}>
            <p>I am</p>
            <h1 className={style.div2_h1}>Ritik Yadav</h1>
          </div>
          <div className={style.div3}>
            <div className={style.div3_h1}>Developer</div>
            <div className={style.div3_h1}>|</div>
            <div className={style.div3_h1}>Developer</div>
          </div>
          <div className={style.div4}>
            Full Stack Developer || Tech Stack: Python | R | C | C++ | Java | SQL | Excel | Tableau | MongoDB | React.js | Express.js | Node.js | GitHub | HTML | CSS | JavaScript
          </div>
          <div className={style.div5}>
            <FaLinkedin />
            <FaGithub />
            <MdEmail />
          </div>
          <div className={style.div6}>
            <button onClick={handleContactClick}>Contact Me</button>
          </div>
        </div>
        <div className={style.container2}>
          <img src={img1} className={style.img1} alt="Profile" />
        </div>
        
      </div>
    </>
  );
}
