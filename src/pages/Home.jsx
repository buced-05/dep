import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
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
  IconButton,
} from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import PersonIcon from '@mui/icons-material/Person'
import CampaignIcon from '@mui/icons-material/Campaign'
import GroupsIcon from '@mui/icons-material/Groups'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SafeImage from '../components/SafeImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

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
  minHeight: { xs: '100vh', md: '85vh' },
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: { xs: 0, md: theme.spacing(2) },
  marginBottom: { xs: theme.spacing(4), md: theme.spacing(10) },
  marginLeft: { xs: -2, md: 0 },
  marginRight: { xs: -2, md: 0 },
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
  border: { xs: 'none', md: '4px solid transparent' },
  backgroundImage: { 
    xs: 'none',
    md: `linear-gradient(#000, #000), linear-gradient(90deg, #7b2cbf 0%, #ffffff 33.33%, #2e7d32 66.66%, #ffffff 100%)`
  },
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
  width: '100%',
  height: '100%',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
})

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  textAlign: 'center',
  color: 'white',
  padding: { xs: theme.spacing(3), md: theme.spacing(4) },
  width: '100%',
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
  border: `1px solid ${alpha('#7b2cbf', 0.15)}`,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  borderRadius: theme.spacing(2),
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    border: `1px solid ${alpha('#7b2cbf', 0.3)}`,
  },
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
    background: `linear-gradient(90deg, ${alpha('#7b2cbf', 0)}, #7b2cbf, ${alpha('#2e7d32', 0.5)}, ${alpha('#7b2cbf', 0)})`,
    borderRadius: 2,
  },
}))

function Home() {
  const navigate = useNavigate()

  const circonscriptions = ['KANZRA', 'VOUÉBOUFLA', 'ZANZRA', 'ZUENOULA']

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4 } }}>
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
              background: 'linear-gradient(90deg, #7b2cbf 0%, #ffffff 33.33%, #2e7d32 66.66%, #ffffff 100%)',
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
              background: 'linear-gradient(90deg, #7b2cbf 0%, #ffffff 33.33%, #2e7d32 66.66%, #ffffff 100%)',
              zIndex: 4,
            }}
          />
          
          <HeroImage>
            <SafeImage
              src="/images/candidat-portrait.jpg"
              alt="Dr YOUAN Bi Tra Jean Claude"
              fallbackText="Photo du candidat"
              loading="eager"
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
                  fontSize: { xs: '0.8125rem', md: '1rem' },
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
                mb: { xs: 1.5, md: 2 },
                color: '#ffffff',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '4rem' },
                letterSpacing: { xs: '-0.01em', md: '-0.02em' },
                lineHeight: { xs: 1.3, md: 1.2 },
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                px: { xs: 1, md: 0 },
              }}
            >
              Dr YOUAN Bi Tra Jean Claude
            </Typography>
            
            <Divider 
              sx={{ 
                my: { xs: 2, md: 3 }, 
                borderColor: alpha('#ffffff', 0.3), 
                width: { xs: '60px', md: '80px' }, 
                mx: 'auto',
                borderWidth: 2,
              }} 
            />
            
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                mb: { xs: 0.5, md: 1 },
                fontWeight: 600,
                color: '#ffffff',
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.75rem' },
                letterSpacing: '0.01em',
                lineHeight: { xs: 1.4, md: 1.3 },
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                px: { xs: 1, md: 0 },
              }}
            >
              Candidat Indépendant aux Élections Législatives
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: { xs: 3, md: 4 }, 
                fontWeight: 400, 
                color: alpha('#ffffff', 0.95),
                fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.25rem' },
                letterSpacing: '0.01em',
                lineHeight: { xs: 1.5, md: 1.4 },
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                px: { xs: 1, md: 0 },
              }}
            >
              Décembre 2025 • Circonscription Électorale n°139
            </Typography>
            
            <Box sx={{ display: 'flex', gap: { xs: 1, md: 1.5 }, justifyContent: 'center', flexWrap: 'wrap', mb: { xs: 3, md: 4 }, px: { xs: 1, md: 0 } }}>
              {circonscriptions.map((circ, index) => {
                const colors = ['#7b2cbf', '#ffffff', '#2e7d32', '#7b2cbf']
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
                      fontSize: { xs: '0.8125rem', md: '1rem' },
                      padding: { xs: '6px 12px', md: '8px 20px' },
                      border: `2px solid ${bgColor === '#ffffff' ? alpha('#ffffff', 0.5) : bgColor}`,
                      borderRadius: 2,
                      height: { xs: 32, md: 40 },
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
                mt: { xs: 2, md: 3 },
                mb: { xs: 4, md: 6 },
                backgroundColor: '#ff6b35',
                color: '#ffffff',
                fontSize: { xs: '1.125rem', md: '1.375rem' },
                padding: { xs: '14px 36px', md: '16px 48px' },
                fontWeight: 700,
                borderRadius: 3,
                boxShadow: '0 6px 24px rgba(255, 107, 53, 0.4)',
                textTransform: 'none',
                letterSpacing: '0.02em',
                border: '2px solid transparent',
                '&:hover': {
                  backgroundColor: '#e55a2b',
                  boxShadow: '0 8px 32px rgba(255, 107, 53, 0.5)',
                  transform: 'translateY(-2px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Je m'engage à ses côtés
            </Button>
          </HeroContent>
        </HeroBox>

        {/* Section Engagement Communautaire avec Carrousel */}
        <Box sx={{ mb: { xs: 6, md: 10 }, mt: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            sx={{ 
              mb: { xs: 4, md: 6 },
              mt: { xs: 2, md: 3 },
              fontWeight: 800,
              color: 'primary.main',
              fontSize: { xs: '2rem', md: '3rem' },
              letterSpacing: '-0.02em',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: `linear-gradient(90deg, ${alpha('#7b2cbf', 0)}, #7b2cbf, ${alpha('#2e7d32', 0.5)}, ${alpha('#7b2cbf', 0)})`,
                borderRadius: 2,
              },
            }}
          >
            Moments d'Engagement
          </Typography>
          <Box sx={{ position: 'relative', mb: 4 }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                height: '600px',
                width: '100%',
              }}
            >
              <SwiperSlide style={{ height: '100%', width: '100%' }}>
                <ImageCard sx={{ height: '100%', width: '100%', position: 'relative', display: 'block' }}>
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
                      p: { xs: 3, md: 5 },
                      zIndex: 10,
                      color: 'white',
                      background: `linear-gradient(to top, ${alpha('#000000', 0.9)} 0%, ${alpha('#000000', 0.7)} 70%, transparent 100%)`,
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 800, 
                        mb: 1.5, 
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, 
                        lineHeight: { xs: 1.3, md: 1.2 },
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.6)',
                        letterSpacing: '-0.01em',
                        color: '#ffffff',
                      }}
                    >
                      Engagement Communautaire
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontSize: { xs: '1rem', md: '1.375rem' }, 
                        opacity: 1, 
                        lineHeight: { xs: 1.5, md: 1.4 },
                        textShadow: '0 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.5)',
                        fontWeight: 500,
                        color: '#ffffff',
                      }}
                    >
                      Tournoi de la Cohésion Sociale - Voueboufla
                    </Typography>
                  </Box>
                </ImageCard>
              </SwiperSlide>
              <SwiperSlide style={{ height: '100%', width: '100%' }}>
                <ImageCard sx={{ height: '100%', width: '100%', position: 'relative', display: 'block' }}>
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
                      p: { xs: 3, md: 5 },
                      zIndex: 10,
                      color: 'white',
                      background: `linear-gradient(to top, ${alpha('#000000', 0.9)} 0%, ${alpha('#000000', 0.7)} 70%, transparent 100%)`,
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 800, 
                        mb: 1.5, 
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, 
                        lineHeight: { xs: 1.3, md: 1.2 },
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.6)',
                        letterSpacing: '-0.01em',
                        color: '#ffffff',
                      }}
                    >
                      Trophée Dr YOUAN
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontSize: { xs: '1rem', md: '1.375rem' }, 
                        opacity: 1, 
                        lineHeight: { xs: 1.5, md: 1.4 },
                        textShadow: '0 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.5)',
                        fontWeight: 500,
                        color: '#ffffff',
                      }}
                    >
                      Tournoi de la Cohésion Sociale - 1ère Édition
                    </Typography>
                  </Box>
                </ImageCard>
              </SwiperSlide>
              <SwiperSlide style={{ height: '100%', width: '100%' }}>
                <ImageCard sx={{ height: '100%', width: '100%', position: 'relative', display: 'block' }}>
                  <SafeImage
                    src="/images/groupe-communautaire.jpg"
                    alt="Dr YOUAN avec la communauté"
                    fallbackText="Dr YOUAN avec la communauté"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 3, md: 5 },
                      zIndex: 10,
                      color: 'white',
                      background: `linear-gradient(to top, ${alpha('#000000', 0.9)} 0%, ${alpha('#000000', 0.7)} 70%, transparent 100%)`,
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 800, 
                        mb: 1.5, 
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, 
                        lineHeight: { xs: 1.3, md: 1.2 },
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.6)',
                        letterSpacing: '-0.01em',
                        color: '#ffffff',
                      }}
                    >
                      Ensemble pour le Changement
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontSize: { xs: '1rem', md: '1.375rem' }, 
                        opacity: 1, 
                        lineHeight: { xs: 1.5, md: 1.4 },
                        textShadow: '0 2px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.5)',
                        fontWeight: 500,
                        color: '#ffffff',
                      }}
                    >
                      Unissons nos forces pour un avenir meilleur
                    </Typography>
                  </Box>
                </ImageCard>
              </SwiperSlide>
            </Swiper>
            <IconButton
              className="swiper-button-prev-custom"
              sx={{
                position: 'absolute',
                left: { xs: 10, md: 20 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: alpha('#ffffff', 0.9),
                color: 'primary.main',
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
                '&:hover': {
                  backgroundColor: '#ffffff',
                  transform: 'translateY(-50%) scale(1.1)',
                },
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              className="swiper-button-next-custom"
              sx={{
                position: 'absolute',
                right: { xs: 10, md: 20 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: alpha('#ffffff', 0.9),
                color: 'primary.main',
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
                '&:hover': {
                  backgroundColor: '#ffffff',
                  transform: 'translateY(-50%) scale(1.1)',
                },
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Section Engagement Communautaire - Texte */}
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ mb: { xs: 6, md: 10 } }}>
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
                border: `2px solid ${alpha('#7b2cbf', 0.2)}`,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(123, 44, 191, 0.15)',
                  border: `2px solid ${alpha('#7b2cbf', 0.3)}`,
                },
              }}
            >
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700, 
                  color: 'primary.main', 
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '1.375rem', sm: '1.5rem', md: '2.25rem' },
                  letterSpacing: '-0.01em',
                  lineHeight: { xs: 1.4, md: 1.3 },
                }}
              >
                Pourquoi voter pour le Dr YOUAN ?
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' }, 
                  color: 'text.secondary', 
                  lineHeight: { xs: 1.6, md: 1.8 },
                  mb: { xs: 2, md: 3 },
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
        <Box sx={{ mb: { xs: 6, md: 10 }, px: { xs: 1, md: 0 } }}>
          <SectionTitle 
            variant="h3" 
            component="h2" 
            align="center" 
            sx={{ 
              mb: { xs: 4, md: 8 },
              color: 'primary.main',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.75rem' },
              lineHeight: { xs: 1.4, md: 1.3 },
              px: { xs: 2, md: 0 },
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
                      border: `2px solid ${alpha('#7b2cbf', 0.25)}`,
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
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.75rem' },
                      lineHeight: { xs: 1.4, md: 1.3 },
                    }}
                  >
                    Indépendance
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      lineHeight: { xs: 1.6, md: 1.75 }, 
                      fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' },
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
                      border: `2px solid ${alpha('#7b2cbf', 0.25)}`,
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
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.75rem' },
                      lineHeight: { xs: 1.4, md: 1.3 },
                    }}
                  >
                    Transparence
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      lineHeight: { xs: 1.6, md: 1.75 }, 
                      fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' },
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
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                    }}
                  >
                    Justice Sociale
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      lineHeight: 1.75, 
                      fontSize: { xs: '1.05rem', md: '1.125rem' },
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
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ mb: { xs: 6, md: 10 } }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                background: '#ffffff',
                border: `1px solid ${alpha('#7b2cbf', 0.15)}`,
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
                    background: 'linear-gradient(135deg, #7b2cbf, #2e7d32)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(123, 44, 191, 0.25)',
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
                      mb: { xs: 0.5, md: 1 },
                      fontSize: { xs: '1.25rem', sm: '1.375rem', md: '2rem' },
                      lineHeight: { xs: 1.4, md: 1.3 },
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
                  fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' }, 
                  lineHeight: { xs: 1.6, md: 1.8 }, 
                  color: 'text.secondary',
                  mb: { xs: 1.5, md: 2 },
                }}
              >
                Notre circonscription couvre quatre sous-préfectures : <strong style={{ color: '#7b2cbf', fontWeight: 600 }}>KANZRA</strong>,{' '}
                <strong style={{ color: '#7b2cbf', fontWeight: 600 }}>VOUÉBOUFLA</strong>, <strong style={{ color: '#2e7d32', fontWeight: 600 }}>ZANZRA</strong> et <strong style={{ color: '#2e7d32', fontWeight: 600 }}>ZUENOULA</strong>.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' }, 
                  lineHeight: { xs: 1.6, md: 1.8 }, 
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
                  p: { xs: 3, md: 4 },
                  zIndex: 2,
                  color: 'white',
                  background: `linear-gradient(to top, ${alpha('#000000', 0.85)} 0%, ${alpha('#000000', 0.6)} 70%, transparent 100%)`,
                  backdropFilter: 'blur(2px)',
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 800, 
                    mb: 1, 
                    fontSize: { xs: '1.125rem', sm: '1.375rem', md: '1.625rem' }, 
                    lineHeight: { xs: 1.3, md: 1.2 },
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Trophée Dr YOUAN
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: { xs: '0.9375rem', md: '1.125rem' }, 
                    opacity: 0.95, 
                    lineHeight: { xs: 1.5, md: 1.4 },
                    textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.4)',
                    fontWeight: 500,
                  }}
                >
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
            border: `1px solid ${alpha('#7b2cbf', 0.2)}`,
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
              mb: { xs: 1.5, md: 2 },
              fontSize: { xs: '1.375rem', sm: '1.5rem', md: '2.25rem' },
              letterSpacing: '-0.01em',
              lineHeight: { xs: 1.4, md: 1.3 },
            }}
          >
            Rejoignez le mouvement
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' }, 
              mb: { xs: 3, md: 4 }, 
              color: 'text.secondary', 
              width: '100%',
              mx: 'auto', 
              lineHeight: { xs: 1.6, md: 1.75 },
              px: { xs: 1, md: 0 },
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
              boxShadow: '0 4px 16px rgba(123, 44, 191, 0.25)',
              textTransform: 'none',
              letterSpacing: '0.02em',
              '&:hover': {
                backgroundColor: 'primary.dark',
                boxShadow: '0 6px 20px rgba(123, 44, 191, 0.35)',
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
