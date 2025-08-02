// src/pages/AboutPage/AboutPage.tsx (Örnek ikonlarla)
import React from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiKotlin, SiFirebase, SiTypescript } from 'react-icons/si';
import './AboutPage.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // LinkedIn ve GitHub ikonları
import MsSqlIcon from '../../components/Icons/MsSqlIcon'; // Yeni MSSQL ikonunuzu import edin!


const skillsData = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MSSQL", icon: <MsSqlIcon /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Clomosy", icon: null }
];

// Deneyim verileri (en yeni en üstte)
const experienceData = [
  {
    id: 2,
    company: "Konya Şeker Fabrikası",
    position: "Stajyer",
    period: "06.2025 - 07.2025",
    description: "Sap bölümünde üretim süreçlerinde görev aldım. Ekip çalışması ve endüstriyel süreçler konusunda deneyim kazandım.",
    technologies: ["Üretim Süreçleri", "Ekip Çalışması", "Endüstriyel Deneyim"]
  },
  {
    id: 1,
    company: "Atiker Yazılım",
    position: "Stajyer",
    period: "07.2024 - 08.2024",
    description: "Clomosy ile mobil uygulama geliştirme konusunda tecrübe edindim.",
    technologies: ["Clomosy", "Mobil Uygulama Geliştirme"]
  }
  // Yeni deneyimler buraya eklenecek
];

// Eğitim verileri (en yeni en üstte)
const educationData = [
  {
    id: 1,
    institution: "Konya Gıda ve Tarım Üniversitesi",
    degree: "Bilgisayar Mühendisliği (Lisans)",
    period: "2021 - Günümüz",
    status: "Devam Ediyor",
    gpa: "3.14",
    description: "Bilgisayar mühendisliği alanında kapsamlı eğitim alıyorum. Yazılım geliştirme, veri yapıları, algoritmalar ve sistem tasarımı konularında teorik ve pratik bilgi ediniyorum."
  },
  {
    id: 2,
    institution: "Ilgın Ticaret Borsası Fen Lisesi",
    degree: "Fen Lisesi",
    period: "2017 - 2021",
    status: "Tamamlandı",
    graduationScore: "94.80",
    description: "Fen lisesi eğitimim sırasında matematik, fizik, kimya ve biyoloji alanlarında güçlü bir temel oluşturdum. Bilimsel düşünme ve analitik becerilerimi geliştirdim."
  }
  // Yeni eğitim bilgileri buraya eklenecek
];

const AboutPage: React.FC = () => {
  return (
    <section className="about-page">
      <div className="about-content">
        <h1>Hakkımda</h1>
        {/* Paragraflar ve başlıklar aynı kalır */}
        <p style={{ animationDelay: '0.2s' }}>
          Merhaba! Ben Furkan Fidan. Konya Gıda ve Tarım Üniversitesinde Bilgisayar Mühendisliği 4. sınıf öğrencisiyim.
          Yazılım geliştirme ve teknolojiye olan tutkum lise yıllarımdan beri devam ediyor.
        </p>
        <p style={{ animationDelay: '0.4s' }}>
          Özellikle web tasarımı, mobil uygulama geliştirme, makine öğrenmesi ve bilgisayar ağları alanlarında kendimi geliştirmeye odaklandım.
          Kullanıcı deneyimini ön planda tutan, minimalist ve işlevsel tasarımları benimseyen projeler üretmeyi seviyorum.
        </p>
        <p style={{ animationDelay: '0.6s' }}>
          Boş zamanlarımda farklı programlama dilleri ve yeni teknolojileri öğrenmeye meraklıyım.
          Sürekli öğrenmeye ve kendimi geliştirmeye açık, ekip çalışmasına yatkın bir geliştiriciyim.
        </p>

        <h2 style={{ animationDelay: '0.8s' }}>Yeteneklerim</h2>
        <div className="skills-grid" style={{ animationDelay: '1s' }}>
          {skillsData.map((skill, index) => (
            <div
              className="skill-item"
              key={skill.name}
              style={{ '--animation-delay': `${1.2 + index * 0.1}s` } as React.CSSProperties}
            >
              {skill.icon && <span className="skill-icon">{skill.icon}</span>}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <h2>Deneyim Bilgileri</h2>
        <div className="timeline">
          {experienceData.map((experience) => (
            <div className="timeline-item" key={experience.id}>
              <div className="timeline-content">
                <h3>{experience.company}</h3>
                <p className="position-period">{experience.position} - {experience.period}</p>
                <p className="description">{experience.description}</p>
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="technologies">
                    <span className="tech-label">Kullanılan Teknolojiler:</span>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2>Eğitim Bilgileri</h2>
        <div className="timeline education-timeline">
          {educationData.map((education) => (
            <div className="timeline-item" key={education.id}>
              <div className="timeline-content education-content">
                <h3>{education.institution}</h3>
                <p className="degree-period">{education.degree} - {education.status}</p>
                <p className="education-period">{education.period}</p>
                {education.gpa && (
                  <div className="academic-score">
                    <span className="score-label">GPA:</span>
                    <span className="score-value gpa">{education.gpa}</span>
                  </div>
                )}
                {education.graduationScore && (
                  <div className="academic-score">
                    <span className="score-label">Mezuniyet Puanı:</span>
                    <span className="score-value graduation-score">{education.graduationScore}</span>
                  </div>
                )}
                <p className="education-description">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <h2 style={{ animationDelay: '2s' }}>İletişim & Daha Fazlası</h2>
        <div className="contact-buttons" style={{ animationDelay: '2.2s' }}>
          <div className="cv-section">
            <a href={`${import.meta.env.BASE_URL}assets/cv.pdf`} download className="btn btn-primary cv-btn">
              📄 CV'mi İndir
            </a>
            <p className="cv-note">PDF formatında güncel CV'mi indirebilirsiniz</p>
          </div>
          
          <div className="social-section">
            <h3>Beni Sosyal Medyada Takip Edin</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/furkan-f-7aa780226/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn Profilim">
                <FaLinkedin />
              </a>
              <a href="https://github.com/furblood0" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub Profilim">
                <FaGithub />
              </a>
              {/* Diğer sosyal medya linkleri buraya eklenebilir */}
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default AboutPage;