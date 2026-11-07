import { GradeLevel, Activity, DisciplineShowcase, QuoteItem, CurriculumPartner } from '../types';

export const SCHOOL_INFO = {
  name: 'Oak International Christian School',
  shortName: 'Oak International',
  tagline: 'Learner Today, Leader Tomorrow.',
  website: 'www.oakinternationalchristianschool.com',
  phone: '0783 368459',
  phoneFormatted: '+256 783 368459',
  phoneTel: 'tel:+256783368459',
  email: 'oakinternationalchristiansch@gmail.com',
  emailMailto: 'mailto:oakinternationalchristiansch@gmail.com',
  address: 'Kira-Kasangati Road, Buwate, Kira Division, Wakiso District, Uganda',
  whatsappUrl: 'https://wa.me/256783368459?text=Hello%20Oak%20International%20Christian%20School%2C%20I%20would%20like%20to%20make%20an%20enquiry.',
  googleMapsUrl: 'https://maps.google.com/?q=Kira-Kasangati+Road,+Buwate,+Kira+Division,+Wakiso+District,+Uganda',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.825272661858!2d32.6288!3d0.3951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb7e8d6722d3%3A0x7d6f5f9aa9b45bf9!2sBuwate%2C%20Kira%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug',
  flierImageUrl: '/assets/aistudio/image_99934b46.png',
  logoImageUrl: '/assets/aistudio/oak_school_logo_transparent.png',
  curriculum: 'Accelerated Christian Education (ACE)',
  mission: 'Our mission is to equip each learner with essential life skills and Godly character through academic and physical programs based on the Word of God.',
  goal: 'God-fearing, dependable, transformational leaders in any sphere of society.',
  welcomeIntro: 'Oak International Christian School is a private Christian school raising outstanding leaders through the Accelerated Christian Curriculum and other programs. We seek to provide an educational experience that will nurture an outstanding leader.',
  aceSummary: 'We use the Accelerated Christian Education curriculum (ACE), which places strong emphasis on individualised learning, mastery, goal-setting and Christian character development. Our system allows the school to identify the learner\'s current academic level and provide appropriate learning goals and support.',
  campusHours: 'Monday – Friday: 7:30 AM – 4:30 PM',
  instagramUrl: 'https://www.instagram.com/oicacademyug/',
  instagramHandle: '@oicacademyug',
  facebookUrl: 'https://www.facebook.com/OICAcademyUg/',
  facebookHandle: 'OICAcademyUg',
  xUrl: 'https://x.com/OICAcademyUg?lang=en',
  xHandle: '@OICAcademyUg',
};

// Pillars directly featured on the official school flier
export const FLIER_PILLARS = [
  {
    title: 'Academic Excellence',
    description: 'Individualised, mastery-based instruction allowing learners to progress according to their abilities.',
    highlight: 'Mastery & Self-Paced Learning'
  },
  {
    title: 'Godly Character',
    description: 'Biblical principles and Scriptural character traits intentionally woven into daily education.',
    highlight: 'Word of God Foundation'
  },
  {
    title: 'Life Skills',
    description: 'Practical competencies, physical stamina, and creative clubs developing well-rounded young leaders.',
    highlight: 'Holistic Pupil Growth'
  }
];

export const CORE_PHILOSOPHY = [
  {
    id: 'academic-excellence',
    title: 'Academic Excellence',
    description: 'Individualised learning that allows each learner to progress according to their abilities and achieve mastery.',
    principle: 'Mastery over memorisation; advancing only when true comprehension is demonstrated.'
  },
  {
    id: 'christian-character',
    title: 'Christian Character',
    description: 'Christian character and Biblical principles are an important part of our educational philosophy.',
    principle: 'Instilling integrity, reverence for God, humility, and compassion in everyday school life.'
  },
  {
    id: 'leadership-development',
    title: 'Leadership Development',
    description: 'We are training leaders — first for today, and then, tomorrow.',
    principle: 'Cultivating dependability, proactive initiative, and purposeful service in society.'
  }
];

export const LEADERSHIP_QUOTES: QuoteItem[] = [
  {
    quote: 'Everything rises and falls on leadership.',
    context: 'Core School Tenet'
  },
  {
    quote: 'Leadership is one life influencing another.',
    author: 'John C. Maxwell',
    context: 'Foundational Leadership Philosophy'
  },
  {
    quote: 'Christian character and Biblical principles are an important part of our educational philosophy.',
    context: 'Educational Philosophy'
  },
  {
    quote: 'Discover a personalised, mastery-based Christian learning environment.',
    context: 'Academic Vision'
  },
  {
    quote: 'Learners have structured goals that allow them to progress according to their learning needs while grooming them to stand out in society.',
    context: 'Learner Development'
  },
  {
    quote: 'We are training leaders — first for today, and then, tomorrow.',
    context: 'School Motto'
  }
];

export const GRADE_LEVELS: GradeLevel[] = [
  {
    id: 'step-by-step',
    name: 'Step by Step',
    ageRange: '3 Years',
    badge: 'Kindergarten & Early Years',
    description: 'This level presents an introduction to the school environment and increases independence for the little ones. It gives them a strong foundation for preschool.',
    highlights: [
      'Gentle social and environmental acclimatisation',
      'Nurturing self-help habits and early independence',
      'Christ-centred warmth and caring supervision',
      'Solid preparation for structured preschool learning'
    ],
    milestone: 'Developing self-confidence, listening skills, and school routine familiarity.'
  },
  {
    id: 'preschool',
    name: 'Preschool',
    ageRange: '4–5 Years',
    badge: 'Pre-Reading Foundation',
    description: 'This program features a sequence of concepts and skills needed to prepare children to "be ready to read".',
    highlights: [
      'Targeted pre-reading conceptual sequencing',
      'Auditory discrimination and fine motor development',
      'Biblical stories and moral character foundations',
      'Confidence and communication building'
    ],
    milestone: 'Mastering phonemic readiness and essential early childhood coordination.'
  },
  {
    id: 'abcs-with-ace',
    name: "ABC's with ACE and Christi",
    ageRange: '5–6 Years',
    badge: 'Phonics & Literacy',
    description: 'This is a multisensory, phonetics-based Learning-to-Read program designed to prepare a student for the ACE self-instructional PACE program.',
    highlights: [
      'Multisensory phonetics Learning-to-Read curriculum',
      'Bridge to individual self-instructional PACE workbooks',
      'Character-building animal stories and scripture memory',
      'Independent study habits and classroom etiquette'
    ],
    milestone: 'Reading full sentences independently and preparing for PACE self-instruction.'
  },
  {
    id: 'grades-1-12',
    name: 'Grade 1–12',
    ageRange: 'Grade 1 Through Grade 12',
    badge: 'PACE Mastery & College Readiness',
    description: 'Students progress at their own pace, without pressure to keep up with a group, ensuring mastery of subject concepts before advancing to the next level. Goal-setting and individual instruction give students a proven edge at higher levels of education. Students can then join institutions of higher learning both here in Uganda and abroad.',
    highlights: [
      'Self-instructional PACEs (Packets of Accelerated Christian Education)',
      '100% mastery testing before advancing to next modules',
      'Daily personal goal-setting and self-discipline',
      'Exit routes to prestigious universities in Uganda and internationally'
    ],
    milestone: 'Graduating with ICCE qualification, eligible for university entry locally & globally.'
  }
];

export const EXTRACURRICULAR_ACTIVITIES: Activity[] = [
  {
    id: 'swimming',
    title: 'Swimming',
    category: 'Sports',
    description: 'Supervised aquatic training focusing on stroke mechanics, water safety, stamina, and cardiovascular health.',
    benefits: 'Builds physical resilience, personal discipline, and lifesaving confidence.',
    scheduleNote: 'Weekly sessions under trained aquatic instructors',
    iconType: 'swim'
  },
  {
    id: 'cookery',
    title: 'Cookery',
    category: 'Life Skills',
    description: 'Hands-on domestic culinary education teaching kitchen hygiene, nutritional awareness, and food preparation.',
    benefits: 'Fosters practical self-reliance, teamwork, and wholesome hospitality.',
    scheduleNote: 'Practical culinary sessions in domestic science',
    iconType: 'cook'
  },
  {
    id: 'crochet',
    title: 'Crochet',
    category: 'Life Skills',
    description: 'Artistic fiber craft fostering fine-motor dexterity, pattern sequencing, focus, and patience.',
    benefits: 'Encourages mindful concentration, creative design, and steady perseverance.',
    scheduleNote: 'Hands-on creative textile club',
    iconType: 'craft'
  },
  {
    id: 'ballet',
    title: 'Ballet',
    category: 'Performing Arts',
    description: 'Classical dance discipline focusing on posture, poise, musicality, flexibility, and physical grace.',
    benefits: 'Develops physical elegance, body awareness, and artistic expression.',
    scheduleNote: 'Classical movement and posture training',
    iconType: 'dance'
  },
  {
    id: 'music',
    title: 'Music',
    category: 'Creative Arts',
    description: 'Instrumental instruction, vocal harmony, rhythmic training, and worship music appreciation.',
    benefits: 'Enhances cognitive focus, auditory development, and joyful expression to praise God.',
    scheduleNote: 'Vocal, keyboard, and rhythm training',
    iconType: 'music'
  },
  {
    id: 'table-tennis',
    title: 'Table Tennis',
    category: 'Sports',
    description: 'Fast-paced table sport emphasizing hand-eye coordination, quick reflexes, tactical anticipation, and agility.',
    benefits: 'Sharpens mental focus, spatial awareness, and healthy competitive spirit.',
    scheduleNote: 'Indoor tactical sport sessions',
    iconType: 'table-tennis'
  },
  {
    id: 'volleyball',
    title: 'Volleyball',
    category: 'Sports',
    description: 'Energetic team court sport teaching defensive positioning, setting, spiking, and cooperative court play.',
    benefits: 'Strengthens collective communication, athletic endurance, and sportsmanship.',
    scheduleNote: 'Outdoor team court practice',
    iconType: 'volleyball'
  },
  {
    id: 'football',
    title: 'Football',
    category: 'Sports',
    description: 'Field football soccer emphasizing fundamental ball control, passing, tactical teamwork, and stamina.',
    benefits: 'Builds cardiovascular health, camaraderie, tactical mindset, and athletic confidence.',
    scheduleNote: 'Pitch training and inter-house matches',
    iconType: 'football'
  }
];

export const DISCIPLINE_SHOWCASES: DisciplineShowcase[] = [
  {
    id: 'disc-1',
    title: 'PACE Mastery & Independent Study',
    category: 'Academics',
    description: 'Students work in individualised Learning Center offices, setting personal daily academic goals and mastering concepts at 80%+ before testing.',
    scripturalPrinciple: '"Whatever you do, work at it with all your heart, as working for the Lord." — Colossians 3:23',
    outcomes: ['Eliminates learning gaps', 'Fosters self-motivation', 'Develops critical reasoning']
  },
  {
    id: 'disc-2',
    title: 'Biblical Character & Scripture Memory',
    category: 'Character',
    description: 'Each curriculum PACE integrates a specific Christian character trait—honesty, diligence, loyalty, and attentiveness—along with Scripture memory.',
    scripturalPrinciple: '"Train up a child in the way he should go; even when he is old he will not depart from it." — Proverbs 22:6',
    outcomes: ['Moral discernment', 'Respect for authority', 'Compassionate community spirit']
  },
  {
    id: 'disc-3',
    title: 'Leadership Development',
    category: 'Leadership',
    description: 'Grooming pupils to take initiative, articulate ideas with poise, and influence peers through Christ-like servanthood first today, and then tomorrow.',
    scripturalPrinciple: '"Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity." — 1 Timothy 4:12',
    outcomes: ['Public speaking confidence', 'Dependability in duties', 'Proactive problem-solving']
  },
  {
    id: 'disc-4',
    title: 'Life Skills & Creative Arts',
    category: 'Life Skills',
    description: 'From cookery and crochet to ballet and music, children develop domestic self-reliance, creative dexterity, and artistic praise.',
    scripturalPrinciple: '"She selects wool and flax and works with eager hands." — Proverbs 31:13',
    outcomes: ['Practical independence', 'Fine motor coordination', 'Creative self-expression']
  },
  {
    id: 'disc-5',
    title: 'Physical Sports & Athleticism',
    category: 'Activities',
    description: 'Football, swimming, volleyball, and table tennis build stamina, agility, team coordination, and healthy sportsmanship under Godly coaching.',
    scripturalPrinciple: '"Do you not know that your bodies are temples of the Holy Spirit?" — 1 Corinthians 6:19',
    outcomes: ['Cardiovascular health', 'Teamwork & camaraderie', 'Resilience under challenge']
  }
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Admissions Inquiry & School Visit',
    description: 'Schedule a visit to our Buwate campus along Kira-Kasangati Road to tour our individualised Learning Center and meet our supervisors.'
  },
  {
    step: '02',
    title: 'Diagnostic Placement Assessment',
    description: 'Every new student undertakes an ACE diagnostic assessment in Math, English, and Reading to pinpoint their exact concept mastery level.'
  },
  {
    step: '03',
    title: 'Personalised PACE Prescription',
    description: 'An individual curriculum pathway is prescribed to bridge any concept gaps and set the learner on a self-paced trajectory to academic excellence.'
  },
  {
    step: '04',
    title: 'Enrolment & Student Induction',
    description: 'The learner is assigned their dedicated Learning Center office workstation, daily goal card, and warmly welcomed into the Oak Christian community.'
  }
];

export const CURRICULUM_PARTNERS: CurriculumPartner[] = [
  {
    name: 'Accelerated Christian Education (A.C.E.)',
    short: 'A.C.E.',
    motto: 'Reaching the world for Christ... one child at a time',
    description: 'Internationally recognized Biblical individualised learning curriculum powering Christian education worldwide.',
    logo: '/assets/aistudio/partner_ace.png'
  },
  {
    name: 'Accelerated Education Enterprises (AEE)',
    short: 'AEE',
    motto: 'Empowering Educational Excellence',
    description: 'Providing curriculum materials, training, and academic support for Christian schools.',
    logo: '/assets/aistudio/partner_aee.png'
  },
  {
    name: 'International Certificate of Christian Education (ICCE)',
    short: 'ICCE',
    motto: 'Recognized Global Christian Qualification',
    description: 'Accreditation framework granting graduates entrance into universities locally and worldwide.',
    logo: '/assets/aistudio/partner_icce.png'
  },
  {
    name: 'SkillsPro Group',
    short: 'SkillsPro',
    motto: 'FutureKids & FutureTeacher',
    description: 'Specialised educational and technological enrichment programs for teachers and learners.',
    logo: '/assets/aistudio/partner_skillspro.png'
  }
];

