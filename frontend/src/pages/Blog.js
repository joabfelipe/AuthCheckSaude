import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mock';

const Blog = () => {
  const categories = ['Todos', 'Manutenção', 'Diagnóstico', 'Usinagem', 'Orientações'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const featuredPost = {
    id: 'featured',
    title: 'Guia Completo: Como Manter Seu Veículo Sempre em Dia',
    excerpt: 'Descubra as melhores práticas para manter seu veículo funcionando perfeitamente e evitar reparos caros. Um guia prático com dicas dos nossos especialistas.',
    readTime: '10 min',
    category: 'Guia Completo',
    featured: true
  };

  const additionalPosts = [
    {
      id: 4,
      title: 'Quando Trocar o Óleo do Motor: Sinais e Intervalos',
      excerpt: 'Entenda a importância da troca regular do óleo e aprenda a identificar quando é hora de fazer a substituição.',
      readTime: '4 min',
      category: 'Manutenção'
    },
    {
      id: 5,
      title: 'Ruídos no Motor: O que Cada Som Significa',
      excerpt: 'Aprenda a identificar diferentes tipos de ruídos no motor e quando eles indicam necessidade de reparo.',
      readTime: '6 min',
      category: 'Diagnóstico'
    },
    {
      id: 6,
      title: 'Sistema de Freios: Manutenção e Segurança',
      excerpt: 'Tudo sobre a manutenção do sistema de freios e como garantir sua segurança nas estradas.',
      readTime: '5 min',
      category: 'Manutenção'
    }
  ];

  const allPosts = [featuredPost, ...mockData.blogPosts, ...additionalPosts];
  const filteredPosts = selectedCategory === 'Todos' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-bg-section">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Blog Auto Check Saúde</h1>
            <p className="body-large text-text-secondary">
              Dicas, orientações e informações sobre cuidados automotivos direto dos nossos especialistas. 
              Mantenha-se informado e cuide melhor do seu veículo.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-8 border-b border-border-light">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent-primary text-white'
                    : 'bg-gray-100 text-text-secondary hover:bg-accent-wash hover:text-accent-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post em Destaque */}
      {(selectedCategory === 'Todos' || selectedCategory === 'Guia Completo') && (
        <section className="py-16">
          <div className="container">
            <div className="product-card card-hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-accent-primary text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                      Em Destaque
                    </span>
                    <span className="body-small text-text-muted">{featuredPost.readTime} de leitura</span>
                  </div>
                  <h2 className="heading-2 mb-4">{featuredPost.title}</h2>
                  <p className="body-large text-text-secondary mb-6">{featuredPost.excerpt}</p>
                  <button className="btn-primary">
                    Ler Artigo Completo
                    <ArrowRight size={18} />
                  </button>
                </div>
                <div className="bg-gradient-to-br from-accent-primary/20 to-accent-strong/20 rounded-xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-strong rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Calendar size={32} className="text-white" />
                    </div>
                    <p className="heading-3 text-accent-text">Guia Completo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid de Artigos */}
      <section className="py-16 bg-bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Artigos Recentes</h2>
            <p className="body-large text-text-secondary">
              Confira nossos últimos artigos com dicas práticas e orientações para seu veículo.
            </p>
          </div>
          
          <div className="ai-grid">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="product-card card-hover-lift">
                {/* Badge da categoria */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent-wash text-accent-text px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="body-small text-text-muted">{post.readTime}</span>
                </div>
                
                {/* Ícone do artigo */}
                <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-strong rounded-lg flex items-center justify-center mb-4">
                  <Calendar size={20} className="text-white" />
                </div>
                
                {/* Conteúdo */}
                <h3 className="product-card-title mb-3">{post.title}</h3>
                <p className="product-card-description mb-6">{post.excerpt}</p>
                
                {/* Footer do card */}
                <div className="flex items-center justify-between pt-4 border-t border-border-light">
                  <div className="flex items-center text-text-muted">
                    <User size={14} className="mr-1" />
                    <span className="body-small">Auto Check Saúde</span>
                  </div>
                  <button className="btn-secondary text-sm px-4 py-2">
                    Ler Mais
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.filter(post => !post.featured).length === 0 && (
            <div className="text-center py-12">
              <Calendar size={48} className="text-text-muted mx-auto mb-4" />
              <h3 className="heading-3 mb-2 text-text-muted">Nenhum artigo encontrado</h3>
              <p className="body-medium text-text-secondary">
                Nenhum artigo foi encontrado para a categoria selecionada.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container">
          <div className="product-card text-center max-w-2xl mx-auto">
            <h2 className="heading-2 mb-4">Receba Nossas Dicas</h2>
            <p className="body-large text-text-secondary mb-8">
              Cadastre-se para receber dicas de manutenção automotiva e novidades da Auto Check Saúde 
              diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Cadastrar
              </button>
            </div>
            <p className="body-small text-text-muted mt-4">
              Prometemos não enviar spam. Apenas conteúdo útil para você!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;