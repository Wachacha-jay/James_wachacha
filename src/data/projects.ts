import { Project } from '@/types/project';

export const baseProjects: Project[] = [
  {
    title: 'Credit Score Rating',
    description: 'A machine learning-based credit score prediction service built with Flask, featuring a RESTful API and web interface for predicting credit scores based on financial and personal data. Includes GitHub Actions with CI/CD pipelines, Docker containerization, and cloud deployment for scalable production use.',
    tech: ['Python', 'Flask', 'Machine Learning', 'GitHub Actions', 'CI/CD', 'Docker', 'Cloud Deployment', 'RESTful API', 'Data Science'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    github: 'https://github.com/Wachacha-jay/Ml_end_to_to_end_project',
    demo: '#',
    category: 'machine-learning',
    date: 'February 23, 2025',
    results: 'End-to-end ML pipeline with automated deployment and real-time predictions'
  },
  {
    title: 'Face Detection & Recognition System',
    description: 'Developed a comprehensive face detection and recognition system using MTCNN for face detection and Inception networks for face recognition. Built an interactive web application with Flask for real-time face detection from video streams, face alignment, and feature extraction for identity verification. The system includes preprocessing pipelines, face embedding generation, and similarity matching algorithms with live results.',
    tech: ['Python', 'PyTorch', 'MTCNN', 'Inception Networks', 'OpenCV', 'TensorFlow', 'Flask', 'Git', 'Face Recognition', 'Computer Vision', 'Real-time Processing'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    github: 'https://github.com/Wachacha-jay/Face_detection_and_Recognition',
    demo: '#',
    category: 'deep-learning',
    date: 'February 15, 2025',
    results: 'Achieved 96% face detection accuracy and 93% recognition accuracy with real-time processing'
  },
  {
    title: 'AI Meme Generator',
    description: 'Built an interactive web application for AI-powered meme generation using Stable Diffusion models. The app allows users to create custom memes through text prompts, featuring advanced image generation capabilities with Hugging Face Diffusers library. Implemented with containerized deployment using Docker for scalable and efficient model serving.',
    tech: ['Python', 'Stable Diffusion', 'PyTorch', 'Diffusers', 'Hugging Face', 'Docker', 'Flask', 'Computer Vision', 'Generative AI'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    github: 'https://github.com/Wachacha-jay/meme_app',
    demo: '#',
    category: 'deep-learning',
    date: 'February 18, 2025',
    results: 'Generated 1000+ unique memes with 95% user satisfaction rate'
  },
  {
    title: 'Crop Disease Classification',
    description: 'Developed a deep learning model using ResNet architecture to automatically classify plant diseases from leaf images. Implemented comprehensive data pipeline including image extraction, preprocessing, and augmentation. Achieved high accuracy in identifying various crop diseases to help farmers make informed decisions about treatment and prevention.',
    tech: ['Python', 'PyTorch', 'ResNet', 'OpenCV', 'PIL', 'Data Augmentation', 'Transfer Learning'],
    image: '/lovable-uploads/b95f80d4-2bf9-4cad-a21d-c110fd1521c2.png',
    github: 'https://github.com/Wachacha-jay/Computer_vision_Image_classification',
    demo: '#',
    category: 'deep-learning',
    date: 'February 5, 2025',
    results: 'Achieved 94% classification accuracy across 10 disease categories'
  },
  {
    title: 'Sentiment Analysis & Text Classification',
    description: 'Built an advanced NLP system for analyzing customer feedback and social media sentiment. Implemented text preprocessing, feature extraction using TF-IDF and word embeddings, and trained multiple classification models. Applied named entity recognition and topic modeling to extract actionable insights from unstructured text data.',
    tech: ['Python', 'NLTK', 'spaCy', 'Transformers', 'scikit-learn', 'BERT', 'TF-IDF', 'Word2Vec'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80', // code screen
    github: 'https://github.com/Wachacha-jay/Natural_language_processing',
    demo: '#',
    category: 'deep-learning',
    date: 'January 28, 2025',
    results: 'Processing 10K+ texts with 91% sentiment accuracy'
  },
  {
    title: 'Stock Volatility Predictor',
    description: 'Built a FastAPI-powered web application that enables users to analyze and forecast stock price volatility using advanced statistical models. Features ticker-based forecasting, multi-stock comparison, and interactive outputs with JSON forecasts and dynamic plots.',
    tech: ['Python', 'FastAPI', 'ARCH Models', 'SQLite3', 'AlphaVantage API', 'Plotly'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', // circuit board/techy
    github: 'https://github.com/Wachacha-jay/Stock_volatility',
    demo: '#',
    category: 'machine-learning',
    date: 'January 22, 2025',
    results: 'Achieved 92% forecast accuracy'
  },
  {
    title: 'Real Estate Predictor Nairobi',
    description: 'A machine learning-powered Flask web application that predicts property prices in Nairobi based on user inputs and compares them with market trends. Dataset collected through web scraping of Nairobi property listings.',
    tech: ['Flask', 'Python', 'BeautifulSoup', 'Linear Regression'],
    image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&q=80', // building/architecture
    github: 'https://github.com/Wachacha-jay/Real-Estate-price-predictor',
    demo: '#',
    category: 'machine-learning',
    date: 'December 24, 2024'
  },
  {
    title: 'Credit Card Customer Segmentation',
    description: 'Performed customer segmentation on credit card user data using K-Means clustering to identify distinct spending patterns and behaviors. Applied PCA for dimensionality reduction and leveraged data visualization tools.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'K-Means', 'PCA', 'Matplotlib', 'Seaborn', 'Plotly'],
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&q=80', // abstract/structure
    github: 'https://github.com/Wachacha-jay/K-means_customer_segmentation',
    demo: '#',
    category: 'machine-learning',
    date: 'January 30, 2025'
  },
  {
    title: 'Business Analysis & Forecasting',
    description: 'Comprehensive business analysis project to segment businesses based on purchasing behavior and evaluate product performance. Includes business classification, sales forecasting, anomaly detection, and product performance analysis.',
    tech: ['Python', 'Pandas', 'Excel', 'ARIMA Model', 'Power BI'],
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80', // river/flow/analysis
    github: 'https://github.com/Wachacha-jay/Market_Analysis',
    demo: '#',
    category: 'machine-learning',
    date: 'December 10, 2024'
  },
  {
    title: 'Power BI Business Dashboards',
    description: 'Specialized in transforming complex datasets into actionable business insights through interactive Power BI dashboards. Delivered data-backed recommendations including optimizing product placements and reducing operational inefficiencies.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Data Modeling'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80', // robot/AI dash
    github: 'https://github.com/Wachacha-jay/powerBI_Projects',
    demo: '#',
    category: 'machine-learning',
    date: 'December 14, 2024'
  },
  {
    title: 'Agricultural Analysis Kenya',
    description: 'Comprehensive data analysis of agricultural practices across Kenya\'s counties using Python. Examined household demographics, farming methods, and regional trends to identify patterns in crop production and livestock farming.',
    tech: ['Python', 'Power Query', 'Matplotlib', 'Seaborn', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', // bird's eye view, green fields
    github: 'https://github.com/Wachacha-jay/kilimo',
    demo: '#',
    category: 'machine-learning',
    date: 'December 7, 2024'
  },
  {
    title: 'Data Analysis with Excel',
    description: 'Conducted comprehensive market research on job trends using Microsoft Excel\'s advanced toolkit. Leveraged Power Query, XLOOKUP, INDEX-MATCH, and built interactive dashboards with PivotTables to identify industry demands and salary benchmarks.',
    tech: ['Excel', 'Power Query', 'PivotTables', 'XLOOKUP', 'INDEX-MATCH'],
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&q=80', // wavy lines/building/charts
    github: 'https://github.com/Wachacha-jay/Excel-data-analytics',
    demo: '#',
    category: 'machine-learning',
    date: 'February 11, 2024'
  },
  {
    title: 'Literature Synthesis & Gap Identifier Agent',
    description: 'Built an intelligent agentic system for automated literature review and research gap identification focused on Non-Communicable Diseases (NCDs) in Kenya. The system automatically scrapes research papers from arXiv, processes academic literature using advanced NLP, and identifies knowledge gaps in NCD research to guide future studies.',
    tech: ['Python', 'LangChain', 'LangGraph', 'Groq LLM', 'arXiv API', 'Scrapy', 'NLP', 'Research Analytics'],
    image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=800&q=80', // abstract, literature, data
    github: 'https://github.com/Wachacha-jay/NCD_Gap_finder_Agent',
    demo: '#',
    category: 'ai-automation',
    date: 'February 10, 2025',
    results: 'Automated analysis of 500+ research papers, identified 15 key research gaps'
  },
  {
    title: 'Career Navigator Agent',
    description: 'An intelligent agentic system designed to help people throughout their entire job search journey. The application provides personalized career guidance, job matching, resume optimization, interview preparation, and market insights. Built with modern AI technologies and containerized for scalable deployment.',
    tech: ['LangGraph', 'LangChain', 'Flask', 'Docker', 'Python', 'AI Agents', 'Career Analytics'],
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&q=80', // abstract, guidance, building
    github: 'https://github.com/Wachacha-jay/Career_navigator_Agent',
    demo: '#',
    category: 'ai-automation',
    date: 'February 12, 2025',
    results: 'Streamlined job search process with 85% user satisfaction rate'
  },
  {
    title: 'Food Ordering Chatbot',
    description: 'Built an intelligent food ordering chatbot using Dialogflow for natural language processing and intent recognition. Features a static web interface for user interaction, Python FastAPI backend for handling API requests and business logic, and MySQL database for storing menu items and order tracking. The system provides seamless webhook fulfillment between Dialogflow and the backend.',
    tech: ['Dialogflow', 'Python', 'FastAPI', 'MySQL', 'Static Web Interface', 'Webhook Integration', 'NLP', 'Chatbot Development'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&q=80',
    github: 'https://github.com/Wachacha-jay/chat_bot-diagflow',
    demo: '#',
    category: 'ai-automation',
    date: 'February 20, 2025',
    results: 'Automated food ordering with 90% intent recognition accuracy'
  },
  {
    title: 'Research Agent',
    description: 'Built an intelligent research tool that automates data collection, analysis, and report generation using advanced AI technologies. Features a Flask web application with Jinja2 templating for user interaction, powered by LangGraph and LangChain for complex AI workflows, and integrated with Google Gemini for natural language processing and content generation.',
    tech: ['Python', 'Flask', 'LangGraph', 'LangChain', 'Google Gemini', 'Jinja2', 'python-dotenv', 'Generative AI'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80',
    github: 'https://github.com/Wachacha-jay/Reasearch_tool',
    demo: '#',
    category: 'ai-automation',
    date: 'February 22, 2025',
    results: 'Automated research workflows with intelligent data synthesis'
  }
];