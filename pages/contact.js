import Container from '../components/Container';
import Layout from '../components/Layout';
import Heading from '../components/heading';
import Paragraph from '../components/Paragraph'

const ContactPage = () => {
  return <Layout>
    <Container>
    <Heading level={1} textAlign="center">Contact Us</Heading>
    <Paragraph>Looking to buy a Subaru car or SUV? Customize your perfect Subaru vehicle with our tools. Choose models, trims, options, and colors. Build yours today!</Paragraph>
    </Container>
</Layout>
}
export default ContactPage;