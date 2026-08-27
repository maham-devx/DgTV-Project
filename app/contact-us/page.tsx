import ContactFeedbackForm from '@/component/Contact-us/ContactFeedbackForm'
import MediaSponsorshipCTA from '@/component/Contact-us/MediaSponsorshipCTA'
import SocialHandles from '@/component/Contact-us/SocialHandles'
import StudioLocationInfo from '@/component/Contact-us/StudioLocationInfo'
import TuningGuide from '@/component/Contact-us/TuningGuide'
import React from 'react'

function page() {
    return (
        <div>
            <StudioLocationInfo />
            <TuningGuide />
            <ContactFeedbackForm />
            <SocialHandles />
            <MediaSponsorshipCTA />
        </div>
    )
}

export default page