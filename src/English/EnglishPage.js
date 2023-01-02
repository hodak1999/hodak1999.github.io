import React from 'react';
import Abstract from './Abstract/Abstract';
import ResearchBackground from './ResearchBackground/ResearchBackground';
import Contact from './Contact/Contact';
import AcademicBackground from './AcademicBackground/AcademicBackground';

export default function EnglishPage() {
    return (
        <>
            <Abstract></Abstract>
            <AcademicBackground></AcademicBackground>
            <ResearchBackground></ResearchBackground>
            <Contact></Contact>
        </>
    );
}