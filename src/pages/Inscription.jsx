import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Alert,
  CircularProgress,
  Card,
  CardContent,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { saveInscription, exportToCSV, getStats } from '../utils/dataStorage'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`,
  border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  borderRadius: theme.spacing(3),
  boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.1)}`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const typesEngagement = [
  'Bénévole',
  'Soutien moral',
  'Relais local',
  'Volontaire',
  'Sympathisant',
]

const paysOptions = [
  'Côte d\'Ivoire',
  'France',
  'Belgique',
  'Canada',
  'États-Unis',
  'Autre',
]

function Inscription() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      pays: '',
      typeEngagement: '',
      recevoirActualites: false,
      accepterContact: false,
    },
  })

  const onSubmit = async (data) => {
    setLoading(true)
    setError(null)

    try {
      const success = saveInscription(data)
      if (success) {
        setSubmitted(true)
        reset()
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        setError('Une erreur est survenue lors de l\'enregistrement. Veuillez réessayer.')
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleExportCSV = () => {
    try {
      exportToCSV()
    } catch (err) {
      setError('Erreur lors de l\'export CSV')
      console.error(err)
    }
  }

  const stats = getStats()

  if (submitted) {
    return (
      <Container maxWidth="md">
        <StyledPaper elevation={3}>
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, color: 'success.main' }}>
              Merci pour votre engagement !
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt: 2, fontSize: '1.1rem' }}>
              Votre inscription a été enregistrée avec succès.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Vous recevrez prochainement des informations sur les prochaines étapes de la campagne.
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    )
  }

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
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
            Je m'engage à ses côtés
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
            Rejoignez le mouvement pour le changement
          </Typography>
        </Box>

      <StyledPaper elevation={0}>
        <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.15rem', textAlign: 'center', color: 'text.secondary', lineHeight: 1.8 }}>
          Votre engagement compte pour faire entendre la voix du peuple libre. 
          Inscrivez-vous pour manifester votre soutien, votre volontariat et votre bénévolat.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nom *"
                {...register('nom', {
                  required: 'Le nom est requis',
                  minLength: {
                    value: 2,
                    message: 'Le nom doit contenir au moins 2 caractères',
                  },
                })}
                error={!!errors.nom}
                helperText={errors.nom?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Prénom *"
                {...register('prenom', {
                  required: 'Le prénom est requis',
                  minLength: {
                    value: 2,
                    message: 'Le prénom doit contenir au moins 2 caractères',
                  },
                })}
                error={!!errors.prenom}
                helperText={errors.prenom?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Téléphone (WhatsApp) *"
                {...register('telephone', {
                  required: 'Le numéro de téléphone est requis',
                  pattern: {
                    value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                    message: 'Format de téléphone invalide',
                  },
                })}
                error={!!errors.telephone}
                helperText={errors.telephone?.message || 'Format: +225 XX XX XX XX XX'}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email *"
                type="email"
                {...register('email', {
                  required: 'L\'email est requis',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Format d\'email invalide',
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.pays}>
                <InputLabel>Pays de résidence *</InputLabel>
                <Controller
                  name="pays"
                  control={control}
                  rules={{ required: 'Le pays est requis' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Pays de résidence *"
                    >
                      {paysOptions.map((pays) => (
                        <MenuItem key={pays} value={pays}>
                          {pays}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.pays && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.75 }}>
                  {errors.pays.message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Ville *"
                {...register('ville', {
                  required: 'La ville est requise',
                })}
                error={!!errors.ville}
                helperText={errors.ville?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Localité ou quartier *"
                {...register('localite', {
                  required: 'La localité est requise',
                })}
                error={!!errors.localite}
                helperText={errors.localite?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Profession"
                {...register('profession')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.typeEngagement}>
                <InputLabel>Type d'engagement *</InputLabel>
                <Controller
                  name="typeEngagement"
                  control={control}
                  rules={{ required: 'Le type d\'engagement est requis' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Type d'engagement *"
                    >
                      {typesEngagement.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.typeEngagement && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.75 }}>
                  {errors.typeEngagement.message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    name="recevoirActualites"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Checkbox checked={value} onChange={onChange} />
                    )}
                  />
                }
                label="Je souhaite recevoir les actualités de la campagne"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    name="accepterContact"
                    control={control}
                    rules={{ required: 'Vous devez accepter d\'être contacté' }}
                    render={({ field: { value, onChange } }) => (
                      <Checkbox checked={value} onChange={onChange} />
                    )}
                  />
                }
                label="J'accepte d'être contacté par l'équipe de campagne *"
              />
              {errors.accepterContact && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.75 }}>
                  {errors.accepterContact.message}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${alpha('#6a1b9a', 0.08)} 0%, ${alpha('#1976d2', 0.08)} 100%)`,
                  border: `2px solid ${alpha('#6a1b9a', 0.15)}`,
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong style={{ color: '#6a1b9a' }}>Consentement RGPD :</strong> Les données collectées sont utilisées 
                  uniquement dans le cadre de la campagne électorale pour vous contacter et 
                  vous informer des actualités. Vous pouvez à tout moment demander la suppression 
                  de vos données en nous contactant.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={loading}
                sx={{
                  backgroundColor: 'primary.main',
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(106, 27, 154, 0.4)',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    boxShadow: '0 12px 32px rgba(106, 27, 154, 0.5)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "S'inscrire maintenant"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </StyledPaper>

      {stats.total > 0 && (
        <Card 
          elevation={0}
          sx={{ 
            mt: 6,
            background: `linear-gradient(135deg, ${alpha('#6a1b9a', 0.08)} 0%, ${alpha('#1976d2', 0.08)} 100%)`,
            border: `2px solid ${alpha('#6a1b9a', 0.15)}`,
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                Total d'inscriptions : {stats.total}
              </Typography>
              <Button
                variant="outlined"
                onClick={handleExportCSV}
                sx={{ 
                  borderColor: 'primary.main', 
                  color: 'primary.main',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: alpha('#6a1b9a', 0.1),
                  },
                }}
              >
                Exporter en CSV
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
      </Container>
    </Box>
  )
}

export default Inscription

