'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './CategoriesSection.module.css';

interface BaseBlockData {
  id: string;
  text: string;
  initialX: number;
  initialY: number;
  initialRotate: number;
}

interface PositionData {
  x: number;
  y: number;
  rotate: number;
}

const categoryBlocksData: BaseBlockData[] = [
  { id: 'forensic', text: 'forensic', initialX: 80, initialY: 210, initialRotate: -3 },
  { id: 'crypto', text: 'crypto', initialX: 190, initialY: 180, initialRotate: -25 },
  { id: 'pwn', text: 'pwn', initialX: 300, initialY: 100, initialRotate: 10 },
  { id: 'reverse', text: 'reverse', initialX: 360, initialY: 200, initialRotate: -8 },
  { id: 'web', text: 'web', initialX: 520, initialY: 220, initialRotate: -1 },
  { id: 'osint', text: 'osint', initialX: 630, initialY: 150, initialRotate: 30 },
  { id: 'misc', text: 'misc', initialX: 200, initialY: 50, initialRotate: 5 },
  { id: 'ai-ml', text: 'AI/ML', initialX: 450, initialY: 70, initialRotate: -15 },
];

const mobilePositions: Record<string, PositionData> = {
  forensic: { x: 10, y: 200, rotate: -3 },
  crypto: { x: 90, y: 150, rotate: -25 },
  pwn: { x: 160, y: 190, rotate: 10 },
  reverse: { x: 60, y: 110, rotate: -8 },
  web: { x: 0, y: 40, rotate: -1 },
  osint: { x: 130, y: 70, rotate: 30 },
  misc: { x: 30, y: 20, rotate: 5 },
  'ai-ml': { x: 190, y: 140, rotate: -15 },
};

const DESKTOP_WIDTH = 150;
const DESKTOP_HEIGHT = 50;
const MOBILE_WIDTH = 80;
const MOBILE_HEIGHT = 28;

interface BlockState extends BaseBlockData {
  x: number;
  y: number;
  rotation: number;
  rotateX: number;
  rotateY: number;
  isDragging: boolean;
  offsetX: number;
  offsetY: number;
}

const CategoriesSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [blocks, setBlocks] = useState<BlockState[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBlockRef = useRef<number | null>(null);

  const getCurrentBlockSize = useCallback(
    () => ({
      width: isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH,
      height: isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT,
    }),
    [isMobile]
  );

  const initializeBlocks = useCallback((mobile: boolean): BlockState[] => {
    return categoryBlocksData.map(block => {
      const pos = mobile
        ? mobilePositions[block.id]
        : { x: block.initialX, y: block.initialY, rotate: block.initialRotate };

      const defaultPos = pos || { x: block.initialX, y: block.initialY, rotate: block.initialRotate };

      return {
        ...block,
        x: defaultPos.x,
        y: defaultPos.y,
        rotation: defaultPos.rotate,
        isDragging: false,
        offsetX: 0,
        offsetY: 0,
        rotateX: Math.random() * 5 - 2.5,
        rotateY: Math.random() * 5 - 2.5,
      };
    });
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
        setBlocks(initializeBlocks(mobile));
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile, initializeBlocks]);

  useEffect(() => {
    setBlocks(initializeBlocks(window.innerWidth <= 768));
  }, [initializeBlocks]);

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (activeBlockRef.current === null || !containerRef.current) return;

      const { width: blockW, height: blockH } = getCurrentBlockSize();

      setBlocks(prevBlocks => {
        const newBlocks = [...prevBlocks];
        const activeBlockIndex = newBlocks.findIndex(b => b.isDragging);
        if (activeBlockIndex === -1) return prevBlocks;

        const activeBlock = newBlocks[activeBlockIndex];
        const containerRect = containerRef.current!.getBoundingClientRect();

        let newX = clientX - containerRect.left - activeBlock.offsetX;
        let newY = clientY - containerRect.top - activeBlock.offsetY;

        const maxX = containerRect.width - blockW;
        const maxY = containerRect.height - blockH;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        activeBlock.x = newX;
        activeBlock.y = newY;
        activeBlock.rotateX = (newY / containerRect.height) * 30 - 15;
        activeBlock.rotateY = -(newX / containerRect.width) * 30 + 15;
        activeBlock.rotation += (Math.random() - 0.5) * 0.5;

        for (let i = 0; i < newBlocks.length; i++) {
          const otherBlock = newBlocks[i];
          if (otherBlock.id === activeBlock.id) continue;

          const dx = activeBlock.x + blockW / 2 - (otherBlock.x + blockW / 2);
          const dy = activeBlock.y + blockH / 2 - (otherBlock.y + blockH / 2);
          const distance = Math.hypot(dx, dy);
          const minDistance = blockW * 0.8;

          if (distance < minDistance) {
            const overlap = minDistance - distance;
            const angle = Math.atan2(dy, dx);
            const pushAmount = overlap * 0.05;

            otherBlock.x -= Math.cos(angle) * pushAmount;
            otherBlock.y -= Math.sin(angle) * pushAmount;
            activeBlock.x += Math.cos(angle) * pushAmount * 0.5;
            activeBlock.y += Math.sin(angle) * pushAmount * 0.5;

            otherBlock.rotation += (Math.random() - 0.5) * 5;
            otherBlock.rotateX = Math.random() * 20 - 10;
            otherBlock.rotateY = Math.random() * 20 - 10;
          }
        }

        newBlocks.sort((a, b) => (a.isDragging ? 1 : b.isDragging ? -1 : 0));
        return newBlocks;
      });
    },
    [getCurrentBlockSize]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => handleMove(e.clientX, e.clientY),
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length > 0) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    },
    [handleMove]
  );

  const handleMouseUp = useCallback(() => {
    activeBlockRef.current = null;
    if (containerRef.current) containerRef.current.style.touchAction = '';

    setBlocks(prev => prev.map(b => ({
      ...b,
      isDragging: false,
      rotateX: Math.random() * 10 - 5,
      rotateY: Math.random() * 10 - 5,
    })));

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleMouseUp);
  }, [handleMouseMove, handleTouchMove]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, id: string) => {
      if (!containerRef.current) return;
      containerRef.current.style.touchAction = 'none';

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      e.preventDefault();
      e.stopPropagation();

      const blockIndex = blocks.findIndex(b => b.id === id);
      if (blockIndex === -1) return;

      activeBlockRef.current = blockIndex;

      const rect = e.currentTarget.getBoundingClientRect();

      setBlocks(prev => {
        const newBlocks = [...prev];
        const block = newBlocks[blockIndex];
        block.isDragging = true;
        block.offsetX = clientX - rect.left - rect.width / 2;
        block.offsetY = clientY - rect.top - rect.height / 2;
        newBlocks.splice(blockIndex, 1);
        newBlocks.push(block);
        return newBlocks;
      });

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    },
    [blocks, handleMouseMove, handleMouseUp, handleTouchMove]
  );

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.sectionTitle}>Категорії</h2>

      <div
        ref={containerRef}
        className={`${styles.blocksContainer} ${isMobile ? styles.mobileContainer : ''}`}
      >
        {blocks.map(block => (
          <div
            key={block.id}
            className={`${styles.categoryBlockBase} ${block.isDragging ? styles.dragging : ''}`}
            style={{
              width: isMobile ? `${MOBILE_WIDTH}px` : `${DESKTOP_WIDTH}px`,
              height: isMobile ? `${MOBILE_HEIGHT}px` : `${DESKTOP_HEIGHT}px`,
              transform: `
                translateX(${block.x}px)
                translateY(${block.y}px)
                rotateZ(${block.rotation}deg)
                rotateX(${block.rotateX}deg)
                rotateY(${block.rotateY}deg)
              `,
              zIndex: block.isDragging ? 100 : blocks.findIndex(b => b.id === block.id) + 1,
            }}
            onMouseDown={e => handleMouseDown(e, block.id)}
            onTouchStart={e => handleMouseDown(e, block.id)}
          >
            {block.text}
          </div>
        ))}
        <div className={styles.line}></div>
      </div>

      <p className={styles.activityText}>
        * Також будуть додаткові активності на вибір такі, як: King of the hill, Write-up competition
      </p>
    </section>
  );
};

export default CategoriesSection;