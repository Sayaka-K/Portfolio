import React from 'react';
import './About.css';
function About(){
    return(
        <div className='about-container' id='about'>
            <section className="about-header">
                <h1>About Me</h1>
            </section>
            <section className='about-bio'>
                <p className='about-bio-paragraph'>
                I'm a Junior at <b>San Diego State University</b> working towards earning a <b>B.S. 
                in Computer Science</b>. My passion for Computer Science started with a simple 
                Hello World program in C++. Since then, I have worked on countless <b>Mobile </b> 
                and <b>Web applications</b>, allowing me to learn new languages, tools, and frameworks 
                like <b>Java, JavaScript, React.js, Python, Git</b>, and a couple of other ones.
                I have recently started delving into the world of 
                Artificial Intelligence and Computational Linguistics. 
                </p>
                <p className='about-bio-paragraph'>
                I currently work as a <b>Teaching Assistant (TA)</b> for <b>The Computer Science Department</b> at <b>San Diego State Univeristy</b>.
                Besides academia, I have also worked as a <b>Freelance 
                Software Engineer</b> for a local Keller Williams Realtor. I have also accepted 
                an offer as a <b>Software Engineering Intern</b> at <b>Mitchell International</b> for the 
                Summer of 2021. Unfortunatley my internship program for this summer has been canceled, but I am exited of what new opportunities
                are to come.
                </p>
                <p className='about-bio-paragraph'>
                Besides my computer science knowledge, three things that make me an effective 
                software engineer are that <b>I am an excellent communicator</b>, <b>always eager to 
                learn more</b>, and <b>very pragmatic</b>. Since I will graduate in May 2022, <b>I am 
                actively seeking an internship role as a Software Engineer</b>. 
                If my background aligns with the type of engineer you are searching for, 
                then please contact me. If you're not convinced yet, then please check out 
                my LinkedIn or resume. 
                </p>
            </section>
        </div>
    )
};

export default About;