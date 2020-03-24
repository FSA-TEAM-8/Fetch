module.exports = {
  validateAdmin: (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
      const adminErr = new Error('Restricted')
      adminErr.status = 405
      next(adminErr)
    } else {
      next()
    }
  },

  validateUser: (req, res, next) => {
    const userId = req.params.id
    if (!req.user || (req.user.id !== userId && !req.user.isAdmin)) {
      const profileAccessErr = new Error('Restricted')
      profileAccessErr.status = 405
      next(profileAccessErr)
    } else {
      next()
    }
  }
}
