import ConsultationBooking from '@/component/Astrology-and-spirituality/ConsultationBooking'
import FAQSection from '@/component/Astrology-and-spirituality/FAQSection'
import HoroscopeHub from '@/component/Astrology-and-spirituality/HoroscopeHub'
import ParanormalInsights from '@/component/Astrology-and-spirituality/ParanormalInsights'
import RohaniWazaifSection from '@/component/Astrology-and-spirituality/RohaniWazaifSection'
import React from 'react'

function page() {
    return (
        <div>
            <HoroscopeHub />
            <RohaniWazaifSection />
            <ConsultationBooking />
            <ParanormalInsights />
            <FAQSection />
        </div>
    )
}

export default page