'use strict'

const db = require('../server/db')
const {User, Company, Job} = require('../server/db/models')

async function seed() {
  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  console.log('db synced!')

  // Users
  const red = await User.create({
    email: 'red@email.com',
    password: '123',
    firstName: 'Red',
    lastName: 'Der',
    biography: 'blazin employee',
    address: {
      streetNumber: 123,
      streetName: 'Red Street',
      townName: 'Queens',
      stateName: 'NY',
      zipCode: '11101'
    },
    imageUrl: '',
    isAdmin: true,
    jobHistory: []
  })
  const blue = await User.create({
    email: 'blue@email.com',
    password: '123',
    firstName: 'Blue',
    lastName: 'Eulb',
    biography: 'cool employee',
    address: {
      streetNumber: 123,
      streetName: 'Blue Street',
      townName: 'Queens',
      stateName: 'NY',
      zipCode: '11101'
    },
    imageUrl: '',
    jobHistory: []
  })
  const yellow = await User.create({
    email: 'yellow@email.com',
    password: '123',
    firstName: 'Yel',
    lastName: 'Low',
    biography: 'shiny employee',
    address: {
      streetNumber: 123,
      streetName: 'Yellow Street',
      townName: 'Queens',
      stateName: 'NY',
      zipCode: '11101'
    },
    imageUrl: '',
    jobHistory: []
  })
  const green = await User.create({
    email: 'green@email.com',
    password: '123',
    firstName: 'Green',
    lastName: 'Neerg',
    biography: 'minty employee',
    address: {
      streetNumber: 123,
      streetName: 'Green Street',
      townName: 'Queens',
      stateName: 'NY',
      zipCode: '11101'
    },
    imageUrl: '',
    isAdmin: true,
    jobHistory: []
  })
  const purple = await User.create({
    email: 'Purple@email.com',
    password: '123',
    firstName: 'Purp',
    lastName: 'le',
    biography: 'grape employee',
    address: {
      streetNumber: 123,
      streetName: 'Purple Street',
      townName: 'Queens',
      stateName: 'NY',
      zipCode: '11101'
    },
    imageUrl: '',
    jobHistory: []
  })

  // Companies
  const jpmorganChase = await Company.create({
    companyName: 'JPMorgan Chase',
    size: 'Large organization',
    description: 'Bank',
    category: 'Financial technology',
    reviews: 'very good company',
    imageURL: '',
    employees: [],
    jobPostedHistory: []
  })
  const bofa = await Company.create({
    companyName: 'Bank of America',
    size: 'Large organization',
    description: 'Bank',
    category: 'Financial technology',
    reviews: 'very good company',
    imageURL: '',
    employees: [],
    jobPostedHistory: []
  })
  // const citi = await Company.create(
  //   {
  //     companyName: 'Citigroup',
  //     size: 'Large organization',
  //     description: 'Bank',
  //     category: 'Financial technology',
  //     reviews: 'very good company',
  //     imageURL: '',
  //     employees: [],
  //     jobPostedHistory: [],
  //   }
  // )
  // const wellsFargo = await Company.create(
  //   {
  //     companyName: 'Wells Fargo',
  //     size: 'Large organization',
  //     description: 'Bank',
  //     category: 'Financial technology',
  //     reviews: 'very good company',
  //     imageURL: '',
  //     employees: [],
  //     jobPostedHistory: [],
  //   }
  // )
  // const goldmanSachs = await Company.create(
  //   {
  //     companyName: 'Goldman Sachs',
  //     size: 'Large organization',
  //     description: 'Bank',
  //     category: 'Financial technology',
  //     reviews: 'very good company',
  //     imageURL: '',
  //     employees: [],
  //     jobPostedHistory: [],
  //   }
  // )

  // Jobs
  const bofaFrontEnd = await Job.create({
    title: 'Front-End Developer',
    salary: 90000,
    description: {
      contactEmail: 'apply@bofa.com',
      location: 'New York',
      roleType: 'Front-end',
      experienceLevel: 'Junior'
    }
  })
  const jpmorganBackEnd = await Job.create({
    title: 'Back-End Developer',
    salary: 101000,
    description: {
      contactEmail: 'apply@jpmorgan.com',
      location: 'New York',
      roleType: 'Back-end',
      experienceLevel: 'Junior'
    }
  })
  // const bofaFullStack = await Job.create({
  //   title: 'Full Stack Developer',
  //   salary: 120000,
  //   description: {
  //     contactEmail: 'apply@bofa.com',
  //     location: 'New York',
  //     roleType: 'Full-stack',
  //     experienceLevel: 'Junior'
  //   }
  // })

  red.company = bofa._id // company id
  red.isEmployer = true
  bofa.employees.push(red._id) // employee id
  bofa.jobPostedHistory.push(bofaFrontEnd._id)
  bofaFrontEnd.company = bofa._id
  bofaFrontEnd.author = red._id

  await red.save() // this saves and applies the changes made to the instance
  await bofa.save()
  await bofaFrontEnd.save()

  blue.company = jpmorganChase._id // company id
  blue.isEmployer = true
  jpmorganChase.employees.push(blue._id) // employee id
  jpmorganChase.jobPostedHistory.push(jpmorganBackEnd._id)
  jpmorganBackEnd.company = jpmorganChase._id
  jpmorganBackEnd.author = blue._id

  await blue.save()
  await jpmorganChase.save()
  await jpmorganBackEnd.save()

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
