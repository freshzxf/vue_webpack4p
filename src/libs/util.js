let util = {}
util.title = function (title) {
  title = title ? title + ' - home' : 'scores system project'
  window.document.title = title
}
export default util
