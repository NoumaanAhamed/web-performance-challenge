const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****";
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const acceptCookies = () => {
  const banner = document.querySelector('.cookieLayer__base');
  if (banner) {
    banner.setAttribute('hidden', '');
  }
  document.body.classList.remove('no-scroll');
};

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');
  const breaking = document.querySelector('.breaking');

  // mock content delay
  setTimeout(() => { if (breaking) breaking.textContent = CONTENT_BREAKING_NEWS; }, 300);

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};

const cookieLayerInit = () => {
  const banner = document.querySelector('.cookieLayer__base');
  const acceptBtn = document.getElementById('cookie-accept');
  if (banner) {
    banner.removeAttribute('hidden');
    document.body.classList.add('no-scroll');
  }
  if (acceptBtn) {
    acceptBtn.addEventListener('click', acceptCookies);
  }
};

// removed layout trashing and busy loops for performance

const initApp = () => {
  dynamicContent();
  cookieLayerInit();
};

document.addEventListener('DOMContentLoaded', initApp);