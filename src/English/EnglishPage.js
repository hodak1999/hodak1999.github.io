import React from 'react';
import Abstract from './Abstract/Abstract';
import Contact from './Contact/Contact';
import AcademicBackground from './AcademicBackground/AcademicBackground';
import Awards from './ResearchBackground/Awards';
import Conferences from './ResearchBackground/Conferences';
import Journals from './ResearchBackground/Journals';

export default function EnglishPage() {
    return (
        <div
            style={{
                zIndex: 100,
            }}
        >
            <Abstract></Abstract>
            <AcademicBackground></AcademicBackground>
            <Awards></Awards>
            <Conferences></Conferences>
            <Journals></Journals>
            <Contact></Contact>
        </div>
    );
}