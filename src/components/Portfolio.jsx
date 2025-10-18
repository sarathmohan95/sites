import { Box, Container, Avatar, Typography, Divider, IconButton, Button, Grid, Card, CardContent, Chip, Switch, FormControlLabel } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import { LinkedIn, GitHub, Email, Cloud, Code, Security, Build, Lightbulb, DarkMode } from '@mui/icons-material'
import { useState } from 'react'
import profilePic from '../assets/picture.jpeg'

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true)


  const skills = [
    'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI/CD',
    'Python', 'Bash', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack'
  ]

  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated AWS infrastructure deployment using Terraform and CI/CD pipelines',
      tech: ['AWS', 'Terraform', 'Jenkins']
    },
    {
      title: 'Kubernetes Cluster Management',
      description: 'Designed and managed production Kubernetes clusters with monitoring',
      tech: ['Kubernetes', 'Docker', 'Prometheus']
    },
    {
      title: 'CI/CD Pipeline Optimization',
      description: 'Reduced deployment time by 60% through pipeline optimization',
      tech: ['GitLab CI', 'Docker', 'Python']
    }
  ]

  const experience = [
    { year: '2023-Present', role: 'Senior DevOps Engineer', company: 'Tech Corp' },
    { year: '2021-2023', role: 'DevOps Engineer', company: 'StartupXYZ' },
    { year: '2019-2021', role: 'System Administrator', company: 'Enterprise Ltd' }
  ]

  const certifications = ['AWS Solutions Architect', 'Kubernetes Administrator', 'Terraform Associate']



  return (
    <Box sx={{ bgcolor: darkMode ? '#3d3d3d' : '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ background: 'linear-gradient(45deg, #63d2eb 0%, #3e67a3 100%)', py: { xs: 4, md: 8 }, px: 2 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />}
            label={<DarkMode />}
            sx={{ position: 'absolute', top: { xs: 10, md: 20 }, right: { xs: 10, md: 20 }, color: 'white' }}
          />
          <Avatar src={profilePic} sx={{ width: { xs: 120, md: 160 }, height: { xs: 120, md: 160 }, mx: 'auto', mb: 3 }} />
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
            SarathKumar Mohan
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            DevOps Engineer
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', mb: 4, maxWidth: 600, mx: 'auto', px: { xs: 2, md: 0 } }}>
            Automating infrastructure, optimizing CI/CD pipelines, and enhancing system reliability
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton href="https://www.linkedin.com/in/sarathkumar-mohan/" target="_blank" sx={{ bgcolor: '#f47606', color: 'white', '&:hover': { bgcolor: '#f2a518' } }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="https://github.com/sarathmohan95" target="_blank" sx={{ bgcolor: '#f47606', color: 'white', '&:hover': { bgcolor: '#f2a518' } }}>
              <GitHub />
            </IconButton>
            <IconButton href="https://medium.com/@sarathmohan" target="_blank" sx={{ bgcolor: '#f47606', color: 'white', '&:hover': { bgcolor: '#f2a518' } }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </IconButton>
            <IconButton href="mailto:iamsarath21@gmail.com" sx={{ bgcolor: '#f47606', color: 'white', '&:hover': { bgcolor: '#f2a518' } }}>
              <Email />
            </IconButton>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, md: 3 } }}>
        {/* Skills */}
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: darkMode ? 'white' : 'black', fontSize: { xs: '1.8rem', md: '2.125rem' } }}>
          Skills & Technologies
        </Typography>
        <Grid container spacing={1} sx={{ mb: { xs: 4, md: 8 }, justifyContent: 'center' }}>
          {skills.map((skill) => (
            <Grid item key={skill}>
              <Chip label={skill} sx={{ bgcolor: '#63d2eb', color: 'white', m: 0.5, fontSize: { xs: '0.75rem', md: '0.875rem' } }} />
            </Grid>
          ))}
        </Grid>

        {/* Projects */}
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: darkMode ? 'white' : 'black', fontSize: { xs: '1.8rem', md: '2.125rem' } }}>
          Featured Projects
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: { xs: 4, md: 8 } }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', bgcolor: darkMode ? '#4a4a4a' : 'white' }}>
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <Typography variant="h6" sx={{ mb: 2, color: darkMode ? 'white' : 'black', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: darkMode ? '#ccc' : '#666', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.tech.map((tech) => (
                      <Chip key={tech} label={tech} size="small" sx={{ bgcolor: '#f47606', color: 'white', fontSize: { xs: '0.7rem', md: '0.75rem' } }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Experience */}
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: darkMode ? 'white' : 'black', fontSize: { xs: '1.8rem', md: '2.125rem' } }}>
          Experience
        </Typography>
        <Timeline sx={{ mb: { xs: 4, md: 8 }, px: { xs: 0, md: 2 } }}>
          {experience.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: '#63d2eb' }} />
                {index < experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ px: { xs: 1, md: 2 } }}>
                <Typography variant="h6" sx={{ color: darkMode ? 'white' : 'black', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  {exp.role}
                </Typography>
                <Typography variant="body2" sx={{ color: darkMode ? '#ccc' : '#666', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                  {exp.company} • {exp.year}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Certifications */}
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: darkMode ? 'white' : 'black', fontSize: { xs: '1.8rem', md: '2.125rem' } }}>
          Certifications
        </Typography>
        <Grid container spacing={2} sx={{ mb: { xs: 4, md: 8 }, justifyContent: 'center' }}>
          {certifications.map((cert) => (
            <Grid item key={cert}>
              <Chip label={cert} variant="outlined" sx={{ color: darkMode ? 'white' : 'black', borderColor: '#63d2eb', fontSize: { xs: '0.75rem', md: '0.875rem' } }} />
            </Grid>
          ))}
        </Grid>


      </Container>
    </Box>
  )
}

export default Portfolio