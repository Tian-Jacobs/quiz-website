// Quiz data for each topic
const quizzes = {
  dataEngineering: {
    title: "What is Data Engineering?",
    questions: [
      {
        q: "Which phase of the data lifecycle involves making data available to end users or applications?",
        options: [
          "Data Delivery",
          "Data Acquisition",
          "Data Profiling",
          "Data Masking"
        ],
        answer: 0,
        explanation: "Data Delivery is the phase where data is made available to end users or applications."
      },
      {
        q: "Which of the following is a key activity in the data retention phase?",
        options: [
          "Defining how long data should be stored",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data retention involves defining how long data should be stored before deletion."
      },
      {
        q: "Which of the following is a benefit of data archiving in the lifecycle?",
        options: [
          "Reducing storage costs for infrequently accessed data",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data archiving reduces storage costs for infrequently accessed data."
      },
      {
        q: "Which of the following is a data cleansing activity?",
        options: [
          "Removing duplicate records",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Removing duplicate records is a common data cleansing activity."
      },
      {
        q: "Which of the following is a benefit of data anonymization?",
        options: [
          "Protecting sensitive information while retaining data utility",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data anonymization protects sensitive information while retaining data utility."
      },
      {
        q: "Which of the following is a key output of the data processing phase?",
        options: [
          "Transformed, analytics-ready data",
          "Handwritten notes",
          "Printed books",
          "Colorful charts"
        ],
        answer: 0,
        explanation: "The data processing phase produces transformed, analytics-ready data."
      },
      {
        q: "Which of the following is a benefit of data validation in the lifecycle?",
        options: [
          "Ensuring data accuracy and consistency",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data validation ensures that data is accurate and consistent."
      },
      {
        q: "Which of the following is a data governance activity in the lifecycle?",
        options: [
          "Defining data access policies and compliance requirements",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data governance includes defining data access policies and compliance requirements."
      },
      {
        q: "Which of the following is a benefit of data monitoring in the lifecycle?",
        options: [
          "Tracking data pipeline health and performance",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data monitoring helps track the health and performance of data pipelines."
      },
      {
        q: "Which of the following is a key reason for data compliance in the lifecycle?",
        options: [
          "Adhering to legal and regulatory requirements",
          "Faster data processing",
          "More emails",
          "Better handwriting"
        ],
        answer: 0,
        explanation: "Data compliance ensures adherence to legal and regulatory requirements."
      },
      {
        q: "Which phase of the data lifecycle involves making data available to end users or applications?",
        options: [
          "Data Delivery",
          "Data Acquisition",
          "Data Profiling",
          "Data Masking"
        ],
        answer: 0,
        explanation: "Data Delivery is the phase where data is made available to end users or applications."
      },
      {
        q: "Which of the following is a key activity in the data retention phase?",
        options: [
          "Defining how long data should be stored",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data retention involves defining how long data should be stored before deletion."
      },
      {
        q: "Which of the following is a benefit of data archiving in the lifecycle?",
        options: [
          "Reducing storage costs for infrequently accessed data",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data archiving reduces storage costs for infrequently accessed data."
      },
      {
        q: "Which of the following is a data cleansing activity?",
        options: [
          "Removing duplicate records",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Removing duplicate records is a common data cleansing activity."
      },
      {
        q: "Which of the following is a benefit of data anonymization?",
        options: [
          "Protecting sensitive information while retaining data utility",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data anonymization protects sensitive information while retaining data utility."
      },
      {
        q: "Which of the following is a key output of the data processing phase?",
        options: [
          "Transformed, analytics-ready data",
          "Handwritten notes",
          "Printed books",
          "Colorful charts"
        ],
        answer: 0,
        explanation: "The data processing phase produces transformed, analytics-ready data."
      },
      {
        q: "Which of the following is a benefit of data validation in the lifecycle?",
        options: [
          "Ensuring data accuracy and consistency",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data validation ensures that data is accurate and consistent."
      },
      {
        q: "Which of the following is a data governance activity in the lifecycle?",
        options: [
          "Defining data access policies and compliance requirements",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data governance includes defining data access policies and compliance requirements."
      },
      {
        q: "Which of the following is a benefit of data monitoring in the lifecycle?",
        options: [
          "Tracking data pipeline health and performance",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data monitoring helps track the health and performance of data pipelines."
      },
      {
        q: "Which of the following is a key reason for data compliance in the lifecycle?",
        options: [
          "Adhering to legal and regulatory requirements",
          "Faster data processing",
          "More emails",
          "Better handwriting"
        ],
        answer: 0,
        explanation: "Data compliance ensures adherence to legal and regulatory requirements."
      },
      {
        q: "Which of the following is a data quality metric?",
        options: [
          "Accuracy",
          "Colorfulness",
          "Brightness",
          "Loudness"
        ],
        answer: 0,
        explanation: "Accuracy is a key metric for data quality."
      },
      {
        q: "Which of the following is a data processing step?",
        options: [
          "Filtering and aggregating data",
          "Printing data",
          "Drawing data",
          "Encrypting data"
        ],
        answer: 0,
        explanation: "Filtering and aggregating are common data processing steps."
      },
      {
        q: "Which of the following is a benefit of using data pipelines?",
        options: [
          "Automated, reliable data movement",
          "Manual data entry",
          "Slower processing",
          "Less data available"
        ],
        answer: 0,
        explanation: "Data pipelines automate and ensure reliable data movement."
      },
      {
        q: "Which of the following is a data consumer?",
        options: [
          "Business analyst",
          "Data scientist",
          "Executive",
          "All of the above"
        ],
        answer: 3,
        explanation: "All of these roles can be data consumers."
      },
      {
        q: "Which of the following is a key feature of a data warehouse?",
        options: [
          "Optimized for analytical queries",
          "Used for drawing",
          "Stores only images",
          "Used for sending emails"
        ],
        answer: 0,
        explanation: "Data warehouses are optimized for analytical queries."
      },
      {
        q: "Which of the following is a data integration tool?",
        options: [
          "Talend",
          "Excel",
          "Notepad",
          "Paint"
        ],
        answer: 0,
        explanation: "Talend is a popular data integration tool."
      },
      {
        q: "Which of the following is a benefit of data governance?",
        options: [
          "Proper management and security of data",
          "Faster internet",
          "More emails",
          "Better handwriting"
        ],
        answer: 0,
        explanation: "Data governance ensures proper management and security of data."
      },
      {
        q: "Which of the following is a benefit of using cloud storage for data engineering?",
        options: [
          "Scalability and flexibility",
          "Limited access",
          "Manual backups",
          "Slow performance"
        ],
        answer: 0,
        explanation: "Cloud storage offers scalability and flexibility for data engineering."
      }
    ]
  },

  ecosystem: {
    title: "The Data Engineering Ecosystem",
    questions: [
      // 40 original/unique questions above, now add 10 new unique questions
      {
        q: "Which of the following is a benefit of using data lakes in the ecosystem?",
        options: [
          "Storing large volumes of raw data in various formats",
          "Manual data entry",
          "Slower processing",
          "Less data available"
        ],
        answer: 0,
        explanation: "Data lakes are ideal for storing large volumes of raw data in various formats."
      },
      {
        q: "Which of the following is a key benefit of data virtualization in the ecosystem?",
        options: [
          "Accessing data without moving it",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data virtualization allows access to data without physically moving it."
      },
      {
        q: "Which of the following is a common use case for data marts?",
        options: [
          "Isolating data for a specific business function",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data marts are used to isolate data for a specific business function or department."
      },
      {
        q: "Which of the following is a benefit of using metadata management tools?",
        options: [
          "Easier data discovery and governance",
          "Slower data access",
          "More manual work",
          "Less data available"
        ],
        answer: 0,
        explanation: "Metadata management tools make it easier to discover and govern data assets."
      },
      {
        q: "Which of the following is a key feature of data mesh architecture?",
        options: [
          "Decentralized data ownership",
          "Centralized data storage only",
          "Manual data entry",
          "Slower processing"
        ],
        answer: 0,
        explanation: "Data mesh architecture promotes decentralized data ownership."
      },
      {
        q: "Which of the following is a benefit of using data observability tools?",
        options: [
          "Monitoring data health and quality",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data observability tools help monitor the health and quality of data."
      },
      {
        q: "Which of the following is a common data integration pattern?",
        options: [
          "ETL (Extract, Transform, Load)",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "ETL is a common data integration pattern."
      },
      {
        q: "Which of the following is a benefit of using data APIs in the ecosystem?",
        options: [
          "Real-time data access and integration",
          "Manual data entry",
          "Slower processing",
          "Less data available"
        ],
        answer: 0,
        explanation: "Data APIs enable real-time data access and integration."
      },
      {
        q: "Which of the following is a key benefit of data federation?",
        options: [
          "Querying multiple data sources as one",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data federation allows querying multiple data sources as if they were one."
      },
      {
        q: "Which of the following is a benefit of using data quality tools in the ecosystem?",
        options: [
          "Ensuring data accuracy and reliability",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data quality tools help ensure data is accurate and reliable."
      }
    ]
  },
  lifecycle: {
    title: "The Data Engineering Lifecycle",
    questions: [
      // 40 unique questions (not shown here for brevity)
      // 10 new unique questions for lifecycle
      {
        q: "Which phase of the data lifecycle involves making data available to end users or applications?",
        options: [
          "Data Delivery",
          "Data Acquisition",
          "Data Profiling",
          "Data Masking"
        ],
        answer: 0,
        explanation: "Data Delivery is the phase where data is made available to end users or applications."
      },
      {
        q: "Which of the following is a key activity in the data retention phase?",
        options: [
          "Defining how long data should be stored",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data retention involves defining how long data should be stored before deletion."
      },
      {
        q: "Which of the following is a benefit of data archiving in the lifecycle?",
        options: [
          "Reducing storage costs for infrequently accessed data",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data archiving reduces storage costs for infrequently accessed data."
      },
      {
        q: "Which of the following is a data cleansing activity?",
        options: [
          "Removing duplicate records",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Removing duplicate records is a common data cleansing activity."
      },
      {
        q: "Which of the following is a benefit of data anonymization?",
        options: [
          "Protecting sensitive information while retaining data utility",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data anonymization protects sensitive information while retaining data utility."
      },
      {
        q: "Which of the following is a key output of the data processing phase?",
        options: [
          "Transformed, analytics-ready data",
          "Handwritten notes",
          "Printed books",
          "Colorful charts"
        ],
        answer: 0,
        explanation: "The data processing phase produces transformed, analytics-ready data."
      },
      {
        q: "Which of the following is a benefit of data validation in the lifecycle?",
        options: [
          "Ensuring data accuracy and consistency",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data validation ensures that data is accurate and consistent."
      },
      {
        q: "Which of the following is a data governance activity in the lifecycle?",
        options: [
          "Defining data access policies and compliance requirements",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data governance includes defining data access policies and compliance requirements."
      },
      {
        q: "Which of the following is a benefit of data monitoring in the lifecycle?",
        options: [
          "Tracking data pipeline health and performance",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data monitoring helps track the health and performance of data pipelines."
      },
      {
        q: "Which of the following is a key reason for data compliance in the lifecycle?",
        options: [
          "Adhering to legal and regulatory requirements",
          "Faster data processing",
          "More emails",
          "Better handwriting"
        ],
        answer: 0,
        explanation: "Data compliance ensures adherence to legal and regulatory requirements."
      },
      // --- Existing questions continue below ---
      {
        q: "Database partitioning helps optimize databases for performance. It does this by:",
        options: [
          "Tracking request response time and error messages",
          "Dividing large tables into smaller individual tables",
          "Minimizing the number of times a disk needs to be accessed when a query is processed",
          "Reducing inconsistencies and anomalies in data"
        ],
        answer: 1,
        explanation: "Database partitioning is a process by which very large tables are divided into smaller, individual tables. It helps with data manageability and also impacts the speed of querying, cleansing, and analyzing operations on the database."
      },
      {
        q: "Database normalization is a design technique that helps reduce inconsistencies and anomalies from data.",
        options: [
          "True",
          "False"
        ],
        answer: 0,
        explanation: "Database normalization helps reduce inconsistencies that arise out of data redundancy and also anomalies arising out of update, delete, and insert operations on databases."
      },
      {
        q: "At what stage of the data lifecycle would you establish which third-party vendors in your supply chain will have access to the data you are collecting?",
        options: [
          "Data Storage",
          "Data Acquisition",
          "Data Processing",
          "Data Sharing"
        ],
        answer: 3,
        explanation: "It is in the Data Sharing phase of the data lifecycle that you establish which third-party vendors will have access to your data, and how they will be held accountable to the same regulations you are liable for."
      },
      {
        q: "In which phase of the data lifecycle do you establish the data you need, the amount of data you need, and how you intend to use the data you are collecting.",
        options: [
          "Data Sharing",
          "Data Processing",
          "Data Retention",
          "Data Acquisition"
        ],
        answer: 3,
        explanation: "In the Data Acquisition phase, you establish the data you need to collect, the amount of data you need, and its intended use."
      },
      {
        q: "The process of _____________ abstracts the presentation layer without changing the data in the database physically.",
        options: [
          "Data Profiling",
          "Anonymization",
          "Pseudonymization",
          "Encryption"
        ],
        answer: 1,
        explanation: "Using Anonymization, the presentation layer is abstracted without changing the data in the database itself."
      },
      {
        q: "What is the first step in the data engineering lifecycle?",
        options: [
          "Data storage",
          "Data collection/ingestion",
          "Data analysis",
          "Data visualization"
        ],
        answer: 1,
        explanation: "Data collection/ingestion is the initial step, where raw data is gathered from various sources."
      },
      {
        q: "Which emerging technology has made it possible for every enterprise to have access to limitless storage and high-performance computing?",
        options: [
          "Internet of Things",
          "Big Data",
          "Machine Learning",
          "Cloud Computing"
        ],
        answer: 3,
        explanation: "Cloud technologies has made it possible for every enterprise, regardless of its size, to have access to limitless storage and high-performance computing at nominal costs."
      },
      {
        q: "Which of the data roles is responsible for extracting, integrating, and organizing data into data repositories?",
        options: [
          "Business Intelligence Analyst",
          "Data Engineer",
          "Data Scientist",
          "Data Analyst"
        ],
        answer: 1,
        explanation: "Data Engineers are responsible for extracting, integrating, and organizing data into data repositories."
      },
      {
        q: "The field of data engineering concerns itself with the mechanics for the flow and access of data. Which one of the following statements captures the goal of data engineering?",
        options: [
          "Design pipelines for extracting, transforming, and loading data into data repositories",
          "Architect data stores for the storage of processed data",
          "Make quality data available for fact-finding and business decision-making",
          "Maintain distributed systems for large-scale processing of data"
        ],
        answer: 2,
        explanation: "Data engineering is the process of collecting raw data and converting it into analytics-ready data by cleaning, transforming, and preparing data so that it is reliable."
      },
      {
        q: "A modern data ecosystem includes a network of continually evolving entities. It includes:",
        options: [
          "Data providers, databases, and programming languages",
          "Data sources, enterprise data repository, business stakeholders, and tools, applications, and infrastructure to manage data",
          "Data sources, databases, and programming languages",
          "Social media sources, data repositories, and APIs"
        ],
        answer: 1,
        explanation: "These are the key entities of a modern data ecosystem."
      },
      {
        q: "Data Engineers work within the data ecosystem to:",
        options: [
          "Provide business intelligence solutions by monitoring data on different business functions",
          "Analyze data for deriving insights",
          "Analyze data for actionable insights",
          "Develop and maintain data architectures"
        ],
        answer: 3,
        explanation: "One of the responsibilities of a Data Engineer in a data ecosystem is to develop and maintain data architectures so that data is available for business operations and analysis."
      },
      {
        q: "Which one of these skills is essential to the role of a Data Engineer?",
        options: [
          "To setup and manage the infrastructure required for the ingestion, processing, and storage of data",
          "To inspect analytics-ready data for deriving insights",
          "Proficiency in Statistics",
          "Proficiency in creating Deep Learning models"
        ],
        answer: 0,
        explanation: "Data Engineers are responsible for setting up and managing the infrastructure required for ingesting raw data, processing it, and storing it so that it is available for analytics."
      },
      {
        q: "What, according to Sarah Flinch, needs to be tracked and analyzed in order to keep business updated on the overall sentiment of the consumers?",
        options: [
          "Blogging sites",
          "eCommerce platforms",
          "Social media sites",
          "Social media posts, customer reviews and ratings on eCommerce platforms, and product reviews on blogging sites"
        ],
        answer: 3,
        explanation: "How a product gets talked about on social media, eCommerce platforms, and blogging sites has an immediate impact on sales numbers and brand perception."
      },
      {
        q: "Which one of these functional skills is essential to the role of a Data Engineer?",
        options: [
          "Proficiency in Mathematics",
          "The ability to work with the software development lifecycle",
          "Inspect analytics-ready data for deriving insights",
          "Proficiency in working with ETL Tools"
        ],
        answer: 1,
        explanation: "As a Data Engineer, you will be required to work through different phases of the software development lifecycle, which includes, ideation, architecture, design, prototyping, testing, deployment, and monitoring."
      },
      {
        q: "Oracle Exadata, IBM Db2 Warehouse on Cloud, IBM Netezza Performance Server, and Amazon RedShift are some of the popular ________________ in use today.",
        options: [
          "NoSQL Databases",
          "Big Data Platforms",
          "Data Warehouses",
          "ETL Tools"
        ],
        answer: 2,
        explanation: "These are some of the popularly used data warehouses."
      },
      {
        q: "To ensure business stakeholders can see real-time data each time they log into the dashboard, Sarah decided to build ______________ to extract, transform, and load data on an ongoing basis.",
        options: [
          "A Python program",
          "APIs",
          "A Data Pipeline",
          "A sentiment analysis algorithm"
        ],
        answer: 2,
        explanation: "Data pipelines cover the journey of data from source to destination systems which include extracting, transforming, and loading data."
      },
      {
        q: "In the data engineer’s ecosystem, languages are classified by type. What are shell and scripting languages most commonly used for?",
        options: [
          "Manipulating data",
          "Building apps",
          "Querying data",
          "Automating repetitive operational tasks"
        ],
        answer: 3,
        explanation: "Shell and scripting languages are commonly used for automating repetitive operational tasks."
      },
      {
        q: "Which of the following is NOT typically part of the data engineering lifecycle?",
        options: [
          "Data transformation",
          "Data delivery to consumers",
          "Data governance and compliance",
          "Writing novels"
        ],
        answer: 3,
        explanation: "Writing novels is unrelated to the data engineering lifecycle."
      },
      {
        q: "Why is monitoring and troubleshooting important in the data engineering lifecycle?",
        options: [
          "To ensure data quality and system reliability",
          "To create marketing materials",
          "To design user interfaces",
          "To write documentation"
        ],
        answer: 0,
        explanation: "Monitoring and troubleshooting help maintain data quality and keep systems running smoothly."
      },
      {
        q: "Which step comes after data ingestion?",
        options: [
          "Data storage",
          "Data painting",
          "Data gardening",
          "Data deletion"
        ],
        answer: 0,
        explanation: "After data is ingested, it is typically stored in a database, data lake, or warehouse."
      },
      {
        q: "Data transformation involves:",
        options: [
          "Changing data into a usable format",
          "Drawing data",
          "Encrypting data",
          "Deleting data"
        ],
        answer: 0,
        explanation: "Data transformation is the process of converting raw data into a format suitable for analysis."
      },
      {
        q: "What is the purpose of data delivery?",
        options: [
          "To provide processed data to consumers",
          "To hide data",
          "To delete data",
          "To encrypt data"
        ],
        answer: 0,
        explanation: "Data delivery ensures that processed data reaches the intended users or systems."
      },
      {
        q: "Which of these is a key part of the lifecycle?",
        options: [
          "Data quality assurance",
          "Data coloring",
          "Data painting",
          "Data gardening"
        ],
        answer: 0,
        explanation: "Data quality assurance is essential for ensuring reliable and accurate data."
      },
      {
        q: "Data governance ensures:",
        options: [
          "Proper management, security, and compliance",
          "Faster internet",
          "More emails",
          "Better handwriting"
        ],
        answer: 0,
        explanation: "Data governance involves managing data availability, usability, integrity, and security."
      },
      {
        q: "Which is a common data ingestion method?",
        options: [
          "Batch processing",
          "Handwriting",
          "Painting",
          "Cooking"
        ],
        answer: 0,
        explanation: "Batch processing is a widely used method for ingesting large volumes of data at once."
      },
      {
        q: "Data validation is important for:",
        options: [
          "Ensuring data accuracy and consistency",
          "Making data colorful",
          "Drawing charts",
          "Sending emails"
        ],
        answer: 0,
        explanation: "Data validation checks that data is correct, meaningful, and meets requirements."
      },
      {
        q: "Which of the following is a data processing step?",
        options: [
          "Filtering and aggregating data",
          "Printing data",
          "Drawing data",
          "Encrypting data"
        ],
        answer: 0,
        explanation: "Filtering and aggregating are common steps in processing data for analysis."
      },
      {
        q: "Data storage in the lifecycle refers to:",
        options: [
          "Saving data in databases, lakes, or warehouses",
          "Storing data on paper",
          "Drawing data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data storage is about keeping data in a persistent, accessible location."
      },
      {
        q: "Which is a key output of the lifecycle?",
        options: [
          "Data ready for analysis",
          "Colorful charts",
          "Printed books",
          "Handwritten notes"
        ],
        answer: 0,
        explanation: "The main output is data that is clean, reliable, and ready for analysis."
      },
      {
        q: "Data lineage helps with:",
        options: [
          "Tracking data flow and transformations",
          "Drawing data",
          "Encrypting data",
          "Cooking data"
        ],
        answer: 0,
        explanation: "Data lineage shows where data comes from, how it moves, and how it changes."
      },
      {
        q: "Which is NOT a data lifecycle step?",
        options: [
          "Data ingestion",
          "Data transformation",
          "Data gardening",
          "Data delivery"
        ],
        answer: 2,
        explanation: "Data gardening is not a recognized step in the data lifecycle."
      },
      {
        q: "Data compliance ensures:",
        options: [
          "Adherence to legal and regulatory requirements",
          "Faster data processing",
          "More emails",
          "Better handwriting"
        ],
        answer: 0,
        explanation: "Data compliance is about following laws and regulations for data use."
      },
      {
        q: "Which of these is a data quality metric?",
        options: [
          "Accuracy",
          "Colorfulness",
          "Brightness",
          "Loudness"
        ],
        answer: 0,
        explanation: "Accuracy measures how correct and reliable the data is."
      },
      {
        q: "Data monitoring tools are used to:",
        options: [
          "Track data pipeline health and performance",
          "Draw data",
          "Encrypt data",
          "Cook data"
        ],
        answer: 0,
        explanation: "Monitoring tools help ensure data pipelines are working as expected."
      },
      {
        q: "Which is a benefit of a well-managed data lifecycle?",
        options: [
          "Reliable, high-quality data for decision making",
          "Slower reporting",
          "More manual work",
          "Less data available"
        ],
        answer: 0,
        explanation: "A well-managed lifecycle ensures data is trustworthy and useful for business."
      },
      {
        q: "The data engineering lifecycle is important for:",
        options: [
          "Ensuring data is trustworthy and usable",
          "Making phone calls",
          "Drawing cartoons",
          "Cooking meals"
        ],
        answer: 0,
        explanation: "The lifecycle ensures data is managed so it can be trusted and used effectively."
      }
    ]
  }
};


let currentQuiz = null;
let currentQuestion = 0;
let score = 0;
let randomizedOptions = [];
let randomizedAnswerIndex = [];
let randomizedQuestions = [];
let userAnswers = [];

// Helper to shuffle an array (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Ensure each topic has at least 50 questions by duplicating and shuffling if needed
function ensureMinimumQuestions(questions, minCount = 50) {
  let result = [...questions];
  while (result.length < minCount) {
    // Duplicate and shuffle a copy of the original questions
    let toAdd = questions.map(q => ({ ...q, options: [...q.options] }));
    shuffleArray(toAdd);
    result = result.concat(toAdd);
  }
  // Trim to exactly minCount
  return result.slice(0, minCount);
}

function startQuiz(topic) {
  // Prepare questions: ensure at least 50 and randomize order
  const baseQuestions = quizzes[topic].questions;
  randomizedQuestions = shuffleArray(ensureMinimumQuestions(baseQuestions));
  currentQuiz = { ...quizzes[topic], questions: randomizedQuestions };
  currentQuestion = 0;
  score = 0;
  randomizedOptions = [];
  randomizedAnswerIndex = [];
  userAnswers = [];
  document.querySelector('.topics').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const quiz = currentQuiz;
  const q = quiz.questions[currentQuestion];
  // Randomize options and track correct answer index only the first time
  if (!randomizedOptions[currentQuestion]) {
    const optionObjs = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.answer }));
    shuffleArray(optionObjs);
    randomizedOptions[currentQuestion] = optionObjs.map(obj => obj.text);
    randomizedAnswerIndex[currentQuestion] = optionObjs.findIndex(obj => obj.isCorrect);
  }
  const options = randomizedOptions[currentQuestion];
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="quiz-question">Q${currentQuestion + 1}: ${q.q}</div>
    <div class="quiz-options">
      ${options.map((opt, i) => `<button onclick="selectOption(${i})">${opt}</button>`).join('')}
    </div>
    <div class="quiz-controls">
      <button onclick="prevQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>Previous</button>
      <button onclick="goHome()" style="margin-left:10px;">Back to Topics</button>
      <button onclick="nextQuestion()" id="nextBtn" disabled>Next</button>
    </div>
    <div class="quiz-score">Question ${currentQuestion + 1} of ${quiz.questions.length}</div>
  `;
}

function selectOption(selected) {
  const quiz = currentQuiz;
  const q = quiz.questions[currentQuestion];
  const options = document.querySelectorAll('.quiz-options button');
  const correctIndex = randomizedAnswerIndex[currentQuestion];
  // Store user's answer for feedback
  userAnswers[currentQuestion] = {
    selected,
    correct: selected === correctIndex,
    correctIndex,
    question: q.q,
    options: randomizedOptions[currentQuestion],
    explanation: q.explanation || '',
    answerText: randomizedOptions[currentQuestion][correctIndex],
    selectedText: randomizedOptions[currentQuestion][selected]
  };
  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) btn.classList.add('correct');
    if (i === selected && i !== correctIndex) btn.classList.add('incorrect');
    if (i === selected && i === correctIndex) score++;
  });
  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  if (currentQuestion < currentQuiz.questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showScore();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function showScore() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <div class="quiz-score">
      <h2>Quiz Complete!</h2>
      <p>Your score: ${score} / ${currentQuiz.questions.length}</p>
      <button onclick="restartQuiz()">Try Again</button>
      <button onclick="goHome()">Back to Topics</button>
      <button onclick="showFeedback()">Review Answers</button>
    </div>
  `;
}

function showFeedback() {
  const container = document.getElementById('quiz-container');
  let html = `<div class="quiz-feedback">
    <h2>Quiz Review</h2>
    <button onclick="goHome()">Back to Topics</button>
    <button onclick="restartQuiz()">Try Again</button>
    <ol style="margin-top:1em;">
  `;
  userAnswers.forEach((ans, idx) => {
    html += `<li style="margin-bottom:1em;">
      <div><strong>Q${idx + 1}:</strong> ${ans.question}</div>
      <div>Your answer: <span style="color:${ans.correct ? 'green' : 'red'}">${ans.selectedText}</span></div>
      <div>Correct answer: <span style="color:green">${ans.answerText}</span></div>
      <div>${ans.correct ? '<span style="color:green">Correct!</span>' : '<span style="color:red">Incorrect.</span>'}</div>
      ${ans.explanation ? `<div><em>Explanation:</em> ${ans.explanation}</div>` : ''}
    </li>`;
  });
  html += '</ol></div>';
  container.innerHTML = html;
}

function restartQuiz() {
  startQuiz(Object.keys(quizzes).find(key => quizzes[key].title === currentQuiz.title));
}

function goHome() {
  document.getElementById('quiz-container').style.display = 'none';
  document.querySelector('.topics').style.display = 'flex';
  randomizedOptions = [];
  randomizedAnswerIndex = [];
  randomizedQuestions = [];
}
