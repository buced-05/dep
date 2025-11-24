import { useState, useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import ImageIcon from '@mui/icons-material/Image'

function SafeImage({ src, alt, fallbackText, sx = {}, style = {}, loading = 'eager', ...props }) {
  const [error, setError] = useState(false)
  const [loadingState, setLoadingState] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Réinitialiser les états quand src change
    setError(false)
    setLoadingState(true)
    setImageLoaded(false)

    // Vérifier si l'image existe déjà dans le cache après un court délai
    const checkCache = setTimeout(() => {
      if (imgRef.current && imgRef.current.complete) {
        if (imgRef.current.naturalHeight !== 0) {
          setLoadingState(false)
          setImageLoaded(true)
        } else {
          setError(true)
          setLoadingState(false)
        }
      }
    }, 50)

    return () => clearTimeout(checkCache)
  }, [src])

  const handleError = () => {
    setError(true)
    setLoadingState(false)
    setImageLoaded(false)
  }

  const handleLoad = () => {
    setLoadingState(false)
    setImageLoaded(true)
  }

  if (error) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: alpha('#7b2cbf', 0.05),
          border: `2px dashed ${alpha('#7b2cbf', 0.2)}`,
          borderRadius: 2,
          minHeight: 200,
          position: 'relative',
          ...sx,
        }}
      >
        <ImageIcon sx={{ fontSize: 60, color: alpha('#7b2cbf', 0.3), mb: 2 }} />
        {fallbackText && (
          <Typography variant="body2" color="text.secondary" align="center" sx={{ px: 2 }}>
            {fallbackText}
          </Typography>
        )}
      </Box>
    )
  }

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...sx }}>
      {loadingState && !error && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: alpha('#7b2cbf', 0.05),
            zIndex: 2,
          }}
        >
          <ImageIcon sx={{ fontSize: 40, color: alpha('#7b2cbf', 0.3) }} />
        </Box>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: imageLoaded ? 1 : (loadingState ? 0.5 : 1),
          transition: 'opacity 0.3s ease',
          position: style.position || 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          maxWidth: '100%',
          ...style,
        }}
        {...props}
      />
    </Box>
  )
}

export default SafeImage
