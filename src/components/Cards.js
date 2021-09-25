import React from 'react';
import CardItem  from './CardItem';
import './Cards.css';


function Cards(){
    return(
        <div className='cards' id='my_projects'>
            <div className='cards__header'>
                <h1>My Projects</h1>
            </div>
            
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/project-github-logo.jpg'
                    title='Vehicle Manager'
                    text='This Android Application incorporates CRUD functionallity on a Vehicle Management System.
                    I utilized the M.V.C. desing patern, Java, XML, and Firebase Webservices to bulid the application
                    and Espresso to conduct testing.'
                    label='Project'
                    path='https://github.com/Robbie08/VehicleManager' />

                    <CardItem 
                    src='images/work_TA.png'
                    title='Computer Science T.A.'
                    text="I am a Teaching Assistant at the Computer Science Department
                    at SDSU. I write Java utilities that act as tools for students to 
                    use in their programs. I also write programs that test and validate the 
                    student's programming assignments. I hold office hours where I can help improve
                    students understanding of Data Structures and Java."
                    label='Work'
                    path='https://www.linkedin.com/in/roberto-ortiz-/' />

                    <CardItem 
                    src='images/project-aiclub.jpg'
                    title='A.I. Club Project Lead'
                    text="I'm a project lead at the SDSU Artificial Intelligence Club.
                    I led a project where we used Data Maniupulation and Machine Leaning models to 
                    built income prediction models."
                    label='Club Affilication'
                    path='https://github.com/Robbie08/income-prediction' />

                </ul>
                <ul className='cards__items'>


                    <CardItem 
                    src='images/project-random-nums.PNG'
                    title='Random Numbers'
                    text="This React application uses the Numbers API to 
                    generate random facts about numbers. I created this 
                    application to practice consuming API's with React.js."
                    label='Project'
                    path='http://random-numbers-facts.herokuapp.com/' />

                    <CardItem 
                    src='images/project-parksmart.png'
                    title='Park Smart'
                    text='A brainchild of mine, this 
                    is an Android parking application 
                    for university students and faculty 
                    to find available parking spaces. 
                    I used Java, XML, Firebase Webservices and the Google Maps API.'
                    label='Project'
                    path='https://github.com/Robbie08/ParkSmart' />

                    <CardItem 
                    src='images/project-codeday-hackathon.jpg'
                    title='Hackathon'
                    text='Participated in the Codeday Hackathon 
                    and won the "Best Mobile Application" award 
                    out of 60 teams by creating a social motivation 
                    Android Application. My team and I engineered a mobile 
                    CRUD application using Java, Firebase, XML, and Agile.'
                    label='Hackathon'
                    path='https://www.codeday.org/' />
                </ul>
            
            </div>
        </div>
    )
}

export default Cards;