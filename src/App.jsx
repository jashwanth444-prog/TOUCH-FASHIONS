import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import CollectionPage from './pages/CollectionPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categorySlug" element={<CategoryPage />} />
          <Route path="/:categorySlug/:subcategorySlug" element={<CollectionPage />} />
          <Route
            path="/:categorySlug/:subcategorySlug/:productSlug"
            element={<ProductDetailsPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
