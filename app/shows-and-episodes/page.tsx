import EpisodesGrid from '@/component/Shows & Episodes/EpisodesGrid'
import FeaturedShowHero from '@/component/Shows & Episodes/FeaturedShowHero'
import HostSpecials from '@/component/Shows & Episodes/HostSpecials'
import ShowFilters from '@/component/Shows & Episodes/ShowFilters'
import ViewerSubmissionsCTA from '@/component/Shows & Episodes/ViewerSubmissionsCTA'
import React from 'react'

function page() {
    return (
        <div>
            <FeaturedShowHero />
            <ShowFilters />
            <EpisodesGrid />
            <HostSpecials />
            <ViewerSubmissionsCTA />
        </div>
    )
}

export default page