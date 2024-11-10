import  { useState, useEffect } from 'react';

interface CursorProps {
  size?: number;
  color?: string;
  hoverScale?: number;
}

function Cursor({
  size = 20,
  hoverScale = 1.5,
}: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId: number;

    const mouseMoveHandler = (event: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    };

    const checkPointerStyle = () => {
      const element = document.elementFromPoint(position.x, position.y);
      if (element) {
        const style = window.getComputedStyle(element).cursor;
        setIsPointer(style === 'pointer');
      }
    };

    const mouseEnterHandler = () => setIsVisible(true);
    const mouseLeaveHandler = () => setIsVisible(false);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousemove', checkPointerStyle);
    document.addEventListener('mouseenter', mouseEnterHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);

    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mousemove', checkPointerStyle);
      document.removeEventListener('mouseenter', mouseEnterHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
      document.body.style.cursor = 'auto';
      cancelAnimationFrame(frameId);
    };
  }, [position.x, position.y]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px) scale(${isPointer ? hoverScale : 1})`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: '#b61616',
          opacity: isVisible ? 1 : 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
        }}
      />
    </>
  );
}

export default Cursor;
