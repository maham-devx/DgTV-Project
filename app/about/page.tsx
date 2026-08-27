
import AboutHero from '@/component/About-Sections/AboutHero'
import CategoriesBreakdown from '@/component/About-Sections/CategoriesBreakdown'
import FounderSpotlight from '@/component/About-Sections/FounderSpotlight'
import InfrastructureTech from '@/component/About-Sections/InfrastructureTech'
import TeamShowcase from '@/component/About-Sections/TeamShowcase'
import React from 'react'

function page() {
    return (
        <div>
            <AboutHero />
            <FounderSpotlight />
            <TeamShowcase />
            <CategoriesBreakdown />
            <InfrastructureTech />
        </div>
    )
}

export default page