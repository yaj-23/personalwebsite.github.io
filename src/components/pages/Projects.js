import React from 'react';

import './Projects.css';
import { Card } from '../Cards';


function Projects() {
      
    return (
        <>
        
            <div className="projects-container" id='project'>   
                <h1 className="header_line">Featured Projects.</h1>

                    <div className='projectsCards'>
                        <Card projectName="Vada Medical" 
                            projectDesc="Utilized Voiceflow for our automated chatbot system which is intergrated with Google Assistant Programs. The data received from the chatbot is stored in an excel file which uses Dropbase to store into a database. This data is fetched using REST API Methods, and utilized to publish on a website/chat area or a physical document of some sort. The website is created using React Js, HTML/CSS."
                            gitLink="https://github.com/yaj-23/HackTheNorth2021" webLink="https://devpost.com/software/vada"
                        />

                        <Card projectName="Zensations" 
                            projectDesc="Front-End comprised of React Ionic. For the backend, we used Express.js with Node.js and TypeScript for a REST API to communicate. The database of choice was none other than Cockroachdb, storing Yoga exercises, image URL's and a seperate table mapping Yoga positions with emotions (Angry, Sad, Happy, etc.) in order to improve the classification of exercises."
                            gitLink="https://github.com/yaj-23/DeltaHacks7" webLink="https://devpost.com/software/zensations"
                        />
                    </div>
                   
                    <div className='projectsCards'>
                        <Card projectName="Link" 
                            projectDesc="Link allows you to swipe throughout locations in Toronto mimicking a social media platform. This application was built by carefully designing a clean FIGMA design. After creating a design which was most appealing, I converted design into React Native Application."
                            gitLink="https://github.com/yaj-23/RUHacks" webLink="https://devpost.com/software/link-peydzb"
                        />

                        <Card projectName="Greenify" 
                            projectDesc="The frontend and design for the app was made with Figma. Utilized Expo to help with the back-end and make the ReactNative APP. Google Clouds Firebase to store all of our users. Javascript, as the baseline programming language, Firestore to host the database, and Postman for API testing."
                            gitLink="https://github.com/yaj-23/TOHacks" webLink="https://devpost.com/software/greenify-n4pg0b"
                        />
                    </div>                 
            </div>

        </>
    )
}
export default Projects
