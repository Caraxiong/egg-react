module.exports = app => {
    const { router, controller } = app;
    router.get('/movie/cinema/:cityStr', controller.list.list.getList)
}
