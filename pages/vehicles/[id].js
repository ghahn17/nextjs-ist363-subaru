import Image from 'next/image';
import Action from '../../components/Action';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getVehicleBySlug, getAllVehicleSlugs } from '../../lib/api';
import { getDrivingLocations } from '../../lib/locations';
import Showcase from '../../components/Showcase'
import ColorPicker from '../../components/ColorPicker';
import TrimPicker from '../../components/TrimPicker';

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
    const drivingLocations = getDrivingLocations();

    return {
        props : {
            vehicleData,
            drivingLocations
        }
    }
}
// 3. page component 

const SingleVehiclePage = ({ vehicleData, drivingLocations }) => {
    const { title, slug, featuredImage,vehicleInformation } = vehicleData;
    const { headline } = vehicleInformation.showcase;
    const { trimLevels, vehicleColors } = vehicleInformation;
    return <Layout>
        <Showcase
            subtitle={title}
            title={headline}
            featuredImage={featuredImage}
        />
        <div id="main-content">
            <Container>
        <TrimPicker 
            trims={trimLevels}
            locations={drivingLocations}
          /> 
          <ColorPicker
          colors={vehicleColors}
          />
      </Container>
        </div>
        <Action />
    </Layout>
}
export default SingleVehiclePage;