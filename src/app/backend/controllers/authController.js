class AuthController {
    constructor(service) {
        this.service = service;
    }

    async login(username, password) {
        const student = await this.service.findStudent(username, password);
        if (!student) {
            throw new Error('Usuario o contraseña incorrectos');
        }

        return {
            message: `¡Bienvenido, ${student.nombre}! Disfruta de tu lectura.`,
            libroFavorito: student.libro
        };
    }
}

module.exports = AuthController;