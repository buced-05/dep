import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Card,
  CardContent,
  Grid,
  Avatar,
  alpha,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import SafeImage from '../components/SafeImage'

const MessagePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  background: '#ffffff',
  border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  borderRadius: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const SectionBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}))

const ImageCard = styled(Card)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}))

const PillarCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s ease',
  background: '#ffffff',
  border: `2px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.2)}`,
    border: `2px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  },
}))

function Message() {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                width: 100,
                height: 4,
                background: `linear-gradient(90deg, ${alpha('#6a1b9a', 0)}, #6a1b9a, ${alpha('#6a1b9a', 0)})`,
                borderRadius: 2,
              },
            }}
          >
            Message du Candidat
          </Typography>
        </Box>

        {/* Image du candidat en haut */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <ImageCard sx={{ height: 400, position: 'relative' }}>
              <SafeImage
                src="/images/candidat-microphone.jpg"
                alt="Dr YOUAN s'adressant à la communauté"
                fallbackText="Dr YOUAN s'adressant à la communauté"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ImageCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#ffffff',
                border: `2px solid ${alpha('#6a1b9a', 0.15)}`,
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 3,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `4px solid ${alpha('#6a1b9a', 0.3)}`,
                  boxShadow: `0 8px 24px ${alpha('#6a1b9a', 0.3)}`,
                }}
              >
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
              </Box>
              <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
                Dr YOUAN Bi Tra Jean Claude
              </Typography>
              <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 3 }}>
                Candidat Indépendant
              </Typography>
              <Typography variant="body1" align="center" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Une voix libre pour défendre vos intérêts et construire ensemble l'avenir de notre circonscription.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <MessagePaper elevation={0}>
          <SectionBox>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
              Annonce de candidature aux élections législatives
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Chers parents, chers résidents de la circonscription électorale n°139,
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Mesdames et messieurs, chers amis,
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontWeight: 600, fontSize: '1.15rem', color: 'primary.main' }}>
              Je vous salue avec respect, gratitude et espoir.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              C'est avec une profonde humilité et un sens élevé du devoir que je m'adresse à vous 
              aujourd'hui pour annoncer <strong>Officiellement</strong> ma candidature aux élections 
              législatives de Décembre 2025, <strong>dans la circonscription de n° 139 : KANZRA, 
              VOUÉBOUFLA, ZANZRA et ZUENOULA sous-préfecture</strong>, en qualité de{' '}
              <strong>candidat indépendant</strong>.
            </Typography>
          </SectionBox>

          <Divider sx={{ my: 5, borderWidth: 2, borderColor: alpha('#6a1b9a', 0.2) }} />

          <SectionBox>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
              Pourquoi je me présente ?
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Ma candidature est d'abord un acte de foi en notre avenir collectif.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Je me présente, non pas pour moi-même, mais pour vous — pour nos familles, nos jeunes, 
              nos paysans, nos commerçants, nos enseignants, nos travailleurs, nos femmes battantes 
              et nos anciens.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Je me présente parce que je crois que notre circonscription mérite une voix libre, 
              une voix qui ne se plie ni aux intérêts de l'exécutif ni aux calculs politiques, 
              mais qui parle au nom du peuple, avec sincérité et courage.
            </Typography>
          </SectionBox>

          <Divider sx={{ my: 5, borderWidth: 2, borderColor: alpha('#6a1b9a', 0.2) }} />

          <SectionBox>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
              Mon engagement
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Je suis candidat indépendant, parce que je veux être indépendant de toute influence, 
              mais dépendant de vous.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Je veux être votre porte-parole authentique à l'Assemblée nationale, un député à 
              votre écoute, présent sur le terrain, proche des réalités et des défis quotidiens.
            </Typography>
            <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 3, fontWeight: 700, color: 'primary.main' }}>
              Mon engagement repose sur trois piliers :
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} md={4}>
                <PillarCard elevation={0}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>1</Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      La transparence
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                      Restaurer la confiance entre les citoyens et leur élu.
                    </Typography>
                  </CardContent>
                </PillarCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <PillarCard elevation={0}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>2</Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      La justice sociale et le développement local
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                      Défendre une répartition équitable des ressources et soutenir nos initiatives locales.
                    </Typography>
                  </CardContent>
                </PillarCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <PillarCard elevation={0}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>3</Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      L'avenir de notre jeunesse
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                      Promouvoir l'éducation, l'emploi, la formation professionnelle et l'innovation 
                      dans nos communautés.
                    </Typography>
                  </CardContent>
                </PillarCard>
              </Grid>
            </Grid>
          </SectionBox>

          <Divider sx={{ my: 5, borderWidth: 2, borderColor: alpha('#6a1b9a', 0.2) }} />

          <SectionBox>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
              Ma Vision
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Je rêve d'une circonscription dynamique, unie et prospère, où chacun a sa place, 
              où la parole du citoyen compte, où la politique redevient un service et non un privilège.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Je rêve d'un mandat parlementaire qui restaure la dignité, qui redonne espoir, 
              qui construit et qui rassemble au lieu de diviser.
            </Typography>
          </SectionBox>

          <Divider sx={{ my: 5, borderWidth: 2, borderColor: alpha('#6a1b9a', 0.2) }} />

          <SectionBox>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
              Appel au peuple
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Chères sœurs, chers frères, chers amis jeunes,
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Le changement que nous attendons ne viendra pas d'ailleurs.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Il commence ici, avec nous, avec notre prise de conscience, avec notre engagement, 
              notre courage, notre vote.
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                my: 3,
                background: '#ffffff',
                borderLeft: `4px solid ${alpha('#6a1b9a', 0.5)}`,
                borderRadius: 2,
              }}
            >
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 500 }}>
                Je vous exhorte à donner dos à ceux qui ont décidé de nous chosifier, qui ont piétiné 
                notre confiance, qui ont estimé avoir acheté notre parole, qui se sont moqués de nous 
                depuis le confort de leurs salons feutrés, qui ont pour projet d'étouffer une fois de 
                plus encore notre voix.
              </Typography>
            </Paper>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Je vous invite à marcher avec moi sur le chemin du renouveau.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                fontWeight: 700, 
                fontSize: '1.25rem',
                color: 'primary.main',
                textAlign: 'center',
                mt: 4,
                p: 3,
                background: '#ffffff',
                borderRadius: 2,
              }}
            >
              Ensemble, faisons entendre la voix du peuple libre, la voix d'une circonscription 
              debout et confiante dans son destin.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 500, textAlign: 'center', mt: 3 }}>
              Je compte sur chacune et chacun de vous pour porter haut cette flamme d'espoir.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
              Je vous remercie.
            </Typography>
          </SectionBox>

          <Divider sx={{ my: 5, borderWidth: 2, borderColor: alpha('#6a1b9a', 0.2) }} />

          <Box 
            sx={{ 
              textAlign: 'center', 
              mt: 6,
              p: 4,
              background: '#ffffff',
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" component="p" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
              Dr YOUAN Bi Tra Jean Claude
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
              Candidat indépendant aux élections législatives de Décembre 2025
            </Typography>
          </Box>
        </MessagePaper>
      </Container>
    </Box>
  )
}

export default Message
