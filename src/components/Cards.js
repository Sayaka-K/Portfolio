import React from 'react';
import CardItem  from './CardItem';
import './Cards.css';


function Cards(){
    return(
        <div className='cards' id='my_projects'>
            <div className='cards__header'>
                <h1>Experience</h1>
            </div>
            
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/pricing.png'
                    title="Kellogg's Pricing Analytics"
                    text="Leveraged data to suggest 'more promising' prices for Kellogg's
                    cereals that would not only solidify Kellogg's market dominance but also lead to increased profits. 
                    The project includes Visualizations, Optimal Pricing Setting, Competition Analysis, and Predictive Modeling."
                    label='Pricing analytics'
                    path='https://github.com/Sayaka-K/Kellogg-s-Pricing-Analytics/blob/main/presentation.pdf' />

                    <CardItem 
                    src='images/shiny.png'
                    title='Shiny Dashboards'
                    text="As a Data Analyst at the SOL-INCA in the Department of Neurosciences at UC San Diego, 
                    I investigate associations between neurocognitive aging and other health conditions and demonstrate
                    the analsis results using Shiny. 
                    Currently, I am also working on creating a guide for Shiny apps that best showcase our analysis results.
                    Please click to explore. 
                    (A real project using publicly available data is to be added soon!)"
                    label='Work'
                    path='https://solincalab.shinyapps.io/Shiny_demo/' />

                    <CardItem 
                    src='images/petco-logo.png'
                    title='Case competition - Winner'
                    text="Participated in a school-wide data science competition hosted by Petco and 
                    Rady Data Analytics Club at UC San Diego. 
                    The challenge was to construct more granular and accurate revenue forecasting models to complement Petco’s current models.
                    I cannot go into specific details since this project is under NDA; however, please check out the flyer here."
                    label='Datathon'
                    path='https://www.linkedin.com/posts/rady-data-analytics-club_petco-casestudy-casestudycompetition-activity-6791217381898289152-AKiv' />

                </ul>
                <ul className='cards__items'>


                    <CardItem 
                    src='images/fraud1.png'
                    title='New York Property Fraud'
                    text="Built unsurpervised models (Z-Score outliers and Autoencoder) to detect if any of the properties records from City of New York
                    were out of the ordinary and determined potential candidates for further fraud investigation. 
                    Examples of techniques used are Variable creations and Dimensionality reduction(PCA.)"
                    label='Unsupervised learning'
                    path='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:147e4a70-8acb-4ce0-87f4-4d85d46b9902' />

                    <CardItem 
                    src='images/fraud2.png'
                    title='Credit Card Fraud'
                    text='Built supervised machine learning algorithms (Logistic, Neural Net, Random Forest, and XGBoost) 
                    to detect fraudulent credit card transactions. Some of the techniques used are
                    Smoothing in Target Encoding and Feature selection (Filter: univariate model performance, Wrapper: forward stepwise selection.)'
                    label='Supervised learning'
                    path='https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:5936684f-5f0e-46c2-913e-fca662a95d5f' />

                    <CardItem 
                    src='images/text.png'
                    title='Fraudulent News Detection'
                    text='Created an aiding tool in detecting fraudulent news
                    that has been on the rise on social media and news platforms online.
                    The main features that went into the models are the Title and Text of news articles,
                    which were transformed into embedding vectors using Word2Vec embedding model.'
                    label='Natural Language Processing'
                    path='https://github.com/Sayaka-K/Fraudulent-News-Detection/blob/main/Model%20Analysis%20to%20Provide%20Aid%20in%20Detecting%20Fake%20News.pdf' />
                </ul>
            
            </div>
        </div>
    )
}

export default Cards;