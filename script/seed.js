/* eslint-disable max-statements */
'use strict'

const db = require('../server/db')
const mongoose = require('mongoose')

const {User, Company, Job, Chat} = require('../server/db/models')

// const users = await Promise.all([
//   User.create({email: 'cody@email.com', password: '123'}),
//   User.create({email: 'murphy@email.com', password: '123'})
// ])

async function seed() {
  console.log('db synced!')
  await mongoose.connection.dropDatabase()

  // dummy messages
  const message1 = await Chat.create({
    content: 'Hello, this is the first message testing',
    channel: {
      name: 'red+blue',
      participants: []
    }
  })
  const message2 = await Chat.create({
    content: 'Hello, this is the second message testing',
    channel: {
      name: 'red+yellow',
      participants: []
    }
  })
  const message3 = await Chat.create({
    content: 'Hello, this is the third message testing',
    channel: {
      name: 'blue+yellow',
      participants: []
    }
  })

  // Users
  const red = await User.create({
    email: 'red@email.com',
    password: '123',
    firstName: 'Red',
    lastName: 'Der',
    biography: 'blazin employee',
    streetNumber: 123,
    streetName: 'Red Street',
    townName: 'Queens',
    stateName: 'NY',
    zipCode: '11101',
    isAdmin: true,
    jobHistory: []
  })

  const blue = await User.create({
    email: 'blue@email.com',
    password: '123',
    firstName: 'Blue',
    lastName: 'Eulb',
    biography: 'cool employee',
    streetNumber: 123,
    streetName: 'Blue Street',
    townName: 'Queens',
    stateName: 'NY',
    zipCode: '11101',
    jobHistory: []
  })

  const yellow = await User.create({
    email: 'yellow@email.com',
    password: '123',
    firstName: 'Yellow',
    lastName: 'Wolley',
    biography: 'shiny employee',
    streetNumber: 123,
    streetName: 'Yellow Street',
    townName: 'Queens',
    stateName: 'NY',
    zipCode: '11101',
    isCandidate: true,
    jobHistory: []
  })

  const green = await User.create({
    email: 'green@email.com',
    password: '123',
    firstName: 'Green',
    lastName: 'Neerg',
    biography: 'minty employee',
    streetNumber: 123,
    streetName: 'Green Street',
    townName: 'Queens',
    stateName: 'NY',
    zipCode: '11101',
    isCandidate: true,
    jobHistory: []
  })

  const purple = await User.create({
    email: 'purple@email.com',
    password: '123',
    firstName: 'Purple',
    lastName: 'Elprup',
    biography: 'grape employee',
    streetNumber: 123,
    streetName: 'Purple Street',
    townName: 'Queens',
    stateName: 'NY',
    zipCode: '11101',
    isCandidate: true,
    jobHistory: []
  })

  // Companies
  const jpmorganChase = await Company.create({
    companyName: 'JPMorgan Chase',
    size: 'Large organization',
    description: 'Bank',
    category: 'Financial technology',
    reviews: 'top banking company',
    employees: [],
    jobPostedHistory: []
  })

  const bofa = await Company.create({
    companyName: 'Bank of America',
    size: 'Large organization',
    description: 'Bank',
    category: 'Financial technology',
    reviews: 'very good company',
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
  //     employees: [],
  //     jobPostedHistory: [],
  //   }
  // )

  // Jobs
  const bofaFrontEnd = await Job.create({
    title: 'Software Developer',
    salary: 90000,
    contactEmail: 'apply@bofa.com',
    location: 'Chicago',
    roleType: 'Front-end',
    experienceLevel: 'Junior'
  })

  const jpmorganBackEnd = await Job.create({
    title: 'Engineer',
    salary: 101000,
    contactEmail: 'apply@jpmorgan.com',
    location: 'Paris',
    roleType: 'Back-end',
    experienceLevel: 'Junior'
  })

  const bofaSeniorOracle = await Job.create({
    title: 'Senior Oracle Database Developer',
    salary: 108000,
    contactEmail: 'apply@bofa.com',
    location: 'New York',
    roleType: 'Database',
    experienceLevel: 'Senior'
  })

  const bofaMobileDeveloper = await Job.create({
    title: 'Mobile Developer',
    salary: 90000,
    contactEmail: 'apply@bofa.com',
    location: 'Charlotte',
    roleType: 'Mobile',
    experienceLevel: 'Junior'
  })

  bofa.jobPostedHistory.push(bofaSeniorOracle._id)
  bofaSeniorOracle.company = bofa._id
  bofaSeniorOracle.author = red._id

  bofa.jobPostedHistory.push(bofaMobileDeveloper._id)
  bofaMobileDeveloper.company = bofa._id
  bofaMobileDeveloper.author = red._id

  const jpmorganJavaDeveloper = await Job.create({
    title: 'Java Developer',
    salary: 89000,
    contactEmail: 'apply@jpmorgan.com',
    location: 'San Francisco',
    roleType: 'Back-end',
    experienceLevel: 'Junior'
  })

  const jpmorganFullStack = await Job.create({
    title: 'Full Stack Developer',
    salary: 110000,
    contactEmail: 'apply@jpmorgan.com',
    location: 'Houston',
    roleType: 'Full-stack',
    experienceLevel: 'Senior'
  })

  const jpmorganUIDeveloper = await Job.create({
    title: 'UI Frontend Developer',
    salary: 110000,
    contactEmail: 'apply@jpmorgan.com',
    location: 'New York',
    roleType: 'Front-end',
    experienceLevel: 'Senior'
  })

  jpmorganChase.jobPostedHistory.push(jpmorganJavaDeveloper._id)
  jpmorganJavaDeveloper.company = jpmorganChase._id
  jpmorganJavaDeveloper.author = blue._id

  jpmorganChase.jobPostedHistory.push(jpmorganFullStack._id)
  jpmorganFullStack.company = jpmorganChase._id
  jpmorganFullStack.author = blue._id

  jpmorganChase.jobPostedHistory.push(jpmorganUIDeveloper._id)
  jpmorganUIDeveloper.company = jpmorganChase._id
  jpmorganUIDeveloper.author = blue._id

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
  await bofaSeniorOracle.save()
  await bofaMobileDeveloper.save()

  blue.company = jpmorganChase._id // company id
  blue.isEmployer = true
  jpmorganChase.employees.push(blue._id) // employee id

  jpmorganChase.jobPostedHistory.push(jpmorganBackEnd._id)
  jpmorganBackEnd.company = jpmorganChase._id
  jpmorganBackEnd.author = blue._id

  await blue.save()
  await jpmorganChase.save()
  await jpmorganBackEnd.save()
  await jpmorganJavaDeveloper.save()
  await jpmorganFullStack.save()
  await jpmorganUIDeveloper.save()

  //Users
  const jody = await User.create({
    email: 'Jody@email.com',
    password: '1234',
    firstName: 'Jody',
    lastName: 'Schmoe',
    biography: 'very good employee',
    streetNumber: 367,
    streetName: '3rd Avenue',
    townName: 'Brooklyn',
    stateName: 'NY',
    zipCode: '11209',
    isAdmin: true,
    jobHistory: []
  })

  const jeff = await User.create({
    email: 'Jeff@email.com',
    password: '1234',
    firstName: 'Jeff',
    lastName: 'Schmoe',
    biography: 'very good employee',
    streetNumber: 367,
    streetName: '3rd Avenue',
    townName: 'Brooklyn',
    stateName: 'NY',
    zipCode: '11209',
    isAdmin: true,
    jobHistory: []
  })

  const bobby = await User.create({
    email: 'bobby@email.com',
    password: '456',
    firstName: 'bobby',
    lastName: 'Schmidty',
    biography: 'very good employee',
    streetNumber: 267,
    streetName: '4rd Avenue',
    townName: 'Brooklyn',
    stateName: 'NY',
    zipCode: '11209',
    isCandidate: true,
    jobHistory: []
  })

  const joe = await User.create({
    email: 'joe@email.com',
    password: '456',
    firstName: 'joe',
    lastName: 'Smith',
    biography: 'very good employee',
    streetNumber: 267,
    streetName: '4rd Avenue',
    townName: 'Brooklyn',
    stateName: 'NY',
    zipCode: '11209',
    isCandidate: true,
    jobHistory: []
  })

  const rob = await User.create({
    email: 'rob@email.com',
    password: '456',
    firstName: 'rob',
    lastName: 'Smitty',
    biography: 'very good employee',
    streetNumber: 267,
    streetName: '4rd Avenue',
    townName: 'Brooklyn',
    stateName: 'NY',
    zipCode: '11209',
    isCandidate: true,
    jobHistory: []
  })

  // Companies

  const puma = await Company.create({
    companyName: 'Puma',
    size: 'Large organization',
    description: 'Sporting goods',
    category: 'Web Dev',
    reviews: 'very good company',
    employees: [],
    jobPostedHistory: []
  })

  const adidas = await Company.create({
    companyName: 'Adidas',
    size: 'Large organization',
    description: 'Sporting goods',
    category: 'Web Dev',
    reviews: 'very good company',
    employees: [],
    jobPostedHistory: []
  })

  // Jobs

  const pumaFullstack = await Job.create({
    title: 'iOS Developer',
    salary: 75000,
    contactEmail: 'Jeff@Puma.com',
    location: 'Chicago',
    roleType: 'Full-stack',
    experienceLevel: 'Junior'
  })

  const adidasFrontEnd = await Job.create({
    title: 'Android Wizard / Front-End',
    salary: 75000,
    contactEmail: 'Jody@Adidas.com',
    location: 'New York',
    roleType: 'Full-stack',
    experienceLevel: 'Junior'
  })

  const pumaBackend = await Job.create({
    title: 'Back-End Developer',
    salary: 121000,
    contactEmail: 'jobs@puma.com',
    location: 'New York',
    roleType: 'Front-End',
    experienceLevel: 'Junior-level'
  })

  const pumaMobile = await Job.create({
    title: 'Back-End Developer',
    salary: 121000,
    contactEmail: 'jobs@puma.com',
    location: 'New York',
    roleType: 'Front-End',
    experienceLevel: 'Junior-level'
  })

  const adidasBackend = await Job.create({
    title: 'Back-End Developer',
    salary: 141000,
    contactEmail: 'jobs@adidas.com',
    location: 'New York',
    roleType: 'Front-End',
    experienceLevel: 'Junior-level'
  })

  const adidasFullstack = await Job.create({
    title: 'Fullstack Developer',
    salary: 151000,
    contactEmail: 'jobs@adidas.com',
    location: 'New York',
    roleType: 'Front-End',
    experienceLevel: 'Senior-level'
  })

  const adidasMobile = await Job.create({
    title: 'Mobile Developer',
    salary: 101000,
    contactEmail: 'jobs@adidas.com',
    location: 'New York',
    roleType: 'Front-End',
    experienceLevel: 'Senior-level'
  })

  jody.company = puma._id // company id
  jody.isEmployer = true
  puma.employees.push(jody._id) // employee id

  puma.jobPostedHistory.push(pumaFullstack._id)
  pumaFullstack.company = puma._id
  pumaFullstack.author = jody._id

  puma.jobPostedHistory.push(pumaMobile._id)
  pumaMobile.company = puma._id
  pumaMobile.author = jody._id

  puma.jobPostedHistory.push(pumaBackend._id)
  pumaBackend.company = puma._id
  pumaBackend.author = jody._id

  await jody.save() // this saves and applies the changes made to the instance
  await puma.save()
  await pumaFullstack.save()
  await pumaMobile.save()
  await pumaBackend.save()

  jeff.company = adidas._id // company id
  jeff.isEmployer = true
  adidas.employees.push(jeff._id) // employee id

  adidas.jobPostedHistory.push(adidasFrontEnd._id)
  adidasFrontEnd.company = adidas._id
  adidasFrontEnd.author = jeff._id

  adidas.jobPostedHistory.push(adidasMobile._id)
  adidasMobile.company = adidas._id
  adidasMobile.author = jeff._id

  adidas.jobPostedHistory.push(adidasMobile._id)
  adidasMobile.company = adidas._id
  adidasMobile.author = jeff._id

  adidas.jobPostedHistory.push(adidasFullstack._id)
  adidasFullstack.company = adidas._id
  adidasFullstack.author = jeff._id

  adidas.jobPostedHistory.push(adidasBackend._id)
  adidasBackend.company = adidas._id
  adidasBackend.author = jeff._id

  await jeff.save() // this saves and applies the changes made to the instance
  await adidas.save()
  await adidasFrontEnd.save()
  await adidasMobile.save()
  await adidasFullstack.save()
  await adidasBackend.save()

  // Users
  const pablo = await User.create({
    email: 'pablo@email.com',
    password: '12345',
    firstName: 'Pablo',
    lastName: 'Hernandez',
    biography: 'Bi-lingual software engineer with years of experience',
    streetNumber: 784,
    streetName: 'Chestnut Lane',
    townName: 'Summit',
    stateName: 'NJ',
    zipCode: '09204',
    jobHistory: []
  })

  const lisa = await User.create({
    email: 'lisa@fake.com',
    password: '12345',
    firstName: 'Lisa',
    lastName: 'Da Vinci',
    biography: 'Currently looking for remote opportunities!',
    streetNumber: 454,
    streetName: 'Chess Avenue',
    townName: 'Jersey City',
    stateName: 'NJ',
    zipCode: '07042',
    jobHistory: []
  })

  const austin = await User.create({
    email: 'austin@email.com',
    password: '12345',
    firstName: 'Austin',
    lastName: 'Delancy',
    biography: 'Bringing you the most obnoxious in tech news',
    streetNumber: 1211,
    streetName: '5th Street',
    townName: 'West Hampton',
    stateName: 'NY',
    zipCode: '11004',
    isCandidate: true,
    jobHistory: []
  })

  const patty = await User.create({
    email: 'patricia@office.org',
    password: 'abc123',
    firstName: 'Patricia',
    lastName: 'Nerietva',
    biography: 'Fullstack engineer with experience on React-Redux',
    streetNumber: 120,
    streetName: 'Bleekers St.',
    townName: 'Northshire',
    stateName: 'PA',
    zipCode: '53202',
    isCandidate: true,
    jobHistory: []
  })

  const fletcher = await User.create({
    email: 'fletcher@office.org',
    password: 'abc123',
    firstName: 'Fletcher',
    lastName: 'Martinez',
    biography: 'Eager to learn with experience on GitHub, React, and more',
    streetNumber: 5,
    streetName: 'Hudson St.',
    townName: 'Beacon',
    stateName: 'NY',
    zipCode: '11106',
    isAdmin: true,
    jobHistory: []
  })

  // Companies
  const fuzzbeedCo = await Company.create({
    companyName: 'FuzzBeed Lists',
    size: 'Medium Organization',
    description: 'Tech/Data Collection Memes for Everyday',
    category: 'Data Collection',
    reviews: 'They spam your inbox!',
    employees: [],
    jobPostedHistory: []
  })

  const flooperCo = await Company.create({
    companyName: 'Flooper Co.',
    size: 'Large Organization',
    description: 'Worldwide Data/Analytics Systems',
    category: 'Data Collection',
    reviews: 'This company definitely does not respect your privacy',
    employees: [],
    jobPostedHistory: []
  })

  // Jobs

  const fuzzBeedBackEnd = await Job.create({
    title: 'SQL Database Engineer',
    salary: 95000,
    contactEmail: 'jobs@fuzzbeed.com',
    location: 'Buenos Aires',
    roleType: 'Back-End',
    experienceLevel: 'Junior'
  })

  const fuzzBeedFrontEnd = await Job.create({
    title: 'React Redux Developer',
    salary: 105000,
    contactEmail: 'jobs@fuzzbeed.com',
    location: 'London',
    roleType: 'Front-End',
    experienceLevel: 'Junior'
  })

  const fuzzBeedDatabase = await Job.create({
    title: 'Express Genie',
    salary: 70000,
    contactEmail: 'jobs@fuzzbeed.com',
    location: 'New York',
    roleType: 'Back-End',
    experienceLevel: 'MidLevel'
  })

  const flooperFrontEnd = await Job.create({
    title: 'Front-End Developer',
    salary: 111000,
    contactEmail: 'jobs@flooper.com',
    location: 'New York',
    roleType: 'Front-End',
    experienceLevel: 'Mid-level'
  })

  const flooperBackEnd = await Job.create({
    title: 'Back-End Developer',
    salary: 151000,
    contactEmail: 'jobs@flooper.com',
    location: 'New York',
    roleType: 'Back-End',
    experienceLevel: 'Mid-level'
  })

  const flooperDatabase = await Job.create({
    title: 'MongoDB Engineer',
    salary: 175000,
    contactEmail: 'jobs@flooper.com',
    location: 'New York',
    roleType: 'Back-End',
    experienceLevel: 'Senior'
  })

  const flooperMobile = await Job.create({
    title: 'Android Wizard',
    salary: 105000,
    contactEmail: 'jobs@flooper.com',
    location: 'New York',
    roleType: 'Front-End',
    experienceLevel: 'Junior'
  })

  pablo.company = fuzzbeedCo._id // company id
  pablo.isEmployer = true
  fuzzbeedCo.employees.push(pablo._id) // employee id

  fuzzbeedCo.jobPostedHistory.push(fuzzBeedBackEnd._id)
  fuzzBeedBackEnd.company = fuzzbeedCo._id
  fuzzBeedBackEnd.author = pablo._id

  fuzzbeedCo.jobPostedHistory.push(fuzzBeedFrontEnd._id)
  fuzzBeedFrontEnd.company = fuzzbeedCo._id
  fuzzBeedFrontEnd.author = pablo._id

  fuzzbeedCo.jobPostedHistory.push(fuzzBeedDatabase._id)
  fuzzBeedDatabase.company = fuzzbeedCo._id
  fuzzBeedDatabase.author = pablo._id

  await pablo.save() // this saves and applies the changes made to the instance
  await fuzzbeedCo.save()
  await fuzzBeedBackEnd.save()
  await fuzzBeedFrontEnd.save()
  await fuzzBeedDatabase.save()

  lisa.company = flooperCo._id // company id
  lisa.isEmployer = true
  flooperCo.employees.push(lisa._id) // employee id

  flooperCo.jobPostedHistory.push(flooperFrontEnd._id)
  flooperFrontEnd.company = flooperCo._id
  flooperFrontEnd.author = lisa._id

  flooperCo.jobPostedHistory.push(flooperBackEnd._id)
  flooperBackEnd.company = flooperCo._id
  flooperBackEnd.author = lisa._id

  flooperCo.jobPostedHistory.push(flooperDatabase._id)
  flooperDatabase.company = flooperCo._id
  flooperDatabase.author = lisa._id

  flooperCo.jobPostedHistory.push(flooperMobile._id)
  flooperMobile.company = flooperCo._id
  flooperMobile.author = lisa._id

  await lisa.save() // this saves and applies the changes made to the instance
  await flooperCo.save()
  await flooperFrontEnd.save()
  await flooperBackEnd.save()
  await flooperDatabase.save()
  await flooperMobile.save()

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
