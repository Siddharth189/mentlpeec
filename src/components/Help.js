import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Help = () => {
  return (
    <Jumbotron>
      <h3>About Mental Health In India</h3>
      <span>
Mental health is  an integral part of health; it is more than the absence of mental illnesses. It is the foundation for well-being and effective functioning of individuals. It includes mental well-being, prevention of mental disorders, treatment and rehabilitation.

WHO estimates that the burden of mental health problems in India is 2443 disability-adjusted life years (DALYs) per 100 00 population; the age-adjusted suicide rate per 100 000 population is 21.1. The economic loss due to mental health conditions, between 2012-2030, is estimated at USD 1.03 trillion.
<br /><br />

The Mental Health Policy, 2014 upholds a participatory and rights-based approach for quality service provisions.  The Mental Healthcare Act, 2017 provides the legal framework for providing services to protect, promote and fulfil the rights of people with mental illnesses. These are in line with the United Nations Convention on Rights of People with Disabilities (UNCRPD).
<br /><br />

The National Mental Health Programme and Health and Wellness Centres are efforts to provide quality care at the primary health care level. Deaddiction centres and rehabilitation services are also available.
<br /><br />

Determinants of mental health include individual attributes such as the ability to manage one's thoughts, emotions, behaviours and interactions with others. In addition, social, cultural, economic, political and environmental factors have a role to play as do specific psychological and personality, and  genetic factors.
<br /><br />

Raising awareness and mobilizing efforts in support of mental health is necessary for addressing the situation.
<br /><br />

Mental health promotion involves creating an environment, which promotes healthy living and encourages people to adopt healthy lifestyle. Enabling environment through national mental health policies and legal frameworks are imperative for effective management of mental health disorders and providing overarching directions for ensuring mental health promotion. This calls for a multisectoral engagement and a life-course approach.
<br /><br />

Treatment of mental health disorders is of utmost importance. It calls for comprehensive strategies for promotion, prevention, treatment and recovery through a whole-of-government approach.  Policy makers should be encouraged to promote availability of and access to cost-effective treatment of common mental disorders at the primary health care level.

      </span>
      <div className="mt-5">
        <h3>Here are the links of different NGO's/GO which helps </h3>
        <ul>
          <li> <a href='http://www.mhmindia.org/' >Mental Health Mission India</a> </li>
          <li> <a href='http://www.mhmindia.org/' >Mental Health Mission India</a> </li>
          <li> <a href='http://www.mhmindia.org/' >Mental Health Mission India</a> </li>
          <li> <a href='http://www.mhmindia.org/' >Mental Health Mission India</a> </li>
          <li> <a href='http://www.mhmindia.org/' >Mental Health Mission India</a> </li>
        </ul>
      </div>
      <div className="mt-5">
        <h3>Contact</h3>
        <p> Phone: +91-0804-6110007</p>
        <p>National Health Helpline Toll free Number: 1800-180-1104 (NHP Voice Web)</p>
        <p>
          {' '}
          E-Mail:<a href="mailto:nhp@nhp.gov.in"> nhp@nhp.gov.in</a>{' '}
        </p>
        <p>
          {' '}
          Website:{' '}
          <a href="https://www.nhp.gov.in/">
            {' '}
            www.nhp.gov.in/
          </a>
        </p>
      </div>
    </Jumbotron>
  )
}

export default Help
