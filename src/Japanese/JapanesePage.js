import React from 'react';
import Abstract from './Abstract/Abstract';
import Awards from './ResearchBackground/Awards';
import Contact from './Contact/Contact';
import AcademicBackground from './AcademicBackground/AcademicBackground';
import Conferences from './ResearchBackground/Conferences';
import Journals from './ResearchBackground/Journals';
import zIndex from '@mui/material/styles/zIndex';

export default function JapanesePage() {
    return (
        <div style={{
            zIndex: 100,
        }}>
            <Abstract></Abstract>
            <AcademicBackground></AcademicBackground>
            <Awards></Awards>
            <Conferences></Conferences>
            <Journals></Journals>
            <Contact></Contact>
        </div>
    );
}