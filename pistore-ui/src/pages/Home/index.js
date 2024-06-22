import { RecentlyAdded } from '@/components/data';
import { Carousel } from '@/components/data';
import { FreeGame } from 'components/data';
import Top from '@/components/Top';

function Home() {
    return (
        <div>
            <Carousel />
            <RecentlyAdded />
            <FreeGame />
            <Top />
        </div>
    );
}

export default Home;
