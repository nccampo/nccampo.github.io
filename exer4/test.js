import index from './index.js';

//Test Cases
const account1 = ["Allan", "Turing", "aturing@w3c.com", 58];
const account2 = ["Tim", "Berners-Lee", "ted@w3c.com", 25];
const account3 = ["Tim", "ted@w3c.com", 25];

index.addAccount(account1);
index.addAccount(account2);
index.addAccount(account3);