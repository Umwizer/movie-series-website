import { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../ui/card';
import { SectionHeader } from '../ui/SectionHeader';
import { FilterBar } from '../ui/FilterBar';
import poster1 from "../../assets/images/posters/image 202.png";
import poster2 from "../../assets/images/posters/image 77.png";
import poster3 from "../../assets/images/posters/image 78.png";
import poster4 from "../../assets/images/posters/image 91.png";
import missionPoster from "../../assets/images/posters/mission_poster.png";

const categories = ["All", "Action", "Sci-Fi", "Fantasy", "Thriller", "Horror", "Anime"];

const collectionItems = [
    { id: 1, title: "The Witcher Saga", category: "Fantasy Collection", rating: 4.8, image: poster1, itemCount: "5 Titles" },
    { id: 2, title: "Mission Impossible Vault", category: "Action / Thriller", rating: 4.9, image: missionPoster, itemCount: "7 Movies" },
    { id: 3, title: "Cyberpunk Universe", category: "Sci-Fi / Anime", rating: 4.6, image: poster2, itemCount: "10 Titles" },
    { id: 4, title: "Dark Mystery Collection", category: "Horror / Mystery", rating: 4.7, image: poster3, itemCount: "8 Movies" },
    { id: 5, title: "Anime Epic Series", category: "Anime Classics", rating: 4.9, image: poster4, itemCount: "12 Series" },
    { id: 6, title: "Sci-Fi Odysseys", category: "Sci-Fi / Space", rating: 4.8, image: poster3, itemCount: "6 Movies" },
    { id: 7, title: "Action Legends", category: "Action Blockbusters", rating: 4.7, image: missionPoster, itemCount: "15 Movies" },
    { id: 8, title: "Fantasy Realms", category: "Fantasy Epic", rating: 4.6, image: poster1, itemCount: "9 Titles" },
];

export const Collections = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);

    const filteredCollections = selectedCategories.includes("All") || selectedCategories.length === 0
        ? collectionItems
        : collectionItems.filter((item) =>
            selectedCategories.some((cat) =>
                item.category.toLowerCase().includes(cat.toLowerCase())
            )
          );

    return (
        <CollectionsSection id="collections">
            <SectionHeader 
                title="Collections" 
                withOutline={true} 
                withBorder={false}
            />

            <FilterBar
                categories={categories}
                selectedCategories={selectedCategories}
                onSelectCategories={setSelectedCategories}
                multiSelect={true}
            />

            <CollectionsGrid>
                {filteredCollections.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        category={`${item.category} • ${item.itemCount}`}
                        rating={item.rating}
                        image={item.image}
                    />
                ))}
            </CollectionsGrid>
        </CollectionsSection>
    );
};

const CollectionsSection = styled.section`
    background-color: #030a1b;
    width: 100%;
    padding: 60px 50px 80px 50px;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`;

const CollectionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 30px;
    width: 100%;
    margin-top: 10px;
`;