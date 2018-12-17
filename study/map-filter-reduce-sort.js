const companies = [
  {name: "One", category: "Finance", start: 1942},
  {name: "Two", category: "Finance", start: 1990},
  {name: "Three", category: "Technologie", start: 1999},
  {name: "Four", category: "Auto", start: 2008},
  {name: "Five", category: "Retail", start: 1976}
];

const ages = [21, 24, 4, 30, 17, 10, 18];

/*
  *Antigo for loop
  *for(let i = 0; i < companies.length; i++){
  *console.log(companies[i]);
}*/

//foreach - for loop melhorado
//companies.forEach((company) => { console.log(company); });

//filter - filtra as idades de quem pode beber
/* const canDrink = ages.filter(age => age >= 18);
console.log(canDrink); */

//filter - filtra as companies que são finance
//const financeCompanies = companies.filter(company => 
//  company.category === 'Finance'
//); 
//console.log(financeCompanies);

//map - cria novo array com o nome das companies
//const companyNames = companies.map(company => { company.name });
//console.log(companyNames);

/* console.log(companies);

const modernCompanies = companies.filter(company => company.start >= 1990);
console.log(modernCompanies); */

//sort
/* const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies); */

/* const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum) */