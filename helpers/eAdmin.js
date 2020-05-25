module.exports = {
    eAdmin: function (req, res, next){
        //função isAuthenticated irá verificar se o usuário está autenticado ou não
        if(req.isAuthenticated() && req.user.eAdmin == 1){
            return next()
        }

        req.flash("error_msg", "Você precisa ser um Admin!")
        res.redirect("/")
    }
}