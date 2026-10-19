import { useState } from 'react';

/**
 * ImageWithFallback — renders an image with a styled placeholder fallback.
 * If the image fails to load (missing file), shows an elegant placeholder.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  placeholderText,
  style,
  onClick,
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`img-placeholder ${className}`}
        style={style}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          {placeholderText && (
            <span className="text-xs text-text-muted">{placeholderText}</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      onClick={onClick}
      loading="lazy"
    />
  );
}
