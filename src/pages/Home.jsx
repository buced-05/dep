import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Chip,
  alpha,
  Divider,
} from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import PersonIcon from '@mui/icons-material/Person'
import CampaignIcon from '@mui/icons-material/Campaign'
import GroupsIcon from '@mui/icons-material/Groups'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SafeImage from '../components/SafeImage'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeroBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: { xs: '70vh', md: '85vh' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(10),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${alpha('#000000', 0.4)} 0%, ${alpha('#000000', 0.6)} 100%)`,
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, transparent 0%, ${alpha('#000000', 0.3)} 100%)`,
    zIndex: 2,
  },
  border: `4px solid transparent`,
  backgroundImage: `linear-gradient(#000, #000), linear-gradient(90deg, #ff6b35 0%, #ffffff 33.33%, #2e7d32 66.66%, #ffffff 100%)`,
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
}))

const HeroImage = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  textAlign: 'center',
  color: 'white',
  padding: theme.spacing(4),
  maxWidth: '900px',
  mx: 'auto',
  animation: `${fadeInUp} 0.8s ease-out`,
}))

const PhotoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  marginBottom: theme.spacing(4),
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
    borderRadius: '50%',
    border: `3px solid ${alpha('#ffffff', 0.3)}`,
    zIndex: -1,
  },
}))

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: '#ffffff',
  border: `1px solid ${alpha('#ff6b35', 0.15)}`,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  borderRadius: theme.spacing(2),
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    border: `1px solid ${alpha('#ff6b35', 0.3)}`,
  },
}))

const ImageCard = styled(Card)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  position: 'relative',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, transparent 0%, ${alpha('#1b5e20', 0.8)} 100%)`,
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&:hover img': {
    transform: 'scale(1.08)',
  },
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: '-0.02em',
  marginBottom: theme.spacing(1),
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 60,
    height: 3,
    background: `linear-gradient(90deg, ${alpha('#ff6b35', 0)}, #ff6b35, ${alpha('#2e7d32', 0.5)}, ${alpha('#ff6b35', 0)})`,
    borderRadius: 2,
  },
}))

function Home() {
  const navigate = useNavigate()

  const circonscriptions = ['KANZRA', 'VOUÉBOUFLA', 'ZANZRA', 'ZUENOULA']

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Hero Section - Grande Image de Fond avec Accents Côte d'Ivoire */}
        <HeroBox>
          {/* Bandeaux de couleurs du drapeau */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 8,
              background: 'linear-gradient(90deg, #ff6b35 0%, #ffffff 33.33%, #2e7d32 66.66%, #ffffff 100%)',
              zIndex: 4,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 8,
              background: 'linear-gradient(90deg, #ff6b35 0%, #ffffff 33.33%, #2e7d32 66.66%, #ffffff 100%)',
              zIndex: 4,
            }}
          />
          
          <HeroImage>
            <SafeImage
              src="/images/candidat-portrait.jpg"
              alt="Dr YOUAN Bi Tra Jean Claude"
              fallbackText="Photo du candidat"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </HeroImage>
          
          <HeroContent>
            {/* Badge Côte d'Ivoire */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 3,
                px: 3,
                py: 1.5,
                borderRadius: 3,
                background: alpha('#ffffff', 0.15),
                backdropFilter: 'blur(10px)',
                border: `2px solid ${alpha('#ffffff', 0.3)}`,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 24,
                  borderRadius: 1,
                  background: 'linear-gradient(90deg, #ff6b35 0%, #ffffff 33.33%, #2e7d32 66.66%, #ffffff 100%)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                }}
              >
                CÔTE D'IVOIRE
              </Typography>
            </Box>
            
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontWeight: 800,
                mb: 2,
                color: '#ffffff',
                fontSize: { xs: '2rem', md: '3.5rem' },
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              Dr YOUAN Bi Tra Jean Claude
            </Typography>
            
            <Divider 
              sx={{ 
                my: 3, 
                borderColor: alpha('#ffffff', 0.3), 
                width: '80px', 
                mx: 'auto',
                borderWidth: 2,
              }} 
            />
            
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                mb: 1,
                fontWeight: 600,
                color: '#ffffff',
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                letterSpacing: '0.01em',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              Candidat Indépendant aux Élections Législatives
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                fontWeight: 400, 
                color: alpha('#ffffff', 0.95),
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                letterSpacing: '0.01em',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
              }}
            >
              Décembre 2025 • Circonscription Électorale n°139
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
              {circonscriptions.map((circ, index) => {
                const colors = ['#ff6b35', '#ffffff', '#2e7d32', '#ff6b35']
                const bgColor = colors[index % colors.length]
                return (
                  <Chip
                    key={circ}
                    label={circ}
                    sx={{
                      backgroundColor: bgColor === '#ffffff' 
                        ? alpha('#ffffff', 0.2) 
                        : alpha(bgColor, 0.25),
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      padding: '8px 20px',
                      border: `2px solid ${bgColor === '#ffffff' ? alpha('#ffffff', 0.5) : bgColor}`,
                      borderRadius: 2,
                      height: 40,
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      '&:hover': {
                        backgroundColor: bgColor === '#ffffff' 
                          ? alpha('#ffffff', 0.35) 
                          : alpha(bgColor, 0.4),
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                )
              })}
            </Box>
            
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/inscription')}
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 1,
                backgroundColor: 'secondary.main',
                color: 'white',
                fontSize: { xs: '1rem', md: '1.125rem' },
                padding: { xs: '12px 32px', md: '14px 40px' },
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                textTransform: 'none',
                letterSpacing: '0.02em',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Je m'engage à ses côtés
            </Button>
          </HeroContent>
        </HeroBox>

        {/* Section Engagement Communautaire */}
        <Grid container spacing={5} sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <ImageCard sx={{ height: { xs: 350, md: 500 }, position: 'relative' }}>
              <SafeImage
                src="/images/evenement-communautaire.jpg"
                alt="Événement communautaire avec Dr YOUAN"
                fallbackText="Événement communautaire"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 4,
                  zIndex: 2,
                  color: 'white',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                  Engagement Communautaire
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.95rem', opacity: 0.95 }}>
                  Tournoi de la Cohésion Sociale - Voueboufla
                </Typography>
              </Box>
            </ImageCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#ffffff',
                border: `1px solid ${alpha('#ff6b35', 0.15)}`,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            >
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700, 
                  color: 'primary.main', 
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  letterSpacing: '-0.01em',
                }}
              >
                Pourquoi voter pour le Dr YOUAN ?
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  fontSize: { xs: '1rem', md: '1.125rem' }, 
                  color: 'text.secondary', 
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Un candidat indépendant, présent sur le terrain, à l'écoute des citoyens. 
                Une voix libre pour défendre vos intérêts et construire ensemble l'avenir de notre circonscription.
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate('/engagement')}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  alignSelf: 'flex-start',
                  backgroundColor: 'primary.main',
                  padding: '10px 28px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                Découvrir son engagement
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Trois Piliers de l'Engagement */}
        <Box sx={{ mb: 10 }}>
          <SectionTitle 
            variant="h3" 
            component="h2" 
            align="center" 
            sx={{ 
              mb: 8,
              color: 'primary.main',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            Les Trois Piliers de l'Engagement
          </SectionTitle>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureCard elevation={0}>
                <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      mb: 3,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: '#ffffff',
                      alignItems: 'center',
                      margin: '0 auto',
                      border: `2px solid ${alpha('#ff6b35', 0.25)}`,
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'primary.main', 
                      mb: 2,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    Indépendance
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      lineHeight: 1.75, 
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}
                  >
                    Une voix libre, indépendante de toute influence, mais dépendante de vous. 
                    Un député à votre écoute, présent sur le terrain.
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard elevation={0}>
                <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      mb: 3,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: '#ffffff',
                      alignItems: 'center',
                      margin: '0 auto',
                      border: `2px solid ${alpha('#ff6b35', 0.25)}`,
                    }}
                  >
                    <CampaignIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'primary.main', 
                      mb: 2,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    Transparence
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      lineHeight: 1.75, 
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}
                  >
                    Restaurer la confiance entre les citoyens et leur élu. 
                    Une politique qui redevient un service et non un privilège.
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard elevation={0}>
                <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      mb: 3,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: '#ffffff',
                      alignItems: 'center',
                      margin: '0 auto',
                      border: `2px solid ${alpha('#2e7d32', 0.25)}`,
                    }}
                  >
                    <GroupsIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'secondary.main', 
                      mb: 2,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    Justice Sociale
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      lineHeight: 1.75, 
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}
                  >
                    Défendre une répartition équitable des ressources et soutenir 
                    nos initiatives locales. Promouvoir l'avenir de notre jeunesse.
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          </Grid>
        </Box>

        {/* Section Circonscription */}
        <Grid container spacing={5} sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                background: '#ffffff',
                border: `1px solid ${alpha('#ff6b35', 0.15)}`,
                borderRadius: 2,
                height: '100%',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5, mb: 3 }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b35, #2e7d32)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(255, 107, 53, 0.25)',
                    flexShrink: 0,
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 32, color: 'white' }} />
                </Box>
                <Box>
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'primary.main',
                      mb: 1,
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                    }}
                  >
                    Circonscription Électorale n°139
                  </Typography>
                </Box>
              </Box>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  fontSize: { xs: '1rem', md: '1.125rem' }, 
                  lineHeight: 1.8, 
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                Notre circonscription couvre quatre sous-préfectures : <strong style={{ color: '#ff6b35', fontWeight: 600 }}>KANZRA</strong>,{' '}
                <strong style={{ color: '#ff6b35', fontWeight: 600 }}>VOUÉBOUFLA</strong>, <strong style={{ color: '#2e7d32', fontWeight: 600 }}>ZANZRA</strong> et <strong style={{ color: '#2e7d32', fontWeight: 600 }}>ZUENOULA</strong>.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '1rem', md: '1.125rem' }, 
                  lineHeight: 1.8, 
                  color: 'text.secondary',
                }}
              >
                Ensemble, faisons entendre la voix du peuple libre, la voix d'une circonscription 
                debout et confiante dans son destin.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageCard sx={{ height: '100%', minHeight: { xs: 300, md: 400 }, position: 'relative' }}>
              <SafeImage
                src="/images/trophee-ceremonie.jpg"
                alt="Cérémonie de remise du Trophée Dr YOUAN"
                fallbackText="Cérémonie de remise du Trophée"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 4,
                  zIndex: 2,
                  color: 'white',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                  Trophée Dr YOUAN
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.9rem', opacity: 0.95 }}>
                  Tournoi de la Cohésion Sociale - 1ère Édition
                </Typography>
              </Box>
            </ImageCard>
          </Grid>
        </Grid>

        {/* Call to Action Final */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 5, md: 7 },
            textAlign: 'center',
            background: '#ffffff',
            border: `1px solid ${alpha('#ff6b35', 0.2)}`,
            borderRadius: 2,
            mb: 4,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
          }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              color: 'primary.main', 
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              letterSpacing: '-0.01em',
            }}
          >
            Rejoignez le mouvement
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.125rem' }, 
              mb: 4, 
              color: 'text.secondary', 
              maxWidth: '700px', 
              mx: 'auto', 
              lineHeight: 1.75,
            }}
          >
            Votre engagement compte. Inscrivez-vous pour manifester votre soutien, 
            votre volontariat et votre bénévolat.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/inscription')}
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: 'primary.main',
              fontSize: { xs: '1rem', md: '1.125rem' },
              padding: { xs: '12px 32px', md: '14px 40px' },
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: '0 4px 16px rgba(255, 107, 53, 0.25)',
              textTransform: 'none',
              letterSpacing: '0.02em',
              '&:hover': {
                backgroundColor: 'primary.dark',
                boxShadow: '0 6px 20px rgba(255, 107, 53, 0.35)',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            S'inscrire maintenant
          </Button>
        </Paper>
      </Container>
    </Box>
  )
}

export default Home
