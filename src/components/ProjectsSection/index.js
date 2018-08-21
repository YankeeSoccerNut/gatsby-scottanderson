import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import betterCashFlowLogo from '../../assets/images/projects/betterCashFlowLogo.png'
import coinmoLogo from '../../assets/images/projects/coinmoLogo.png'
import meterMiserLogo from '../../assets/images/projects/meterMiserLogo.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={coinmoLogo}
            colour="transparent"
            title="Coinmo"
            link="https://www.getcoinmo.com"
            timeperiod="2018"
            subtitle="Deal-finding mobile app written in React Native and deployed to Apple App Store and Google Play Store."
          />
          <ExperienceUnit
            logo={betterCashFlowLogo}
            colour="transparent"
            title="Better Cash Flow"
            link = "https://github.com/YankeeSoccerNut/BetterCashFlow"
            timeperiod="2017"
            subtitle="React/Redux/MySQL application designed to help small business owners model cash allocations to better manage cash flow."
          />
          <ExperienceUnit
            logo={meterMiserLogo}
            colour="transparent"
            title="Meter Miser"
            link="https://github.com/YankeeSoccerNut/MeterMiser_v2"
            timeperiod="2017"
            subtitle="An IoT application with SMS integration to help small business owners manage heating and cooling costs."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
