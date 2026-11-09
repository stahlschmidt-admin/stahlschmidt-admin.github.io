(() => {
  const destination = "info@stahlschmidt-inc.com";
  const businesses = {"general":"General enquiry","si": "Stahlschmidt Incorporated", "tenfour": "10/4us", "oh": "OPTiMUM Holdings", "solar": "Solar Trust of America", "foundation": "I AM 4 ALL Foundation", "metalsbridge": "MetalsBridge", "bridgetrade": "BridgeTrade", "shipping": "Bridge Shipping & Chartering", "it": "Bridge iT", "bridgeid": "Bridge iD", "optimumid": "Optimum iD", "verie": "Verie LLC", "management": "Optimum Management Services"};
  const params = new URLSearchParams(location.search);
  const form = document.querySelector('#enquiry-form');
  const business = form.elements.business;
  const interest = form.elements.interest;
  if (Object.hasOwn(businesses, params.get('business'))) business.value = params.get('business');
  if (['overview', 'materials', 'article'].includes(params.get('interest'))) interest.value = params.get('interest');
  const requestedArticle = (params.get('article') || '').slice(0, 400);
  if (requestedArticle) {
    interest.value = 'article';
    form.elements.message.value = `Please send me an archived copy of ${requestedArticle}.`;
    const articleLabel = document.querySelector('#requested-article');
    articleLabel.textContent = requestedArticle;
    articleLabel.hidden = false;
    document.querySelector('h1').textContent = 'Request an archived article.';
  }
  if (business.value === 'general') form.classList.add('general-enquiry');
  const emailInput = form.elements.email;
  const phoneInput = form.elements.phone;
  const clearContactError = () => emailInput.setCustomValidity('');
  emailInput.addEventListener('input', clearContactError);
  phoneInput.addEventListener('input', clearContactError);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailInput.setCustomValidity(
      emailInput.value.trim() || phoneInput.value.trim()
        ? '' : 'Please provide an email address or phone number.'
    );
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const topic = interest.value === 'article' ? 'Archived article request' : interest.value === 'materials' ? 'Executive summary & financial model' : 'Business introduction';
    const subject = `${businesses[business.value]} — ${topic}`;
    const body = `Name: ${String(data.get('name')).trim()}\nEmail: ${String(data.get('email')).trim() || 'Not provided'}\nPhone: ${String(data.get('phone')).trim() || 'Not provided'}\nBusiness: ${businesses[business.value]}\nInterest: ${topic}\n\n${String(data.get('message')).trim()}\n\nSent from the SI website enquiry form.`;
    const url = `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#direct-email').href = url;
    document.querySelector('#direct-email').textContent = 'Open the prepared email again ↗';
    location.href = url;
    document.querySelector('#enquiry-status').textContent = 'Please review and send the message in your email app. If it did not open, use the email link below. Your enquiry has not been sent by this website.';
  });
})();
