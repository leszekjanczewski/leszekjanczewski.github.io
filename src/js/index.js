import '../scss/main.scss';

console.log("Hi, I'm Leszek - nice to meet you 🚀")

fetch('https://api.github.com/users/leszekjanczewski/repos?sort=created&direction=asc')
  .then(res => res.json())
  .then((res) => {
    const container = document.querySelector('.projects-grid--js');
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;

      const template = `<article class="project">
      <div class="project__window">
        <span class="project__circle"></span>
        <span class="project__circle"></span>
        <span class="project__circle"></span>
      </div>
      <div class="project__content">
        <img src="img/github.svg" alt="">
        <h3 class="project__grid project__title">
          <span class="project__label">project:</span> <span>${name}</span>
        </h3>
        <p class="project__grid project__grid--description">
          <span class="project__label">description:</span> <span>${description}</span>
        </p>
        <p class="project__grid">
          <span class="project__label">demo:</span>
          <span class="project__link-demo--js">
            &lt;
            <a class="project__link" target="_blank" rel="noopener noreferrer" href="${homepage}" title="${name} - demo">see_here</a>
            &gt;
          </span>
        </p>
        <p class="project__grid">
          <span class="project__label">github:</span>
          <span>
            &lt;
            <a class="project__link" target="_blank" rel="noopener noreferrer" href="${html_url}" title="${name} - code">see_here</a>
            &gt;
          </span>
        </p>
      </div>
    </article>`;

    const templateNoDemo = `<article class="project">
      <div class="project__window">
        <span class="project__circle"></span>
        <span class="project__circle"></span>
        <span class="project__circle"></span>
      </div>
      <div class="project__content">
        <img src="img/github.svg" alt="">
        <h3 class="project__grid project__title">
          <span class="project__label">project:</span> <span>${name}</span>
        </h3>
        <p class="project__grid project__grid--description">
          <span class="project__label">description:</span> <span>${description}</span>
        </p>
        <p class="project__grid">
          <span class="project__label">demo:</span>
          <span class="project__link-demo--js">
            &lt;
            no_demo_site
            &gt;
          </span>
        </p>
        <p class="project__grid">
          <span class="project__label">github:</span>
          <span>
            &lt;
            <a class="project__link" target="_blank" rel="noopener noreferrer" href="${html_url}" title="${name} - code">see_here</a>
            &gt;
          </span>
        </p>
      </div>
    </article>`;

      if (description && homepage) {
        container.innerHTML += template;
      } else if (description && !homepage) {
        container.innerHTML += templateNoDemo;
      }
    }
  })
  .catch((e) => console.log(e));