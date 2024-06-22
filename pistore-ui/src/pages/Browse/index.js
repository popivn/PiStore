import { GameList } from '@/components/data';
import { GenresList } from '@/components/data';
function BrowsePage() {
    return (
        <div>
            <GenresList />
            <GameList />
        </div>
    );
}
export default BrowsePage;
