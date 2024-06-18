
import './HomePage.css';
import githubIcon from  '../../assets/github.png';
import leetcodeIcon from  '../../assets/leetcode.png';
import image from '../../assets/IMG_20221221_231736.jpg';
import linkedin from '../../assets/linkedin.png';
function HomePage(){

    return (
        <div className='homepage_container'>
           
           <div className='homepage_left'>
                <p className='homepage_left_h1'>
                        <span className='red_color'>Hi,</span> my name is
                </p>

                <p className='homepage_left_h2'>
                    Abhishek Singh Tomar
                </p>

                <p className='homepage_left_h3'>
                    Student at <span className='red_color'>Lovely Professional University</span>
                </p>

                <p className='homepage_left_description'>
Hello! My name is Abhishek Singh Tomar, a dedicated and passionate student currently pursuing my 
degree at Lovely Professional University. With a strong foundation in web development and programming, 
I have developed skills in HTML, CSS, JavaScript, C++, and Python. My hands-on experience is showcased 
through live projects such as a fully functional laundry website and a restaurant website, demonstrating
 my ability to apply my knowledge to real-world applications. Additionally, I have honed my problem-solving 
 skills by solving over 200 Data Structures and Algorithms (DSA) questions on LeetCode, proving my capability 
 in tackling complex challenges. I am eager to bring my technical
 expertise and innovative mindset to new opportunities and contribute effectively to any team or project.
                </p>

                <div>
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
                    
                </div>

                <a href='mailto:tomarabhishek974@gmail.com'>
                    <buton className='homepage_left_button'>Get in Touch</buton>
                </a>
           </div>

           <div className='homepage_right'>
                <img src={image} alt='GIF' />
           </div>
        </div>
    )
}

export default HomePage;