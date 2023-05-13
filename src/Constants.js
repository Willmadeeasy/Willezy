import React from 'react';
const markersA = {
    children: "A",
};

const markersB = {
    children: "B",
    className: "markers1-1",
};

const markersC = {
    children: "C",
    className: "markers1-2",
};

export const HomepageConstants = {
    headerLanding: <React.Fragment>Hello! I&#x27;m Willgenie.<br />I’m here to help you secure your legacy.</React.Fragment>,
    subheaderlanding: <React.Fragment>We have a set of 32 questions broken into 3 parts, which we need you to answer to generate your Will.<br />This entire process typically takes 55-60 minutes to complete.</React.Fragment>,
    spanText3: "About you",
    spanText4: "Your legacy",
    spanText5: "Legacy made easy",
    spanText6: "12-15 minutes",
    spanText7: "20-25 minutes",
    spanText8: "15-20 minutes",
    spanText9: "Let’s get started",
    markersAProps: markersA,
    markersBProps: markersB,
    markersCProps: markersC,
};
const textbox1Data = {
    children: "First name",
    id:'1',
    fieldName:'firstName'
};

const textbox2Data = {
    children: "Middle name (if any)",
    id:'2',
    fieldName:'middleName'
};

const textbox3Data = {
    children: "Last name",
    id:'3',
    fieldName:'lastName'
};

export const aboutYouSectionData = {
    spanText1: "All questions",
    spanText2: "01",
    spanText3: "Select",
    spanText4: "Hello there! What’s your name?",
    spanText5: "Ensure your full legal name matches with official identification. This is the name that will be reflected in your Will.",
    spanText6: "Next",
    spanText7: "or",
    spanText8: "Press Enter",
    enter: "https://anima-uploads.s3.amazonaws.com/projects/645abab780e176ffd5ddce4c/releases/645b74aa1c3980762121e0d2/img/enter-1@2x.png",
    textbox1Props: textbox1Data,
    textbox2Props: textbox2Data,
    textbox3Props: textbox3Data,
};
