import React from 'react';
import CardItem  from './CardItem';
import './Cards.css';


function Cards(){
    return(
        <div className='cards' id='my_projects'>
            <div className='cards__header'>
                <h1>Experience</h1>
            </div>
            
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/pricing.png'
                    title='Kellogg Pricing Analytics'
                    text='This Android Application incorporates CRUD functionallity on a Vehicle Management System.
                    I utilized the M.V.C. desing patern, Java, XML, and Firebase Webservices to bulid the application
                    and Espresso to conduct testing.'
                    label='Project'
                    path='https://github.com/Sayaka-K/Kellogg-s-Pricing-Analytics/blob/main/presentation.pdf' />

                    <CardItem 
                    src='images/shiny.png'
                    title='Shiny Application'
                    text="I am a Teaching Assistant at the Computer Science Department
                    at SDSU. I write Java utilities that act as tools for students to 
                    use in their programs. I also write programs that test and validate the 
                    student's programming assignments. I hold office hours where I can help improve
                    students understanding of Data Structures and Java."
                    label='Work'
                    path='http://sayaka-app.shinyapps.io/Testing' />

                    <CardItem 
                    src='images/petco-logo.png'
                    title='Data Science competition - Winner'
                    text="I'm a project lead at the SDSU Artificial Intelligence Club.
                    I led a project where we used Data Maniupulation and Machine Leaning models to 
                    built income prediction models."
                    label='Datathon'
                    path='https://www.linkedin.com/posts/rady-data-analytics-club_petco-casestudy-casestudycompetition-activity-6791217381898289152-AKiv' />

                </ul>
                <ul className='cards__items'>


                    <CardItem 
                    src='images/fraud1.PNG'
                    title='Property Fraud'
                    text="This React application uses the Numbers API to 
                    generate random facts about numbers. I created this 
                    application to practice consuming API's with React.js."
                    label='Project'
                    path='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:147e4a70-8acb-4ce0-87f4-4d85d46b9902' />

                    <CardItem 
                    src='images/fraud2.png'
                    title='Credit Card Transaction Fraud'
                    text='A brainchild of mine, this 
                    is an Android parking application 
                    for university students and faculty 
                    to find available parking spaces. 
                    I used Java, XML, Firebase Webservices and the Google Maps API.'
                    label='Project'
                    path='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:5936684f-5f0e-46c2-913e-fca662a95d5f' />

                    <CardItem 
                    src='images/text.png'
                    title='Fraudulent-News-Detection'
                    text='Participated in the Codeday Hackathon 
                    and won the "Best Mobile Application" award 
                    out of 60 teams by creating a social motivation 
                    Android Application. My team and I engineered a mobile 
                    CRUD application using Java, Firebase, XML, and Agile.'
                    label='Project'
                    path='https://github.com/Sayaka-K/Fraudulent-News-Detection/blob/main/Model%20Analysis%20to%20Provide%20Aid%20in%20Detecting%20Fake%20News.pdf' />
                </ul>
            
            </div>
        </div>
    )
}

export default Cards;