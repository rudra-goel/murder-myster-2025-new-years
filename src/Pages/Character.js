    import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import GoldenDivider from "../images/Divider1.png"

function Character({ characterDescription }) {
    const charDescriptionRef = useRef(null)
    const tasksRef = useRef(null)

    const scrollDown = (section) => {
        if (section  == "character-description") {
            if (charDescriptionRef.current) {
                charDescriptionRef.current.scrollIntoView({ behavior : "smooth" })
            }
        } else if (section == "character-tasks") {
            if (tasksRef.current) {
                tasksRef.current.scrollIntoView({ behavior : "smooth" })
            }
        }
    }

    const name = "Rudra"
    const characterName = "Paramjeet Dhillon"
    return (
        <div className="main-container">
            <div className="welcome-title-container">
                <div>
                    <p className="welcome-name">Welcome {characterDescription.realName}</p>
                </div>
                <div>
                    <p className="grand-celebration">to Meghal Mittal's <br></br><span>Grand Celebration</span></p>
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


            </div>
        </div>
    )
}

export default Character