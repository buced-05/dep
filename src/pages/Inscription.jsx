import { useState, useEffect } from 'react'
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
import { checkAdminAccess, sanitizeInput, validateInscriptionData, checkRateLimit } from '../utils/security'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  background: '#ffffff',
  border: `1px solid ${alpha('#ff6b35', 0.15)}`,
  borderRadius: theme.spacing(2),
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
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
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  
  useEffect(() => {
    // Vérifier l'accès admin au chargement
    setShowAdminPanel(checkAdminAccess())
    
    // Écouter les changements dans localStorage
    const handleStorageChange = () => {
      setShowAdminPanel(checkAdminAccess())
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    // Vérifier périodiquement (pour les changements dans le même onglet)
    const interval = setInterval(() => {
      setShowAdminPanel(checkAdminAccess())
    }, 1000)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])
  
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
      // Vérification du rate limiting
      if (!checkRateLimit('inscription', 5, 60000)) {
        setError('Trop de tentatives. Veuillez patienter avant de réessayer.')
        setLoading(false)
        return
      }

      // Sanitization des données
      const sanitizedData = {
        nom: sanitizeInput(data.nom),
        prenom: sanitizeInput(data.prenom),
        telephone: sanitizeInput(data.telephone),
        email: sanitizeInput(data.email),
        pays: sanitizeInput(data.pays),
        ville: sanitizeInput(data.ville),
        localite: sanitizeInput(data.localite),
        profession: sanitizeInput(data.profession || ''),
        typeEngagement: sanitizeInput(data.typeEngagement),
        recevoirActualites: data.recevoirActualites,
        accepterContact: data.accepterContact,
      }

      // Validation de sécurité
      const validation = validateInscriptionData(sanitizedData)
      if (!validation.isValid) {
        setError(validation.errors[0] || 'Données invalides')
        setLoading(false)
        return
      }

      const success = saveInscription(sanitizedData)
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
                background: `linear-gradient(90deg, ${alpha('#ff6b35', 0)}, #ff6b35, ${alpha('#2e7d32', 0.5)}, ${alpha('#ff6b35', 0)})`,
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
                  background: `linear-gradient(135deg, ${alpha('#ff6b35', 0.05)} 0%, ${alpha('#2e7d32', 0.05)} 100%)`,
                  border: `1px solid ${alpha('#ff6b35', 0.15)}`,
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  <strong style={{ color: '#ff6b35' }}>Consentement RGPD :</strong> Les données collectées sont utilisées 
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
                  borderRadius: 2,
                  boxShadow: '0 4px 16px rgba(255, 107, 53, 0.3)',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
                    transform: 'translateY(-1px)',
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

      {showAdminPanel && stats.total > 0 && (
        <Card 
          elevation={0}
          sx={{ 
            mt: 6,
            background: `linear-gradient(135deg, ${alpha('#ff6b35', 0.08)} 0%, ${alpha('#2e7d32', 0.08)} 100%)`,
            border: `2px solid ${alpha('#ff6b35', 0.2)}`,
            borderRadius: 3,
            animation: 'fadeIn 0.5s ease-in',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(10px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
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
                    backgroundColor: alpha('#ff6b35', 0.1),
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

