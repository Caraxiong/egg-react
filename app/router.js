module.exports = app => {
    app.get('/', app.controller.home.index)
    app.get('/movie/cinema', app.controller.list.get)
}
