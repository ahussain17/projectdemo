export class NewRecordSubmission{
    icon()
    {
        return cy.get('.app-buttons')
    }
    personal_information_header()
    {
        return cy.get(':nth-child(1) > .col-md-12 > .panel > .layout-section__container > .panel-heading')

    }
    hiring_information_header()
    {
        return cy.get(':nth-child(3) > .col-md-12 > .panel > .layout-section__container > .panel-heading')

    }
    first_name()
    {
        return cy.get('[name="aHdR_gHQmRT8ItVTL"]')

    }
    last_name()
    {
        return cy.get('[name="aHxOeHmCTIGd_hg1b"]')

    }
    street_address()
    {
        return cy.get('[name="aJDBDjjIFiTemxLGc"]')

    }
    city()
    {
        return cy.get('[name="aFjm80LnbJf780V6p"]')

    }
    state()
    {
        return cy.get('[name="aIaHwVkkr_seOK096"]')

    }
    telephone()
    {
        return cy.get('[name="aJX7sLD3xZH9TlVps"]')

    }
    zip()
    {
        return cy.get('[name="aKTyoAgO27gfZC0Vd"]')

    }
    email()
    {
        return cy.get('[name="aGgc3qp6gt3dDR_na"]')

    }
    text_box()
    {
        return cy.get('[name="aJr4VxhqeQ4fAZgO7"]')
    }
    save_form_btn()
    {
        return cy.get('[class="save-button btn btn-primary btn-primary-gradient"]')
    }
    time_modal_header()
    {
        return cy.get('.modal-body > h3')
    }
    time_modal_save()
    {
        return cy.get('.modal-footer > .btn')
    }
    notification_popup()
    {
        return cy.get('.ng-notification')
    }
    record_saved_title()
    {
        return cy.get('.title')
    }
    error_label()
    {
        return cy.get('[class="error-messages"]')
    }
    hide_toggle()
    {
        return cy.get(':nth-child(1) > .col-md-12 > .panel > .layout-section__container > .layout-section__hide-toggle > .ngx-icon')
    }
    //--
    record_header_link()
    {
        return cy.get('[class="record-header-link"]')
    }
    delete_record()
    {
        cy.wait(100)
        return cy.get(':nth-child(4) > .btn')
    }
    delete_popup_header()
    {
        return cy.get('.modal-body > h3')
    }
    delete_ok()
    {
        return cy.get('.modal-footer > .btn-primary')
    }
    new_record_label()
    {
        return cy.get('[ng-if="isNewRecord"]')
    }

}