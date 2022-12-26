class HomePage {
   get changePricingTime() {
return cy.get('.vsp-c-switch-pricing-plan-list > :nth-child(1) > p')
   }
   get regBtn (){
    return cy.get ('.vsp-c-pricing-plan-list--monthly > :nth-child(1) > .vsp-c-btn')
   }


}
export const homePage = new HomePage()