import { useState } from 'react'
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavigation = (path) => {
    navigate(path)
    if (isMobile) {
      setMobileOpen(false)
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
          borderBottom: `3px solid ${alpha('#ff6b35', 0.3)}`,
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
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              fontWeight: 800,
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#ff6b35',
            }}
          >
            Dr YOUAN Bi Tra Jean Claude
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    fontWeight: location.pathname === item.path ? 700 : 500,
                    fontSize: '0.95rem',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    color: location.pathname === item.path ? '#ff6b35' : 'text.primary',
                    backgroundColor: location.pathname === item.path 
                      ? alpha('#ff6b35', 0.1) 
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: alpha('#ff6b35', 0.1),
                      color: '#ff6b35',
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
      <Container component="main" sx={{ flex: 1, py: 4, backgroundColor: '#ffffff' }}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout

