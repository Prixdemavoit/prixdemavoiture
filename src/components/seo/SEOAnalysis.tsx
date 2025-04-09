'use client';

import React, { useState, useEffect } from 'react';
import { Block } from '@/components/admin/editor/BlockTypes';

interface SEOAnalysisProps {
  blocks: Block[];
  title: string;
  metaDescription: string;
  focusKeyword: string;
}

interface SEOScore {
  score: number;
  maxScore: number;
  percentage: number;
  color: string;
  label: string;
}

interface SEOIssue {
  type: 'error' | 'warning' | 'success';
  message: string;
}

const SEOAnalysis: React.FC<SEOAnalysisProps> = ({
  blocks,
  title,
  metaDescription,
  focusKeyword,
}) => {
  const [score, setScore] = useState<SEOScore>({
    score: 0,
    maxScore: 100,
    percentage: 0,
    color: 'gray',
    label: 'Non analysé',
  });
  const [issues, setIssues] = useState<SEOIssue[]>([]);

  useEffect(() => {
    if (!focusKeyword) {
      setScore({
        score: 0,
        maxScore: 100,
        percentage: 0,
        color: 'gray',
        label: 'Ajoutez un mot-clé principal',
      });
      setIssues([
        {
          type: 'warning',
          message: 'Aucun mot-clé principal défini. Ajoutez un mot-clé pour obtenir une analyse SEO.',
        },
      ]);
      return;
    }

    // Extract all text content from blocks
    const textContent = blocks
      .map((block) => {
        if (block.type === 'paragraph') return block.content.text;
        if (block.type === 'heading') return block.content.text;
        if (block.type === 'quote') return block.content.text;
        if (block.type === 'list') return block.content.items.join(' ');
        return '';
      })
      .join(' ');

    const wordCount = textContent.split(/\s+/).filter(Boolean).length;

    // Initialize issues array
    const newIssues: SEOIssue[] = [];
    let points = 0;
    const maxPoints = 100;

    // Check title
    if (!title) {
      newIssues.push({
        type: 'error',
        message: 'Le titre SEO est manquant.',
      });
    } else {
      if (title.length < 30) {
        newIssues.push({
          type: 'warning',
          message: 'Le titre SEO est trop court (moins de 30 caractères).',
        });
        points += 5;
      } else if (title.length > 60) {
        newIssues.push({
          type: 'warning',
          message: 'Le titre SEO est trop long (plus de 60 caractères).',
        });
        points += 5;
      } else {
        newIssues.push({
          type: 'success',
          message: 'La longueur du titre SEO est optimale.',
        });
        points += 10;
      }

      if (title.toLowerCase().includes(focusKeyword.toLowerCase())) {
        newIssues.push({
          type: 'success',
          message: 'Le mot-clé principal est présent dans le titre SEO.',
        });
        points += 15;
      } else {
        newIssues.push({
          type: 'error',
          message: 'Le mot-clé principal n\'est pas présent dans le titre SEO.',
        });
      }
    }

    // Check meta description
    if (!metaDescription) {
      newIssues.push({
        type: 'error',
        message: 'La méta-description est manquante.',
      });
    } else {
      if (metaDescription.length < 120) {
        newIssues.push({
          type: 'warning',
          message: 'La méta-description est trop courte (moins de 120 caractères).',
        });
        points += 5;
      } else if (metaDescription.length > 160) {
        newIssues.push({
          type: 'warning',
          message: 'La méta-description est trop longue (plus de 160 caractères).',
        });
        points += 5;
      } else {
        newIssues.push({
          type: 'success',
          message: 'La longueur de la méta-description est optimale.',
        });
        points += 10;
      }

      if (metaDescription.toLowerCase().includes(focusKeyword.toLowerCase())) {
        newIssues.push({
          type: 'success',
          message: 'Le mot-clé principal est présent dans la méta-description.',
        });
        points += 15;
      } else {
        newIssues.push({
          type: 'error',
          message: 'Le mot-clé principal n\'est pas présent dans la méta-description.',
        });
      }
    }

    // Check content length
    if (wordCount < 300) {
      newIssues.push({
        type: 'error',
        message: `Le contenu est trop court (${wordCount} mots). Visez au moins 300 mots.`,
      });
    } else if (wordCount < 600) {
      newIssues.push({
        type: 'warning',
        message: `Le contenu pourrait être plus détaillé (${wordCount} mots). Visez au moins 600 mots pour un contenu complet.`,
      });
      points += 10;
    } else {
      newIssues.push({
        type: 'success',
        message: `Bonne longueur de contenu (${wordCount} mots).`,
      });
      points += 15;
    }

    // Check keyword density
    const keywordRegex = new RegExp(focusKeyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
    const keywordMatches = (textContent.match(keywordRegex) || []).length;
    const keywordDensity = (keywordMatches / wordCount) * 100;

    if (keywordMatches === 0) {
      newIssues.push({
        type: 'error',
        message: 'Le mot-clé principal n\'apparaît pas dans le contenu.',
      });
    } else if (keywordDensity < 0.5) {
      newIssues.push({
        type: 'warning',
        message: `La densité du mot-clé est trop faible (${keywordDensity.toFixed(1)}%). Visez entre 0.5% et 2.5%.`,
      });
      points += 5;
    } else if (keywordDensity > 2.5) {
      newIssues.push({
        type: 'warning',
        message: `La densité du mot-clé est trop élevée (${keywordDensity.toFixed(1)}%). Visez entre 0.5% et 2.5%.`,
      });
      points += 5;
    } else {
      newIssues.push({
        type: 'success',
        message: `Bonne densité du mot-clé (${keywordDensity.toFixed(1)}%).`,
      });
      points += 15;
    }

    // Check headings
    const headings = blocks.filter((block) => block.type === 'heading');
    if (headings.length === 0) {
      newIssues.push({
        type: 'error',
        message: 'Aucun titre (H1, H2, etc.) n\'est utilisé dans le contenu.',
      });
    } else {
      const keywordInHeadings = headings.some((block) =>
        block.content.text.toLowerCase().includes(focusKeyword.toLowerCase())
      );
      if (keywordInHeadings) {
        newIssues.push({
          type: 'success',
          message: 'Le mot-clé principal est présent dans au moins un titre.',
        });
        points += 10;
      } else {
        newIssues.push({
          type: 'warning',
          message: 'Le mot-clé principal n\'est présent dans aucun titre.',
        });
      }
    }

    // Check images
    const images = blocks.filter((block) => block.type === 'image' || block.type === 'gallery');
    if (images.length === 0) {
      newIssues.push({
        type: 'warning',
        message: 'Aucune image n\'est utilisée dans le contenu. Les images améliorent l\'engagement.',
      });
    } else {
      const imagesWithAlt = images.filter((block) => {
        if (block.type === 'image') return block.content.alt;
        if (block.type === 'gallery') return block.content.images.some((img: any) => img.alt);
        return false;
      });
      
      if (imagesWithAlt.length < images.length) {
        newIssues.push({
          type: 'warning',
          message: 'Certaines images n\'ont pas de texte alternatif (alt). Ajoutez des descriptions pour améliorer l\'accessibilité et le SEO.',
        });
        points += 5;
      } else {
        newIssues.push({
          type: 'success',
          message: 'Toutes les images ont un texte alternatif (alt).',
        });
        points += 10;
      }
    }

    // Calculate final score
    const percentage = Math.min(100, Math.round((points / maxPoints) * 100));
    let color = 'gray';
    let label = 'Non analysé';

    if (percentage < 50) {
      color = 'red';
      label = 'Mauvais';
    } else if (percentage < 70) {
      color = 'orange';
      label = 'Moyen';
    } else if (percentage < 90) {
      color = 'blue';
      label = 'Bon';
    } else {
      color = 'green';
      label = 'Excellent';
    }

    setScore({
      score: points,
      maxScore,
      percentage,
      color,
      label,
    });
    setIssues(newIssues);
  }, [blocks, title, metaDescription, focusKeyword]);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Analyse SEO</h3>
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-2 bg-${score.color}-500`}
          >
            {score.percentage}
          </div>
          <span className={`text-${score.color}-500 font-medium`}>{score.label}</span>
        </div>
      </div>

      <div className="space-y-3">
        {issues.map((issue, index) => (
          <div
            key={index}
            className={`p-3 rounded-md ${
              issue.type === 'error'
                ? 'bg-red-50 text-red-700'
                : issue.type === 'warning'
                ? 'bg-yellow-50 text-yellow-700'
                : 'bg-green-50 text-green-700'
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {issue.type === 'error' ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : issue.type === 'warning' ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <p className="ml-3">{issue.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="font-medium mb-2">Suggestions d'amélioration</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          <li>Utilisez le mot-clé principal dans le premier paragraphe</li>
          <li>Ajoutez des liens internes vers d'autres pages pertinentes</li>
          <li>Utilisez des variantes du mot-clé principal dans le contenu</li>
          <li>Structurez votre contenu avec des titres et sous-titres</li>
          <li>Optimisez les images avec des noms de fichiers descriptifs</li>
        </ul>
      </div>
    </div>
  );
};

export default SEOAnalysis;
