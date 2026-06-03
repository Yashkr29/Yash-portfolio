export const links = {
  github: 'https://github.com/Yashkr29',
  linkedin: 'https://www.linkedin.com/in/yash-kumar-0813ab307',
  email: 'yashkr7970@gmail.com',
  resume: '/resume.pdf',
}

export const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const openExternalLink = (url) => {
  if (!url || url === '#') {
    handlePlaceholderLink()
    return
  }

  window.open(url, '_blank', 'noopener,noreferrer')
}

export const handlePlaceholderLink = () => {
  alert('Link will be added soon.')
}

export const handleProjectLink = (url) => {
  openExternalLink(url)
}

export const openEmail = () => {
  window.location.href = `mailto:${links.email}`
}
