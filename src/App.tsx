import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { ServicesPage } from '@/pages/Services'
import { ProjectsPage } from '@/pages/Projects'
import { ProjectDetailPage } from '@/pages/ProjectDetail'
import { ContactPage } from '@/pages/Contact'
import { StartProjectPage } from '@/pages/StartProject'
import { NotFoundPage } from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="start-a-project" element={<StartProjectPage />} />
          <Route path="quote" element={<Navigate to="/start-a-project" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
