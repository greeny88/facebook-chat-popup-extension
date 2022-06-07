const commentPopout = document.getElementById("commentPopout");

commentPopout.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: popoutLiveStreamComments,
  });
});

function popoutLiveStreamComments() {
  const listOfElementsToRemove = [
    'roauwr9f n7fi1qx3 byvelhso hzruof5a pmk7jnqg j9ispegn kr520xx4',
    'pfnyh3mw km676qkl du4w35lb cwj9ozl2 discj3wi hv4rvrfc ihqw7lf3 dati1w0a',
    'discj3wi dati1w0a qt6c0cv9 hv4rvrfc pfnyh3mw cbu4d94t j83agx80'
  ];

  for (let elm of document.getElementsByTagName('div')) {
    if (elm.getAttribute('role') === 'banner' || elm.getAttribute('role') === 'main') {
      elm.setAttribute('style', 'display:none;');
    }
    if (elm.getAttribute('role') === 'complementary') {
      for (let classes of listOfElementsToRemove) {
        try {
          const innerElm = elm.getElementsByClassName(classes)[0];
          innerElm.setAttribute('style', 'display:none;');
        } catch {
          console.error('Error removing inner element');
        }
      }
    }
  }
}