const CheckingAccount = require("../model/CheckingAccount")

module.exports = {
    index: async (req, res) => {
        try {
            const CA = await CheckingAccount.find().populate("owner").then( acct => {
                res.status(200).json(acct)})
        } catch (err) {
            res.status(500).json({
                error: err
                
            })
        }
    },
    delete: async (req, res) => {
        try {
            const deletedAcct = await CheckingAccount.findByIdAndDelete({_id: req.params.id})
            console.log("deleted acct", deletedAcct)
            res.status(200).json(deletedAcct)
        } catch (err) {
            res.status(500).json({
                error: err
            })
        }
    }

}