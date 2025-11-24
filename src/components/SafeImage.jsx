import { useState, useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import ImageIcon from '@mui/icons-material/Image'

function SafeImage({ src, alt, fallbackText, sx = {}, style = {}, ...props }) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Vérifier si l'image est déjà chargée (cache du navigateur)
    if (imgRef.current && imgRef.current.complete) {
      setLoading(false)
      setImageLoaded(true)
    }
  }, [src])

  const handleError = () => {
    setError(true)
    setLoading(false)
    setImageLoaded(false)
  }

  const handleLoad = () => {
    setLoading(false)
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
          backgroundColor: alpha('#6a1b9a', 0.05),
          border: `2px dashed ${alpha('#6a1b9a', 0.2)}`,
          borderRadius: 2,
          minHeight: 200,
          position: 'relative',
          ...sx,
        }}
      >
        <ImageIcon sx={{ fontSize: 60, color: alpha('#6a1b9a', 0.3), mb: 2 }} />
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
      {loading && !error && (
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
            backgroundColor: alpha('#6a1b9a', 0.05),
            zIndex: 10,
          }}
        >
          <ImageIcon sx={{ fontSize: 40, color: alpha('#6a1b9a', 0.3) }} />
        </Box>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: error ? 'none' : (imageLoaded || !loading ? 'block' : 'none'),
          opacity: imageLoaded ? 1 : (loading ? 0 : 1),
          transition: 'opacity 0.3s ease',
          position: style.position || 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          ...style,
        }}
        {...props}
      />
    </Box>
  )
}

export default SafeImage

