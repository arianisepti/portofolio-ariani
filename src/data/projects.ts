// src/data/projects.ts
export const projects = [
  {
    id: 0,
    slug: 'kimia-farma',
    title: 'Kimia Farma Big Data Analytics Project',
    image: '/kimiafarma.png',
    category: 'Data Analytics',
    overview: 'A data analysis project focused on evaluating Kimia Farma\'s business performance based on transaction, branch, product, and inventory data. Data from four tables was integrated using Google BigQuery, followed by data quality checks, SQL analysis, and visualization through Google Looker Studio.',
    focus: ['Data Quality & Validation', 'SQL Analysis', 'Sales Analysis', 'Branch Performance', 'Product Analysis', 'Business Intelligence'],
    tools: ['Looker Studio', 'BigQuery', 'SQL'],
    // NEW DATA FOR DETAIL PAGE
    businessQuestion: '"Did our sales decline, and which regions were most affected?"',
    insights: [
      {
        title: 'Revenue Decline Context',
        description: 'Revenue in the West Java region experienced a drastic decline of 43.7% in the second quarter of 2021. This strongly correlates with the implementation of Emergency PPKM (Community Activity Restrictions) in the area.'
      },
      {
        title: 'Branch Performance',
        description: 'Despite high total transactions, 15 branches had transaction ratings (customer satisfaction) below the average, indicating issues with service or stock availability.'
      },
      {
        title: 'Product Contribution',
        description: 'The "Medical Devices" product category accounted for 60% of total revenue, while the "Vitamins" category had a higher profit margin.'
      }
    ],
    recommendation: 'Based on these findings, the strategic recommendations are: (1) Conduct operational evaluations at the 15 branches with low ratings. (2) Increase cross-selling promotions between Medical Devices and Vitamins to balance revenue. (3) Prepare sales mitigation strategies in case of future mobility restrictions.',
    outcome: 'Produced an interactive dashboard presenting insights on sales performance, profitability, transactions, branches, provinces, and product categories as a basis for business performance evaluation and data-driven decision making.'
  },
  {
    id: 1,
    slug: 'bike-store',
    title: 'Sales Data Analysis – Bike Store',
    image: '/bikestore.png',
    category: 'Data Analytics',
    overview: 'A data analysis project focusing on analyzing bike store transaction data to evaluate sales performance and discover business insights. The dataset includes information on orders, customers, locations, products, categories, brands, stores, sales representatives, units sold, revenue, and order dates.',
    focus: ['Sales Performance', 'Product Analysis', 'Category Analysis', 'Revenue Analysis'],
    tools: ['Excel', 'Python', 'Pandas'],
    businessQuestion: '"Which products and stores are the main drivers of sales, and which need evaluation?"',
    insights: [
      {
        title: 'Annual Sales Trends',
        description: 'Sales peaked in 2018 but declined by 15% in 2019. This decline was predominantly driven by the Mountain Bikes category.'
      },
      {
        title: 'Store & Staff Performance',
        description: 'Stores in the Bali region had the highest revenue, but stores in the New York region had more efficient sales representative conversion rates.'
      }
    ],
    recommendation: 'Recommendations: (1) Conduct an audit of the 2019 Mountain Bikes product line to check for quality issues or price competition. (2) Share best practices from the New York sales representatives with other branches to improve conversion.',
    outcome: 'This project demonstrates the application of data analysis techniques to transform raw transaction data into structured information and actionable business insights.'
  },
  {
    id: 2,
    slug: 'airline-delay',
    title: 'Airline Delay Analysis',
    image: '/flight.png',
    category: 'Data Analytics',
    overview: 'A data analysis project focusing on exploring and evaluating flight delays based on airline and airport data. The dataset includes information on airlines, airports, locations, flight periods, and various delay factors such as carrier delay, weather delay, and arrival delay.',
    focus: ['Delay Analysis', 'Comparative Analysis', 'Carrier Performance'],
    tools: ['Excel', 'Python', 'Pandas'],
    businessQuestion: '"What factors most frequently cause delays, and which airlines are most affected?"',
    insights: [
      {
        title: 'Main Causes of Delay',
        description: '45% of delays were caused by Carrier Delay (internal airline factors), rather than Weather Delay as is often assumed.'
      },
      {
        title: 'Most Affected Airlines',
        description: 'Airline X had the highest delay rate on domestic routes during the holiday season, with an average delay of 45 minutes.'
      }
    ],
    recommendation: 'Recommendation: Airlines need to conduct internal evaluations of crew scheduling and aircraft maintenance management to reduce Carrier Delays. Additionally, proactive communication with passengers needs to be improved during seasonal delays.',
    outcome: 'This project demonstrates the ability to process and analyze datasets with multiple variables to find patterns, compare performance, and identify factors contributing to a problem.'
  },
  {
    id: 3,
    slug: 'covid-19',
    title: 'COVID-19 Data Analysis',
    image: '/covid_19.png',
    category: 'Data Analytics',
    overview: 'A data analysis project focusing on exploring and statistically analyzing COVID-19 cases. The dataset includes various indicators such as death counts, total deaths per population, case fatality rate, and case recovered rate to understand the conditions and development of the pandemic based on data.',
    focus: ['Health Data Analysis', 'Statistical Analysis', 'Mortality Analysis'],
    tools: ['Excel', 'Python', 'Pandas'],
    businessQuestion: '"How effective is the recovery rate in a region compared to its fatality rate?"',
    insights: [
      {
        title: 'Fatality Rate (CFR)',
        description: 'The highest Case Fatality Rate occurred during the first wave of the pandemic (2020), but declined drastically as testing capacity and healthcare facilities increased.'
      },
      {
        title: 'Recovery Correlation',
        description: 'There is a positive correlation between the number of cases and the recovery rate, indicating a healthcare system capable of responding well to case surges during certain periods.'
      }
    ],
    recommendation: 'Recommendation: The results of this analysis can be used by policymakers to focus the allocation of health resources (such as oxygen and hospital beds) in regions with high CFR and slow recovery rates.',
    outcome: 'This project demonstrates the ability to process and analyze health data to find patterns and insights through exploratory and statistical approaches.'
  },
  {
    id: 4,
    slug: 'ecommerce-dashboard',
    title: 'E-Commerce Public Dataset Dashboard',
    image: '/ecommerce.jpg', 
    category: 'Data Analytics',
    overview: 'An interactive dashboard analyzing the E-Commerce Public Dataset (Jan 2017 – Aug 2018) as a submission for Dicoding Indonesia. The project covers product category revenue analysis, delivery time evaluation per state, and RFM customer segmentation.',
    focus: ['Data Wrangling', 'Exploratory Data Analysis', 'RFM Segmentation', 'Data Visualization'],
    tools: ['Python', 'Pandas', 'Streamlit', 'Matplotlib', 'Seaborn'],
    businessQuestion: '"Which product categories drive the most revenue, how efficient is our delivery, and which customer segments should we prioritize for retention?"',
    insights: [
      {
        title: 'Revenue Concentration',
        description: 'Revenue is highly concentrated — only 16 out of 71 product categories contribute to ~79% of total revenue. The top three are health_beauty, watches_gifts, and bed_bath_table.'
      },
      {
        title: 'Delivery Bottlenecks',
        description: 'The national average delivery time is 12.46 days. States like RR, AP, and AM experience the longest delivery times (over 26 days), with RJ being a priority for improvement due to high volume and slow delivery.'
      },
      {
        title: 'RFM Segmentation',
        description: 'Potential Loyalists (31.20%) and At Risk (23.86%) customers make up the largest segments. Meanwhile, Champions (6.96%) contribute 14.65% of revenue with the highest average monetary value.'
      }
    ],
    recommendation: 'Strategic recommendations: (1) Focus marketing efforts on Potential Loyalists to convert them into Champions. (2) Implement a win-back campaign for At Risk customers. (3) Investigate logistics in RJ state to improve delivery times for high-volume areas.',
    outcome: 'Produced a fully functional, interactive Streamlit dashboard with multi-select filters for states and product categories, allowing stakeholders to explore sales, delivery, and customer data dynamically.'

  }
];