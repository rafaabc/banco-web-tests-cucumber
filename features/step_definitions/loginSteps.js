const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

let driver;

Before(async function () {
  driver = await new Builder().forBrowser("chrome").build();
});

After(async function () {
  await driver.quit();
});

Given("in the Login page", async function () {
  await driver.manage().window().maximize();
  await driver.get("http://localhost:4000/");
});

When("using the following credentials", async function (dataTable) {
  //#username
  const data = dataTable.rowsHash();
  const usuario = data.usuario;
  const senha = data.senha;

  await driver.findElement(By.id("username")).sendKeys(usuario);
  await driver.findElement(By.id("senha")).sendKeys(senha);
  await driver.findElement(By.xpath("//button[text()='Entrar']")).click();
});

Then("redirects to the secret page", async function () {
  await driver.wait(
    until.elementLocated(By.css("#app-section > div:nth-child(1) > div > h4")),
    5000,
  );
  const message = await driver
    .findElement(By.css("#app-section > div:nth-child(1) > div > h4"))
    .getText();

  assert.strictEqual("Realizar Transferência", message);
});
