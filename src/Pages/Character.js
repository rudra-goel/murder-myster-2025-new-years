    import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import GoldenDivider from "../images/Divider1.png"
import CollapsibleCard from './CollapsibleCard'
import Dhoom from "./Dhoom.jpg"

function Character({ characterDescription }) {
    const charDescriptionRef = useRef(null)
    const tasksRef = useRef(null)
    const newsRef = useRef(null)

    const scrollDown = (section) => {
        if (section  == "character-description") {
            if (charDescriptionRef.current) {
                charDescriptionRef.current.scrollIntoView({ behavior : "smooth" })
            }
        } else if (section == "character-tasks") {
            if (tasksRef.current) {
                tasksRef.current.scrollIntoView({ behavior : "smooth" })
            }
        } else if (section == "news") {
            if (newsRef.current) {
                newsRef.current.scrollIntoView({ behavior : "smooth" })
            }
        }
    }


    return (
        <div className="main-container">
            <div className="welcome-title-container">
                <Link to='/'>Home</Link>
                <div className="welcome-name">
                    Welcome {characterDescription.realName}
                </div>
                <div>
                    <p className="grand-celebration">to Megha Mittal's <br></br><span>Grand Celebration</span></p>
                </div>
                <div>
                    <p className="anniversary-title"> The 15th Anniversary of the <br></br><span>Vista Resorts</span></p>
                </div>

                <div>
                    <p className="join-us">We are delighted for you to participate in our murder mystery themed night, where YOU must determine who is responsible for the actions soon to pan out tonight.</p>
                </div>

                <div>
                    <img className="golden-divider" alt="Divider" src={GoldenDivider} />
                </div>

                <button className="next-instruction-btn" onClick={() => {scrollDown("character-description")}}>Click for Next Instructions</button>


            </div>

            <div className="section-divider" id="div-welcome-charDescription">
            </div>


            <div ref={charDescriptionRef} className="character-description">
                <div className="tonight">
                    TONIGHT
                </div>

                <div className="you-are-container">
                    <div className="you-are">
                        YOU ARE
                    </div>
                </div>

                <div className="character-name">
                    {characterDescription.characterName}
                </div>

                <div className="character-role">
                    {characterDescription.characterRole}
                </div>

                <div className="personality-container">
                    <ul className="personality-lists">
                        <li> {characterDescription.background}</li>
                        <li> {characterDescription.personality}</li>
                        <li> {characterDescription.connectionToMain}</li>
                    </ul>
                </div>

                <div className="button-container">
                    <button className="next-instruction-btn" onClick={() => {scrollDown("character-tasks")}}>Click for Your Tasks Tonight</button>
                </div>
            
            </div>

            <div className="section-divider" id="div-welcome-charDescription">
            </div>

            <div ref={tasksRef} className="character-tasks">
                <div className="task-title-container">
                    Your TASKS for tonight
                </div>
                {
                    characterDescription.tasks.map((task, i) => {
                        return (<CollapsibleCard title={`Task ${i+1}`} data={task}/>)
                    })
                }
                

                <div className="breaking-headline-container">
                    <button className="next-instruction-btn" onClick={() => {scrollDown("news")}}>Click for Relevant BREAKING NEWS</button>
                </div>


            </div>

            <div className="section-divider" id="div-welcome-charDescription">
            </div>
            
            <div className="breaking-news" ref={newsRef}>
                <div className="breaking-news-title">
                    BREAKING NEWS
                </div>
                <div className="news-title">
                    ROBBERY CASE AT VISTA RESORTS STILL UNSOLVED
                </div>
                <div className="news-body">
                    <div className="news-date">
                        <p>Published December 28th, 2024</p>
                    </div>
                    <div className="news-text">
                        Back in June 2024, Vista Resorts hosted an art exposition featuring world class Jeweler, Isha Parekh, Fashion Designer, Rhea Sharma, and Art Curator, Manisha Roy.  
                        <br></br>
                        <br></br>
                        At the end of the weekend, artists reported STOLEN artifacts from their inventory. When questioned, <span className="bold-reg-text">The Mittal Family gave NO COMMENT.</span> 
                        <br></br>
                        <br></br>
                        It is December, and the artists have received no answer for their stolen artifacts. The <span className="bold-reg-text">total amount stolen equates to $200,000,000.00</span>

                        <br></br>
                        <br></br>
                        Megha Mittal, Head of the Mittal Empire, has "reassured" the public that she has hired a team of the best private investigators to solve this mystery. 
                        <br></br>
                        <br></br>
                        When will the public get an answer? Will the Mittal family come clean about their actions that weekend in June? We may never know
                        <br></br>
                        <br></br>
                        Image from the scene
                    </div>

                    <div className="news-img">
                        <img className="dhoom" alt="Divider" src={Dhoom} />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Character