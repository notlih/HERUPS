import React from 'react'

import slide1 from '../../assets/image/interior/slider/pStatements.jpg';
import slide2 from '../../assets/image/interior/slider/cApplications.jpg';
import slide3 from '../../assets/image/interior/slider/fAid.jpg';
import slide4 from '../../assets/image/interior/slider/gBased.jpg';
import slide5 from '../../assets/image/interior/slider/events.png';

import corporateIcon from '../../assets/image/interior/feature/targeted.svg';
import landscapeIcon from '../../assets/image/interior/feature/easy.svg';
import interiorIcon from '../../assets/image/interior/feature/available.svg';

import parentImg from '../../assets/image/interior/student.jpg';
import resourceImg from '../../assets/image/interior/resourceStudent.jpg';

import project1 from '../../assets/image/interior/projects/1.png';

import { Icon } from 'react-icons-kit';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbble } from 'react-icons-kit/ionicons/socialDribbble';
import { socialInstagram } from 'react-icons-kit/ionicons/socialInstagram';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';

import member1 from '../../assets/image/interior/team/hilton.png';
import member2 from '../../assets/image/interior/team/harim.jpg';
import member3 from '../../assets/image/interior/team/ryan.png';
import member4 from '../../assets/image/interior/team/daniel.jpg';

import galleryImg1 from '../../assets/image/interior/gallery/1.jpg';
import galleryImg2 from '../../assets/image/interior/gallery/2.jpg';
import galleryImg3 from '../../assets/image/interior/gallery/3.jpg';
import galleryImg4 from '../../assets/image/interior/gallery/4.jpg';
import galleryImg5 from '../../assets/image/interior/gallery/5.jpg';

import { facebook } from 'react-icons-kit/fa/facebook';
import { github } from 'react-icons-kit/fa/github';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';
import { twitter } from 'react-icons-kit/fa/twitter';
import logo from '../../../../common/src/assets/image/interior/avocado.png';



/* interior dummy data list :-
- Navbar
- Banner
- Feature
- About
- Projects
- Team
- News
- Testimonial
- Gallery
- Newsletter
- Footer
  - menu widget
  - copyright
  - social links
*/
/* ------------------------------------ */
// Menu data
/* ------------------------------------ */
export const menuData = [
  {
    label: 'Resources',
    path: 'resources',
    offset: '80',
  },
  {
    label: 'Mentors',
    path: 'mentors',
    offset: '80',
  },
  {
    label: 'Contact Us',
    path: 'yourResources',
    offset: '80',
  },
  {
    label: 'Team',
    path: '#team',
    offset: '80',
  },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */

export const bannerData = {
  discount: '100%',
  discountLabel: 'COMMITTED TO A BETTER FUTURE',
  title: 'Let us stay in touch with you',
  text:
    'Provide us with you email address to sign up for the latest newsletters that will include resources, events, and deadlines regarding the higher education process. We\'re here to move ahead with you!',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      title: 'Personal Statements',
      link: '#1',
    },
    {
      id: 2,
      thumb_url: slide2,
      title: 'Higher Education Applications',
      link: '#1',
    },
    {
      id: 3,
      thumb_url: slide3,
      title: 'Financial Aid',
      link: '#1',
    },
    {
      id: 4,
      thumb_url: slide4,
      title: 'Gender-based Resources',
      link: '#1',
    }, 
    {
      id: 5,
      thumb_url: slide5,
      title: 'Events',
      link: '#1',
    },
    
  ],
};

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */

export const featureData = {
  title: 'OUR MISSION',
  slogan: 'We empower high school students to own their future',
  features: [
    {
      id: 1,
      icon: corporateIcon,
      title: 'Targeted',
      description:
        'Aimed to support over 2,000 students in South Seattle — with a focus on students who are underprivileged.',
    },
    {
      id: 2,
      icon: landscapeIcon,
      title: 'Easy to Use',
      description:
        'Designed to be accessible on multiple platforms, updated and maintained to ensure information reliability.',
    },
    {
      id: 3,
      icon: interiorIcon,
      title: 'Readily Available',
      description:
        '4+ mentors always available to answer your questions and address your concerns.',
    },
  ],
};

/* ------------------------------------ */
// User section data
/* ------------------------------------ */

export const userData = {
  title: 'Greetings, harim2000!',
  slogan: 'You are',
  features: [
    // {
    //   id: 1,
    //   icon: corporateIcon,
    //   title: 'Targeted',
    //   description:
    //     'Aimed to support over 2,000 students in South Seattle — with a focus on students who are underprivileged.',
    // },
    // {
    //   id: 2,
    //   icon: landscapeIcon,
    //   title: 'Easy to Use',
    //   description:
    //     'Designed to be accessible on multiple platforms, updated and maintained to ensure information reliability.',
    // },
    // {
    //   id: 3,
    //   icon: interiorIcon,
    //   title: 'Readily Available',
    //   description:
    //     '4+ mentors always available to answer your questions and address your concerns.',
    // },
  ],
};

/* ------------------------------------ */
// About section data
/* ------------------------------------ */

export const aboutData = {
  thumb_url: parentImg,
  title: 'Why this matters',
  text:
    'High school students who come from underprivileged backgrounds have difficulty navigating the resources required to pursue higher education. The focus of our project is in the South Seattle area, where most of us, the ones who made this website, started our journey to higher education. ',
  text2:
    'It is especially difficult for this population of students, as they often lack the information about the higher education process. Specifics of the higher education process, such as cost, accessibility, and benefits are not well detailed towards a person’s background. These students may also not know anyone from their family, or group of friends that has gone to college, so they experience more difficulty in finding resources and information related to the higher education process. It’s difficult feeling like you’re the only person in your situation, we know—we’ve been in your situation before. You’re not alone!',
};

export const aboutResources = {
  thumb_url: resourceImg,
  title: 'Higher Education Resources for Underprivileged Students',
  text:
    'It’s intimidating to confront the process of discovering resources in pursuing higher education. We aim to empower underprivileged students in the South Seattle area with information for them to consider taking action.',
  text2:
    'We hope to inform people, we can provide them the power to move forward in accomplishing their goals of post-secondary education. This project offers a way for students to get in contact with mentors when they have questions related to life after high school—aiming to inspire students of new pathways that they can pursue and find passion in. This website will also inform its users of contact information for various organizations that can be reached out to for assistance with more information. We intend to develop a better, more intuitive method to organize all of the resources available to support the students like you.',
};

/* ------------------------------------ */
// Projects section data
/* ------------------------------------ */

export const projectData0 = {
  title: 'First-generation',
  slogan: 'You\'re the first from your family...',
  thumb_url: project1,
  projects: [
    {
      id: 1,
      text: 
        'The Husky Promise',
      text2:
        'The Husky Promise guarantees that the students of Washington state will not let financial trouble get in the way of discovering their potential. The program guarantees full tuition and the standard fees will be covered by grant or scholarship support. The student must be a Washington state resident and meet all eligibility criteria for the Pell Grant program.',
    },
    {
      id: 2,
      text:
        'College Parents of America',
      text2:
        'This organization offers many scholarships and grant programs for first-generation college students. Their main goals are to educate the students about the various options for financing college, guiding them through the most critical stage of life.',
    },
  ],
};

export const projectData1 = {
  title: 'Section 2',
  slogan: 'Section 2',
  thumb_url: project1,
  projects: [
    {
      id: 1,
      text: 'Test 1',
      text2:
        'Test 2',
    },
    {
      id: 2,
      text:
        'Test 3',
      text2:
        'Test 4',
    },
  ],
};

export const userResources = {
  title: 'Personalized Resources',
  slogan: 'Here are some resources tailored to your needs',
  thumb_url: project1,
  projects: [
    {
      id: 1,
      text: 
      'Husky Promise',
      text2:
        'The Husky Promise guarantees that the students of Washington state will not let financial trouble get in the way of discovering their potential. The program guarantees full tuition and the standard fees will be covered by grant or scholarship support. The student must be a Washington state resident and meet all eligibility criteria for the Pell Grant program.',
    },
    {
      id: 2,
      text:
        'Gates Millennium Scholars Program',
      text2:
        'The Gates Scholarship is a highly competitive program for exception, Pell-eligable, minority, high school seniors. Scholarships are awarded to 300 students every year. The scholars receive full funding for the cost of attendance, that is already not covered by the other financial aid. An ideal candidate will have outstanding record in high school, leadership ability, and exceptional personal success skills.',
    },
    {
      id: 3,
      text:
        'College Success Foundation',
      text2:
        'The College Success Foundation provides scholarships and system of supports for low-income familiies, students of color, and first-generation college students. The program supports a wide range of students from middle schoolers all the way to college students.',
    },
  ],
};

export const projectData2 = {
  title: 'Section 3',
  slogan: 'Section 3',
  thumb_url: project1,
  projects: [
    {
      id: 1,
      text: 'Test 1',
      text2:
        'Test 2',
    },
    {
      id: 2,
      text:
        'Test 3',
      text2:
        'Test 4',
    },
  ],
};

export const projectData3 = {
  title: 'Section 4',
  slogan: 'Section 4',
  thumb_url: project1,
  projects: [
    {
      id: 1,
      text: 'Test 1',
      text2:
        'Test 2',
    },
    {
      id: 2,
      text:
        'Test 3',
      text2:
        'Test 4',
    },
  ],
};

/* ------------------------------------ */
// Team section data
/* ------------------------------------ */

export const teamData = {
  title: 'OUR TEAM',
  slogan: 'We\'re students like you',
  members: [
    {
      id: 1,
      avatar: member1,
      name: 'Hilton Vo',
      designation: 'Project Manager',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialInstagram} />,
          url: 'https://www.instagram.com/hilt.on/',
        },
        {
          id: 4,
          icon: <Icon icon={github} />,
          url: 'http://github.com/notlih/',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 2,
      avatar: member2,
      name: 'Harim Sanchez',
      designation: 'Developer',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialInstagram} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={github} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 3,
      avatar: member3,
      name: 'Ryan Dang',
      designation: 'Data Analyst',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialInstagram} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={github} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 4,
      avatar: member4,
      name: 'Daniel In',
      designation: 'UX/UI Designer',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialInstagram} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={github} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// News section data
/* ------------------------------------ */
export const newsData = [
  {
    id: 1,
    title: 'First-generation',
    excerpt:
      'People who come from families where they will be the first person from their family to pursue higher education.',
    link_text: 'Be proud!',
    link_url: '#first-gen',
  },
  {
    id: 2,
    title: 'Person of Color',
    excerpt:
      'Students who self-identify as non-white, referred to some as ethnic "minority" students. Students of color may be underprivileged, and/or be marginalized by institutions/policies. ',
    link_text: 'We\'re with you',
    link_url: '#low-income',
  },
  {
    id: 3,
    title: 'Low-income',
    excerpt:
      <span>Those who come from a low-income background or family. The guidelines for low-income are defined <a href="https://www2.ed.gov/about/offices/list/ope/trio/incomelevels.html">here</a>.</span>,
    link_text: 'No cost to you',
    link_url: '#low-income',
  },
  {
    id: 4,
    title: 'Undocumented',
    excerpt:
      'Those who are not documented as citizens in this country often find themselves scraping for educational resources, some of which require you to be a citizen.',
    link_text: 'We\'ve got your back',
    link_url: '#low-income',
  },
];

/* ------------------------------------ */
// Identify section data
/* ------------------------------------ */
export const identifyData = [
  {
    id: 1,
    title: 'First-generation',
    excerpt:
      'People who come from families where they will be the first person from their family to pursue higher education.',
    link_text: 'Be proud!',
    link_url: '#first-gen',
  },
  {
    id: 2,
    title: 'Low-income',
    excerpt:
      <span>Those who come from a low-income background or family. The guidelines for low-income are defined <a href="https://www2.ed.gov/about/offices/list/ope/trio/incomelevels.html">here</a>.</span>,
    link_text: 'No cost to you',
    link_url: '#low-income',
  },
];

/* ------------------------------------ */
// Testimonial data
/* ------------------------------------ */
export const testimonialData = {
  title: 'EXPERIENCES',
  slogan: 'From Past and Present Users',
  reviews: [
    {
      id: 0,
      name: 'Jair S.',
      designation: 'Student',
      username: '@UW',
      account_url: 'http://www.washington.edu/',
      comment:
        'HERUPS provides extremely helpful mentors who are knowledgeable and responsive to questions that I have about higher education. I was struggling with writing my personal statement but after meeting with my mentor and learning about resources, I have regained my confidence. Go Huskies!',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
    },
    {
      id: 1,
      name: 'Jennifer N.',
      designation: 'Business Student',
      username: '@Seattle U',
      account_url: 'https://www.seattleu.edu/',
      comment:
        'HERUPS has walked me through the FAFSA process as well as providing assistance with my personal statements. They kept me updated through emails and provided me with advice towards my process to higher education.',
      avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    },
    {
      id: 2,
      name: 'Anna L.',
      designation: 'Freshman Student',
      username: '@UW',
      account_url: 'http://www.washington.edu/',
      comment:
        'The biggest fear that I had was figuring out how to pay for college. The mentors at HERUPS provided information about colleges and organizations that had scholarships specific to my identity as a low-income, first-generation college student. After applying to multiple scholarships and successfully getting approved, I will be able to attend college without any financial worries.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Betsy S.',
      designation: 'Student',
      username: '@SSC',
      account_url: 'https://southseattle.edu/',
      comment:
        'Thanks to HERUPS, I was able to learn about events within my neighborhood that were providing information and assistance regarding higher education. I was able to attend these free events and learn about educational programs aligned with my passions.',
      avatar:
        'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
      id: 4,
      name: 'Joe S.',
      designation: 'Alumni',
      username: '@Bellevue College',
      account_url: 'https://www.bellevuecollege.edu/',
      comment:
        'As high school progressed, I felt left out as my peers were talking about college, something that I hadn’t planned for. My parents had no experience navigating the higher education process and an income that could not support the journey. I wish I had discovered HERUPS, their resources and mentorship would have given me the knowledge and funding that I never received.',
      avatar:
        'https://randomuser.me/api/portraits/men/54.jpg',
    },
  ],
};

/* ------------------------------------ */
// Gallery data
/* ------------------------------------ */

export const galleryData = [
  {
    id: 1,
    thumb_url: galleryImg1,
    name: 'First-generation',
    link: '#',
  },
  {
    id: 2,
    thumb_url: galleryImg2,
    name: 'Immigrant',
    link: '#',
  },
  {
    id: 3,
    thumb_url: galleryImg3,
    name: 'Low-income',
    link: '#',
  },
  {
    id: 4,
    thumb_url: galleryImg4,
    name: 'Undocumented',
    link: '#',
  },
  {
    id: 5,
    thumb_url: galleryImg5,
    name: 'Person of Color',
    link: 'https://ih0.redbubble.net/image.433199449.1488/sn,x1000-pad,750x1000,f8f8f8.u3.jpg',
  },
];

/* ------------------------------------ */
// Newsletter data
/* ------------------------------------ */
export const newsletterData = {
  title: 'NEWSLETTER?',
  slogan: 'Should there be one here? Probably not.',
  note:
    'Note: This is what a note looks like here. Wow! Very cool!',
};

/* ------------------------------------ */
// Footer data
/* ------------------------------------ */

export const footerData = {
  logo: logo,
  mail: <span>Contact us: <a href="mailto:freshavocado2020@gmail.com">freshavocado2020@gmail.com</a></span>,
  phone: <a href="https://ischool.uw.edu/">Information School, University of Washington</a>,
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={facebook} />,
      name: 'facebook',
      link: '#',
    },
    {
      id: 2,
      icon: <Icon icon={github} />,
      name: 'github',
      link: '#',
    },
    {
      id: 3,
      icon: <Icon icon={googlePlus} />,
      name: 'googlePlus',
      link: '#',
    },
    {
      id: 4,
      icon: <Icon icon={twitter} />,
      name: 'twitter',
      link: '#',
    },
  ],
  menuWidgets: [
    {
      id: 1,
      title: 'ABOUT US',
      menu: [
        {
          id: 1,
          text: 'Support Center',
          link: '#',
        },
        {
          id: 2,
          text: 'Customer Support',
          link: '#',
        },
        {
          id: 3,
          text: 'About Us',
          link: '#',
        },
        {
          id: 4,
          text: 'Copyright',
          link: '#',
        },
        {
          id: 5,
          text: 'Popular Campaign',
          link: '#',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// social profile
/* ------------------------------------ */
export const socialProfile = [
  {
    id: 1,
    icon: 'flaticon-facebook-logo',
    link: '#',
  },
  {
    id: 2,
    icon: 'flaticon-twitter-logo-silhouette',
    link: '#',
  },
  {
    id: 3,
    icon: 'flaticon-instagram',
    link: '#',
  },
  {
    id: 4,
    icon: 'flaticon-tumblr-logo',
    link: '#',
  },
  {
    id: 5,
    icon: 'flaticon-dribble-logo',
    link: '#',
  },
];
