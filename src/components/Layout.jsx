import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import Footer from './Footer'
import { incrementAdminClicks } from '../utils/security'

const menuItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Message du Candidat', path: '/message' },
  { label: 'Mon Engagement', path: '/engagement' },
  { label: 'Je m\'engage', path: '/inscription' },
]

function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    // Récupérer le compteur depuis localStorage au chargement
    const stored = parseInt(localStorage.getItem('admin_clicks') || '0', 10)
    setClickCount(stored)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavigation = (path) => {
    navigate(path)
    if (isMobile) {
      setMobileOpen(false)
    }
  }

  const handleTitleClick = (e) => {
    // Empêcher l'inspection du gestionnaire d'événements
    e.stopPropagation()
    
    // Vérification anti-bot : délai minimum entre les clics
    const lastClick = parseInt(sessionStorage.getItem('_last_admin_click') || '0', 10)
    const now = Date.now()
    if (now - lastClick < 200) { // Minimum 200ms entre les clics
      return // Ignorer les clics trop rapides (probablement automatisés)
    }
    sessionStorage.setItem('_last_admin_click', now.toString())
    
    const newCount = incrementAdminClicks()
    setClickCount(newCount)
    
    // Déclencher un événement personnalisé pour notifier les autres composants
    window.dispatchEvent(new CustomEvent('adminClick', { detail: { count: newCount } }))
    
    // Feedback visuel discret (pas de console.log pour éviter l'inspection)
    if (newCount >= 3) {
      // Notification visuelle discrète
      const notification = document.createElement('div')
      notification.textContent = '✓ Accès activé'
      notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #2e7d32;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        font-size: 14px;
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
      `
      document.body.appendChild(notification)
      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out'
        setTimeout(() => notification.remove(), 300)
      }, 2000)
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        Menu
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="sticky" 
        sx={{ 
          background: 'white',
          borderBottom: `3px solid ${alpha('#7b2cbf', 0.3)}`,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box
            onClick={handleTitleClick}
            onTouchStart={(e) => {
              // Support pour les événements tactiles sur mobile
              e.stopPropagation()
              handleTitleClick(e)
            }}
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
              minHeight: { xs: '44px', md: 'auto' }, // Zone de clic minimale pour mobile
              display: 'flex',
              alignItems: 'center',
              px: { xs: 1, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                color: '#7b2cbf',
                transition: 'opacity 0.2s ease',
                pointerEvents: 'none', // Empêcher les événements sur le texte lui-même
              }}
            >
              Dr YOUAN Bi Tra Jean Claude
            </Typography>
          </Box>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    fontWeight: location.pathname === item.path ? 700 : 500,
                    fontSize: '1.05rem',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    color: location.pathname === item.path ? '#7b2cbf' : 'text.primary',
                    backgroundColor: location.pathname === item.path 
                      ? alpha('#7b2cbf', 0.1) 
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: alpha('#7b2cbf', 0.1),
                      color: '#7b2cbf',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Container 
        component="main" 
        sx={{ 
          flex: 1, 
          py: { xs: 2, md: 4 }, 
          px: { xs: 2, sm: 3, md: 4 },
          backgroundColor: '#ffffff',
          width: '100%',
          maxWidth: '100%',
          minHeight: '100vh',
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout

