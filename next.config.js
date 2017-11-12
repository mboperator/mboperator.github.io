module.exports = {
  distDir: 'build',
  exportPathMap() {
    return { '/': { page: '/index' }, '/blog': { page: '/blog' } }
  }
}
