import { Footer } from './components/organisms/Footer'
import { Header } from './components/organisms/Header'
import { Layout } from './components/templates/Layout'
import { RouteComponents } from './RouteComponents'

export const App = () => {
  return (
    <Layout>
      <Header />
      <RouteComponents />
      <Footer />
    </Layout>
  );
}
