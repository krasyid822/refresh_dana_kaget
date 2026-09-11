(async function () {
  try {
    var path = window.location.pathname.replace(/\/+$/, '') || '/';
    var room = path === '/' ? '' : path.slice(1);
    var data = await (await fetch('new_link.json')).json();
    var link = data[room];

    if (link && String(link).trim()) {
      window.location.replace(link);
    } else {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('info').style.display = 'block';
    }
  } catch (e) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('info').style.display = 'block';
  }
})();