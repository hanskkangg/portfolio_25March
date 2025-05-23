import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import hans_logo1 from './hans_logo1.png';
import hans_logo2 from './hans_logo2.png';
import circle_s from './circle_s.png';
import bg from './bg.png';
import circle_s_white from './circle_s_white.png';
import prof from './prof.png';
import about_bg from './about_bg.png';
import skills_bg from './skills_bg.png';
import al_logo from './al_logo.png';
import del_logo from './del_logo.png';
import del_logo1 from './del_logo1.jpg';
import self_logo from './self_logo.png';
import azure_logo from './azure_logo.svg';


import azure_logo1 from './azure_logo1.svg';
import bash_logo from './bash_logo.svg';
import docker_logo from './docker_logo.svg';
import firebase_logo from './firebase_logo.svg';
import github_logo from './github_logo.svg';
import linux_logo from './linux_logo.svg';


import ngnix_logo from './ngnix_logo.svg';
import npm_logo from './npm_logo.svg';
import powershell_logo from './powershell_logo.svg';
import terminal_logo from './terminal_logo.svg';

import ubuntu_logo from './ubuntu_logo.svg';
import vim_logo from './vim_logo.svg';
import vs_code_logo from './vs_code_logo.svg';




export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    hans_logo1,
    hans_logo2,
    circle_s,
    bg,
    circle_s_white,
    prof,
    about_bg,
    skills_bg,
    al_logo,
    del_logo,
    del_logo1,
    azure_logo,
    self_logo,
    azure_logo1,
    bash_logo,
    docker_logo,
    firebase_logo,
    github_logo,
    linux_logo,
    ngnix_logo,
    npm_logo,
    powershell_logo,
    terminal_logo,
    ubuntu_logo,
    vim_logo,
    vs_code_logo,

};

export const workData = [
    {
        title: 'Delivery Sushi',
        description: 'WAMP',
        bgImage: '/work-1.png',
    },
    {
        title: 'E-Commerce',
        description: 'MERN',
        bgImage: '/work-2.png',
    },
    {
        title: 'Personal Blog',
        description: 'MERN',
        bgImage: '/work-3.png',
    },
    {
        title: 'Personal Portfolio',
        description: 'MERN+Next.js',
        bgImage: '/work-4.png',
    },
]


export const skillData = [
    { icon: assets.web_icon, title: 'Languages', description: ['- Java', '- Javascript', '- PHP','- HTML/CSS', '- Tailwind CSS'], link: '' },


    { icon: assets.mobile_icon, title: 'Framework & Libraries', description: ['- React.js', '- Node.js', '- Express.js','- Next.js', '- jQuery'], link: '' },


    { icon: assets.ui_icon, title: 'Database & Database Management', description: ['- MySQL','- MongoDB','- MariaDB','- Oracle','- SQL Server','- MS Access','- ODBC','- SSMS'], link: '' },

    { icon: assets.graphics_icon, title: 'Web Servers & Hosting', description: ['- XAMPP','- Azure Web Hosting','- Netlify','- Vercel','- Apache HTTP','- Apache Tomcat',], link: '' },
]
export const infoList = [
    {
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education:', 
        description: [
            "Computer Programming:",
            "- Algonquin College, Ottawa, Ontario",
            "\u00A0",
            "GPA:", "- 3.7/4 (Dean's Honor List)"
        ]
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Professional Experience:',
        description: [
            "Full-Stack Web Developer", "- Delivery Sushi (2022 - Present)",
            "\u00A0",
            "Freelance Web Developer", "- Specializing in custom web solutions and client-based projects"
        ]
    }
];


export const infoList2 = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Programming Languages:', 
        description: ['Java', 'JavaScript', 'PHP', 'SQL', 'Bash Script']
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Frameworks & Libraries:', 
        description: ['React.js', 'Next.js', 'Express.js', 'Node.js', 'jQuery']
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Databases & Database Management:', 
        description: ['MongoDB', 'MySQL', 'Oracle Database', 'MariaDB', 'SQL Server']
    }
];


export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];
