const Rating = ({ratings}) =>
{
    const renderStars = () =>
    {
        const stars = [];
        for (let i = 1; i <= 5; i++)
        {
            if (i <= ratings)
            {
                stars.push();
            } else if (i - 0.5 === ratings)
            {
                stars.push();
            }
            else
            {
                stars.push();
            }
        }
        return stars;
    }

    return (
        <>
            {renderStars()}
        </>
    );
}