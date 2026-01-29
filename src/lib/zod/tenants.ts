import { z } from "zod";
import { MAX_FILE_SIZE } from "../constant";

export const tenantSchema = z.object({
    name: z.string({ error: "Le nom est requis." }),
    company: z.string({ error: "L'entreprise est requis." }),
    phone: z.string({ error: "Le numéro de téléphone est requis." }),
    email: z.string({ error: "L'adresse mail est requis." }),
    income: z.string({ error: "Le prix est requis." }),
    familySituation: z.string().optional(),
    paymentMode: z.string({ error: "Le mode de paiement est requis." }),
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


export type TenantSchemaType = z.infer<typeof tenantSchema>;