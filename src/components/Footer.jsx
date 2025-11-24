import { Box, Container, Typography, Link, Grid, Chip, Divider, alpha, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const FooterBox = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  borderTop: `4px solid ${theme.palette.primary.main}`,
  color: theme.palette.text.primary,
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  marginTop: 'auto',
  position: 'relative',
  boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.08)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, #ffffff 50%, ${theme.palette.secondary.main} 100%)`,
  },
}))

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    transform: 'translateX(4px)',
  },
}))

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '0.875rem',
  height: 32,
  borderRadius: theme.spacing(1),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  },
  transition: 'all 0.3s ease',
}))

function Footer() {
  const theme = useTheme()

  const hashtags = [
    "#EnsemblePourL'EveildesConsciences",
    "#ZUENOULA",
    "#Voueboufla",
    "#kanzra",
    "#zanzra",
    "#CotedIvoire",
  ]

  return (
    <FooterBox component="footer">
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Section Contact */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 3,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Contactez-nous
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <ContactItem>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                </Box>
                <Link 
                  href="tel:+2250708822007" 
                  sx={{ 
                    textDecoration: 'none',
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: { xs: '0.9375rem', md: '1rem' },
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  +225 07 08 82 20 07
                </Link>
              </ContactItem>
              
              <ContactItem>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                </Box>
                <Link 
                  href="tel:+2250748942823" 
                  sx={{ 
                    textDecoration: 'none',
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: { xs: '0.9375rem', md: '1rem' },
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  +225 07 48 94 28 23
                </Link>
              </ContactItem>

              <ContactItem>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <WhatsAppIcon sx={{ color: theme.palette.secondary.main, fontSize: 20 }} />
                </Box>
                <Link 
                  href="https://wa.me/2250708822007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    textDecoration: 'none',
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: { xs: '0.9375rem', md: '1rem' },
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  WhatsApp
                </Link>
              </ContactItem>

              <ContactItem>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                </Box>
                <Link 
                  href="mailto:cyouantra@gmail.com" 
                  sx={{ 
                    textDecoration: 'none',
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: { xs: '0.9375rem', md: '1rem' },
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  cyouantra@gmail.com
                </Link>
              </ContactItem>

              <ContactItem sx={{ mt: 1 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <LocationOnIcon sx={{ color: theme.palette.secondary.main, fontSize: 20 }} />
                </Box>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.9375rem', md: '1rem' },
                    color: 'text.secondary',
                    fontWeight: 500,
                  }}
                >
                  Circonscription n°139 : KANZRA, VOUÉBOUFLA, ZANZRA, ZUENOULA
                </Typography>
              </ContactItem>
            </Box>
          </Grid>

          {/* Section Hashtags */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 3,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Rejoignez le mouvement
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3,
                color: 'text.secondary',
                fontSize: { xs: '0.9375rem', md: '1rem' },
                lineHeight: 1.6,
              }}
            >
              Utilisez nos hashtags pour partager votre soutien sur les réseaux sociaux
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 1.5,
              }}
            >
              {hashtags.map((hashtag, index) => (
                <StyledChip
                  key={index}
                  label={hashtag}
                  clickable
                  onClick={() => {
                    // Optionnel: copier le hashtag ou ouvrir une recherche
                    navigator.clipboard?.writeText(hashtag)
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: alpha(theme.palette.primary.main, 0.2) }} />

        {/* Copyright Section */}
        <Box 
          sx={{ 
            textAlign: 'center',
            py: 2,
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 1,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Dr YOUAN Bi Tra Jean Claude
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              mb: 1,
              fontSize: { xs: '0.875rem', md: '0.9375rem' },
            }}
          >
            Candidat Indépendant aux Élections Législatives de Décembre 2025
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontWeight: 500,
              fontSize: { xs: '0.875rem', md: '0.9375rem' },
            }}
          >
            © 2025 Tous droits réservés
          </Typography>
        </Box>
      </Container>
    </FooterBox>
  )
}

export default Footer
