import { z } from "zod";
import { MAX_FILE_SIZE } from "../constant";

export const ownerSchema = z.object({
    reference: z.string({ error: "La référence est requise." }),
    name: z.string({ error: "Le nom est requis." }),
    company: z.string({ error: "L'entreprise est requis." }),
    phone: z.string({ error: "Le numéro de téléphone est requis." }),
    email: z.string({ error: "L'adresse mail est requis." }),
    properties: z.string({ error: "Le bien associé est requis." }),
    units: z.string({ error: "Le nombre d'unité est requis." }),
    revenue: z.string({ error: "La somme du revenu est requis." }),
    address: z.string().optional(),
    bank: z.string().optional(),
    documents: z.array(
        z
            .instanceof(File)
            .refine(
                (file) => file.type === "application/pdf",
                "Seuls les fichiers PDF et images sont autorisés"
            )
            .refine(
                (file) => file.size <= MAX_FILE_SIZE,
                "Chaque fichier ne doit pas dépasser 4 Mo"
            )
    ).optional(),
});


export type OwnerSchemaType = z.infer<typeof ownerSchema>;