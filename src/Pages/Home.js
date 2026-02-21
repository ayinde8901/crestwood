import React from 'react'
import Hero from '../Components/Hero/Hero'
import AboutPreview from '../Components/About/AboutPreview'
import SchoolStats from '../Components/SchoolStats/SchoolStats'
import AcademicsPreview from '../Components/AcademicsPreview'
import UpcomingEvents from '../Components/UpcomingEvent/UpcomingEvents'
import ChatWidget from '../Components/Chatwidget/ChatWIdget'
import CallToAction from '../Components/CallToAction/CallToAction'
import AnnouncementsPreview from '../Components/Announcement/AnnouncementPreview'
import Newsletter from '../Components/Newsletter/Newsletter'
import EventCountdown from '../Components/Eventcountdown/EventCountdown'
import Faq from '../Components/FAQ/Faq'

const Home = () => {
  return (
    <div>
      <Hero/>
       <AboutPreview/>
       <SchoolStats/>
       <AcademicsPreview/>
       <ChatWidget/>
       <AnnouncementsPreview/>
       <EventCountdown targetDate="2026-12-25T00:00:00" />
      <UpcomingEvents/>
       <CallToAction/>
       <Newsletter/>
       <Faq/>
       
      
    </div>
  )
}

export default Home
