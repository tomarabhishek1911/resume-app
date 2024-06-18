
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import c from '../../assets/c.png';
import js from '../../assets/js.png';
import css from '../../assets/css.png';


export default function Experience(){

    const statements = [
        "1.I am eager to apply for the Full Stack Developer position at your esteemed company. With a comprehensive background in both front-end and back-end development, I possess the skills necessary to build dynamic, high-performance web applications. My proficiency in HTML, CSS, JavaScript, and frameworks such as Next.js, combined with a solid understanding of back-end technologies and databases like MongoDB, allows me to create seamless and scalable solutions. I have hands-on experience with various projects, including a laundry service website and a restaurant website, where I applied my technical knowledge to develop user-friendly interfaces and efficient backend systems. Additionally, my problem-solving abilities have been sharpened by solving over 200 Data Structures and Algorithms (DSA) questions on LeetCode. I am passionate about leveraging my expertise to contribute to innovative projects and drive success within a collaborative team environment.",
    ];


    const iconImages = [js, c, css];

    return (
        <div className='experience_container'> 

            <p className='experience_title'>Experience</p>

            <div className='experience_cards_container'>

                <ExperienceCard
                    companyName = "ABC Pvt Ltd"
                    designation = 'Fresher'
                    statements={statements}
                    iconImages={iconImages}
                
                />

                    <ExperienceCard
                    companyName = "random Pvt Ltd"
                    designation = 'Fresher'
                    statements={statements}
                    iconImages={iconImages}
                
                />
                   <ExperienceCard
                    companyName = "123 Pvt Ltd"
                    designation = 'Fresher'
                    statements={statements}
                    iconImages={iconImages}
                
                />
            </div>
        </div>
    )
}