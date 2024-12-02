const { faker } = require('@faker-js/faker');

const fakerMethods = {
    name: () => faker.person.fullName(),
    firstName: () => faker.person.firstName(),
    lastName: () => faker.person.lastName(),
    gender: () => faker.person.sex(),
    jobTitle: () => faker.person.jobTitle(),
    username: () => faker.internet.userName(),
    password: () => faker.internet.password(),
    email: () => faker.internet.email(),
    phone: () => faker.phone.number(),
    address: () => faker.location.streetAddress(),
    street: () => faker.location.street(),
    city: () => faker.location.city(),
    state: () => faker.location.state(),
    country: () => faker.location.country(),
    zipcode: () => faker.location.zipCode(),
    companyName: () => faker.company.name(),
    companyCatchPhrase: () => faker.company.catchPhrase(),
    iban: () => faker.finance.iban(),
    creditCardNumber: () => faker.finance.creditCardNumber(),
    url: () => faker.internet.url(),
    ip: () => faker.internet.ip(),
    domain: () => faker.internet.domainName(),
    uuid: () => faker.string.uuid(),
    date: () => faker.date.past().toISOString(),
    sentence: () => faker.lorem.sentence(),
    paragraph: () => faker.lorem.paragraph(),
};

exports.generateFakeData = (fields, volume) => {
  const data = [];
  for (let i = 0; i < volume; i++) {
    const record = {};
    fields.forEach((field) => {
      if (fakerMethods[field]) {
        record[field] = fakerMethods[field]();
      } else {
        console.error(`Field "${field}" is not supported.`);
        record[field] = "Unsupported field";
      }
    });
    data.push(record);
  }
  return data;
};
