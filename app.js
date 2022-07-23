function openNav() {
  document.getElementById('myNav').style.width = '100%';
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
  document.body.style.overflow = 'visible';
}

openNav();
closeNav();

function grab(e) {
  return document.getElementById(e);
}

const portfolioCards = [
  {
    key: 'c1',
    image: 'src/Snapshoot_Portfoliod.png',
    imagem: 'src/Snapshoot_Portfolio.png',
    popImgd: 'src/Snapshoot_Portfoliod.png',
    name: 'Tonic',
    exp: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
    expm: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    technologiesm: ['CSS', 'JavaScript', 'html'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    button: 'See Project',
    links: [
      'https://dadadon.github.io/Microverse-portfolio/',
      'https://github.com/Dadadon/Microverse-portfolio',
    ],
  },
  {
    key: 'c2',
    imagem: 'srv/Snapshoot_Portfolio(2).png',
    imageo: 'srv/Snapshoot_Portfoliod2.png',
    popImgd: 'srv/Snapshoot_Portfoliod2.png',
    name: 'Multi-Post Stories',
    exp: ['FACEBOOK', '•', 'Ful Stack Dev', '•', '2015'],
    expm: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    technologiesm: ['CSS', 'JavaScript', 'html'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    button: 'See Project',
    links: [
      'https://dadadon.github.io/Microverse-portfolio/',
      'https://github.com/Dadadon/Microverse-portfolio',
    ],
  },
  {
    key: 'c3',
    image: 'srv/Snapshoot_Portfoliod3.png',
    imagem: 'srv/Snapshoot_Portfolio(3).png',
    popImgd: 'srv/Snapshoot_Portfoliod3.png',
    name: 'Facebook 360',
    exp: ['FACEBOOK', '•', 'Ful Stack Dev', '•', '2015'],
    expm: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    technologiesm: ['CSS', 'JavaScript', 'html'],
    description:
      'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    button: 'See Project',
    links: [
      'https://dadadon.github.io/Microverse-portfolio/',
      'https://github.com/Dadadon/Microverse-portfolio',
    ],
  },
  {
    key: 'c4',
    image: 'SnapshotPortfolio4.png',
    imagem: 'srv/Snapshoot_Portfolio(4).png',
    imageo: 'srv/Snapshoot_Portfoliod4.png',
    popImgd: 'srv/Snapshoot_Portfoliod4.png',
    name: 'Uber Navigation',
    exp: ['UBER', '•', 'Lead Developer', '•', '2018'],
    expm: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    technologiesm: ['CSS', 'JavaScript', 'html'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    button: 'See Project',
    links: [
      'https://dadadon.github.io/Microverse-portfolio/',
      'https://github.com/Dadadon/Microverse-portfolio',
    ],
  },
];

function popup(position) {
  const el = portfolioCards[position];

  const pop = document.querySelector('.bg-modal');
  pop.style.display = 'block';

  const firstCard = document.querySelector('.modal-image');
  firstCard.src = `${el.popImgd}`;

  const liveb = document.querySelector('.live');
  liveb.href = `${el.links[0]}`;

  const sourceb = document.querySelector('.source');
  sourceb.href = `${el.links[1]}`;

  document.querySelector('.modal-head').innerText = el.name;

  const btnContiner = document.getElementById('lan');
  btnContiner.innerHTML = '';

  const btnContiner2 = document.getElementById('expd');
  btnContiner2.innerHTML = '';

  const paragraph = document.querySelector('.p-modal');
  paragraph.textContent = `${el.description}`;

  el.technologies.forEach((btn) => {
    const liBtn = document.createElement('li');
    liBtn.className = 'p-lang';
    liBtn.classList.add('p-html');
    liBtn.innerText = btn;
    btnContiner.appendChild(liBtn);
  });
  let counter = 1;
  el.exp.forEach((btn) => {
    const liBtn2 = document.createElement('li');
    if (counter <= 1) {
      liBtn2.className = 'canopy';
      counter += counter + 1;
    } else {
      liBtn2.className = 'backend';
    }

    liBtn2.innerText = btn;
    btnContiner2.appendChild(liBtn2);
  });

  document.querySelector('.p-modal').innerText = el.description;

  const popupCloseButton = document.querySelector('.close');
  popupCloseButton.addEventListener('click', () => {
    const pop = document.querySelector('.bg-modal');
    pop.style.display = 'none';
  });
}

portfolioCards.forEach((el, i) => {
  let languages = '';
  el.technologies.forEach((lang2) => {
    languages += `<li class='p-html'><a class='a-lang' href=''>${lang2}</a></li>`;
  });
  let languagesm = '';
  el.technologiesm.forEach((lang2) => {
    languagesm += `<li class='p-html'><a class='a-lang' href=''>${lang2}</a></li>`;
  });

  let experience = '';
  el.exp.forEach((expr) => {
    if (experience.length < 1) {
      experience += `<li class='canopy'>${expr}</li>`;
    } else {
      experience += `<li class='backend'>${expr}</li>`;
    }
  });

  let experiencem = '';
  el.expm.forEach((expr) => {
    if (experiencem.length < 1) {
      experiencem += `<li class='canopy'>${expr}</li>`;
    } else {
      experiencem += `<li class='backend'>${expr}</li>`;
    }
  });

  const template = document.createElement('template');

  const btn = document.createElement('button');
  btn.className = 'p-button headmargin12';
  btn.innerText = el.button;
  btn.addEventListener('click', () => {
    popup(i);
  });

  template.innerHTML = `<li class='portfolio-card'>
        <div class='mobile-only'><img class='portfolio-image' src='${el.imagem}' alt=''/></div>
        <div class='desktop-only'><img class='portfolio-imaged' src='${el.image}' alt=''/></div>
        <div class='portfolio-content' id='p-cont'>
          <div class='p-layout'>
            <h1 class='portfolio-head'>${el.name}</h1>
            <ul class='frame mobile-only'>${experiencem}</ul>
            <ul class='framed desktop-only'>${experience}</ul>
          </div>
          <p class='p-text'>${el.description}</p>
          <ul id= 'languages' class='lang mobile-only'>${languagesm}</ul>
          <ul class='lang2 desktop-only'>${languages}</ul>
        </div> 
        <div class='desktop-only'><img class='portfolio-imaged' src='${el.imageo}' alt=''/></div>
       
      </li>`;

  const far = template.content.lastElementChild;
  template.content.getElementById('p-cont').appendChild(btn);
  grab('cards').appendChild(far);
});

function lowerCase(val) {
  return /[a-z]/.test(val) && !/[A-Z]/.test(val);
}

const errorMessage = document.querySelector('.error');
const form = document.forms['c-form'];
const mail = form.email;
const messageInput = form.comment;
const nameInput = form.fullname;
const formElts = form.querySelectorAll('input, textarea');

const addToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const retrieveFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
formElts.forEach((fe) => {
  fe.addEventListener('input', () => {
    errorMessage.style.display = 'none';
    const objectForLocalStorage = {
      name: nameInput.value,
      email: mail.value,
      message: messageInput.value,
    };
    addToLocalStorage('formData', objectForLocalStorage);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = mail.value;
  if (!lowerCase(email)) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    form.submit();
  }
});

const formData = retrieveFromLocalStorage('formData');
if (formData !== null) {
  nameInput.value = formData.name;
  mail.value = formData.email;
  messageInput.value = formData.message;
}
