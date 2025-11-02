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
  const playBtn = document.getElementById('video-play');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = '<iframe src="https://player.vimeo.com/video/44265326?h=1e8b36c00b&loop=0&byline=0&muted=1&controls=1" width="640" height="360" title="Lighthouse video" loading="eager" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>';
      playBtn.replaceWith(wrapper.firstChild);
    });
  }
};

document.addEventListener('DOMContentLoaded', initApp);