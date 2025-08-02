// src/pages/BlogPage/BlogPage.tsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import blogPostsData from '../../data/blogPosts';
import './BlogPage.css';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Tüm tag'leri topla
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPostsData.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Yazıları filtrele ve sırala
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPostsData.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });

    // Önce featured, sonra tarihe göre sırala
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [searchTerm, selectedTag]);

  return (
    <section className="blog-page">
      <div className="blog-header">
        <h1>Blog Yazılarım</h1>
        <p className="blog-subtitle">Teknoloji, programlama ve web geliştirme üzerine yazılarım</p>
      </div>

      <div className="blog-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Blog yazılarında ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <button 
          className="filter-toggle-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Filtreleri Gizle' : 'Filtrele'} {showFilters ? '−' : '+'}
        </button>
      </div>

      {showFilters && (
        <div className="blog-filters">
          <div className="tag-filters">
            <button
              className={`tag-filter ${selectedTag === '' ? 'active' : ''}`}
              onClick={() => setSelectedTag('')}
            >
              Tümü
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="blog-stats">
        <span className="posts-count">
          {filteredAndSortedPosts.length} yazı bulundu
        </span>
      </div>

      <div className="blog-posts-grid">
        {filteredAndSortedPosts.map((post) => (
          <div key={post.id} className={`blog-card ${post.featured ? 'featured' : ''}`}>
            {post.featured && (
              <div className="featured-badge">⭐ Öne Çıkan</div>
            )}
            
            <div className="blog-info">
              <div className="blog-meta">
                <span className="blog-date">
                  {new Date(post.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="read-time">{post.readTime} dk</span>
              </div>
              
              <Link to={`/blog/${post.id}`} className="blog-title-link">
                <h2 className="blog-title">{post.title}</h2>
              </Link>
              
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <div className="blog-footer">
                <Link to={`/blog/${post.id}`} className="read-more">
                  Devamını Oku &rarr;
                </Link>
              </div>
              
              <div className="blog-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedPosts.length === 0 && (
        <div className="no-results">
          <h3>Arama sonucu bulunamadı</h3>
          <p>Farklı anahtar kelimeler deneyin veya filtreleri temizleyin.</p>
        </div>
      )}
    </section>
  );
};

export default BlogPage;