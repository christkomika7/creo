import { z } from "zod";

export const rentalSchema = z.object({
    tenant: z.string({ error: "Le nom du locataire est requis." }),
    building: z.string({ error: "Le nom du bâtiment est requis." }),
    units: z.string({ error: "La valeur de l'unité est requise." }),
    deposit: z.string({ error: "Le prix est requis." }),
    startDate: z.date({ error: "La date de début est requise." }),
    endDate: z.date({ error: "La date de début est requise." }),
});


export type RentalSchemaType = z.infer<typeof rentalSchema>;