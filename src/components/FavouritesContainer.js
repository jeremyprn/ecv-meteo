export default function FavouritesContainer({test}) {
    console.log(test.cities);
    return (
        <div>
            {test.cities.map((city, index) => {
                return <p key={index}>{city.name}</p>
            })}
        </div>
    )
}