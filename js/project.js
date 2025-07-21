const projects = [
    {
        title: 'Zubo Property Rental Platform',
        description: 'A comprehensive property rental platform for Zambia featuring interactive map-based search, property listings, and advanced filtering options for accommodation rentals.',
        image: 'zubo.png',
        link: 'https://www.myzub.com',
        github: 'https://github.com/Richard-Chimama/zubuproject'
    },
    {
        title: 'Yakaba Patient Transport',
        description: 'A professional patient transportation service website providing safe, reliable, and compassionate non-emergency medical transport services available 24/7.',
        image: 'yakaba.png',
        link: 'https://www.yakaba-llc.com',
        github: 'https://github.com/Richard-Chimama/yakaba-app'
    },
    {
        title: 'Space Tour App',
        description: 'Futuristic app that allow user to explore the space.',
        image: 'spacetour.png',
        link: 'https://web-production-c54e.up.railway.app/',
        github: 'https://github.com/Richard-Chimama/space-traveling'
    },{
        title: 'My Barber App',
        description: 'A single page application for a barber shop in Stockholm',
        image: 'myBarber.png',
        link: 'https://mybarbershop187.netlify.app/',
        github: 'https://github.com/Richard-Chimama/barberapp'
    },
    {
        title: 'Resh Flyttirma',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'resh.png',
        link: 'https://fascinating-phoenix-5650d5.netlify.app/',
        github: 'https://github.com/Richard-Chimama/cleaning-business-company'
    },
    {
        title: 'Iphone Call App (HTML/CSS)',
        description: "This project is a clone of the iPhone's Phone app interface It provides a visual representation of the phone app's user interface but does not include any interactive functionality. The entire project is built using only HTML and CSS.",
        image: 'iphone.png',
        link: 'https://iphonecall.netlify.app/',
        github: 'https://github.com/Richard-Chimama/phone-contact-html-css'
    },
    {
        title: 'Secondhand Store Portfolio',
        description: 'A single page application for a secondhand store in Västertops',
        image: 'folktfolk.jpeg',
        link: 'https://www.folktfolk.se/',
        github: 'https://github.com/Richard-Chimama/'
    },
    {
        title: 'OMDB Movie Search',
        description: 'A single page application that allows users to search for movies using the OMDB API.',
        image: 'omdbapi.png',
        link: 'https://ombdapi.netlify.app/',
        github: 'https://github.com/Richard-Chimama/'
    },
];

const projectSection = $('#projects');

projects.forEach(project => {
    const projectHTML = `
        <div class="art-grid-item drawings">
            <a data-fancybox="gallery" href="img/works/original-size/${project.image}" class="art-a art-portfolio-item-frame art-square">
                <img src="img/works/original-size/${project.image}" alt="${project.title}">
                <span class="art-item-hover"><i class="fas fa-expand"></i></span>
            </a>
            <div class="art-item-description">
                <h5 class="mb-15">${project.title}</h5>
                <div class="mb-15">${project.description}</div>
                <div class="ext-link-wrapper">
                    <a target="_blank" href="${project.link}" class="art-link art-color-link art-w-chevron">Visit Project</a>
                    <a target="_blank" href="${project.github}" class="art-link art-color-link art-w-chevron">Github</a>
                </div>
            </div>
        </div>
    `;
    projectSection.append(projectHTML);
});