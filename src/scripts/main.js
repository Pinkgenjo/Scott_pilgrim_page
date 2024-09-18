document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('character-modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = modal.querySelector('.close');

    const characters = {
        scott: {
            name: 'Scott Pilgrim',
            image: '../dist/images/scott.avif',
            description: 'Scott Pilgrim é o protagonista da história. Ele é um baixista de 22 anos que toca na banda Sex Bob-omb. Scott se apaixona por Ramona Flowers, mas para namorá-la, ele deve derrotar seus sete ex-namorados malvados.'
        },
        ramona: {
            name: 'Ramona Flowers',
            image: '../dist/images/ramona.png',
            description: 'Ramona Flowers é uma entregadora americana com um passado misterioso. Ela é o interesse amoroso de Scott e possui sete ex-namorados malvados que Scott deve derrotar.'
        },
        knives: {
            name: 'Knives Chau',
            image: '../dist/images/knives2.webp',
            description: 'Knives Chau é uma estudante do ensino médio de 17 anos e a ex-namorada de Scott. Ela é inicialmente ingênua, mas se torna mais confiante e independente ao longo da história.'
        },
        wallace: {
            name: 'Wallace Wells',
            image: '../dist/images/wallace.jpg',
            description: 'Wallace Wells é o melhor amigo de Scott Pilgrim, conhecido por seu humor sarcástico e por cuidar da vida prática de Scott. Ele é leal, direto e oferece apoio cômico e emocional ao longo da série.'
        },
        stephen: {
            name: 'Stephen Stills',
            image: '../dist/images/stephen.webp',
            description: 'Stephen Stills é o guitarrista e líder da banda de Scott Pilgrim, chamada Sex Bob-Omb. Ele é dedicado à música e frequentemente estressado com ensaios e apresentações. Embora talentoso, sua ansiedade e insegurança o atrapalham em momentos cruciais.'
        },
        kim: {
            name: 'Kim pine',
            image: '../dist/images/kim.webp',
            description: 'Kim Pine é a baterista da banda Sex Bob-Omb e ex-namorada de Scott Pilgrim. Sarcástica e muitas vezes apática, ela tem uma personalidade forte e mantém uma atitude distante, embora demonstre um carinho oculto por seus amigos.'
        },
        neil: {
            name: 'Neil Nordegraf',
            image: '../dist/images/neil.webp',
            description: 'Neil Nordegraf, também conhecido como Young Neil, é amigo da banda Sex Bob-Omb e eventual substituto de Scott Pilgrim no baixo. Ele é quieto e introvertido, mas demonstra admiração pelos membros da banda e acaba ganhando mais confiança ao longo da série.'
        },
        envy: {
            name: 'Envy Adams',
            image: '../dist/images/envy2.webp',
            description: 'Envy Adams é a ex-namorada de Scott Pilgrim e vocalista da famosa banda The Clash at Demonhead. Carismática e ambiciosa, ela é confiante e dominante, tendo causado um grande impacto emocional em Scott após o término de seu relacionamento.'
        },
        matthew: {
            name: 'Matthew Patel',
            image: '../dist/images/matthew2.jpg',
            description: 'Matthew Patel é o primeiro dos ex-namorados malignos que Scott Pilgrim deve derrotar. Ele possui poderes místicos, incluindo invocar demônios, e tem um estilo teatral, combinando ataques mágicos com coreografias exageradas.'
        },
        lucas: {
            name: 'Lucas Lee',
            image: '../dist/images/lucas2.jpg',
            description: 'Lucas Lee é o segundo ex-namorado maligno de Ramona Flowers. Ele é um famoso ator e ex-skatista profissional, conhecido por sua atitude arrogante e física imponente. Scott Pilgrim o enfrenta em uma batalha que combina força bruta e truques de ação cinematográfica.'
        },
        todd: {
            name: 'Todd Ingram',
            image: '../dist/images/todd2.webp',
            description: 'Todd Ingram é o terceiro ex-namorado maligno de Ramona Flowers e baixista da banda The Clash at Demonhead. Ele possui poderes psíquicos por ser vegano, o que lhe dá força sobre-humana. Arrogante e desleal, Todd usa seus poderes para intimidar os outros, incluindo Scott Pilgrim.'
        },
        roxie: {
            name: 'Roxy Richter',
            image: '../dist/images/roxie2.jpg',
            description: 'Roxy Richter é a quarta ex-namorada maligna de Ramona Flowers. Ela é uma ninja com habilidades de combate ágeis e utiliza uma espada como arma principal. Roxy tem uma personalidade sarcástica e provocadora, sendo uma das batalhas mais complicadas para Scott Pilgrim.'
        },
        twins: {
            name: 'Kyle e Ken Katayanagi',
            image: '../dist/images/twins2.jpg',
            description: 'Os Gêmeos Katayanagi, Kyle e Ken, são os quinto e sexto ex-namorados malignos de Ramona Flowers. Eles são talentosos músicos e engenheiros de som que enfrentam Scott Pilgrim em uma batalha de bandas épica, usando sua música eletrônica e robôs para lutar.'
        },
        gideon: {
            name: 'Gideon Graves',
            image: '../dist/images/gideon2.webp',
            description: 'Gideon Graves é o sétimo e último ex-namorado maligno de Ramona Flowers, além de ser o principal vilão da série. Ele é manipulador, poderoso e controla a Liga dos Ex-namorados Malignos. Gideon também é obcecado por Ramona, usando sua influência para manter controle sobre ela e seus relacionamentos passados.'
        }
    };

    document.querySelectorAll('.character').forEach(character => {
        character.addEventListener('click', () => {
            const characterData = characters[character.dataset.character];
            modalImage.src = characterData.image;
            modalImage.alt = characterData.name;
            modalDescription.innerHTML = `<h3>${characterData.name}</h3><p>${characterData.description}</p>`;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;

        heroSection.style.backgroundPositionY = `${scrollPosition * 0.7}px`;
    });
});