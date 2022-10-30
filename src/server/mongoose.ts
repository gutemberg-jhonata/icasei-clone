import mongoose from 'mongoose'

const readyState = mongoose.connection.readyState

if (!readyState) {
    connect()
}

async function connect() {
    await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_HOST}/?retryWrites=true&w=majority`)
}
