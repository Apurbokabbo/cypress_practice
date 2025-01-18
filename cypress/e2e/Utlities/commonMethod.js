export function dataSend(xpath , data){
    return cy.xpath(xpath).type(data)
}

export function titleVerify(expectedTittle){
    return cy.title().should("eq", expectedTittle )
}

export function takeFullScreenshot(name){
    return cy.screenshot(name)
}

export function takeSpecificScreenshot(xpath , name){
    return cy.xpath(xpath).screenshot(name)
}

export function waitTimer(time){
    cy.wait(time)
}