import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Divider,
  alpha,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import TransparencyIcon from '@mui/icons-material/Visibility'
import JusticeIcon from '@mui/icons-material/Balance'
import YouthIcon from '@mui/icons-material/School'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import GroupsIcon from '@mui/icons-material/Groups'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SafeImage from '../components/SafeImage'

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  background: '#ffffff',
  border: `2px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  borderRadius: theme.spacing(2),
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: `0 16px 48px ${alpha(theme.palette.primary.main, 0.3)}`,
    border: `2px solid ${alpha(theme.palette.primary.main, 0.4)}`,
  },
}))

const PillarSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  marginBottom: theme.spacing(6),
  background: '#ffffff',
  border: `2px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  borderRadius: theme.spacing(3),
}))

const ImageCard = styled(Card)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  position: 'relative',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, transparent 0%, ${alpha('#000000', 0.3)} 50%, ${alpha('#000000', 0.85)} 100%)`,
    zIndex: 1,
    transition: 'opacity 0.4s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    background: `linear-gradient(to top, ${alpha('#000000', 0.9)} 0%, ${alpha('#000000', 0.5)} 50%, transparent 100%)`,
    zIndex: 1,
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 48px rgba(0, 0, 0, 0.2)',
    '& img': {
      transform: 'scale(1.05)',
    },
    '&::before': {
      opacity: 0.9,
    },
  },
}))

function Engagement() {
  const pillars = [
    {
      title: 'La Transparence',
      icon: <TransparencyIcon sx={{ fontSize: 60 }} />,
      description: 'Restaurer la confiance entre les citoyens et leur élu.',
      details: [
        'Rendre compte régulièrement de mon action parlementaire',
        'Assurer une communication transparente sur les décisions prises',
        'Mettre en place des mécanismes de consultation citoyenne',
        'Publier les budgets et les réalisations de manière accessible',
      ],
      color: 'primary.main',
    },
    {
      title: 'La Justice Sociale & Le Développement Local',
      icon: <JusticeIcon sx={{ fontSize: 60 }} />,
      description: 'Défendre une répartition équitable des ressources et soutenir nos initiatives locales.',
      details: [
        'Promouvoir l\'accès équitable aux services publics',
        'Soutenir les projets de développement local',
        'Défendre les droits des travailleurs et des entrepreneurs',
        'Favoriser l\'inclusion sociale et économique',
      ],
      color: 'secondary.main',
    },
    {
      title: 'L\'Avenir de Notre Jeunesse',
      icon: <YouthIcon sx={{ fontSize: 60 }} />,
      description: 'Promouvoir l\'éducation, l\'emploi, la formation professionnelle et l\'innovation dans nos communautés.',
      details: [
        'Améliorer l\'accès à l\'éducation et à la formation',
        'Créer des opportunités d\'emploi pour les jeunes',
        'Soutenir l\'entrepreneuriat et l\'innovation',
        'Promouvoir les programmes de mentorat et d\'accompagnement',
      ],
      color: 'primary.main',
    },
  ]

  const values = [
    {
      title: 'Indépendance',
      description: 'Une voix libre, indépendante de toute influence, mais dépendante de vous.',
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Proximité',
      description: 'Un député à votre écoute, présent sur le terrain, proche des réalités.',
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Progrès',
      description: 'Construire ensemble une circonscription dynamique, unie et prospère.',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    },
  ]

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              mb: 2, 
              fontWeight: 800,
              color: 'primary.main',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -15,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 120,
                height: 4,
                background: `linear-gradient(90deg, ${alpha('#6a1b9a', 0)}, #6a1b9a, ${alpha('#6a1b9a', 0)})`,
                borderRadius: 2,
              },
            }}
          >
            Mon Engagement
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mt: 4, fontWeight: 500 }}>
            Trois piliers fondamentaux pour transformer notre circonscription
          </Typography>
        </Box>

        {/* Image événement en haut */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12}>
            <ImageCard sx={{ height: 350, position: 'relative' }}>
              <SafeImage
                src="/images/groupe-communautaire.jpg"
                alt="Groupe communautaire avec Dr YOUAN"
                fallbackText="Groupe communautaire"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 3, md: 4 },
                  zIndex: 2,
                  color: 'white',
                  background: `linear-gradient(to top, ${alpha('#000000', 0.85)} 0%, ${alpha('#000000', 0.6)} 70%, transparent 100%)`,
                  backdropFilter: 'blur(2px)',
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 800, 
                    mb: 1.5,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                  }}
                >
                  Engagement Communautaire
                </Typography>
                <Typography 
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.4)',
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  Le Dr YOUAN au cœur de sa communauté, présent sur le terrain
                </Typography>
              </Box>
            </ImageCard>
          </Grid>
        </Grid>

        {/* Trois piliers */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {pillars.map((pillar, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard elevation={0}>
                <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      mb: 3,
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: '#ffffff',
                      alignItems: 'center',
                      margin: '0 auto',
                      border: `3px solid ${alpha('#6a1b9a', 0.2)}`,
                    }}
                  >
                    <Box sx={{ color: pillar.color }}>
                      {pillar.icon}
                    </Box>
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
                    {pillar.description}
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: alpha('#6a1b9a', 0.2) }} />
                  <Box component="ul" sx={{ textAlign: 'left', pl: 2, mt: 'auto' }}>
                    {pillar.details.map((detail, idx) => (
                      <Typography
                        key={idx}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1.5, lineHeight: 1.7 }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>

        {/* Section Vision avec image */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <ImageCard sx={{ height: 400, position: 'relative' }}>
              <SafeImage
                src="/images/evenement-communautaire.jpg"
                alt="Événement communautaire"
                fallbackText="Événement communautaire"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ImageCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <PillarSection elevation={0}>
              <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
                Ma Vision
              </Typography>
              <Grid container spacing={3}>
                {values.map((value, index) => (
                  <Grid item xs={12} key={index}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Box 
                        sx={{ 
                          color: 'primary.main', 
                          mb: 2, 
                          display: 'flex', 
                          justifyContent: 'center',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: '#ffffff',
                          alignItems: 'center',
                          margin: '0 auto',
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        {value.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </PillarSection>
          </Grid>
        </Grid>

        {/* Section finale avec image trophée */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 5,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#ffffff',
                border: `3px solid ${alpha('#6a1b9a', 0.2)}`,
                borderRadius: 3,
              }}
            >
              <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Ensemble pour le Renouveau
              </Typography>
              <Typography variant="body1" paragraph align="center" sx={{ fontSize: '1.15rem', lineHeight: 1.9, mb: 2 }}>
                Je rêve d'une circonscription dynamique, unie et prospère, où chacun a sa place, 
                où la parole du citoyen compte, où la politique redevient un service et non un privilège.
              </Typography>
              <Typography variant="body1" paragraph align="center" sx={{ fontSize: '1.15rem', lineHeight: 1.9 }}>
                Je rêve d'un mandat parlementaire qui restaure la dignité, qui redonne espoir, 
                qui construit et qui rassemble au lieu de diviser.
              </Typography>
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  Faisons entendre la voix du peuple libre
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1rem' }}>
                  La voix d'une circonscription debout et confiante dans son destin
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageCard sx={{ height: '100%', minHeight: 400, position: 'relative' }}>
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
                  p: { xs: 3, md: 4 },
                  zIndex: 2,
                  color: 'white',
                  background: `linear-gradient(to top, ${alpha('#000000', 0.85)} 0%, ${alpha('#000000', 0.6)} 70%, transparent 100%)`,
                  backdropFilter: 'blur(2px)',
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 800, 
                    mb: 1,
                    fontSize: { xs: '1.25rem', md: '1.75rem' },
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                  }}
                >
                  Trophée Dr YOUAN
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 1,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.4)',
                    fontWeight: 500,
                  }}
                >
                  Tournoi de la Cohésion Sociale
                </Typography>
                <Typography 
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.9375rem', md: '1rem' },
                    textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.4)',
                    fontWeight: 500,
                  }}
                >
                  1ère Édition - Voueboufla 2025
                </Typography>
              </Box>
            </ImageCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Engagement
