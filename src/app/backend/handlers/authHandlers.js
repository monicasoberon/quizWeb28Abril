class AuthHandler {
    constructor(authController) {
        this.authController = authController;
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const result = await this.authController.login(username, password);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = AuthHandler;