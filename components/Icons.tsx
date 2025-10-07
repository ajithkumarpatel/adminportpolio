import React from 'react';

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Facebook</title>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Instagram</title>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Email</title>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

export const SendIcon: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

// Tech Icons
export const ReactIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"></circle>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
);
export const TypescriptIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path fill="#007ACC" d="M0 0h128v128H0z"></path>
      <path fill="#FFF" d="M30.3 93.7V34.3h11.4v54.2h32.1v5.2H30.3zM85.7 34.3h-19l-4.5 13.6h.1c1.9-4.1 5.3-13.6 15-13.6 10.3 0 18.5 7.6 18.5 18.9v30.5h-11.4V54.4c0-5.8-3.4-9.8-9-9.8-4.9 0-9.2 3.8-10.6 8.9l-4.2 13.5v16.7h-11.4V34.3h.1z"></path>
    </svg>
);
export const PythonIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.25 8.5V4.75a2 2 0 012-2h4.5a2 2 0 012 2v4a2 2 0 01-2 2h-4a.5.5 0 00-.5.5v0a.5.5 0 00.5.5h3.5a2 2 0 012 2v3.75a2 2 0 01-2 2h-4.5a2 2 0 01-2-2v-4a2 2 0 012-2h4a.5.5 0 00.5-.5v0a.5.5 0 00-.5-.5H12a3.5 3.5 0 01-3.5-3.5v-1A3.5 3.5 0 0112 5h4.25" stroke="#FFD43B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.75 15.5V19.25a2 2 0 01-2 2h-4.5a2 2 0 01-2-2v-4a2 2 0 012-2h4a.5.5 0 00.5-.5v0a.5.5 0 00-.5-.5h-3.5a2 2 0 01-2-2v-3.75a2 2 0 012-2h4.5a2 2 0 012 2v4a2 2 0 01-2 2h-4a.5.5 0 00-.5.5v0a.5.5 0 00.5.5H12a3.5 3.5 0 013.5 3.5v1A3.5 3.5 0 0112 19h-4.25" stroke="#4B8BBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
export const TailwindIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18.25C12 18.25 12.75 16.75 14.25 15.25C15.75 13.75 18 12.25 18 10C18 7.79086 16.2091 6 14 6C11.7909 6 10 7.79086 10 10C10 12.25 12 18.25 12 18.25Z" fill="#38BDF8"/>
      <path d="M6 12C6 12 6.75 10.5 8.25 9C9.75 7.5 12 6 12 3.75C12 1.54086 10.2091 -0.000000437114 8 -0.000000437114C5.79086 -0.000000437114 4 1.54086 4 3.75C4 6 6 12 6 12Z" fill="#38BDF8"/>
    </svg>
);
export const FirebaseIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.90103 16.4322L10.099 4.65181C10.2526 4.39973 10.5843 4.35427 10.8017 4.57165L12.5647 6.33468L6.46324 16.7327L3.90103 16.4322Z" fill="#FFC24A"/>
        <path d="M15.466 10.8753L10.5113 2.37341C10.3345 2.08316 9.89617 2.1554 9.79255 2.4842L7.38501 10.415L15.466 10.8753Z" fill="#F4BD42"/>
        <path d="M19.099 15.4284L12.4651 3.51878C12.3025 3.24921 11.9366 3.20375 11.7192 3.42113L10.099 5.04135L17.1852 16.4323L19.099 15.4284Z" fill="#FFA000"/>
        <path d="M3.90088 16.4323L10.4151 19.5157C10.6672 19.6193 10.9458 19.4897 11.0494 19.2376L15.4659 10.8752L6.46313 16.7327L3.90088 16.4323Z" fill="#F6820C"/>
    </svg>
);
export const GitIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5 14.5C21.5 14.2239 21.2761 14 21 14H18.5V10H21C21.2761 10 21.5 9.77614 21.5 9.5C21.5 9.22386 21.2761 9 21 9H18.5V7C18.5 5.34315 17.1569 4 15.5 4H5C4.44772 4 4 4.44772 4 5V6.5C4 7.05228 4.44772 7.5 5 7.5H11.5V16.5H5C4.44772 16.5 4 16.9477 4 17.5V19C4 19.5523 4.44772 20 5 20H15.5C17.1569 20 18.5 18.6569 18.5 17V15H21C21.2761 15 21.5 14.7761 21.5 14.5Z" fill="#F05033"/>
        <circle cx="8" cy="6" r="2" fill="#F05033"/>
        <circle cx="8" cy="18" r="2" fill="#F05033"/>
        <circle cx="15" cy="17" r="2" fill="#F05033"/>
    </svg>
);
export const JavascriptIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
        <path d="M30.6 92.5c1.4-2.7 2-4.2 3.1-6.2 1.1-2.1 2.8-4.2 4.9-6.2 2.1-2.1 4.5-3.8 7.2-5.3 2.7-1.4 5.4-2.1 8.3-2.1 3.3 0 6.3.9 8.9 2.8 2.6 1.8 4.5 4.3 5.6 7.4 1.1 3.1 1.6 6.2 1.6 9.3 0 3.8-.8 7.4-2.3 10.6-1.5 3.2-3.8 5.8-6.7 7.6-3 1.8-6.4 2.7-10.2 2.7-4.1 0-7.7-.8-10.9-2.4-3.2-1.6-5.8-3.7-7.8-6.4-2.1-2.7-3.4-5.6-4.2-8.8l12.8-5.3c.5 1.8 1.4 3.3 2.6 4.6 1.2 1.3 2.7 2.3 4.5 3.1 1.8.8 3.7 1.2 5.7 1.2 2.5 0 4.7-.6 6.5-1.7 1.8-1.1 3.2-2.7 4.1-4.7s1.3-4.1 1.3-6.3c0-2.3-.5-4.5-1.5-6.4-1-1.9-2.5-3.5-4.4-4.6-1.9-1.2-4.1-1.7-6.5-1.7-2.1 0-4.1.4-5.9 1.2-1.8.8-3.3 1.9-4.5 3.3s-2.1 2.9-2.7 4.5c-.6 1.6-1 3.3-1.2 5.1l-13-4.2zM81.1 92.2c1.4-2.6 2-4.1 3.1-6.1 1.1-2 2.8-4.1 4.9-6.1 2.1-2 4.5-3.7 7.2-5.2 2.7-1.4 5.4-2.1 8.3-2.1 3.8 0 7 .8 9.5 2.5 2.5 1.6 4.4 3.8 5.7 6.4 1.3 2.7 1.9 5.5 1.9 8.5 0 3.7-.8 7.3-2.3 10.5-1.5 3.2-3.8 5.8-6.7 7.6-3 1.8-6.4 2.7-10.2 2.7-4.1 0-7.7-.8-10.9-2.4-3.2-1.6-5.8-3.7-7.8-6.4-2.1-2.7-3.4-5.6-4.2-8.8l12.8-5.3c.5 1.8 1.4 3.3 2.6 4.6 1.2 1.3 2.7 2.3 4.5 3.1 1.8.8 3.7 1.2 5.7 1.2 2.5 0 4.7-.6 6.5-1.7 1.8-1.1 3.2-2.7 4.1-4.7.9-2 1.3-4.1 1.3-6.3 0-2.3-.5-4.5-1.5-6.4-1-1.9-2.5-3.5-4.4-4.6-1.9-1.2-4.1-1.7-6.5-1.7-2.1 0-4.1.4-5.9 1.2-1.8.8-3.3 1.9-4.5 3.3s-2.1 2.9-2.7 4.5c-.6 1.6-1 3.3-1.2 5.1l-13-4.2z"/>
    </svg>
);
export const NextJSIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="64" fill="#000"/>
        <path d="M83.5 107.5h-9.8L54 38.3h9.3l14.8 51.1L92.7 38.3h9.3L83.5 107.5z" fill="#fff"/>
        <path d="M45.6 107.5V38.3H36v69.2h9.6z" fill="#fff"/>
    </svg>
);
export const NodeJSIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.722 21.333h.556c4.86 0 8.8-3.939 8.8-8.8 0-4.86-3.94-8.8-8.8-8.8h-.556c-4.86 0-8.8 3.94-8.8 8.8 0 4.861 3.94 8.8 8.8 8.8z" fill="#8CC84B"/>
        <path d="M10.169 16.51l5.88-9.825-4.256.602-1.624 3.018 4.256-.583-1.644 3.102 3.111-.426-5.466 8.526 4.13-.575 1.336-2.522-3.874.525 1.353-2.55-2.275.308-4.27 6.702z" fill="#fff"/>
    </svg>
);
export const MongoDBIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.112 3.829c-1.366-.54-3.037-.829-4.779-.829-1.742 0-3.413.289-4.779.829C4.546 4.543 3 6.458 3 8.583v6.834c0 2.125 1.546 4.04 3.554 4.754 1.366.54 3.037.829 4.779.829 1.742 0 3.413-.289 4.779-.829 2.008-.714 3.554-2.629 3.554-4.754V8.583c0-2.125-1.546-4.04-3.554-4.754z" fill="#4DB33D"/>
        <path d="M11.333 4.02v15.96c-1.932-.417-3.333-1.383-3.333-2.483V6.503c0-1.1 1.4-2.066 3.333-2.483z" fill="#3C8D31"/>
        <path d="M12.667 4.02v15.96c1.932-.417 3.333-1.383 3.333-2.483V6.503c0-1.1-1.4-2.066-3.333-2.483z" fill="#FFF"/>
    </svg>
);
export const DockerIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.996 9.875c-1.722-.85-2.83-1.071-4.225-.972V5.539c-.933-.646-1.72-1.35-2.85-1.564-1.282-.244-3.064-.09-4.274.03l-.42 2.146c-1.15.547-2.37.892-3.493 1.055l-.014.073c-.043.21-.073.424-.09.642-.23.014-.445.044-.658.073l-.015.044-.044.204-.014.09-.015.073c-.014.073-.03.147-.044.22v.104c-.014.103-.014.205-.014.308 0 .044.015.073.015.117v.03c.015.09.015.176.03.264.015.015.015.03.015.044v.015l.38 1.405c.19.06.396.104.6.147l.09.015c.014 0 .03-.015.044-.015a.434.434 0 01.073.015c.176.014.352.03.528.03.03 0 .06-.015.09-.015.117.015.234.015.35.015.015 0 .03 0 .045-.015.044.015.073.015.117.015h.015c.073 0 .146-.015.22-.015.03 0 .044 0 .073-.015.044.015.09.015.132.015.03 0 .06 0 .09-.015.22-.015.44-.044.658-.09.015-.014.03-.014.045-.03a.434.434 0 01.073.015c.117 0 .234-.015.35-.015.045 0 .09 0 .132-.015.25-.015.483-.044.717-.073l.044-.015c.03 0 .044-.015.073-.015.015 0 .03-.015.044-.03.132-.03.264-.06.395-.09l.015-.014.06-.015c.102-.03.205-.06.307-.103l.03-.015c.06-.03.117-.06.176-.09l.015-.015c.044-.014.09-.03.132-.044.014-.015.03-.015.044-.03.073-.03.146-.073.22-.102.014-.015.014-.015.03-.03.234-.117.454-.25.673-.395l.044-.03.044-.03.044-.03.044-.045c.015-.014.015-.03.03-.044l.03-.03c.09-.073.176-.146.264-.22.015-.015.03-.03.044-.044l.03-.03c.06-.06.117-.117.176-.176.015-.015.015-.03.03-.044l.03-.045c.044-.044.073-.09.117-.132l.015-.015.03-.03c.03-.03.06-.06.09-.09l.03-.044c.03-.03.044-.06.073-.09.014-.015.03-.03.044-.045l.014-.03c.03-.03.06-.06.09-.102.015-.015.015-.03.03-.045l.03-.044c.014-.015.03-.03.044-.045l.015-.03c.03-.044.06-.073.073-.117l.03-.044c.014-.03.03-.044.03-.073l.015-.03c.014-.03.03-.06.044-.09l.015-.03c.014-.03.014-.045.03-.074.014-.03.014-.06.03-.09l.014-.044c.015-.03.015-.06.015-.09l.015-.044v-.03c.014-.06.014-.117.014-.176v-.015c0-.044-.015-.09-.015-.132l16.12 8.01zm-15.63-2.61h-2.133v-2.12h2.134v2.12zm0 2.827h-2.133v-2.12h2.134v2.12zm-2.844 0H4.38v-2.12h2.133v2.12zm2.844 2.827H6.513v-2.12h2.133v2.12zm-2.844 0H4.38v-2.12h2.133v2.12zm2.844-5.654h-2.133v-2.12h2.134v2.12zm-2.844 2.827H4.38v-2.12h2.133v2.12zm-2.845-2.827H2.242v-2.12h2.132v2.12zm5.688 0h-2.133v-2.12h2.133v2.12zm-2.844-2.827H4.38v-2.12h2.133v2.12z" fill="#0db7ed"/>
    </svg>
);
export const FigmaIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3.75C15 2.7835 14.2165 2 13.25 2H10.75C9.7835 2 9 2.7835 9 3.75V9.25C9 10.2165 9.7835 11 10.75 11H13.25C14.2165 11 15 10.2165 15 9.25V3.75Z" fill="#0ACF83"/>
        <path d="M7.25 2C6.2835 2 5.5 2.7835 5.5 3.75V9.25C5.5 10.2165 6.2835 11 7.25 11H9V3.75C9 2.7835 8.2165 2 7.25 2Z" fill="#A259FF"/>
        <path d="M5.5 14.75C5.5 13.7835 6.2835 13 7.25 13H9V20.25C9 21.2165 8.2165 22 7.25 22C6.2835 22 5.5 21.2165 5.5 20.25V14.75Z" fill="#F24E1E"/>
        <path d="M9 14.75C9 13.7835 9.7835 13 10.75 13H15V20.25C15 21.2165 14.2165 22 13.25 22C12.2835 22 11.5 21.2165 11.5 20.25V16.5C11.5 15.5335 10.7165 14.75 9.75 14.75H9Z" fill="#FF7262"/>
        <path d="M16.75 11C17.7165 11 18.5 10.2165 18.5 9.25C18.5 8.2835 17.7165 7.5 16.75 7.5H15V11H16.75Z" fill="#1ABCFE"/>
    </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5c0-.85.43-1.6 1.1-2.06.76-.52 1.2-1.42 1.2-2.38V9.5c0-1.72-1.07-3.2-2.5-3.86C14.93 4.58 14 3.4 14 2c0-1.1.9-2 2-2s2 .9 2 2c0 1.4-1.07 2.6-2.5 2.87-1.1.5-1.5 1.74-1.5 2.63v1.5c0 .96.44 1.86 1.2 2.38.67.46 1.1 1.21 1.1 2.06zm-7-2.06c-.76-.52-1.2-1.42-1.2-2.38V9.5c0-1.72 1.07-3.2 2.5-3.86C13.07 4.58 14 3.4 14 2c0-1.1-.9-2-2-2s-2 .9-2 2c0 1.4 1.07 2.6 2.5 2.87 1.1.5 1.5 1.74 1.5 2.63v1.5c0 .96-.44 1.86-1.2 2.38C8.93 13.9 8.5 14.65 8.5 15.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-.85-.43-1.6-1.1-2.06z" fill="#F89820"/>
        <path d="M18 15.5c0 1.38-1.12 2.5-2.5 2.5S13 16.88 13 15.5c0-.85.43-1.6 1.1-2.06.76-.52 1.2-1.42 1.2-2.38V9.5c0-1.72-1.07-3.2-2.5-3.86C11.93 4.58 11 3.4 11 2c0-1.1.9-2 2-2s2 .9 2 2c0 1.4-1.07 2.6-2.5 2.87C11.4 5.37 11 6.61 11 7.5v1.5c0 .96.44 1.86 1.2 2.38.67.46 1.1 1.21 1.1 2.06A2.495 2.495 0 0115.5 18c1.38 0 2.5-1.12 2.5-2.5zm-7-2.06c-.76-.52-1.2-1.42-1.2-2.38V9.5c0-1.72 1.07-3.2 2.5-3.86C13.07 4.58 14 3.4 14 2c0-1.1-.9-2-2-2s-2 .9-2 2c0 1.4 1.07 2.6 2.5 2.87c1.1.5 1.5 1.74 1.5 2.63v1.5c0 .96-.44 1.86-1.2 2.38-.67.46-1.1 1.21-1.1 2.06 0 .85.43 1.6 1.1 2.06.76.52 1.2 1.42 1.2 2.38 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5c0-.85.43-1.6 1.1-2.06z" fill="#5382A1"/>
    </svg>
);

export const CppIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h4v2h-4v4h-2v-4H7v-2h4v-4zm11-1V5h-2v2h-2V5h-2v2h-2V5H9v2H7V5H5v2H3V5H1v14h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2V4z" fill="#00599C"/>
        <path d="M14.5 12.5h-1v-1h1v1zm2 0h-1v-1h1v1zm-2 2h-1v-1h1v1zm2 0h-1v-1h1v1z" fill="#fff"/>
    </svg>
);

export const Html5Icon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.27l-10 1.5v16.46l10 2.27 10-2.27V2.77l-10-1.5zM12 3.1l8.5 1.29v14.02l-8.5 1.93V3.1zM11 16h2v-4h3l-4-4-4 4h3v4z" fill="#E34F26"/>
        <path d="M12 3.1v16.23l8.5-1.93V4.39L12 3.1zM19 8h-3l-.25-3H12v12.5l5.25-1.18.5-4.82H14.5l.25 2.5L12 18V8h7z" fill="#F16529"/>
    </svg>
);

export const Css3Icon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.27l-10 1.5v16.46l10 2.27 10-2.27V2.77l-10-1.5zM12 3.1l8.5 1.29v14.02l-8.5 1.93V3.1zM8.5 7H12v2H6.5l.25 3H12v-2h2v4H6l.5 4h8l.5-4h-2l-.25 2H8.25l-.25-2h4.25l.25-3H8.5l-.25-3H15.5l-.25-3H8.5z" fill="#1572B6"/>
        <path d="M12 3.1v16.23l8.5-1.93V4.39L12 3.1zM15.5 7h-3.5v2H15.5l-.25 3h-3.25v2h2.75l-.25 2.5L12 18v-2.5l1.75-.5.13-1.5H12V9.5h3.25L15.5 7z" fill="#33A9DC"/>
    </svg>
);

export const DjangoIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 10.5V8.41c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v7.18c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-2.09c.83-.56 1.5-1.32 1.9-2.25.4-.92.6-1.94.6-3.01 0-1.07-.2-2.09-.6-3.01-.4-.93-1.07-1.69-1.9-2.25zM15 15.59H4V8.41h11v7.18zM8 12.5h2v-1H8v1zm4 0h2v-1h-2v1z" fill="#092E20"/>
    </svg>
);

export const FlaskIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#000"/>
        <path d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#000"/>
        <path d="M14.5 12c0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12h-2c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5h-2z" fill="#000"/>
    </svg>
);

{/* FIX: Removed an invalid closing </g> tag that was causing a JSX parsing error. */}
export const SpringBootIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.66 20.35c-1.5 1.29-3.48 2.15-5.66 2.15s-4.16-.86-5.66-2.15C5.84 18.86 5 16.98 5 15c0-3.86 3.14-7 7-7s7 3.14 7 7c0 1.98-.84 3.86-2.34 5.35zM12 10c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" fill="#6DB33F"/>
        <path d="M12 2c-4.41 0-8 3.59-8 8 0 1.8.61 3.45 1.62 4.75C7.29 11.97 9.5 10 12 10s4.71 1.97 6.38 4.75C19.39 13.45 20 11.8 20 10c0-4.41-3.59-8-8-8z" fill="#6DB33F"/>
    </svg>
);

export const TomcatIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-4h8v-2h-8v2zm0-4h8v-2h-8v2z" fill="#F89820"/>
        <path d="M16 10h-2V8h2v2zm-6 0H8V8h2v2z" fill="#5382A1"/>
    </svg>
);

export const MySqlIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 14v-2h-2v2h2zm-4 0v-2h-2v2h2zm-4 0v-2H9v2h2zm-4 0v-2H5v2h2z" fill="#00758F"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#E48E00"/>
        <path d="M12 4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#00758F"/>
    </svg>
);

export const PostgreSqlIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#336791"/>
        <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8h1V4h-1zm0 14H8v-2h4v2zm0-4H8v-2h4v2zm0-4H8V8h4v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" fill="#fff"/>
    </svg>
);

export const AwsIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#FF9900"/>
        <path d="M7.5 15.5h9v-2h-9v2zm0-4h9v-2h-9v2zm-1-5H17.5c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H6.5c-.83 0-1.5-.67-1.5-1.5v-7c0-.83.67-1.5 1.5-1.5z" fill="#232F3E"/>
    </svg>
);

export const LinuxIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#000"/>
        <path d="M9.5 14.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5zm5 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5z" fill="#FFD43B"/>
        <path d="M12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#fff"/>
    </svg>
);

export const PipelineIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h4a4 4 0 0 1 4 4v4m0-8a4 4 0 0 0-4 4v4h16v-4a4 4 0 0 0-4-4h-4"/>
        <circle cx="4" cy="6" r="2"/>
        <circle cx="20" cy="18" r="2"/>
    </svg>
);

export const MavenIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#C71A36"/>
        <path d="M12 6l-3 3h2v6h2V9h2l-3-3z" fill="#fff"/>
    </svg>
);

export const PenToolIcon: React.FC<IconProps> = ({ className = "h-12 w-12" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5-7.5-1.5L2 12l5.5 5.5L13 18z"/>
    </svg>
);