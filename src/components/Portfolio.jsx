import { Box, Container, Avatar, Typography, Divider, IconButton, Button, Grid, Card, CardContent, Chip, Switch, FormControlLabel } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import { LinkedIn, GitHub, Email, Cloud, Code, Security, Build, Lightbulb, DarkMode } from '@mui/icons-material'
import { useState } from 'react'
import profilePic from '../assets/picture.jpeg'

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true)


  const devOpsPractices = [
    {
      practice: 'Cloud Platforms',
      icon: '☁️',
      skills: ['AWS (EC2, S3, Lambda, VPC, IAM, Bedrock)', 'Azure (VMs, Functions, Entra ID)', 'Multi-Cloud Architecture']
    },
    {
      practice: 'Infrastructure as Code',
      icon: '🏗️',
      skills: ['Terraform', 'CloudFormation', 'Serverless Framework', 'Backstage Templates']
    },
    {
      practice: 'CI/CD & Automation',
      icon: '🔄',
      skills: ['GitHub Actions', 'Azure DevOps', 'Pipeline Optimization', 'Deployment Automation']
    },
    {
      practice: 'Monitoring & Observability',
      icon: '📊',
      skills: ['Datadog', 'CloudWatch', 'Splunk', 'Grafana', 'PagerDuty', 'MTTR Reduction']
    },
    {
      practice: 'Security & Compliance',
      icon: '🔒',
      skills: ['CSPM Tools (Wiz, CrowdStrike)', 'IAM Management', 'Security Automation', 'Compliance Auditing']
    },
    {
      practice: 'Scripting & Development',
      icon: '💻',
      skills: ['Python', 'Bash', 'PowerShell', 'API Development', 'Lambda Functions']
    },
    {
      practice: 'Containerization',
      icon: '📦',
      skills: ['Docker', 'Container Orchestration', 'Microservices Architecture']
    },
    {
      practice: 'AI & Innovation',
      icon: '🤖',
      skills: ['AWS Bedrock', 'AI-Powered Automation', 'Contact Center Analytics', 'GenAI Integration']
    }
  ]

  const projects = [
    {
      title: 'AI Powered Contact Center Insights',
      description: 'Designed AI-powered application with CloudFront, Lambda, and Bedrock for contact center analytics',
      tech: ['AWS', 'Bedrock', 'Lambda', 'CloudFront']
    },
    {
      title: 'VMWare Horizon Auto-Scaling',
      description: 'Developed Lambda Python application to automatically scale VMWare Horizon workloads, saving $50K/year',
      tech: ['Python', 'Lambda', 'VMWare', 'Automation']
    },
    {
      title: 'Multi-Account Patching Solution',
      description: 'Built automated patching solution using AWS SSM, reducing manual intervention by 80%',
      tech: ['AWS SSM', 'Automation', 'Multi-Account']
    },
    {
      title: 'Phoenix Secrets Manager',
      description: 'AWS-hosted secret management API automating password rotation and securing application secrets',
      tech: ['AWS', 'Lambda', 'DynamoDB', 'Security']
    },
    {
      title: 'Modernizing IaC',
      description: 'Simplified cloud resource provisioning using backstage templates backed with terraform templating and modules',
      tech: ['Backstage', 'Terraform', 'IaC', 'Templates']
    }
  ]

  const experience = [
    { year: '2023-Present', role: 'Cloud DevOps Engineer', company: 'Cognizant Technology Solutions, Halifax' },
    { year: '2017-2022', role: 'Cloud Engineer', company: 'Cognizant Technology Solutions, Chennai' }
  ]

  const certifications = ['AWS Certified Solutions Architect - Associate']

  const workAuthorization = [
    { country: 'Canada', status: 'Permanent Resident', flag: '🇨🇦' },
    { country: 'USA', status: 'H1B Visa Holder', flag: '🇺🇸' },
    { country: 'India', status: 'Citizen', flag: '🇮🇳' }
  ]



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
            DevOps Engineer | Cloud Architect | AIOps Engineer | Tech Blogger
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', mb: 4, maxWidth: 800, mx: 'auto', px: { xs: 2, md: 0 } }}>
            AI-Driven, Security-focused DevOps Engineer with 8 years experience in AWS/Azure cloud platforms, Modernizing Infrastructure as Code, 
            CI/CD automation, and AI-powered solutions. Proven track record of cost optimization and scalable architecture design.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton href="https://www.linkedin.com/in/sarathkumar-mohan/" target="_blank" sx={{ bgcolor: '#f47606', color: 'white', '&:hover': { bgcolor: '#f2a518' } }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="https://github.com/sarathmohan95" target="_blank" sx={{ bgcolor: '#f47606', color: 'white', '&:hover': { bgcolor: '#f2a518' } }}>
              <GitHub />
            </IconButton>
            <IconButton href="https://medium.com/@sarathmohan.work" target="_blank" sx={{ bgcolor: '#f47606', color: 'white', '&:hover': { bgcolor: '#f2a518' } }}>
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
          DevOps Expertise
        </Typography>
        <Grid container spacing={3} sx={{ mb: { xs: 4, md: 8 } }}>
          {devOpsPractices.map((practice, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  bgcolor: darkMode ? '#4a4a4a' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 25px rgba(99, 210, 235, 0.3)',
                    bgcolor: darkMode ? '#5a5a5a' : '#f8f9fa'
                  }
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ mb: 2, fontSize: '2rem' }}>
                    {practice.icon}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 2, 
                      color: darkMode ? 'white' : 'black',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 'bold'
                    }}
                  >
                    {practice.practice}
                  </Typography>
                  <Box sx={{ 
                    opacity: 0,
                    maxHeight: 0,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '.MuiCard-root:hover &': {
                      opacity: 1,
                      maxHeight: '200px'
                    }
                  }}>
                    {practice.skills.map((skill, skillIndex) => (
                      <Chip 
                        key={skillIndex}
                        label={skill}
                        size="small"
                        sx={{ 
                          m: 0.3,
                          bgcolor: '#63d2eb',
                          color: 'white',
                          fontSize: '0.7rem',
                          '&:hover': { bgcolor: '#f47606' }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Projects */}
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: darkMode ? 'white' : 'black', fontSize: { xs: '1.8rem', md: '2.125rem' } }}>
          Key Projects
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: { xs: 4, md: 8 } }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
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

        {/* Work Authorization */}
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: darkMode ? 'white' : 'black', fontSize: { xs: '1.8rem', md: '2.125rem' } }}>
          Work Authorization
        </Typography>
        <Grid container spacing={3} sx={{ mb: { xs: 4, md: 8 }, justifyContent: 'center' }}>
          {workAuthorization.map((auth, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Card sx={{ bgcolor: darkMode ? '#4a4a4a' : 'white', textAlign: 'center' }}>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography variant="h2" sx={{ mb: 0.5, fontSize: '1.5rem' }}>
                    {auth.flag}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.25, color: darkMode ? 'white' : 'black', fontWeight: 'bold', fontSize: '0.85rem' }}>
                    {auth.country}
                  </Typography>
                  <Typography variant="caption" sx={{ color: darkMode ? '#ccc' : '#666', fontSize: '0.7rem' }}>
                    {auth.status}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>


      </Container>
    </Box>
  )
}

export default Portfolio