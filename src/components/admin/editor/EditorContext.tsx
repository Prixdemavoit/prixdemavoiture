'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Block, BlockType } from './BlockTypes';

interface EditorContextType {
  blocks: Block[];
  addBlock: (type: BlockType, index?: number) => void;
  updateBlock: (index: number, content: any) => void;
  moveBlockUp: (index: number) => void;
  moveBlockDown: (index: number) => void;
  removeBlock: (index: number) => void;
  selectedBlock: number | null;
  setSelectedBlock: (index: number | null) => void;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};

export const EditorProvider: React.FC<{ children: React.ReactNode; initialBlocks?: Block[] }> = ({ 
  children, 
  initialBlocks = [] 
}) => {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

  // Load blocks from localStorage on initial render
  useEffect(() => {
    if (initialBlocks.length === 0) {
      const savedBlocks = localStorage.getItem('editorBlocks');
      if (savedBlocks) {
        try {
          setBlocks(JSON.parse(savedBlocks));
        } catch (e) {
          console.error('Failed to parse saved blocks', e);
        }
      }
    }
  }, [initialBlocks]);

  // Save blocks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('editorBlocks', JSON.stringify(blocks));
  }, [blocks]);

  const addBlock = (type: BlockType, index?: number) => {
    const newBlock: Block = {
      id: `block-${Date.now()}`,
      type,
      content: getDefaultContentForType(type),
    };

    if (index !== undefined) {
      const newBlocks = [...blocks];
      newBlocks.splice(index + 1, 0, newBlock);
      setBlocks(newBlocks);
      setSelectedBlock(index + 1);
    } else {
      setBlocks([...blocks, newBlock]);
      setSelectedBlock(blocks.length);
    }
  };

  const updateBlock = (index: number, content: any) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], content };
    setBlocks(newBlocks);
  };

  const moveBlockUp = (index: number) => {
    if (index <= 0) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[index - 1];
    newBlocks[index - 1] = temp;
    setBlocks(newBlocks);
    setSelectedBlock(index - 1);
  };

  const moveBlockDown = (index: number) => {
    if (index >= blocks.length - 1) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[index + 1];
    newBlocks[index + 1] = temp;
    setBlocks(newBlocks);
    setSelectedBlock(index + 1);
  };

  const removeBlock = (index: number) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
    setSelectedBlock(null);
  };

  return (
    <EditorContext.Provider
      value={{
        blocks,
        addBlock,
        updateBlock,
        moveBlockUp,
        moveBlockDown,
        removeBlock,
        selectedBlock,
        setSelectedBlock,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

// Helper function to get default content for each block type
function getDefaultContentForType(type: BlockType): any {
  switch (type) {
    case 'paragraph':
      return { text: 'Écrivez votre texte ici...' };
    case 'heading':
      return { text: 'Titre', level: 2 };
    case 'image':
      return { src: '', alt: '', caption: '' };
    case 'list':
      return { items: ['Premier élément'], ordered: false };
    case 'quote':
      return { text: 'Citation', source: '' };
    case 'vehicle-specs':
      return {
        specs: [
          { label: 'Marque', value: '' },
          { label: 'Modèle', value: '' },
          { label: 'Année', value: '' },
          { label: 'Kilométrage', value: '' },
          { label: 'Carburant', value: '' }
        ]
      };
    case 'gallery':
      return { images: [] };
    case 'testimonial':
      return { text: '', author: '', rating: 5 };
    case 'cta':
      return { text: 'Appelez-nous maintenant', buttonText: 'Contacter', url: '/contact' };
    default:
      return {};
  }
}
