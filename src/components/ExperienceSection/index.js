import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import v1appsLogo from '../../assets/images/experience/v1appsLogo.png'
import oracleLogo from '../../assets/images/experience/oracleLogo.gif'
import extrapriseLogo from '../../assets/images/experience/extrapriseGroupLogo.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={v1appsLogo}
            colour='transparent'
            title='V1 Apps'
            link = 'https://www.linkedin.com/company/version-one/'
            timeperiod='2018'
          subtitle='Principal developer for Coinmo, a consumer-facing, deal-finding mobile application.'
          />
          <ExperienceUnit
            logo={oracleLogo}
            colour='transparent'
            title='Oracle Corporation'
            link='https://www.oracle.com/'
            timeperiod='2001 - 2017'
            subtitle='Various leadership roles in the pre-sales technology teams, including Customer Success for the Oracle Public Cloud.'
          />
          <ExperienceUnit
            logo={extrapriseLogo}
            colour='transparent'
            title='Extraprise Group (now QuickPivot)'
            link='https://www.quickpivot.com/'
            timeperiod='1998 - 2001'
            subtitle='Principal consultant and project manager responsible for Siebel CRM implementations and deployments.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
