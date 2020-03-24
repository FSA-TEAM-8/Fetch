'use strict'

const db = require('../server/db')

const {User, Company, Job} = require('../server/db/models')

// const users = await Promise.all([
//   User.create({email: 'cody@email.com', password: '123'}),
//   User.create({email: 'murphy@email.com', password: '123'})
// ])

async function seed() {
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
    imageUrl: '',
    employees: [],
    jobPostedHistory: []
  })

  const bofa = await Company.create({
    companyName: 'Bank of America',
    size: 'Large organization',
    description: 'Bank',
    category: 'Financial technology',
    reviews: 'very good company',
    imageUrl: '',
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
  //     imageUrl: '',
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
  //     imageUrl: '',
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
  //     imageUrl: '',
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

  //Users
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
    },
    imageUrl: '',
    isAdmin: true,
    jobHistory: []
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
    },
    imageUrl: '',
    isAdmin: true,
    jobHistory: []
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
    },
    imageUrl: '',
    jobHistory: []
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
    },
    imageUrl: '',
    jobHistory: []
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
    },
    imageUrl: '',
    jobHistory: []
  })

  // Companies

  const puma = await Company.create({
    companyName: 'Puma',
    size: 'Large organization',
    description: 'Sporting goods',
    category: 'Web Dev',
    reviews: 'very good company',
    imageUrl: '',
    employees: [],
    jobPostedHistory: []
  })

  const adidas = await Company.create({
    companyName: 'Adidas',
    size: 'Large organization',
    description: 'Sporting goods',
    category: 'Web Dev',
    reviews: 'very good company',
    imageUrl: '',
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

  // Users
  const pablo = await User.create({
    email: 'pablo@cage.com',
    password: '12345',
    firstName: 'Pablo',
    lastName: 'Hernandez',
    biography: 'Bi-lingual software engineer with years of experience',
    address: {
      streetNumber: 784,
      streetName: 'Chestnut Lane',
      townName: 'Summit',
      stateName: 'NJ',
      zipCode: '09204'
    },
    imageUrl: '',
    jobHistory: []
  })

  const lisa = await User.create({
    email: 'lisa@fppcc.com',
    password: '12345',
    firstName: 'Lisa',
    lastName: 'Da Vinci',
    biography: 'Currently looking for remote opportunities!',
    address: {
      streetNumber: 454,
      streetName: 'Chess Avenue',
      townName: 'Jersey City',
      stateName: 'NJ',
      zipCode: '07042'
    },
    imageUrl: '',
    jobHistory: []
  })

  const austin = await User.create({
    email: 'austin@wired.com',
    password: '12345',
    firstName: 'Austin',
    lastName: 'Delancy',
    biography: 'Bringing you the most obnoxious in tech news',
    address: {
      streetNumber: 1211,
      streetName: '5th Street',
      townName: 'West Hampton',
      stateName: 'NY',
      zipCode: '11004'
    },
    imageUrl: '',
    jobHistory: []
  })

  const patty = await User.create({
    email: 'patricia@office.org',
    password: 'abc123',
    firstName: 'Patricia',
    lastName: 'Nerietva',
    biography: 'Fullstack engineer with experience on React-Redux',
    address: {
      streetNumber: 120,
      streetName: 'Bleekers St.',
      townName: 'Northshire',
      stateName: 'PA',
      zipCode: '53202'
    },
    imageUrl: '',
    jobHistory: []
  })

  const fletcher = await User.create({
    email: 'fletcher@lol.org',
    password: 'abc123',
    firstName: 'Fletcher',
    lastName: 'Martinez',
    biography: 'Eager to learn with experience on GitHub, React, and more',
    address: {
      streetNumber: 5,
      streetName: 'Hudson St.',
      townName: 'Beacon',
      stateName: 'NY',
      zipCode: '11106'
    },
    imageUrl: '',
    isAdmin: true,
    jobHistory: []
  })

  // Jobs & Companies
  const fuzzbeedCo = await Company.create({
    companyName: 'FuzzBeed Lists',
    size: 'Medium Organization',
    description: 'Tech/Data Collection Memes for Everyday',
    category: 'Data Collection',
    reviews: 'They spam your inbox!',
    imageUrl: '',
    employees: [],
    jobPostedHistory: []
  })

  const fuzzBeedBackEnd = await Job.create({
    title: 'Back-End Developer',
    salary: 95000,
    description: {
      contactEmail: 'jobs@fuzzbeed.com',
      location: 'New York, NY',
      roleType: 'Back-End',
      experienceLevel: 'Junior'
    }
  })

  const flooperCo = await Company.create({
    companyName: 'Flooper Co.',
    size: 'Large Organization',
    description: 'Worldwide Data/Analytics Systems',
    category: 'Data Collection',
    reviews: 'This company definitely does not respect your privacy',
    imageUrl: '',
    employees: [],
    jobPostedHistory: []
  })

  const flooperFrontEnd = await Job.create({
    title: 'Front-End Developer',
    salary: 111000,
    description: {
      contactEmail: 'jobs@flooper.com',
      location: 'New York, NY',
      roleType: 'Front-End',
      experienceLevel: 'Mid-level'
    }
  })

  pablo.company = fuzzbeedCo._id // company id
  pablo.isEmployer = true
  fuzzbeedCo.employees.push(pablo._id) // employee id
  fuzzbeedCo.jobPostedHistory.push(fuzzBeedBackEnd._id)
  fuzzBeedBackEnd.company = fuzzbeedCo._id
  fuzzBeedBackEnd.author = pablo._id

  await pablo.save() // this saves and applies the changes made to the instance
  await fuzzbeedCo.save()
  await fuzzBeedBackEnd.save()

  lisa.company = flooperCo._id // company id
  lisa.isEmployer = true
  flooperCo.employees.push(lisa._id) // employee id
  flooperCo.jobPostedHistory.push(flooperFrontEnd._id)
  flooperFrontEnd.company = flooperCo._id
  flooperFrontEnd.author = lisa._id

  await lisa.save() // this saves and applies the changes made to the instance
  await flooperCo.save()
  await flooperFrontEnd.save()

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
    await db.close()
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
