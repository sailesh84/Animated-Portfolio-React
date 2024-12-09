import "./Portfolio.scss";

const Portfolio = () => {
    const items = [
        {
            id: 1,
            title: 'React JS E-Commerce',
            img: 'https://images.pexels.com/photos/4049876/pexels-photo-4049876.jpeg?auto=compress&cs=tinysrgb&w=600',
            descrp:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            title: 'Next JS Blogs',
            img: 'https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=600',
            descrp:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            title: 'Angular JS Blockchain',
            img: 'https://images.pexels.com/photos/5980863/pexels-photo-5980863.jpeg?auto=compress&cs=tinysrgb&w=600',
            descrp:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            title: 'React Native App',
            img: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=600',
            descrp:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    const Single = ({ item }) => {
        return (
            <section>{item.title}</section>
        );
    };

    return (
        <div className="portfolio">
            <div className="progress">
                <h1>Featured Works</h1>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio;