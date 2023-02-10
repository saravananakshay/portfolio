import React from 'react';
import './exp.css';
import Container from 'react-bootstrap/Container';

const Exp = () => {
  return (
    <Container id="history">
    <h5 className="mt-3"> work History </h5>
    <div class="uk-container uk-padding">
    <div class="uk-timeline">
        <div class="uk-timeline-item">
            <div class="uk-timeline-icon">
                <span class="uk-badge"><span uk-icon="check"></span></span>
            </div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time datetime="2020-07-08">Jan 2022 - React JS </time></h3>
                            <span class="uk-label uk-label-success uk-margin-auto-left">Current</span>
                        </div>
                    </div>
                    <div class="uk-card-body">
											<p class="uk-text-success">Currently work as a React JS frontend developer at JustDigitiz, have experience in UI, Router, API, Redux, Hooks, 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-timeline-item">
            <div class="uk-timeline-icon">
                <span class="uk-badge"><span uk-icon="check"></span></span>
            </div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time datetime="2020-07-07">July 2019 - Wordpress</time></h3>
                            <span class="uk-label uk-label-warning uk-margin-auto-left">Previous</span>
                        </div>
                    </div>
                    <div class="uk-card-body">
											<p>Designing and building the website front-end including CSS3, JavaScript, HTML5.</p>
											<p>Meeting with clients to discuss website design and function</p>
											<p>Monitoring the performance of the live website.</p>
                    </div>
                </div>
            </div>
        </div>
				<div class="uk-timeline-item">
            <div class="uk-timeline-icon">
                <span class="uk-badge"><span uk-icon="check"></span></span>
            </div>
            <div class="uk-timeline-content">
                <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <h3 class="uk-card-title"><time datetime="2020-07-06">Jan 2017 - UI Designer</time></h3>
                            <span class="uk-label uk-label-danger uk-margin-auto-left">Start</span>
                        </div>
                    </div>
                    <div class="uk-card-body">
                        <p> Started my career as a UI/UX designer in Airlet Software, have expeience in wireframe, ui-kit, design sytem, color system, illustrator. 
                        </p>
                    </div>
                </div>
				
            </div>
        </div>
    </div>
</div>
</Container>
  )
}

export default Exp