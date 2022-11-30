const { prismaClient, PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

module.exports.getAllUser = async (req, res) => {
    try {
        const user = await prisma.user.findMany({
            select: {
                id: true,
                fullName: true,
                organization: {
                    select: {
                        organization: true
                    }
                }
            },
            where:
            {
                active: true,

            }

        });
        return res.json({
            user
        }).status(200);
    } catch (error) {

    }
}

module.exports.createUser = async (req, res) => {
    try {
        let { username, organization_id, full_name } = req.body
        const user = await prisma.user.create({
            data: {
                fullName: full_name,
                username,
                active: true,
                organizationId: organization_id
            }
        });

        return res.json({ user, message: "create" }).status(200);
    } catch (error) {
        return res.send({
            message: error.message,
            trace: error.trace
        });
    }
}