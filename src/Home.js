import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './content.css';
import './page.css'
import './startup.css'

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const lastPage = localStorage.getItem('lastPage');
    console.log(lastPage)

    const homePageUrl = window.location.href;

    if (lastPage === null || lastPage === homePageUrl) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [location]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('lastPage', window.location.href);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      {isLoaded ? (
        <>
        <div className="home-content-container">
          <div className="home-text-container">
            <h2 className="page-header-left-2">About Me</h2>
            <div className="text-box">
              <p className="body-text-left">
                I was born at UCSF and lived in Fairfield until 8th grade, when I moved to Woodland for better educational opportunities. I have one younger sibling who I live with along with my parents and grandmother. I'm a Mexican-American male and I use he/him/his pronouns.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                I've loved cooking since I was tall enough to reach over the stove. I love going out to eat new food and experimenting with different recipes. Every family member I have on my dad's side has been involved in the restaurant business at some point in their life and I've cooked alongside them many times. I use the skills I learned with my family on the DVCA campus by hosting pop-up taco stand fundraising events for the DVCA Latinos Unidos club.
              </p>
            </div>
          </div>
          <div className="home-image">
            <img src="./home-image-1.jpg" alt="James Escobedo & Computer Currry"/>
          </div>
        </div>
        <div className="home-content-container">
          <div className="home-image">
            <img src="./dv-orientation.JPG" alt="DV Orientation"/>
          </div>
          <div className="home-text-container">
            <h2 className="page-header-right-2">Path to Da Vinci</h2>
            <p className="body-text-right">
              I first started attending Da Vinci in the 7th grade at the junior high school. Where I lived at the time in Fairfield, the only "good" school available to me didn't have strong academics and there were many things about the school that made me uncomfortable. I used to play on a soccer team and, one day, one of my teammate's dad started talking to my dad about a school in Davis called Da Vinci Charter Academy, so we scheduled a tour and a spot at their orientation.
            </p>
            <p className="body-text-right">
              I knew I was going to love Da Vinci as soon as I walked in for the first time. It was like nothing I'd ever experienced before, the group-based learning and apparent strong community were incredibly appealing (and the staff were fantastic, as well). I only wish more students would get to have the opportunity to go to a school like Da Vinci.
            </p>
          </div>
        </div>
        <div>
          <h2 className="page-header-left-2">Strengths & Accomplishments</h2>
        </div>
      </>
      ) : (
        <div className="starting-screen">
          <h1 className="starting-screen-header">James Escobedo's</h1>
          <img src="./logo.png" alt="James Escobedo DV Logo"/>
          <h1 className="starting-screen-header">Graduate Portfolio</h1>
        </div>
      )}
    </div>
  );
}

export default Home;