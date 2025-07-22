// Quiz data for each topic
const quizzes = {
  // ...existing code...
  dataEngineering: {
    title: "What is Data Engineering?",
    questions: [
      // Unique questions only (duplicates removed and replaced)
      {
        q: "What is the primary goal of data engineering?",
        options: [
          "To make quality data available for analysis and decision-making",
          "To design user interfaces",
          "To write documentation",
          "To create marketing materials"
        ],
        answer: 0,
        explanation: "The main goal of data engineering is to make quality data available for analysis and business decision-making."
      },
      {
        q: "Which of the following best describes ETL in data engineering?",
        options: [
          "Extract, Transform, Load",
          "Encrypt, Transfer, Log",
          "Edit, Test, Launch",
          "Evaluate, Train, Learn"
        ],
        answer: 0,
        explanation: "ETL stands for Extract, Transform, Load, which are key steps in data integration."
      },
      {
        q: "Which tool is commonly used for data pipeline orchestration?",
        options: [
          "Apache Airflow",
          "Microsoft Word",
          "Adobe Photoshop",
          "Google Chrome"
        ],
        answer: 0,
        explanation: "Apache Airflow is a popular tool for orchestrating data pipelines."
      },
      {
        q: "What is data ingestion?",
        options: [
          "The process of collecting and importing data for use or storage",
          "The process of deleting data",
          "The process of encrypting data",
          "The process of visualizing data"
        ],
        answer: 0,
        explanation: "Data ingestion is the process of collecting and importing data for use or storage."
      },
      {
        q: "Which of the following is a data storage technology?",
        options: [
          "Amazon S3",
          "Microsoft Excel",
          "Adobe Illustrator",
          "Slack"
        ],
        answer: 0,
        explanation: "Amazon S3 is a widely used data storage technology."
      },
      {
        q: "Which language is commonly used for data engineering tasks?",
        options: [
          "Python",
          "French",
          "HTML",
          "CSS"
        ],
        answer: 0,
        explanation: "Python is a popular language for data engineering tasks."
      },
      {
        q: "What is data transformation?",
        options: [
          "The process of converting data from one format or structure to another",
          "The process of deleting data",
          "The process of encrypting data",
          "The process of visualizing data"
        ],
        answer: 0,
        explanation: "Data transformation is converting data from one format or structure to another."
      },
      {
        q: "Which of the following is a benefit of data partitioning?",
        options: [
          "Improved query performance and manageability",
          "Increased data redundancy",
          "Reduced data security",
          "Slower data access"
        ],
        answer: 0,
        explanation: "Data partitioning improves query performance and manageability."
      },
      {
        q: "What is a data warehouse?",
        options: [
          "A system used for reporting and data analysis",
          "A tool for drawing charts",
          "A type of email server",
          "A programming language"
        ],
        answer: 0,
        explanation: "A data warehouse is a system used for reporting and data analysis."
      },
      {
        q: "Which of the following is a data quality metric?",
        options: [
          "Completeness",
          "Colorfulness",
          "Brightness",
          "Loudness"
        ],
        answer: 0,
        explanation: "Completeness is a key metric for data quality."
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
      },
      // --- Additional unique questions for dataEngineering ---
      {q: "Which of the following is a common data serialization format?", options: ["JSON", "JPEG", "MP3", "PDF"], answer: 0, explanation: "JSON (JavaScript Object Notation) is a widely used data serialization format."},
      {q: "Which technology is often used for distributed storage?", options: ["Hadoop HDFS", "Microsoft Word", "PowerPoint", "Excel"], answer: 0, explanation: "Hadoop HDFS is a distributed file system for storing large data sets."},
      {q: "What does ELT stand for in data engineering?", options: ["Extract, Load, Transform", "Encrypt, Load, Transfer", "Edit, Launch, Test", "Evaluate, Learn, Train"], answer: 0, explanation: "ELT stands for Extract, Load, Transform, a variant of ETL."},
      {q: "Which of the following is a columnar database?", options: ["Amazon Redshift", "MySQL", "MongoDB", "Neo4j"], answer: 0, explanation: "Amazon Redshift is a columnar database optimized for analytics."},
      {q: "Which tool is commonly used for workflow scheduling in data engineering?", options: ["Apache Airflow", "Adobe Illustrator", "Slack", "Zoom"], answer: 0, explanation: "Apache Airflow is used for scheduling and monitoring workflows."},
      {q: "Which of the following is a benefit of using data pipelines?", options: ["Automated data movement", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data pipelines automate the movement and transformation of data."},
      {q: "Which language is often used for querying databases?", options: ["SQL", "HTML", "CSS", "JavaScript"], answer: 0, explanation: "SQL (Structured Query Language) is used to query databases."},
      {q: "Which of the following is a NoSQL database?", options: ["MongoDB", "Oracle", "PostgreSQL", "SQLite"], answer: 0, explanation: "MongoDB is a popular NoSQL database."},
      {q: "What is the main purpose of data modeling?", options: ["Defining data structure and relationships", "Drawing charts", "Encrypting data", "Sending emails"], answer: 0, explanation: "Data modeling defines how data is structured and related."},
      {q: "Which of the following is a data integration tool?", options: ["Talend", "Photoshop", "Excel", "PowerPoint"], answer: 0, explanation: "Talend is a popular data integration tool."},
      {q: "Which of the following is a benefit of data normalization?", options: ["Reduces data redundancy", "Increases data errors", "Slows down queries", "Makes data less accessible"], answer: 0, explanation: "Normalization reduces redundancy and improves data integrity."},
      {q: "Which of the following is a distributed computing framework?", options: ["Apache Spark", "Microsoft Word", "Google Sheets", "Slack"], answer: 0, explanation: "Apache Spark is a distributed computing framework for big data."},
      {q: "Which of the following is a data visualization tool?", options: ["Tableau", "Notepad", "VLC", "Paint"], answer: 0, explanation: "Tableau is a popular data visualization tool."},
      {q: "Which of the following is a key concept in data warehousing?", options: ["Star schema", "Pie chart", "Bar graph", "Scatter plot"], answer: 0, explanation: "Star schema is a common data warehouse modeling technique."},
      {q: "Which of the following is a benefit of using indexes in databases?", options: ["Faster query performance", "Slower data access", "Increased redundancy", "Less security"], answer: 0, explanation: "Indexes improve the speed of data retrieval."},
      {q: "Which of the following is a message broker often used in data engineering?", options: ["Apache Kafka", "Photoshop", "Excel", "Slack"], answer: 0, explanation: "Apache Kafka is used for real-time data streaming and messaging."},
      {q: "Which of the following is a cloud-based data warehouse?", options: ["Snowflake", "Paint", "Word", "Excel"], answer: 0, explanation: "Snowflake is a cloud-based data warehouse platform."},
      {q: "Which of the following is a benefit of data caching?", options: ["Faster data retrieval", "Slower processing", "Increased latency", "Less reliability"], answer: 0, explanation: "Caching improves data retrieval speed."},
      {q: "Which of the following is a common data format for big data?", options: ["Parquet", "PNG", "MP4", "DOCX"], answer: 0, explanation: "Parquet is a columnar storage file format for big data."},
      {q: "Which of the following is a benefit of data deduplication?", options: ["Reduces storage requirements", "Increases redundancy", "Slows down queries", "Makes data less accessible"], answer: 0, explanation: "Deduplication removes duplicate data, saving storage."},
      {q: "Which of the following is a common data ingestion tool?", options: ["Apache NiFi", "Photoshop", "Excel", "Slack"], answer: 0, explanation: "Apache NiFi is used for automating data flows."},
      {q: "Which of the following is a benefit of data sharding?", options: ["Improved scalability", "Reduced security", "Slower queries", "Increased redundancy"], answer: 0, explanation: "Sharding improves scalability by splitting data across servers."},
      {q: "Which of the following is a benefit of using cloud data platforms?", options: ["On-demand scalability", "Manual backups", "Limited access", "Slow performance"], answer: 0, explanation: "Cloud platforms offer on-demand scalability."},
      {q: "Which of the following is a common use case for data lakes?", options: ["Storing raw, unstructured data", "Drawing charts", "Encrypting data", "Sending emails"], answer: 0, explanation: "Data lakes store raw, unstructured, or semi-structured data."},
      {q: "Which of the following is a benefit of using batch processing?", options: ["Efficient processing of large data volumes", "Real-time analytics", "Manual data entry", "Slower processing"], answer: 0, explanation: "Batch processing is efficient for large data sets."},
      {q: "Which of the following is a benefit of using stream processing?", options: ["Real-time data analysis", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Stream processing enables real-time analytics."},
      {q: "Which of the following is a benefit of data masking?", options: ["Protects sensitive information", "Increases data errors", "Slows down queries", "Makes data less accessible"], answer: 0, explanation: "Data masking hides sensitive data."},
      {q: "Which of the following is a benefit of using data catalogs?", options: ["Easier data discovery", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data catalogs help users find and understand data assets."},
      {q: "Which of the following is a benefit of using data lineage tools?", options: ["Tracking data flow and transformations", "Drawing charts", "Encrypting data", "Sending emails"], answer: 0, explanation: "Data lineage tools track data origins and changes."},
      {q: "Which of the following is a benefit of using data quality tools?", options: ["Ensuring data accuracy and reliability", "Making data colorful", "Drawing charts", "Sending emails"], answer: 0, explanation: "Data quality tools help ensure data is accurate and reliable."},
      {q: "Which of the following is a benefit of using data governance frameworks?", options: ["Ensuring compliance and security", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data governance frameworks ensure compliance and security."},
      {q: "Which of the following is a benefit of using data stewardship?", options: ["Improved data quality and management", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data stewardship improves data quality and management."},
      {q: "Which of the following is a benefit of using data profiling?", options: ["Understanding data structure and quality", "Drawing charts", "Encrypting data", "Sending emails"], answer: 0, explanation: "Data profiling helps understand data structure and quality."},
      {q: "Which of the following is a benefit of using data anonymization?", options: ["Protects privacy while retaining data utility", "Increases data errors", "Slows down queries", "Makes data less accessible"], answer: 0, explanation: "Anonymization protects privacy while keeping data useful."},
      {q: "Which of the following is a benefit of using data retention policies?", options: ["Defines how long data is stored", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Retention policies define how long data is kept."},
      {q: "Which of the following is a benefit of using data archiving?", options: ["Reduces storage costs for infrequently accessed data", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Archiving reduces storage costs for old data."},
      {q: "Which of the following is a benefit of using data validation?", options: ["Ensures data accuracy and consistency", "Making data colorful", "Drawing charts", "Sending emails"], answer: 0, explanation: "Validation checks that data is correct and consistent."},
      {q: "Which of the following is a benefit of using data monitoring tools?", options: ["Track data pipeline health and performance", "Draw data", "Encrypt data", "Cook data"], answer: 0, explanation: "Monitoring tools help ensure data pipelines are working as expected."},
      {q: "Which of the following is a benefit of a well-managed data lifecycle?", options: ["Reliable, high-quality data for decision making", "Slower reporting", "More manual work", "Less data available"], answer: 0, explanation: "A well-managed lifecycle ensures data is trustworthy and useful for business."},
      {q: "Which of the following is a benefit of using data compliance frameworks?", options: ["Ensures adherence to legal and regulatory requirements", "Faster data processing", "More emails", "Better handwriting"], answer: 0, explanation: "Compliance frameworks ensure legal and regulatory adherence."}
      // --- End additional dataEngineering questions ---
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
      },
      // --- Additional unique questions for ecosystem ---
      {q: "Which open-source tool is commonly used for big data processing?", options: ["Apache Spark", "Microsoft Paint", "Google Docs", "Slack"], answer: 0, explanation: "Apache Spark is a popular open-source tool for big data processing."},
      {q: "What is the main purpose of a data catalog in the ecosystem?", options: ["Organizing and managing metadata about data assets", "Sending emails", "Drawing diagrams", "Encrypting files"], answer: 0, explanation: "A data catalog helps organize and manage metadata for easier data discovery."},
      {q: "Which technology is often used for real-time data streaming?", options: ["Apache Kafka", "Microsoft Word", "Excel", "PowerPoint"], answer: 0, explanation: "Apache Kafka is widely used for real-time data streaming."},
      {q: "What is the role of a data steward in the ecosystem?", options: ["Ensuring data quality and governance", "Designing websites", "Managing payroll", "Writing novels"], answer: 0, explanation: "A data steward is responsible for data quality and governance."},
      {q: "Which of the following is a benefit of using data orchestration tools?", options: ["Automating and managing data workflows", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Orchestration tools automate and manage data workflows."},
      {q: "Which of the following is a benefit of using data versioning?", options: ["Tracking changes to datasets over time", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data versioning tracks changes to datasets."},
      {q: "Which of the following is a benefit of using data mesh architecture in the ecosystem?", options: ["Decentralized data ownership and responsibility", "Centralized data storage only", "Manual data entry", "Slower processing"], answer: 0, explanation: "Data mesh architecture promotes decentralized data ownership and responsibility."},
      {q: "Which of the following is a benefit of using data observability tools in the ecosystem?", options: ["Proactive detection of data issues", "Drawing data", "Encrypting data", "Cooking data"], answer: 0, explanation: "Data observability tools help proactively detect data issues."},
      {q: "Which of the following is a benefit of using data marts in the ecosystem?", options: ["Faster access to subject-specific data", "Drawing data", "Encrypting data", "Cooking data"], answer: 0, explanation: "Data marts provide faster access to subject-specific data."},
      {q: "Which of the following is a benefit of using data orchestration tools in the ecosystem?", options: ["Coordinating complex data workflows", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Orchestration tools coordinate complex data workflows."},
      {q: "Which of the following is a benefit of using data versioning in the ecosystem?", options: ["Reproducibility of data analysis", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data versioning enables reproducibility of data analysis."},
      {q: "Which of the following is a benefit of using data APIs in the ecosystem?", options: ["Automated data exchange between systems", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data APIs automate data exchange between systems."},
      {q: "Which of the following is a benefit of using data federation in the ecosystem?", options: ["Unified data access layer", "Drawing data", "Encrypting data", "Cooking data"], answer: 0, explanation: "Data federation provides a unified data access layer."},
      {q: "Which of the following is a benefit of using metadata management tools in the ecosystem?", options: ["Improved data governance and compliance", "Slower data access", "More manual work", "Less data available"], answer: 0, explanation: "Metadata management tools improve data governance and compliance."},
      {q: "Which of the following is a benefit of using ETL pipelines in the ecosystem?", options: ["Streamlined data processing", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "ETL pipelines streamline data processing."},
      {q: "Which of the following is a benefit of using data integration tools in the ecosystem?", options: ["Seamless data consolidation", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data integration tools enable seamless data consolidation."},
      {q: "Which of the following is a benefit of using data governance frameworks in the ecosystem?", options: ["Standardized data management practices", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data governance frameworks standardize data management practices."},
      {q: "Which of the following is a benefit of using data stewardship in the ecosystem?", options: ["Accountability for data quality", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data stewardship ensures accountability for data quality."},
      {q: "Which of the following is a benefit of using data profiling in the ecosystem?", options: ["Early detection of data issues", "Drawing charts", "Encrypting data", "Sending emails"], answer: 0, explanation: "Data profiling enables early detection of data issues."},
      {q: "Which of the following is a benefit of using data anonymization in the ecosystem?", options: ["Compliance with privacy regulations", "Increases data errors", "Slows down queries", "Makes data less accessible"], answer: 0, explanation: "Anonymization helps comply with privacy regulations."},
      {q: "Which of the following is a benefit of using data retention policies in the ecosystem?", options: ["Regulatory compliance and cost control", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Retention policies support regulatory compliance and cost control."},
      {q: "Which of the following is a benefit of using data archiving in the ecosystem?", options: ["Long-term preservation of historical data", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Archiving preserves historical data long-term."},
      {q: "Which of the following is a benefit of using data validation in the ecosystem?", options: ["Reduced data errors and inconsistencies", "Making data colorful", "Drawing charts", "Sending emails"], answer: 0, explanation: "Validation reduces data errors and inconsistencies."},
      {q: "Which of the following is a benefit of using data monitoring tools in the ecosystem?", options: ["Continuous oversight of data pipelines", "Draw data", "Encrypt data", "Cook data"], answer: 0, explanation: "Monitoring tools provide continuous oversight of data pipelines."},
      {q: "Which of the following is a benefit of a well-managed data ecosystem?", options: ["Agility in responding to business needs", "Slower reporting", "More manual work", "Less data available"], answer: 0, explanation: "A well-managed ecosystem enables business agility."},
      {q: "Which of the following is a benefit of using data compliance frameworks in the ecosystem?", options: ["Reduced risk of legal penalties", "Faster data processing", "More emails", "Better handwriting"], answer: 0, explanation: "Compliance frameworks reduce risk of legal penalties."},
      {q: "Which of the following is a benefit of using data lineage tools in the ecosystem?", options: ["Transparency in data movement and transformation", "Drawing charts", "Encrypting data", "Sending emails"], answer: 0, explanation: "Data lineage tools provide transparency in data movement and transformation."},
      {q: "Which of the following is a benefit of using data masking in the ecosystem?", options: ["Enhanced data privacy", "Increases data errors", "Slows down queries", "Makes data less accessible"], answer: 0, explanation: "Data masking enhances data privacy."},
      {q: "Which of the following is a benefit of using data sharding in the ecosystem?", options: ["Scalable data storage and processing", "Reduced security", "Slower queries", "Increased redundancy"], answer: 0, explanation: "Sharding enables scalable data storage and processing."},
      {q: "Which of the following is a benefit of using data caching in the ecosystem?", options: ["Reduced latency for frequent queries", "Slower processing", "Increased latency", "Less reliability"], answer: 0, explanation: "Caching reduces latency for frequent queries."},
      {q: "Which of the following is a benefit of using data deduplication in the ecosystem?", options: ["Optimized storage usage", "Increases redundancy", "Slows down queries", "Makes data less accessible"], answer: 0, explanation: "Deduplication optimizes storage usage."},
      {q: "Which of the following is a benefit of using cloud data platforms in the ecosystem?", options: ["Elastic resource allocation", "Manual backups", "Limited access", "Slow performance"], answer: 0, explanation: "Cloud platforms provide elastic resource allocation."},
      {q: "Which of the following is a benefit of using batch processing in the ecosystem?", options: ["Cost-effective processing of large data sets", "Real-time analytics", "Manual data entry", "Slower processing"], answer: 0, explanation: "Batch processing is cost-effective for large data sets."},
      {q: "Which of the following is a benefit of using stream processing in the ecosystem?", options: ["Immediate insights from data streams", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Stream processing provides immediate insights from data streams."},
      {q: "Which of the following is a benefit of using data catalogs in the ecosystem?", options: ["Centralized metadata management", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data catalogs centralize metadata management."},
      {q: "Which of the following is a benefit of using data modeling?", options: ["Defining data structure and relationships", "Drawing charts", "Encrypting data", "Sending emails"], answer: 0, explanation: "Data modeling defines how data is structured and related."},
      {q: "Which of the following is a benefit of using data integration tools?", options: ["Combining data from multiple sources", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data integration tools combine data from multiple sources."},
      {q: "Which of the following is a benefit of using data stewardship?", options: ["Improved data quality and management", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Data stewardship improves data quality and management."},
      {q: "Which of the following is a benefit of using data profiling?", options: ["Understanding data structure and quality", "Drawing charts", "Encrypting data", "Sending emails"], answer: 0, explanation: "Data profiling helps understand data structure and quality."},
      {q: "Which of the following is a benefit of using data anonymization?", options: ["Protects privacy while retaining data utility", "Increases data errors", "Slows down queries", "Makes data less accessible"], answer: 0, explanation: "Anonymization protects privacy while keeping data useful."},
      {q: "Which of the following is a benefit of using data retention policies?", options: ["Defines how long data is stored", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Retention policies define how long data is kept."},
      {q: "Which of the following is a benefit of using data archiving?", options: ["Reduces storage costs for infrequently accessed data", "Manual data entry", "Slower processing", "Less data available"], answer: 0, explanation: "Archiving reduces storage costs for old data."}
      // --- End additional ecosystem questions ---
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
      },
      // --- Additional unique questions for lifecycle ---
      {q: "What is the purpose of data profiling in the lifecycle?", options: ["To analyze the structure, content, and quality of data", "To encrypt data", "To visualize data", "To delete data"], answer: 0, explanation: "Data profiling helps understand the structure, content, and quality of data."},
      {q: "Which lifecycle phase focuses on ensuring data is accurate and consistent before use?", options: ["Data validation", "Data storage", "Data sharing", "Data masking"], answer: 0, explanation: "Data validation ensures data is accurate and consistent before it is used."},
      {q: "What is the main goal of data archiving in the lifecycle?", options: ["To store infrequently accessed data cost-effectively", "To delete data", "To encrypt data", "To visualize data"], answer: 0, explanation: "Data archiving stores infrequently accessed data in a cost-effective way."},
      {q: "Which activity is essential for protecting sensitive information during the lifecycle?", options: ["Data masking", "Data coloring", "Data gardening", "Data painting"], answer: 0, explanation: "Data masking is used to protect sensitive information."}
      // --- End additional lifecycle questions ---
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

function startQuiz(topic) {
  // Prepare questions: randomize order, no repeats
  const baseQuestions = quizzes[topic].questions;
  randomizedQuestions = shuffleArray([...baseQuestions]);
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
