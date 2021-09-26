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
                I'm a Master's student in <b>Business Analytics</b> (aka Data Science for Businesses) 
                at <b>Rady School of Management at UC San Diego</b>.  
                
                Prior to my master's, I did my undergraduate at UC San Diego in International Studies - Economics,
                where I first encountered simple regression models in Econometrics class. 
                I soon became fascinated by what we can with Data, and since then, 
                I have been working my way out to become an effective Data Scientist. 
                </p>

                <p className='about-bio-paragraph'>
                In my master's, I've learned Business-focused analytics (e.g., Customer analytics, Fraud analytics, Pricing Analytics), 
                Data Science methodologies (e.g., Baysian learning, Working with unstructured data),
                and Big Data tools (e.g., SQL, Hadoop, Cloud computing). 
                Currently, I am working on a Capstone project with <b>Illumina</b> as a <b>Commercial Business Analyst Intern</b>.
                </p>

                <p className='about-bio-paragraph'>
                Besides Academia, I work as a <b>Data Analyst</b> for <b>The Neurosciences Department</b> at <b>UC San Diego</b>.
                Speficically, I work for <b>The Study of Latinos - Investigation of Neurocognitive Aging (SOL-INCA)</b>, 
                where I implement survey generalized models to investigate hypothesized associations between Neurocognitive aging and other health conditions. 
                To effectively demonstrate the results of statistical analyses, I create interactive graphical user interface using Shiny. 
                </p>
                <p className='about-bio-paragraph'>
                Lastly, three things that make me an effective 
                Data Scientist are that I am a <b>fast learner</b>, <b>high achiever</b>, and always <b>willing to 
                learn</b>. As I am graduating in December 2021, <b>I am 
                actively seeking a full-time role as a Data Scientist</b>. 
                If my background aligns with the type of Data Scientist you are searching for, please contact me! 
                </p>
            </section>
        </div>
    )
};

export default About;