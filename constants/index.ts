// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/about', key: 'about', label: 'About Us' },
    { href: '/service', key: 'services', label: 'Services' },
    { href: '/price', key: 'price ', label: 'Price ' },
    { href:'/team', key: 'team ', label: 'Our Team'},
    
  ];
  
 
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  
  export const FEATURES = [
    {
      title: '3D Mapper',
      icon: '/map.svg',
      variant: 'red',
      description:
        'We provide a solution for your site and interactive ways of exploring marketability features',
    },
    {
      title: 'Consulting',
      icon: '/calendar.svg',
      variant: 'green',
      description:
        "Schedule an consultation for brief of projects at 0 costs!",
    },
    {
      title: 'VR and AR Planning',
      icon: '/tech.svg',
      variant: 'green',
      description:
        'Using latest Technology, Giving you best outputs for design mastery',
    },
    {
      title: 'Projects Location Monitoring',
      icon: '/location.svg',
      variant: 'orange',
      description:
        'We Offer you Loka.System that integrate each projects through single app monitoring for ease of use',
    },
  ];
  
  export const FOOTER_LINKS = [
    {
      title: 'Quick Links',
      links: [
        'About Lokakita',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'ucup@gmail.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg', 
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };

  export interface TeamMember {
    name: {
      first: string;
      last: string;
    };
    email: string;
    location: {
      city: string;
      country: string;
    };
    picture: {
      large: string;
    };
    login: {
      uuid: string;
    };
    cell: string;
    phone: string;
  }
  
  