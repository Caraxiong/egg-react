module.exports = app => {
    const { router, controller } = app;
    router.get('/movie/cinema/:cityStr', controller.list.list.getList)
    router.get('/cinema/detail/:id', controller.list.list.getDetail)
    router.get('/movie/cinema_detail', controller.list.list.getMovieDetail)
    router.get('/movie/swiper', controller.home.home.getImgs)
}
