import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import floodImg from "../assets/flood.jpg";
import garmentImg from "../assets/garment.jpg";
import digitalBangladeshImg from "../assets/digital_bangladesh.jpg";
import padmaBridgeImg from "../assets/padma_bridge.jpg";
import ruralDevImg from "../assets/rural_dev.jpg";
import "../styles.css";

const reportDetails = {
  1: {
    title: "Impact of Floods in Bangladesh",
    author: "Md. Rezaul Karim",
    date: "2024-03-10",
    content: [
      `Bangladesh is one of the most flood-prone countries in the world due to its geographical location and monsoon climate. Every year, large parts of the country experience devastating floods that lead to loss of lives, destruction of property, and significant economic downturns. The country’s extensive river network, which includes the Ganges, Brahmaputra, and Meghna rivers, contributes to the severity of flooding, especially during the monsoon season.`,
      
      `The impact of floods extends beyond immediate physical destruction. Thousands of families are displaced annually, losing access to basic necessities like clean water, food, and healthcare. Additionally, farmlands are submerged, causing severe food shortages and price hikes. Livestock, which many rural families rely on for sustenance and income, is often lost during the floods.`,
      
      `Despite these challenges, Bangladesh has made significant progress in disaster preparedness. The government, alongside international organizations, has improved early warning systems, built embankments, and implemented community-based flood management programs. Future efforts should focus on sustainable urban planning, improved drainage systems, and reforestation projects to mitigate the impact of floods in the coming years.`
    ],
    image: floodImg,
  },
  2: {
    title: "Garment Industry and Worker Rights",
    author: "Fatema Begum",
    date: "2024-03-12",
    content: [
      `Bangladesh’s Ready-Made Garments (RMG) industry is one of the country's largest economic sectors, accounting for over 80% of its export earnings. The industry employs millions of workers, predominantly women, and has played a crucial role in reducing poverty and improving economic conditions.`,
      
      `However, despite its success, the sector has long been criticized for unsafe working conditions, low wages, and lack of workers’ rights. The tragic Rana Plaza collapse in 2013, which killed over 1,100 workers, highlighted the dangers of inadequate labor regulations. In response, several global and local organizations implemented safety measures, including the Accord and Alliance initiatives that enforced factory inspections and compliance with international safety standards.`,
      
      `Moving forward, sustainable growth in the garment industry requires ensuring fair wages, providing social benefits for workers, and improving trade union representation. Strengthening labor laws and holding employers accountable will be crucial in making Bangladesh’s RMG sector both profitable and ethical.`
    ],
    image: garmentImg,
  },
  3: {
    title: "Digital Bangladesh: Progress & Challenges",
    author: "Shakib Rahman",
    date: "2024-03-14",
    content: [
      `The 'Digital Bangladesh' initiative was launched in 2009 with the aim of transforming Bangladesh into a tech-driven economy. Over the years, this vision has led to major improvements in public administration, digital banking, e-commerce, and internet connectivity.`,
      
      `One of the biggest successes of Digital Bangladesh has been the expansion of mobile financial services like bKash, Nagad, and Rocket. These platforms have increased financial inclusion, allowing people in rural areas to access banking services without physical bank branches. Additionally, government services have become more accessible, with initiatives like e-GP (electronic government procurement) and digital birth registration.`,
      
      `Despite the progress, challenges remain. The digital divide between urban and rural areas is significant, with many villages still lacking access to high-speed internet. Cybersecurity threats have also increased, necessitating stronger data protection policies. To fully realize the potential of Digital Bangladesh, investment in ICT education, improved digital literacy, and enhanced cybersecurity measures will be essential.`
    ],
    image: digitalBangladeshImg,
  },
  4: {
    title: "Padma Bridge: Economic Impact",
    author: "Nasrin Jahan",
    date: "2024-03-16",
    content: [
      `The Padma Bridge, Bangladesh’s longest bridge, is a landmark infrastructure project that has significantly enhanced connectivity between Dhaka and the country's southwestern regions. Before its construction, people had to rely on ferries, leading to long travel delays and economic inefficiencies.`,
      
      `The completion of the bridge has already boosted trade and commerce by improving access to key markets. Businesses in Khulna, Barisal, and other southwestern districts now have quicker access to Dhaka, reducing transportation costs and improving supply chains. The agriculture sector has also benefited, as farmers can now transport perishable goods faster, increasing their market value.`,
      
      `Looking ahead, experts predict that the bridge will contribute up to 1.2% to Bangladesh’s GDP. Further development in surrounding areas, including industrial zones and improved transport networks, will ensure long-term economic gains. Investments in sustainable infrastructure planning will be necessary to maintain and maximize the bridge’s economic impact.`
    ],
    image: padmaBridgeImg,
  },
  5: {
    title: "Rural Development in Bangladesh",
    author: "Aminul Haque",
    date: "2024-03-18",
    content: [
      `Bangladesh has made remarkable progress in rural development, with poverty levels dropping significantly over the past two decades. Various government initiatives and NGO-led projects have focused on improving rural infrastructure, education, healthcare, and access to financial services.`,
      
      `Microfinance institutions like Grameen Bank and BRAC have played a crucial role in empowering rural communities by providing small loans to entrepreneurs, particularly women. Additionally, road networks and electrification projects have facilitated better transportation and economic activities in previously isolated villages.`,
      
      `However, challenges such as seasonal unemployment, climate-induced displacement, and a lack of industrial opportunities still persist. Future strategies should focus on vocational training programs, expanding internet access for e-commerce opportunities, and sustainable agricultural development to ensure continued progress in rural Bangladesh.`
    ],
    image: ruralDevImg,
  },
};

const ReportPage = () => {
  const { id } = useParams();
  const report = reportDetails[id];

  if (!report) {
    return (
      <div>
        <Header />
        <h2 className="error-message">Report not found.</h2>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="single-report-container">
        <h2 className="single-report-title">{report.title}</h2>
        <p className="single-report-author">Updated by: {report.author}</p>
        <p className="single-report-date">Date of Publication: {report.date}</p>
        <div className="single-report-layout">
          <img src={report.image} alt={report.title} className="single-report-image" />
          {report.content.map((paragraph, index) => (
            <p key={index} className="single-report-content">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
