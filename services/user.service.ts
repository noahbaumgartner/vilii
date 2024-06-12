import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userService = {
    create() {

        const hashedPassword = bcrypt.hashSync('password', 10);
    }
}