import React from 'react'

export default function AboutProcess() {
  const viewBoxWidth = 800;
  const viewBoxHeight = 600;

  const processSteps = [
    {
      id: 1,
      title: "SAY HELLO.",
      description: "A free consultation to get to know you.",
      svgX: 680,
      svgY: 80,
      textAlign: 'right',
      offsetX: -20,
      offsetY: -10
    },
    {
      id: 2,
      title: "DREAM TOGETHER.",
      description: "We'll discuss designs, explore ideas, & help inspirations.",
      svgX: 140,
      svgY: 280,
      textAlign: 'left',
      offsetX: 20,
      offsetY: 0
    },
    {
      id: 3,
      title: "SEE IT COME ALIVE.",
      description: "Play with layouts, materials, and 3D designs.",
      svgX: 640,
      svgY: 360,
      textAlign: 'right',
      offsetX: -20,
      offsetY: 10
    },
    {
      id: 4,
      title: "MOVE IN. SMILE WIDE.",
      description: "We'll make it real in over 90 days.",
      svgX: 660,
      svgY: 480,
      textAlign: 'right',
      offsetX: -20,
      offsetY: 20
    },
    {
      id: 5,
      title: "TRUST NOTE.",
      description: "Detailed every detail in a project with full transparency, no hidden costs, full transparency, and timelines.",
      svgX: 140,
      svgY: 500,
      textAlign: 'left',
      offsetX: 20,
      offsetY: 20
    }
  ];

  return (
    <div className="section-full mobile-page-padding p-t80 p-b80" style={{ 
      backgroundColor: '#556B2F',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '650px'
    }}>
      <style>{`
        @media (max-width: 992px) {
          .process-container {
            min-height: 500px !important;
          }
          .process-step {
            max-width: 220px !important;
          }
        }
        @media (max-width: 768px) {
          .process-container {
            min-height: 600px !important;
            padding: 15px !important;
          }
          .process-step {
            max-width: 180px !important;
          }
          .process-step h4 {
            font-size: 13px !important;
          }
          .process-step p {
            font-size: 11px !important;
          }
        }
        @media (max-width: 576px) {
          .process-container {
            min-height: 700px !important;
            padding: 10px !important;
          }
          .process-step {
            max-width: 140px !important;
          }
          .process-step[data-step-id="1"] {
            left: calc(85% - 10px) !important;
            top: calc(13% - 5px) !important;
          }
          .process-step[data-step-id="2"] {
            left: calc(17.5% + 10px) !important;
            top: calc(46.7% + 0px) !important;
          }
          .process-step[data-step-id="3"] {
            left: calc(80% - 10px) !important;
            top: calc(60% + 5px) !important;
          }
          .process-step[data-step-id="4"] {
            left: calc(82.5% - 10px) !important;
            top: calc(80% + 10px) !important;
          }
          .process-step[data-step-id="5"] {
            left: calc(17.5% + 10px) !important;
            top: calc(83.3% + 10px) !important;
          }
          .process-step h4 {
            font-size: 11px !important;
            margin-bottom: 4px !important;
          }
          .process-step p {
            font-size: 9px !important;
            line-height: 1.4 !important;
          }
        }
      `}</style>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          paddingTop: '30px',
          paddingLeft: '15px',
          paddingRight: '15px'
        }}>
          <h2 style={{ 
            color: '#FFFFFF', 
            fontSize: 'clamp(20px, 4vw, 36px)',
            fontWeight: '400',
            fontFamily: 'Poppins, sans-serif',
            margin: 0,
            lineHeight: '1.4'
          }}>
            Because good design shouldn't feel complicated.
          </h2>
        </div>

        <div className="process-container" style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '550px',
          margin: '0 auto',
          maxWidth: '1200px',
          padding: '20px'
        }}>
          <svg 
            width="100%" 
            height="100%" 
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              height: '90%',
              maxWidth: '800px',
              zIndex: 1,
              pointerEvents: 'none'
            }}
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M 680 80 
                 C 700 100, 710 150, 700 200
                 C 690 250, 650 280, 600 300
                 C 550 320, 450 330, 350 340
                 C 250 350, 180 380, 140 420
                 C 120 460, 130 500, 160 520
                 C 200 540, 280 550, 380 545
                 C 480 540, 580 530, 640 510
                 C 670 490, 680 460, 660 440"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeDasharray="5,5"
              opacity="0.65"
            />
            {processSteps.map((step) => (
              <circle
                key={`circle-${step.id}`}
                cx={step.svgX}
                cy={step.svgY}
                r="10"
                fill="#FFFFFF"
              />
            ))}
          </svg>

          {processSteps.map((step) => {
            const xPercent = (step.svgX / viewBoxWidth) * 100;
            const yPercent = (step.svgY / viewBoxHeight) * 100;
            
            return (
              <div
                key={step.id}
                className="process-step"
                style={{
                  position: 'absolute',
                  left: `${xPercent}%`,
                  top: `${yPercent}%`,
                  transform: `translate(${step.offsetX}px, ${step.offsetY}px)`,
                  zIndex: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: '280px',
                  width: 'max-content'
                }}
                data-step-id={step.id}
              >
                <div style={{ textAlign: step.textAlign, width: '100%' }}>
                  <h4 style={{
                    color: '#FFFFFF',
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    fontWeight: '600',
                    fontFamily: 'Poppins, sans-serif',
                    margin: '0 0 6px 0',
                    lineHeight: '1.3',
                    letterSpacing: '0.3px'
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    color: '#FFFFFF',
                    fontSize: 'clamp(11px, 1.5vw, 14px)',
                    fontWeight: '300',
                    fontFamily: 'Poppins, sans-serif',
                    margin: 0,
                    lineHeight: '1.5',
                    opacity: 0.95
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
