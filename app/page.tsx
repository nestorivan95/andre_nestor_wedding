'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import EventDetails from '@/components/EventDetails'
import RSVP from '@/components/RSVP'
import Gifts from '@/components/Gifts'
import TravelInfo from '@/components/TravelInfo'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Countdown />
      <EventDetails />
      <RSVP />
      <Gifts />
      <TravelInfo />
      <Contact />
    </main>
  )
}

