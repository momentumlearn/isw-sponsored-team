devListSection = document.getElementById('dev-list')

for (let dev of devs) {
  devEl = document.createElement('div')
  devEl.classList.add('list-item', 'box')
  devEl.innerHTML = `
  <div class="list-item-content">
  <div class="list-item-title">${dev.name}</div>
  <div class="list-item-description">
    <p class="block">${dev.description}</p>
    <p>
      <a href="${dev.repoURL}">GitHub Repo</a>
    </p>
    <p><a href="${dev.videoURL}">Video presentation</a></p>
    <p><a href="${dev.prodURL}">Production application</a></p>
  </div>
</div>
  `
  devListSection.appendChild(devEl)
}
