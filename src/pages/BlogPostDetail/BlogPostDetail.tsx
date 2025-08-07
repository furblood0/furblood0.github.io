// src/pages/BlogPostDetail/BlogPostDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPostsData from '../../data/blogPosts';
import './BlogPostDetail.css';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // URL'deki id'ye göre ilgili blog yazısını bul
  const post = blogPostsData.find((p) => p.id === parseInt(id || '0'));

  // Eğer yazı bulunamazsa 404 sayfasına yönlendir
  if (!post) {
    return (
      <section className="blog-detail-page not-found">
        <div className="not-found-content">
          <h1>Yazı Bulunamadı</h1>
          <p>Aradığınız blog yazısı mevcut değil.</p>
          <Link to="/blog" className="back-button">
            Tüm Yazılara Dön
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-detail-page">
      <div className="blog-detail-container">
        {/* Main Content */}
        <article className="blog-detail-content">
          <header className="blog-detail-title-section">
            <div className="blog-meta-header">
              <span className="blog-date-header">
                {new Date(post.date).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="read-time-header">{post.readTime} dk okuma</span>
            </div>
            
            <h1 className="blog-detail-title">{post.title}</h1>
            <p className="blog-detail-excerpt">{post.excerpt}</p>
          </header>

          <div className="blog-detail-body">
            <div 
              className="blog-content-html"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Footer */}
        <footer className="blog-detail-footer">
          <div className="blog-detail-tags">
            <h3>Etiketler:</h3>
            <div className="tags-list">
              {post.tags.map(tag => (
                <span key={tag} className="tag-item">{tag}</span>
              ))}
            </div>
          </div>

          <div className="blog-detail-actions">
            <Link to="/blog" className="back-to-blog-btn">
              Tüm Yazılara Dön
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default BlogPostDetail;