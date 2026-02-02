export type BreadcrumbKey =
    "owners" | "new-owner" | "edit_owner" | "view_owner" |
    "tenants" | "new-tenant" | "edit_tenant" | "view_tenant" |
    "buildings" | "new-building" | "edit_building" | "view_building" |
    "units" | "new-unit" | "edit_unit" | "view_unit" |
    "rentals" | "new-rental" | "edit_rental" | "view_rental" |
    "reservations" | "new-reservation" | "edit_reservation" | "view_reservation" |
    "property-management" | "new-property" | "edit_property" | "view_property" |
    "invoices" | "new-invoice" | "edit_invoice" | "view_invoice" |
    "contracts" | "new-contract" | "edit_contract" | "view_contract";



export const breadcrumbs: Record<BreadcrumbKey, string> = {
    // Owners
    'owners': "Propriétaires",
    'new-owner': 'Nouveau propriétaire',
    'edit_owner': "Modification propriétaire",
    'view_owner': "Gestion immobilière",

    //  Tenants
    'tenants': "Locataire",
    'new-tenant': "Nouveau locataire",
    'edit_tenant': "Modification locataire",
    'view_tenant': "Profil du locataire",

    // Buildings
    'buildings': "Bâtiment",
    'new-building': "Nouveau bâtiment",
    'edit_building': "Modification bâtiment",
    'view_building': "Profil du bâtiment",


    // Buildings
    'units': "Unité",
    'new-unit': "Nouvel unité",
    'edit_unit': "Modification unité",
    'view_unit': "Profil de l'unité",

    // Rentals
    'rentals': "Loyer",
    'new-rental': "Nouveau loyer",
    'edit_rental': "Modification du loyer",
    'view_rental': "Profil du loyer",

    // Reservations
    'reservations': "Reservation",
    'new-reservation': "Nouvelle reservation",
    'edit_reservation': "Modification de la reservation",
    'view_reservation': "Profil de la reservation",

    // Reservations
    'property-management': "Gestion des biens",
    'new-property': "Nouveau bien",
    'edit_property': "Modification du bien",
    'view_property': "Profil du bien",

    // Reservations
    'invoices': "Gestion des factures",
    'new-invoice': "Nouvelle facture",
    'edit_invoice': "Modification de la facture",
    'view_invoice': "Information sur la facture",

    // Reservations
    'contracts': "Contracts/Mandates",
    'new-contract': "Nouveau contrat",
    'edit_contract': "Modification du contrat",
    'view_contract': "Information du contrat",
}
