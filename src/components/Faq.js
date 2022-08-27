import React from 'react'
import Faq from 'react-faq-component'
import { Container, Jumbotron } from 'react-bootstrap'

const data = {
  title: 'FAQs Mental Health',
  rows: [
    {
      title: 'Is a person having mental problem means mad ?',
      content: `
      No, mental disease is not insanity. Many times people do not even know that they are victim of this disease. Problems like depression and anxiety may begins with long term unresolved stress throughout the life. Psychological intervention at early stage can help a lot to come out of that situation but staying in such a situation for log time can result in severe mental problem which can be treated with the help of medicines and in association with psychological therapies.
      
      `,
    },
    {
      title:
        'What are life skills?',
      content: `Life skills are the adaptive and positive behaviors or abilities that enable individuals to deal with the demands and challenges of daily life effectively. These skills are also known as life skills can be learned and improved. Solicitation, time management, positive thinking, improving relationships, self-care, resilience as well as freedom from helpless habits, like being perfectionist, deflating or avoiding, etc. are some of the life skills that help the person to meet life's challenges he/she experienced.`,
    },
    {
      title: 'How emotional/psychological problems are different from mental disorder?',
      content: `The emotional or psychological problems arise due to our regular stress, conflicting relationships, poor coping mechanisms and poor social skills. They can be cured by developing insight into the problem, understanding one’s strengths and support in the environment, focused training and psycho-education while mental disorders are the behavioral or mental pattern that causes significant distress or impairment of personal functioning. Such features may be persistent, relapsing and remitting, or occur as a single episode. They are caused by the disturbances in brain chemistry. The medicines given by medical doctors and psychotherapies by clinical psychologist at right time can cure mental disorders too.`,
    },
    {
      title: 'How classroom interventions help students??',
      content: `Classroom interventions can help students to learn their abilities, traits, aptitudes and ones strengths for desired academic performance. Children are also given guidance as to which conditions they may perform in a better way. Therefore, student’s performance can be improved with proper guidance provided through classroom interventions.`,
    },
    {
      title:
        'Can a psychologist help in decision making?',
      content: `Yes, a psychologist can better help in decision making of any personal life conditions like choosing career goals, right person for relationship/marriage, job opportunity and so on. When person has many options in hand, he/she cannot think about various aspects at one time but a psychologist can help to see the pros and cones of the all the aspects related to the issue, which may make easier to take a right decision.
      `,
    },
    {
      title: 'Can a psychologist help to a mentally disabled child?',
      content: `Mentally challenged/disabled children have poor intellectual abilities required for that age. This is a neurodevelopment problem, so no medical treatment is available for this condition but psychological intervention can give training to the parents and the child to manage this condition in a right way with the help of special schools, systematic vocational training and individual education program.`,
    },
  ],
}

const styles = {
  bgColor: '#303030',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: 'white',
  arrowColor: 'white',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '10px',
  rowContentPaddingRight: '10px',
}

const config = {
  animate: true,
  arrowIcon: 'v',
  // tabFocus: true,
}

const faq = () => {
  return (
    <Container>
      <Jumbotron>
        <Faq data={data} styles={styles} config={config} />
      </Jumbotron>
    </Container>
  )
}

export default faq
