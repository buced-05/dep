// Composant de test pour vérifier l'affichage des images
import { Box } from '@mui/material'

function TestImage({ src, alt }) {
  return (
    <Box sx={{ border: '2px solid red', padding: 2, margin: 2 }}>
      <p>Test de l'image: {src}</p>
      <img 
        src={src} 
        alt={alt}
        style={{ 
          width: '100%', 
          maxWidth: '400px',
          height: 'auto',
          display: 'block',
          border: '2px solid blue'
        }}
        onLoad={() => console.log('✅ Image chargée:', src)}
        onError={(e) => console.error('❌ Erreur image:', src, e)}
      />
    </Box>
  )
}

export default TestImage

