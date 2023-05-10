const commentPopout = document.getElementById("commentPopout");

commentPopout.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // todo: check that url is https://www.facebook.com/<name>/videos/<id> else don't fire next part.

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: popoutLiveStreamComments,
  });
});

function popoutLiveStreamComments() {
  const listOfElementsToRemove = [
    'roauwr9f n7fi1qx3 byvelhso hzruof5a pmk7jnqg j9ispegn kr520xx4',
    'pfnyh3mw km676qkl du4w35lb cwj9ozl2 discj3wi hv4rvrfc ihqw7lf3 dati1w0a',
    'discj3wi dati1w0a qt6c0cv9 hv4rvrfc pfnyh3mw cbu4d94t j83agx80',
    's1tcr66n',
    'x78zum5 xdt5ytf x2lah0s xyamay9 x1pi30zi x18d9i69 x1swvt13',
    'xdppsyt',
    'x6s0dn4 x78zum5 x2lah0s x1qughib xdj266r xktsk01 xat24cr x1d52u69',
    'xr9p91e xds687c x1s65kcs x47corl x10l6tqk x17qophe x13vifvy'
  ];

  for (let elm of document.getElementsByTagName('div')) {
    if (elm.getAttribute('role') === 'banner' || elm.getAttribute('role') === 'main') {
      elm.setAttribute('style', 'display:none;');
    }
    if (elm.getAttribute('role') === 'complementary') {
      elm.setAttribute('style', 'width:100%;');

      try {
        const extraElm1 = elm.getElementsByClassName('hybvsw6c j83agx80 n7fi1qx3 cbu4d94t pad24vr5 poy2od1o iyyx5f41 ap132fyt pphwfc2g be9z9djy')[0];
        extraElm1.setAttribute('style', 'min-height: 100%; top: 0;');
      } catch {
        console.error('Error resetting extra element one attributes.');
      }

      try {
        const extraElm2 = elm.getElementsByClassName('bkyfam09 cbu4d94t j83agx80')[0];
        extraElm2.setAttribute('style', 'height: auto;');
      } catch {
        console.error('Error resetting extra element two attributes.');
      }

      try {
        const extraElm3 = elm.getElementsByClassName('rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 du4w35lb q5bimw55 ofs802cu pohlnb88 dkue75c7 mb9wzai9 d8ncny3e buofh1pr g5gj957u tgvbjcpo l56l04vs r57mb794 kh7kg01d eg9m0zos c3g1iek1 l9j0dhe7 k4xni2cv o36gj0jk')[0];
        extraElm3.setAttribute('style', 'width: 100%;');
      } catch {
        console.error('Error resetting extra element three attributes.');
      }

      try {
        const extraElm4 = elm.getElementsByClassName('xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck x1l7klhg x1iyjqo2 xs83m0k x2lwn1j xx8ngbg xwo3gff x1oyok0e x1odjw0f x1e4zzel x1n2onr6 xq1qtft x1cvmir6')[0];
        extraElm4.setAttribute('style', 'width: 98%;');
      } catch {
        console.error('Error resetting extra element three attributes.');
      }

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