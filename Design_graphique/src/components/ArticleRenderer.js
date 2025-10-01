import React from 'react';

export const ArticleFlat = ({ article }) => {
  return (
    <div className="space-y-3">
      <p className="text-base text-slate-800 leading-relaxed">
        {article.title}
      </p>
      <p className="text-base text-slate-800 leading-relaxed">
        {article.subtitle}
      </p>
      <p className="text-base text-slate-800 leading-relaxed">
        {article.intro}
      </p>
      {article.sections.map((section, index) => (
        <div key={index}>
          <p className="text-base text-slate-800 leading-relaxed">
            {section.interTitle}
          </p>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-base text-slate-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export const ArticleHierarchical = ({ article }) => {
  return (
    <div>
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
        {article.title}
      </h1>
      
      {/* Sous-titre */}
      <p className="text-xl text-slate-600 mb-6 leading-relaxed italic border-l-4 border-indigo-500 pl-4">
        {article.subtitle}
      </p>
      
      {/* Introduction */}
      <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
        {article.intro}
      </p>
      
      {/* Sections */}
      {article.sections.map((section, index) => (
        <div key={index} className="mb-8">
          {/* Intertitre */}
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2">
            {section.interTitle}
          </h2>
          
          {/* Paragraphes */}
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-base text-slate-700 mb-4 leading-relaxed text-justify">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};