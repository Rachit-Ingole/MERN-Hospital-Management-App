const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next)
      } catch (error) {
        if(error.code == 11000){
            res.json({msg:'room already alloted to different patient'})
            return
        }
        console.log(error)
        next(error)
      }
    }
  }
  
  module.exports = asyncWrapper
  