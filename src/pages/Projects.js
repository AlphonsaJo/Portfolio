import React from 'react';
import './Projects.css'; // Add a CSS file for Projects styles

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>In-Hospital Mortality Prognosis: Unmasking Patterns using Data Science and Explainable AI</h3>
            <p>
              Developed and published a paper on predictive analysis model using Machine Learning for In-hospital mortality prediction.
              Implemented using Random Forest Cassifier and SHAP (Shapley Additive Explanations) ploTS
            </p>
          <a href="https://ieeexplore.ieee.org/document/10441356">View Project</a>
        </div>
      
        <div className="project-item">
          <h3>Enhancing Legal Decision Making: WRIT Case Outcome Prediction with LegalBERT Embeddings and AdaBoost Classifier </h3>
            <p>Legal decision-making, the process of determining the outcome of court cases, is a pivotal aspect of the justice system. It involves evaluating evidence, interpreting laws, and ensuring justice is served. A traditional solution to this problem would take a considerable amount of time to show any meaningful results considering the current backlog of cases and the rate at which new cases are being filed each day. In order to overcome these difficulties, we employ text embeddings from LLM's with statistical classifiers to effectively and precisely forecast the outcomes for writ petitions. 
             Our approach delivers an accuracy of 54% and a F1-score of 0.42 with LegalBERT embedder and AdaBoost classifier.
            </p>
          <a href="https://ieeexplore.ieee.org/document/10649245">View Project</a>
        </div>
        {/* Add more projects as needed */}
      </div>
  
    </div>
  );
};

export default Projects;
