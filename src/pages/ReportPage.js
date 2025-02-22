import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import climateImg from "../assets/climate.jpg";
import aiHealthcareImg from "../assets/ai_healthcare.jpg";
import cybersecurityImg from "../assets/cybersecurity.jpg";
import energyImg from "../assets/energy.jpg";
import mentalHealthImg from "../assets/mental_health.jpg";
import "../styles.css";

const reportDetails = {
  1: {
    title: "Climate Change and Its Effects",
    content: `Climate change is one of the most pressing issues of our time. It is driven primarily by human activities, such as burning fossil fuels, deforestation, and industrial emissions, which release greenhouse gases into the atmosphere. These gases trap heat and cause global temperatures to rise, leading to more extreme weather events, rising sea levels, and disruptions in natural ecosystems.

    The impact of climate change can be observed in various ways. Rising temperatures contribute to longer and more intense heatwaves, leading to droughts and reduced water availability. Agriculture is significantly affected, as many crops fail due to unfavorable weather conditions, causing food shortages and higher prices.

    Mitigation strategies to combat climate change include transitioning to renewable energy sources, implementing energy-efficient practices, reforestation efforts, and advocating for strong international policies. Governments, corporations, and individuals must work collectively to reduce emissions and create sustainable solutions.`,
    image: climateImg,
  },
  2: {
    title: "Artificial Intelligence in Healthcare",
    content: `Artificial intelligence (AI) is revolutionizing the field of healthcare by improving diagnostics, treatment plans, and patient care. AI-powered systems can analyze vast amounts of medical data, helping doctors detect diseases at an earlier stage and with higher accuracy.

    Another area where AI is making strides is personalized medicine. By analyzing a patient’s genetic information and medical history, AI can recommend tailored treatments that are more effective and have fewer side effects. AI-powered chatbots and virtual assistants also play a role in enhancing patient experience by providing instant medical advice and appointment scheduling.

    However, AI in healthcare also presents challenges, such as data privacy concerns, ethical considerations, and the need for rigorous testing and regulatory approval. As AI continues to evolve, it has the potential to transform the healthcare industry, making medical services more accessible and efficient.`,
    image: aiHealthcareImg,
  },
  3: {
    title: "Cybersecurity in the Digital Age",
    content: `Cybersecurity has become a major concern as we move further into the digital era. With increased dependence on the internet for financial transactions, communication, and personal data storage, cyber threats have escalated in complexity and scale. Hackers employ various techniques such as phishing, ransomware attacks, and data breaches to exploit vulnerabilities.

    Governments and organizations are investing heavily in cybersecurity measures to safeguard sensitive data. Encryption, multi-factor authentication, and real-time threat detection systems are among the key technologies used to mitigate cyber risks. Individuals also play a crucial role in ensuring their online safety by using strong passwords, being cautious of suspicious emails, and keeping software updated.

    The future of cybersecurity will involve AI-driven threat detection, blockchain for secure transactions, and increased global collaboration to combat cybercrime. As technology advances, the need for robust cybersecurity measures will remain a top priority.`,
    image: cybersecurityImg,
  },
  4: {
    title: "Sustainable Energy Solutions",
    content: `Sustainable energy solutions are essential for tackling the energy crisis. The world is shifting from fossil fuels to renewable energy sources such as solar, wind, and hydroelectric power. These clean energy solutions offer a way to reduce carbon emissions and slow the effects of climate change.

    The development of energy storage technologies, such as advanced batteries, has improved the efficiency of renewable energy sources. Smart grids and energy-efficient infrastructure are also playing a role in optimizing power distribution and consumption.

    Investing in sustainable energy requires global cooperation. Governments must implement policies that support clean energy initiatives, while individuals and businesses must adopt sustainable practices. The future of energy depends on our ability to innovate and transition towards a more sustainable world.`,
    image: energyImg,
  },
  5: {
    title: "Mental Health Awareness",
    content: `Mental health is just as important as physical health, yet it is often overlooked. Millions of people worldwide suffer from mental health disorders, including depression, anxiety, and bipolar disorder. The stigma surrounding mental illness prevents many from seeking help.

    Raising awareness about mental health is crucial for early diagnosis, intervention, and treatment. Therapy, medication, and lifestyle changes can significantly improve mental well-being. Schools and workplaces are beginning to integrate mental health programs to support individuals in managing stress and emotional challenges.

    Encouraging open conversations about mental health, promoting self-care practices, and ensuring access to professional support can create a society where mental well-being is prioritized. Breaking the stigma and providing adequate mental health resources are necessary steps towards improving lives.`,
    image: mentalHealthImg,
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
      <div className="report-detail">
        <h2 className="report-title">{report.title}</h2>
        <div className="report-layout">
          <img src={report.image} alt={report.title} className="report-detail-image" />
          <p className="report-content">{report.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;