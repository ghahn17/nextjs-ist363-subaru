import Image from 'next/Image';
import Layout from '../../components/Layout';
import { getVehicleBySlug, getAllVehicleSlugs } from '../../lib/api';

// WATERFALL 
//1. getStaticPaths
 
export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
    const paths = vehicles.map((vehicle)=> {
        const { slug } = vehicle.node;
        return {
            params: {
                id: slug
            }
        }

});
return {
    paths,
    fallback:false 
}
}
//2. get static props 
export async function getStaticProps({ params }) {
    const vehicleData = await getVehicleBySlug(params.id);

    return {
        props : {
            vehicleData
        }
    }
}
// 3. page component 

const SingleVehiclePage = ({ vehicleData }) => {
    const { title, slug, featuredImage,vehicleInformation } = vehicleData;
    const { headline } = vehicleInformation.showcase;
    return <Layout>
        <h1>{title}</h1>
        <h3>{headline}</h3>
        {featuredImage && 
        <Image
            src= {featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            width= {featuredImage.node.mediaDetails.width}
            height = {featuredImage.node.mediaDetails.height}
        />
        }
    </Layout>
}
export default SingleVehiclePage;