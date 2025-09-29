import React from 'react'
import Info from '../info'
import FullTitle from '../fullTitle/fullTitle'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


function Questions() {
     const [expandedLeft, setExpandedLeft] = React.useState('panel1');
     const [expandedRight, setExpandedRight] = React.useState('panel5');
  const handleChangeLeft = (panel) => (event, newExpanded) => {
    setExpandedLeft(newExpanded ? panel : expandedLeft);
  };

  const handleChangeRight = (panel) => (event, newExpanded) => {
    setExpandedRight(newExpanded ? panel : expandedRight);
  };
    return (
        <>
            <section className='max-md:py-15 py-30'>
                <div className="container">
                    <div className='text-center'>
                        <FullTitle text={Info[8].text} />
                        <h3 className='mt-2.5 mb-18.75 text-[25px] max-md:text-22'>سوالات پر تکرار</h3>
                    </div>
                    <div className='flex'>
                     <div>
                           <Accordion expanded={expandedLeft === 'panel1'} onChange={handleChangeLeft('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography component="span">Collapsible Group Item #1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expandedLeft === 'panel2'} onChange={handleChangeLeft('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography component="span">Collapsible Group Item #2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expandedLeft === 'panel3'} onChange={handleChangeLeft('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography component="span">Collapsible Group Item #3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expandedLeft === 'panel4'} onChange={handleChangeLeft('panel4')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography component="span">Collapsible Group Item #3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                     </div>
                     <div>
                           <Accordion expanded={expandedRight === 'panel5'} onChange={handleChangeRight('panel5')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography component="span">Collapsible Group Item #1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expandedRight === 'panel6'} onChange={handleChangeRight('panel6')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography component="span">Collapsible Group Item #2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expandedRight === 'panel7'} onChange={handleChangeRight('panel7')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography component="span">Collapsible Group Item #3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expandedRight === 'panel8'} onChange={handleChangeRight('panel8')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography component="span">Collapsible Group Item #3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                     </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Questions