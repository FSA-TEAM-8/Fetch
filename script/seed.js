'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Company} = require('../server/db/models')
const {Job} = require('../server/db/models')

async function seed() {
  //   const users = await Promise.all([
  //     User.create({email: 'testttttt@email.com', password: '123'})
  //   ])

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  console.log('db synced!')

  const jody = await User.create({
    email: 'Jody@email.com',
    password: '1234',
    firstName: 'Jody',
    lastName: 'Schmoe',
    biography: 'very good employee',
    address: {
      streetNumber: 367,
      streetName: '3rd Avenue',
      townName: 'Brooklyn',
      stateName: 'NY',
      zipCode: '11209'
    }
  })

  const jeff = await User.create({
    email: 'Jeff@email.com',
    password: '1234',
    firstName: 'Jeff',
    lastName: 'Schmoe',
    biography: 'very good employee',
    address: {
      streetNumber: 367,
      streetName: '3rd Avenue',
      townName: 'Brooklyn',
      stateName: 'NY',
      zipCode: '11209'
    }
  })

  const bobby = await User.create({
    email: 'bobby@email.com',
    password: '456',
    firstName: 'bobby',
    lastName: 'Schmidty',
    biography: 'very good employee',
    address: {
      streetNumber: 267,
      streetName: '4rd Avenue',
      townName: 'Brooklyn',
      stateName: 'NY',
      zipCode: '11209'
    }
  })

  const joe = await User.create({
    email: 'joe@email.com',
    password: '456',
    firstName: 'joe',
    lastName: 'Smith',
    biography: 'very good employee',
    address: {
      streetNumber: 267,
      streetName: '4rd Avenue',
      townName: 'Brooklyn',
      stateName: 'NY',
      zipCode: '11209'
    }
  })

  const rob = await User.create({
    email: 'rob@email.com',
    password: '456',
    firstName: 'rob',
    lastName: 'Smitty',
    biography: 'very good employee',
    address: {
      streetNumber: 267,
      streetName: '4rd Avenue',
      townName: 'Brooklyn',
      stateName: 'NY',
      zipCode: '11209'
    }
  })

  // Companies

  const puma = await Company.create({
    companyName: 'Puma',
    size: 'Large organization',
    description: 'Sporting goods',
    category: 'Web Dev',
    reviews: 'very good company',
    imageURL: '',
    employees: [],
    jobPostedHistory: []
  })

  const adidas = await Company.create({
    companyName: 'Adidas',
    size: 'Large organization',
    description: 'Sporting goods',
    category: 'Web Dev',
    reviews: 'very good company',
    imageURL: '',
    employees: [],
    jobPostedHistory: []
  })

  // Jobs

  const pumaFullstack = await Job.create({
    title: 'Seeking full-stack developer',
    salary: 75000,
    description: {
      contactEmail: 'Jeff@Puma.com',
      location: 'New York',

      roleType: 'Full-stack',
      experienceLevel: 'Junior'
    }
  })

  const adidasFrontEnd = await Job.create({
    title: 'Seeking front-end engineer',
    salary: 75000,
    description: {
      contactEmail: 'Jody@Adidas.com',
      location: 'New York',

      roleType: 'Full-stack',
      experienceLevel: 'Junior'
    }
  })

  jody.company = puma._id // company id
  jody.isEmployer = true
  puma.employees.push(jody._id) // employee id
  puma.jobPostedHistory.push(pumaFullstack._id)
  pumaFullstack.company = puma._id
  pumaFullstack.author = jody._id
  await jody.save() // this saves and applies the changes made to the instance
  await puma.save()
  await pumaFullstack.save()

  jeff.company = adidas._id // company id
  jeff.isEmployer = true
  adidas.employees.push(jeff._id) // employee id
  adidas.jobPostedHistory.push(adidasFrontEnd._id)
  adidasFrontEnd.company = adidas._id
  adidasFrontEnd.author = jeff._id
  await jeff.save() // this saves and applies the changes made to the instance
  await adidas.save()
  await adidasFrontEnd.save()

  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    // await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
