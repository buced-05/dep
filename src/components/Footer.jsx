import { Box, Container, Typography, Link, Grid, IconButton, alpha } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: '#ffffff',
        borderTop: `3px solid ${alpha('#ff6b35', 0.3)}`,
        color: 'text.primary',
        py: 5,
        mt: 'auto',
        position: 'relative',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon />
                <Link href="tel:+2250708822007" color="inherit" sx={{ textDecoration: 'none' }}>
                  +225 07 08 82 20 07
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon />
                <Link href="tel:+2250748942823" color="inherit" sx={{ textDecoration: 'none' }}>
                  +225 07 48 94 28 23
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsAppIcon />
                <Link href="https://wa.me/2250708822007" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                  WhatsApp
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon />
                <Link href="mailto:cyouantra@gmail.com" color="inherit" sx={{ textDecoration: 'none' }}>
                  cyouantra@gmail.com
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Hashtags de Campagne
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                #EnsemblePourL'EveildesConsciences
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                #ZUENOULA
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                #Voueboufla
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                #kanzra
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                #zanzra
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                #CotedIvoire
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, pt: 3, borderTop: `2px solid ${alpha('#ff6b35', 0.15)}` }}>
          <Typography variant="body1" align="center" sx={{ fontWeight: 600, mb: 1 }}>
            © 2025 Dr YOUAN Bi Tra Jean Claude
          </Typography>
          <Typography variant="body2" align="center" sx={{ opacity: 0.9 }}>
            Candidat Indépendant aux Élections Législatives de Décembre 2025
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 2, fontWeight: 500 }}>
            Circonscription n°139 : KANZRA, VOUÉBOUFLA, ZANZRA, ZUENOULA
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

