import { useState } from 'react';
import { FiPlay } from 'react-icons/fi';

interface VideoPlayerProps {
  src: string;
  /** Frame de capa exibido antes do play. */
  poster?: string;
  /** Etiqueta no canto superior. Ex.: 'VÍDEO · 36ª CORRIDA' */
  label?: string;
  alt?: string;
}

export function VideoPlayer({ src, poster, label, alt }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return <video className="video-el" src={src} poster={poster} controls autoPlay playsInline />;
  }

  return (
    <button
      type="button"
      className="video-cover"
      onClick={() => setPlaying(true)}
      aria-label={label ? 'Reproduzir vídeo — ' + label : 'Reproduzir vídeo'}
    >
      {poster && <img src={poster} alt={alt ?? ''} loading="lazy" />}
      {label && <span className="video-badge">{label}</span>}
      <span className="video-play" aria-hidden="true"><FiPlay /></span>
    </button>
  );
}
