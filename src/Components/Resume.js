import React, { useState } from 'react';
import img from '../Images/resume.png'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'

const Resume = () => {
    const [numPages, setNumPage] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPage(numPages)
        setPageNumber(1)
    }
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content ">
          <img className='w-96' src={img} alt='' />
          <div className='mx-20'>
            <h1 class="text-5xl font-bold">MY RESUME</h1>
            <br />
            <Document file='/src/Front-End developer Resume.pdf' onLoadSuccess={onDocumentLoadSuccess}>
               <Page height='600' pageNumber={pageNumber} />
            </Document>
            <button class="btn btn-primary">Download</button>
          </div>
        </div>
      </div>
    );
};

export default Resume;