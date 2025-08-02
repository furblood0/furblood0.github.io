// src/pages/ProjectsPage/ProjectsPage.tsx
import React, { useState, useMemo } from 'react';
import projectsData from '../../data/projects';
import './ProjectsPage.css';

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [expandedTechs, setExpandedTechs] = useState<Set<number>>(new Set());
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  // Benzersiz kategorileri al
  const categories = useMemo(() => {
    const cats = projectsData.map(project => project.category).filter(Boolean);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  // Filtreleme ve sıralama
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sıralama
    switch (sortBy) {
      case 'featured':
        return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      case 'name':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'category':
        return filtered.sort((a, b) => (a.category || '').localeCompare(b.category || ''));
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, sortBy]);

  const handleCardMouseLeave = (projectId: number) => {
    // Kart üzerinden çıkınca teknoloji etiketlerini sıfırla
    setExpandedTechs(prev => {
      const newSet = new Set(prev);
      newSet.delete(projectId);
      return newSet;
    });
    // Seçili kartı da sıfırla
    setSelectedCard(null);
  };

  const handleCardClick = (projectId: number) => {
    setSelectedCard(selectedCard === projectId ? null : projectId);
  };

  const handleTechExpand = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Kartın mouse leave event'ini tetiklemesini engelle
    setExpandedTechs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>Projelerim</h1>
        <p className="projects-subtitle">
          Farklı teknolojiler ve platformlar için geliştirdiğim projeler
        </p>
      </div>

      {/* Filtreler ve Arama */}
      <div className="projects-filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Proje ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-filter"
          >
            <option value="featured">Öne Çıkanlar</option>
            <option value="name">İsme Göre</option>
            <option value="category">Kategoriye Göre</option>
          </select>
        </div>
      </div>

      {/* Proje Sayısı */}
      <div className="projects-count">
        <span>{filteredAndSortedProjects.length} proje bulundu</span>
      </div>

      {/* Projeler Grid */}
      <div className="projects-grid">
        {filteredAndSortedProjects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${project.featured ? 'featured' : ''} ${selectedCard === project.id ? 'selected' : ''}`}
            onMouseLeave={() => handleCardMouseLeave(project.id)}
          >
            {project.featured && (
              <div className="featured-badge">⭐ Öne Çıkan</div>
            )}
            
            {project.image && (
              <div 
                className="project-image-container"
                onClick={() => handleCardClick(project.id)}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-category">{project.category}</div>
              </div>
            )}
            
            <div className="project-info">
              <h2 
                onClick={() => handleCardClick(project.id)}
                className="clickable-title"
              >
                {project.title}
              </h2>
              <p>{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.slice(0, (selectedCard === project.id || expandedTechs.has(project.id)) ? undefined : 4).map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 4 && selectedCard !== project.id && !expandedTechs.has(project.id) && (
                  <span 
                    className="tech-tag more expandable"
                    onClick={(e) => handleTechExpand(project.id, e)}
                  >
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                >
                  <span>GitHub</span>
                </a>
                {project.liveDemoLink && project.liveDemoLink !== '#' && (
                  <a 
                    href={project.liveDemoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link live-demo-link"
                  >
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sonuç Yok */}
      {filteredAndSortedProjects.length === 0 && (
        <div className="no-results">
          <h3>Arama sonucu bulunamadı</h3>
          <p>Farklı anahtar kelimeler deneyin veya filtreleri temizleyin.</p>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;