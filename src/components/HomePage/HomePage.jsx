
import './HomePage.css';
import githubIcon from  '../../assets/github.png';
import leetcodeIcon from  '../../assets/leetcode.png';
import image from '../../assets/IMG_20221221_231736.jpg';
import linkedin from '../../assets/linkedin.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transiton: { duration: 0.5, delay: delay },
    },
  });

function HomePage(){

    return (
        <div className='homepage_container'>
           
           <div className="homepage_left">
        <motion.p
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="homepage_left_h1"
        >
                        <span className='red_color'>Hi,</span> my name is
                </motion.p>

                <motion.p
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="homepage_left_h2"
                >
                    Abhishek Singh Tomar
                </motion.p>

                <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="homepage_left_h3"
                >
                    Student at <span className='red_color'>Lovely Professional University</span>
                </motion.p>

                <motion.p
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                className="homepage_left_description"
                >
Hello! My name is Abhishek Singh Tomar, a dedicated and passionate student currently pursuing my 
degree at Lovely Professional University. With a strong foundation in web development and programming, 
I have developed skills in HTML, CSS, JavaScript, C++, and Python. My hands-on experience is showcased 
through live projects such as a fully functional laundry website and a restaurant website, demonstrating
 my ability to apply my knowledge to real-world applications. Additionally, I have honed my problem-solving 
 skills by solving over 200 Data Structures and Algorithms (DSA) questions on LeetCode, proving my capability 
 in tackling complex challenges. I am eager to bring my technical
 expertise and innovative mindset to new opportunities and contribute effectively to any team or project.
                </motion.p>

                <motion.div
                variants={container(2.5)}
                initial="hidden"
                animate="visible"
                >
                    <a href='https://github.com/tomarabhishek1911?tab=repositories' target='_blank'>
                        <img 
                            src={githubIcon}
                            alt='githubIconImage'
                            className='homepage_logo'
                        />
                    </a>
                    <a href='https://leetcode.com/u/abhishek__singh__tomar/' target='_blank'>
                        <img 
                            src={leetcodeIcon}
                            alt='leetcodeIconImage'
                            className='homepage_logo'
                        />
                    </a>
                    <a href='https://leetcode.com/u/abhishek__singh__tomar/' target='_blank'>
                        <img 
                            src={linkedin}
                            alt='linkedIconImage'
                            className='homepage_logo'
                        />
                    </a>
                    
                </motion.div>

                <a href='mailto:tomarabhishek974@gmail.com'>
                <motion.button
                 variants={container(3)}
                 initial="hidden"
                 animate="visible"
          className="homepage_left_button">Get in Touch</motion.button>
                </a>
           </div>

           <div className='homepage_right'>
                <motion.img 
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:1}}
                src={image} 
                alt='GIF' />
           </div>
        </div>
    )
}

export default HomePage;