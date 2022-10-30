import mongoose from 'mongoose'

const url = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
const readyState = mongoose.connection.readyState

if (!readyState) {
    connect()
}

async function connect() {
    await mongoose.connect(url)
}
